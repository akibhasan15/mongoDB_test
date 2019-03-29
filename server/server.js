var express=require('express');
var bodyParser=require('body-parser');


var {mongoose}=require('./db/mongoose');
var {user}=require('./models/user');
var {Todo}=require('./models/todo')

var app=express();
app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
var todo = new Todo({
    text:req.body.text
});

todo.save().then((doc)=>{
    res.send(doc);
   },(e)=>{
       res.status(400).send(e);
   });
});

// app.post('/userinfo',(req,res)=>{
//     var user1=new user({
//         email:req.body.email
//     });

//     user1.save().then((doc)=>{
//         res.send(doc);
//     }
//     ,(e)=>{
//         res.status(400).send(e);
//     });
// });

app.get('/todos',(req,res)=>{
    Todo.find().then((todos)=>{
        res.send({todos,
        message:"it's okay"});
        // res.status(200).json(todos);
    },(e)=>{
       res.status(400).send(e);
    })
})

app.listen(3000,()=>{
    console.log('server is up on port number 3000');
})

module.exports={app};
// var newTodo= new Todo({
//     text:'cook dinner'
// });

// newTodo.save().then((doc)=>{
//     console.log('saved todo',doc)
// },(e)=>{
//     console.log('Unable to save todo')
// });

// var todoo=mongoose.model('todo12',{
//     name:{
//         type:String,
//         required:true,
//         minlength:4,
//         trim:true
//     },
//     age:{
//         type:Number
//     },
//     email:{
//         type:String
//     },
//     completed:{
//         type:Boolean,
//         default:false
//     }
// });
// var newtodoos=new todoo({
//     name:'          akib              ',
//     age:23,
//     email:'akibhasan.bd@gmail.com'
// });

// newtodoos.save().then((docs)=>{
//     console.log('todoos saved to server',docs);
// },(e)=>{
//     console.log('unable to save todoos',e);
// }
// );




//  var newuser=new user({
//     email:' akibhasan.bd@gmail.com '
// })
//  newuser.save().then((docs)=>{
//     console.log('saved to DB',docs);
// }
// ,(e)=>{
//     console.log('Unable to save the data',e);
// });