//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,client)=>{
    if(err){
        return console.log('unable to connect to mongodb server')
    }

    console.log('connected to mongodb server');
    const db=client.db('TodoApp');

//    db.collection('Users').findOneAndUpdate({name:'nour'},{$set:{name:'nour eloyoun'}},{returnOriginal:false}).then((result)=>{
//        console.log(result);
//    })

// db.collection('Users').findOneAndUpdate({name:'ness'},{$inc:{age:1}, $set:{name:'nessma'}},{returnOriginal:false}).then((result)=>{
//     console.log(result);
// })
    client.close();
})