import express from 'express'
import {  getMe, login, logout, signup } from '../controllers/authController.js'
import { protectedRoute } from '../Middleware/protectedRoutes.js'

const router = express.Router()

router.post('/login', login)
router.post('/signup', signup)
router.get('/me', protectedRoute, getMe)
router.post('/logout', protectedRoute, logout)



export default router