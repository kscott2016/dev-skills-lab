import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'

const router = Router()

// GET localhost:3000/skills
// goes to skills controller
router.get('/', skillsCtrl.index )
router.get('/new', skillsCtrl.new )
router.post('/',skillsCtrl.create)

//use GET method to access the matching skillid in the collection of the database, then uses the controller function to show the skill
router.get('/:skillId',skillsCtrl.show)
router.delete('/:skillId',skillsCtrl.delete)



export { router }
