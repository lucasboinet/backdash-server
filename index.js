import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import router from './lib/router.js'
import mongoose from './lib/mongoose.js'

dotenv.config()
mongoose.connect()

const app = express()

const port = process.env.PORT

app.use(cookieParser())
app.use(express.json())
app.use(cors({
  origin: [process.env.ORIGIN],
  methods: ['GET', 'POST', 'DELETE', 'PUT'],
  credentials: true
}))

app.use('/api', router)

app.listen(port, () => {
	console.log(`[server]: Running at http://localhost:${port}`);
})