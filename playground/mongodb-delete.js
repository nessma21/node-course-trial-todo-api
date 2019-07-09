//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,client)=>{
    if(err){
        return console.log('unable to connect to mongodb server')
    }

    console.log('connected to mongodb server');
    const db=client.db('TodoApp');

    //deleteMany
    // db.collection('Users').deleteMany({name:'nessma'}).then((result)=>{
    //     console.log(result);
    // })

    //deleteOne
    // db.collection('Users').deleteOne({name:'nor'}).then((result)=>{
    //         console.log(result);
    //     })

    //findOneAndDelete
    // db.collection('Users').findOneAndDelete({_id:new ObjectID('5d23dcd3ee7a62360c338af2')}).then((result)=>{
    //     console.log(result);
    // })
    
    client.close();
})