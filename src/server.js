import express from "express";
import {routes} from './routes'
import bodyParser from 'body-parser';
import { db } from './db';

const app = express()
app.use(bodyParser.json());

routes.forEach(route => {
    app[route.method] (route.path,route.handler)
})
/*
app.get('/hello', (req,res) =>{
    res.send("Hello  world!")
})
*/
const start = async () => {
    //await db.connect('mongodb://localhost:27017');
    await db.connect('mongodb+srv://gerry:benray1110@cluster0.pctoxth.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    await app.listen(8080);


    console.log("Listening on port 8080");
}

start()