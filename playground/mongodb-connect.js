//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,client)=>{
    if(err){
        return console.log('unable to connect to mongodb server')
    }

    console.log('connected to mongodb server');
    const db=client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text:'Eat Lunch',
    //     completed:false
    // },(err,result)=>{
    //     if(err){
    //         return console.log('unable to insert todo',err);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // });

    // db.collection('Users').insertOne({
    //     name:'nour',
    //     age:23,
    //     address:'pts'
    // },(err,result)=>{
    //     if(err){
    //         return console.log('can not insert user',err);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2))
    // });
    
    client.close();
})