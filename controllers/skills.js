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

//renders form to collect data to add to database
function newSkill (req,res){
  res.render('skills/new')
}


function create(req,res){
  //req.body is the data from the form and inputs are stored as key,value pairs 

  // console.log("Before done property is set:")
  // console.log(req.body)
  // console.log("After done property is set:")
 // console.log(req.body)
  //create a new record inside skill collection, content is req.body
  Skill.create(req.body).then(skill=>{
    res.redirect('/skills')
    

  })
}

function deleteSkill(req,res){
  
  Skill.findByIdAndDelete(req.params.skillId).then(skill =>{

      res.redirect("/skills")
      
  })
}

function show(req,res){

  Skill.findById(req.params.skillId).then(skill=>{
    res.render('skills/show',{
      skill: skill
    })
  })
}

export {
  index,
  newSkill as new,
  deleteSkill as delete, 
  create, 
  show
}