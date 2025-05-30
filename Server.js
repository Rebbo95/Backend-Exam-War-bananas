import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';

const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const routes = require('./Routes');

const ConnectDb = require('./Config/ConnectDb')



const app = express();

app.use(express.json());
app.use('/api', routes);


ConnectDb();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
