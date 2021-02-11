import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./db.js"

dotenv.config({ path: "./config/config.env" })

connectDB()

import postRoutes from "./routes/posts.js"

import router from "./routes/userRouter.js"

const app = express()

app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

app.use("/posts", postRoutes)
app.use("/", router)

const PORT = process.env.PORT || 3500
app.listen(PORT, () =>
  console.log(
    `Server Running on Port: http://localhost:${PORT} ${process.env.NODE_ENV}`
  )
)
