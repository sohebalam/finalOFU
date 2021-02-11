import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import User from "../models/userModel.js"

export const login = async (req, res) => {
  const { email, password } = req.body

  try {
    const existingUser = await User.findOne({ email })

    if (!existingUser) {
      return res.status(404).json({ messsage: "User not found" })
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    )

    if (!isPasswordCorrect) {
      return res.status(400).json({ messsage: "Invalid Password or Email" })
    }

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      "JWT_SECRET",
      { expiresIn: "5d" }
    )

    res.status(200).json({ result: existingUser, token })
  } catch (error) {
    res.status(500).json({ messsage: "Something went wrong" })
  }
}

export const register = async (req, res) => {
  const { email, password, firstName, lastName, confirmPassword } = req.body

  try {
    const existingUser = await User.findOne({ email })

    if (existingUser) {
      return res.status(400).json({ messsage: "User already exists" })
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ messsage: "Passwords don't match" })
    }

    const HashPassword = await bcrypt.hash(password, 12)

    const result = await User.create({
      email,
      password: HashPassword,
      name: `${firstName} ${lastName}`,
    })

    const token = jwt.sign(
      { email: result.email, id: result._id },
      "JWT_SECRET",
      { expiresIn: "5d" }
    )

    res.status(200).json({ result, token })
  } catch (error) {
    res.status(500).json({ messsage: "Something went wrong" })
  }
}
