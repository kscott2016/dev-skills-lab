import mongoose from 'mongoose'

const Schema = mongoose.Schema

const skillSchema = new Schema({
  name: String,
  type: String,
  level:Number,
  })

  const Skill = mongoose.model('Skill', skillSchema)

  export{
    Skill
  }