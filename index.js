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

app.get('/chef', (req, res) => {
    res.send(master_chef)
})

app.get('/chef/:id', (req, res) => {
    const id = req.params.id;
    const selectChef = master_chef.find(chef => chef._id == id);
    res.send(selectChef);
})

app.listen(port, () => {
    console.log(`Server site Explore by :${port}`);
})