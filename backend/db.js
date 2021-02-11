import mongoose from "mongoose"

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.LOCAL_DB || process.env.DB,
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    console.log(` DB Connected: ${conn.connection.host}`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

export default connectDB
