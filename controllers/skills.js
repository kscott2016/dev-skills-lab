//import { skills } data Schema from '../models/skills.js'
//Schema is the layout/blueprint for how data is stored
import { Skill } from "../models/skills.js"

//take todo model to find all todos then store in variable todos to use in call back functon 

function index(req,res){
  Skill.find({}).then (skills => {
    res.render('skills/index', {
      skills: skills
    })
  })
  .catch(err=>{
    console.log(err)
    res.redirect('/')
  })
}

// async function index(req,res){
//   const todos= await Todo.find({})
//   res.render('todos/index', {
//     todos:todos
//   })
// }

function newTodo (req,res){
  res.render('todos/new')
}

function create(req,res){
  req.body.done=false
  Todo.create(req.body).then(todo=>{
    res.redirect('/todos')

  })
}

function show(req,res){

  Todo.findById(req.params.todoId).then(todo=>{
    res.render('todos/show',{
      todo:todo
    })
  })
}

export {
  index,
  newTodo as new, 
  create, 
  show
}