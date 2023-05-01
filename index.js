const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('Hi Chef Server')
})

app.listen(port, () => {
    console.log(`Server site Explore by :${port}`);
})