import express from 'express'
import { authenticate, login, register } from '../controllers/authController.js'

const router = express.Router()

router.post('/login', login)
router.post('/register', register)
router.get('/verify', authenticate)


export default router