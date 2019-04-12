var env= process.env.NODE_ENV || 'development';

if(env==='development'){
process.env.PORT=3000;
process.env.MONGODB_URI='mongodb://localhost:27017/TodoApp';
}
else if(env==='test'){
process.env.PORT=3000;
process.env.MONGODB_URI='mongodb://localhost:27017/TodoAppTest';

}

const _=require('lodash');
var express=require('express');
var bodyParser=require('body-parser');
const jwt=require('jsonwebtoken');
var port=process.env.PORT;

var {mongoose}=require('./db/mongoose');
var {User}=require('./models/user');
var {Todo}=require('./models/todo')
const {ObjectID}=require('mongodb');
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

//  
app.get('/todos',(req,res)=>{
    Todo.find().then((todos)=>{
        res.send({todos,
        message:"it's okay"});
        // res.status(200).json(todos);
    },(e)=>{
       res.status(400).send(e);
    })
})
app.get('/todos/:id',(req,res)=>{
    var id=req.params.id;

    if(!ObjectID.isValid(id)){
        return res.status(404).send({});
    }
    
    Todo.findById(id).then((todo)=>{
        if(!todo){
            return res.status(404).send()
        }

        res.send({todo});
    }).catch((e)=>res.status(400).send() );
    
});

app.delete('/todos/:id',(req,res)=>{
     var id=req.params.id;
     if(!ObjectID.isValid(id)){
         return res.status(404).send({})
     }

     Todo.findOneAndRemove({_id:id}).then((todo)=>{
if(!todo){
        return res.status(404).send({});
}    
      res.status(200).send({todo})
  
 }).catch((e)=>{
     res.status(400).send({});
 });

})

app.patch('/todos/:id',(req,res)=>{
    var id =req.params.id;
    var body=_.pick(req.body,['text','completed']);

    if(!ObjectID.isValid(id)){
        return res.status(404).send({});

    }
      if(_.isBoolean(body.completed)&&body.completed){
          body.completedAt=new Date().getTime();

      } else{
          body.completed=false;
          body.completedAt=null;
      }

      Todo.findByIdAndUpdate(id,{$set:body},{new:true}).then((todo)=>{
           if(!todo){
               return res.status(404).send();
           }
           res.send({todo});
      }).catch((e)=>{
          res.status(400).send(e);
      });
}) ;
                           //POST/user


                           app.post('/users', (req, res) => {
                            var body = _.pick(req.body, ['email', 'password']);
                            var user = new User(body);
                            user.save().then(() => {
                              return user.generateAuthToken();
                            }).then((token) => {
                              res.header('x-auth', token).send(user);
                            }).catch((e) => {
                              res.status(400).send(e);
                            })
                          });
                          
app.listen(port,()=>{
    console.log(`server is up on port no. :${port}`);
});

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