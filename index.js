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

// chef local server deploy
app.get('/chef', (req, res) => {
    res.send(master_chef)
})

// chef dynamic id
app.get('/chef/:id', (req, res) => {
    const id = req.params.id;
    const selectChef = master_chef.find(chef => chef._id == id);
    res.send(selectChef);
})

// food local server deploy
app.get('/food', (req, res) => {
    res.send(chef_food)
})

//food dynamic id
app.get('/food/:id', (req, res) => {
    const id = req.params.id;
    const selectFood = chef_food.find(food => food.id == id);
    res.send(selectFood);
})
app.listen(port, () => {
    console.log(`Server site Explore by :${port}`);
})