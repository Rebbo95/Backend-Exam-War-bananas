import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import menuRouter from './Routes/Coffee.js';

// Config
dotenv.config();
const app = express();
const PORT = process.env.PORT;
mongoose.connect(process.env.CONNECTION_STRING);
const database = mongoose.connection;


// Middlewares
app.use(express.json());

// Routes
app.use('/api/menu', menuRouter);



// DB EmitEvents
database.on('error', (error) => console.log(error));
database.once('connected', () => {
    console.log('DB connected');

    // Start sever
    app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);

    });

});
