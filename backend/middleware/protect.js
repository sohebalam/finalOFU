import jwt from "jsonwebtoken"

export const protect = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1]

    isOwn = token.length < 500

    let decodedData

    if (token && isOwn) {
      decodedData = jwt.verify(token, "JWT_SECRET")

      req.userId = decodedData?.id
    } else {
      decodedData = jwt.decode(token)
      req.userId = decodedData?.sub
    }
    next()
  } catch (error) {}
}
