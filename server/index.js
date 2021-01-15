import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
        res.send("hello");
})

app.listen(5000, () => {
    console.log('app is running on port 5000')
})