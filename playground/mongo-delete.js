// const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');//this line is same as above..ES6 destructuring//
//  var obj = new ObjectID(); //for testing purpose only
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
if(err){
    return console.log('Unable to connect to mongoddb server');
}
console.log('connected to server')
                        //deleteMany
// db.collection('Todos').deleteMany({text:'Late Dinner'}).then((reults)=>{
//     console.log(reults);
// })
                        //deleteOne
// db.collection('Todos').deleteOne({text:'Late Dinner'}).then((results)=>{
//     console.log(results);
// })
                        //findOneAndDelete--->BestOfALL-->it shows deleted value by results
//     db.collection('Todos').findOneAndDelete({completed:false}).then((results)=>{
//         console.log(results);
//     }) 
// 
    //  ------->Challenge-1--->deleteMany method
// db.collection('Users').deleteMany({name:'Akib hasan'}).then((results)=>{
    // console.log(results);
// })

                //  ------->Challenge-2--->findOneAndDelete method

db.collection('Users').findOneAndDelete({_id:new ObjectID("5c97634ae2fdf42bb21877ea")}).then((results)=>{
    console.log(results);
})
});
