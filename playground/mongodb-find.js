//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,client)=>{
    if(err){
        return console.log('unable to connect to mongodb server')
    }

    console.log('connected to mongodb server');
    const db=client.db('TodoApp');

    ///find all///
    // db.collection('Todos').find().toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log('unable to fetch docs',err)
    // });
    
    ///find by _id///
    // db.collection('Users').find({
    //     _id:new ObjectID('5d23dcf49f27cc31b8d42357')
    // }).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log('unable to fetch docs',err)
    // });

    ///count ///
    // db.collection('Users').find().count().then((count)=>{
    //     console.log(`Todos count : ${count}`);
        
    // },(err)=>{
    //     console.log('unable to fetch docs',err)
    // });

    ///find by name///
    // db.collection('Users').find({
    //     name:'nessma'
    // }).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log('unable to fetch docs',err)
    // });

    client.close();
})