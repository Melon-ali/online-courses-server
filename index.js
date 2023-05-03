const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const courses = require('./data/courses.json');
const employees = require('./data/employees.json');
const trainer = require('./data/trainer.json');

// middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Online Server is Running...');
});

app.get('/employees', (req, res) => {
    res.send(employees);
});

app.get('/courses', (req, res) => {
    res.send(courses)
});

app.get('/trainer', (req, res) => {
    res.send(trainer);
});

app.listen(port, () => {
    console.log(`Online Listening On Port ${port}`);
});