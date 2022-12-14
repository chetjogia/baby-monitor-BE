import express from 'express'
import { router } from './routers/index.js'
import cors from 'cors'
import decodeToken from './middleware/index.js'


const app = express()

app.use(cors())
app.use(express.json())
app.use(decodeToken)
app.use("/api/babymonitor", router);



export default app
