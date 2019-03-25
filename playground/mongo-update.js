// const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');//this line is same as above..ES6 destructuring//
//  var obj = new ObjectID(); //for testing purpose only
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
if(err){
    return console.log('Unable to connect to mongoddb server');
}
console.log('connected to server')

// db.collection('Todos').findOneAndUpdate({_id:new ObjectID("5c99342f26095bf3a65579b7")},
// {
//     $set:{
//         completed:true
//     }
// },
// { returnOriginal:false
// }     

// ).then((results)=>{
//     console.log(results);
// })

db.collection('Users').findOneAndUpdate({_id:new ObjectID("5c993f1726095bf3a6557c8c")},
{
    $set:{
        name:'Akib Hasan',
        
    },
    $inc:{
        age:1
    }
},
{
    returnOriginal:false
}).then((results)=>{
    console.log(results);
})

});
