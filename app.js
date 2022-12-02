import express from 'express'
import { router } from './routers'

const app = express()

app.use(cors())
app.use(express.json())
app.use("/api/babymonitor", router);



export default app
