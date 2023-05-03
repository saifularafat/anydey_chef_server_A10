const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;

app.use(cors())

const master_chef = require ('./data/chef.json');

const chef_food = require ('./data/food.json');

app.get('/', (req, res) => {
    res.send('Hi Chef Server')
})

// chef local server api create
app.get('/chef', (req, res) => {
    res.send(master_chef)
})

// chef dynamic id
// app.get('/chef/:id', (req, res) => {
//     const id = req.params.id;
//     const selectChef = master_chef.find(chef => chef._id == id);
//     res.send(selectChef);
// })

// food local server api create
app.get('/food', (req, res) => {
    res.send(chef_food)
})

//food dynamic id api create
app.get('/food/:id', (req, res) => {
    const id = req.params.id;
    const selectFood = chef_food.find(food => food.id == id);
    res.send(selectFood);
})

// master_chef and chef_food added and the dynamic api id create
app.get('/chef/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const masterId = chef_food.filter(food =>parseInt(food.chef_id) === id);
    res.send(masterId)
})
app.listen(port, () => {
    console.log(`Server site Explore by :${port}`);
})