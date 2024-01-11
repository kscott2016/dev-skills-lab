import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'

const router = Router()

// GET localhost:3000/skills
// goes to skills controller
router.get('/', skillsCtrl.index )
router.post('/',skillsCtrl.create)
router.get('/:skillId',skillsCtrl.show)
router.post('/',skillsCtrl.delete)
router.get('/new', skillsCtrl.new )


export { router }
