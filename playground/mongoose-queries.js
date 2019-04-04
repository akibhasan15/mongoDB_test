const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');
const {ObjectID}=require('mongodb');
const {user}=require('./../server/models/user');


// var id='5c9df3d9b5aa107158c2444e';

var idOfAUser='5c99c35d74b46e87387761d4';

// if(!ObjectID.isValid(id)){
//     console.log('ID is not VALID ');
// }

// Todo.find({
//     _id:id
// }).then((todos)=>{
    
//     console.log('Todos',todos);
// });

// Todo.findOne({
//     _id:id
// }).then((todo)=>{
    
//     console.log('Todo',todo);
// });



// Todo.findById(id).then((todo)=>{
    // if(!todo){
        // return console.log('id not found');
    // }
    // console.log('Todo',todo);
// }).catch((e)=>{
    // console.log(e);
// });

user.findById(idOfAUser).then((userInfo)=>{
    if(!userInfo){
        return console.log('id not found in the database');
    }
    console.log('id found in the database',userInfo);
    console.log(JSON.stringify(userInfo,undefined,3));
}).catch((e)=>console.log('error',e));


