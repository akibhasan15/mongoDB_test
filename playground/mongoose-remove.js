const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');
const {ObjectID}=require('mongodb');
const {user}=require('./../server/models/user');


//delete multiple records

// Todo.remove({}).then((result)=>{
//     console.log(result);
// })

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({_id:'5ca60e0f91e6d8f65335735a'}).then((todo)=>{
    console.log(todo);
});
//<----------the big difference is find findOneAndRemove take more search query_____>
Todo.findByIdAndRemove('5c9daca65e06407c2ca3a2e3').then((todo)=>{
    console.log(todo);
});

