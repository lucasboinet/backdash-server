import express from 'express'
import auth from '../modules/auth/auth.routes.js'

const router = express.Router()

router.use('/auth', auth)

export default router