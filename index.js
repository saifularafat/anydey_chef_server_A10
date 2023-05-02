const express = require('express');
const app = express();
const port = 5000;

const master_chef = require ('./data/chef.json')

app.get('/', (req, res) => {
    res.send('Hi Chef Server')
})

app.get('/chef', (req, res) => {
    res.send(master_chef)
})


app.listen(port, () => {
    console.log(`Server site Explore by :${port}`);
})