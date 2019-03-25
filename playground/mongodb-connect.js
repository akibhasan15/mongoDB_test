// const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');//this line is same as above..ES6 destructuring//
//  var obj = new ObjectID(); //for testing purpose only
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
if(err){
    return console.log('Unable to connect to mongoddb server');
}
console.log('connected to server');
// db.collection('Todos').insertOne({
//     text:'Something to do',
//     completed:false
// },(err,result)=>{
//     if(err){
//         return console.log('Unable to insert todo',err);
//     }
//     console.log(JSON.stringify(result.ops,undefined,2))
// })

db.collection('Users').insertOne({
    name:'Akib hasan',
    age:23,
    location:'Rajshahi'

},(err,results)=>{
    if(err){
        return console.log('unable to insert to user database',err);
    }
    // console.log(JSON.stringify(results.ops,undefined,2));
    console.log(results.ops[0]._id.getTimestamp());
})


db.close();
});