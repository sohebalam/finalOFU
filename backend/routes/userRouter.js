import express from "express"

import {} from "../controllers/posts.js"
import { login, register } from "../controllers/userCont.js"

const router = express.Router()

router.post("/login", login)
router.post("/register", register)

export default router
