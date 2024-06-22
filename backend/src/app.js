import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import dotenv from 'dotenv'

const app = express()

dotenv.config({path: ".env"});

app.use(cors({
    origin: "*",
    credentials: true
}))

app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(express.static("public"))
app.use(cookieParser())


//routes import
import userRouter from './routes/user.routes.js'
import employmentRouter from './routes/employment.route.js'

//routes declaration
app.use("/users", userRouter)
app.use("/employment", employmentRouter)

export { app }