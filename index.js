//1. import json server
const jsonServer = require('json-server');

//2 server appltb using create a  jsonServer

const docServer = jsonServer.create()

//3 setup path for db,json
const router =jsonServer.router('db.json')

//4 return middle ware 
const middleware =jsonServer.defaults()

//5 setup port number
const port=3005

//use in docServer
docServer.use(middleware)
docServer.use(router)
//to run the server 
docServer.listen(port,()=>{
    console.log("Doctor server listening on port"+port);
})