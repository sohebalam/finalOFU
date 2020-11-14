
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'
import connectDB from './db.js'
// import exphbs from 'express-handlebars'

dotenv.config({path: './config/config.env'})

connectDB()

import postRoutes from './routes/posts.js';

const app = express();


//Handlebars
// app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}))
// app.search('view engine', '.hbs')



app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);
// app.use('/login', postRoutes);



const PORT = process.env.PORT|| 3500;
app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT} ${process.env.NODE_ENV}`))






