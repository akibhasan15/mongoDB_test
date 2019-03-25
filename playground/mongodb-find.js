// const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');//this line is same as above..ES6 destructuring//
//  var obj = new ObjectID(); //for testing purpose only
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
if(err){
    return console.log('Unable to connect to mongoddb server');
}

    // db.collection('Todos').find({_id:new ObjectID('5c9734984d9b661fde70a994')}).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     if(err){
    //         console.log(`error occur:${err}`)
    //     }
    // })


// db.collection('Todos').find({_id:new ObjectID('5c9734984d9b661fde70a994')}).count().then((count)=>{
//     console.log(`Todos count:${count}`);
//     // console.log(JSON.stringify(docs,undefined,2));
// },(err)=>{
//     if(err){
//         console.log(`error occur:${err}`)
//     }
// })
db.collection('Users').find({name:'Akib hasan'}).toArray().then((docs)=>{
    console.log(`finding names`);
    var names=JSON.stringify(docs,undefined,2);
    console.log(`searched name found in database is(are):${names}`)
},(err)=>{
    if(err){
                console.log(`error occur:${err}`)
           }
})


// db.close();
});
