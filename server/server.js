import express from "express"
import passport from 'passport'
import mongoose from 'mongoose'
import cookieSession from "cookie-session";
import expressSession from "express-session"
import cors from 'cors'
import httpProxyMiddleware from "http-proxy-middleware";

// react SSR staff.......
import { matchRoutes } from 'react-router-config'
import renderer from './helper/renderer'
import createStore from './helper/createStore'

// client Side Root App ( Virtual Dom )
import Routes from '../src/Routes'





// import mongoose model
import './models/User'

// passport strategy setup
import './passport/passportLocal'

// Routers...................
import userRoutes from './routes/users'
import authRoutes from './routes/auth'



const server = express()
server.use(express.static("build"));
server.use(express.json())
server.use(cors());


// For Dev Tools
// Get Live Client bundle js and css file from 3000 port using proxy server......
server.use(["/static", "/sockjs-node"], httpProxyMiddleware({
    target: `http://localhost:3000`,
    ws: true,
    logLevel: "error",
    changeOrigin: true
  })
);

// passport Set_cookie throught express session
// server.use(expressSession({
//     resave: true,
//     saveUninitialized: true,
//     secret: "Secret"
// }))


// passport Set_cookie inside Client Browser
server.use(
  cookieSession({
    name: "SSR",
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: ["cookieSecret"]
  })
);

// passport initialize.....
server.use(passport.initialize());

// Set current user obj inside req object
server.use(passport.session());


// routes........
server.use(userRoutes)
server.use(authRoutes)




// express give responsible any route to react router. 
server.get("*", (req, res) => {  

  const store = createStore(req)

  // NOTE: Problem. We need essential data to page render from server.
  // 1. So. we need api call before server send html.
  // 2. Here, we call loadData function which (make api call) and get data.
  // 3. finaly server side redux store fill via his essential data.
  // 4. and server send ( html + data ) + server side redux store  

  //  matchRoutes <== pull client-site route each object (which you define as a Array)
  //  we recieved (loadData) function. which is set route object. and it comming every page.
  const promises = matchRoutes(Routes, req.path).map(({route})=>{
    return route.loadData ? route.loadData(store) : null
  })


  // wait server render html.... (cause we need also data)
  Promise.all(promises).then(()=>{
    const content = renderer(req, store);
    console.log(store.getState());
    
    
    // now server side redux store is full fill via data.....
    // (cause.. here loadData function execute finished)
    // and now send response html + data + and (server side redux store )
    res.send(content)
  })

});

const PORT = process.env.PORT || 4000;
server.listen(PORT, ()=>console.log(`server is running on http://localhost:${PORT}`))
mongoose.connect("mongodb://localhost/React_SSR_DB", {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(res => console.log("Database Connected."))
.catch(err => console.log(err));
