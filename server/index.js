const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const route = require('./routes/user');
require('dotenv').config();

app.use(cors({
    origin:"http://localhost:5173"
}));
app.use(express.json());
app.use('/api/auth', route);

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_DB_ROUTE);

app.listen(3000, () => {
    console.log('server opened');
})
