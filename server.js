const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;
const PUBLIC = path.join(__dirname, 'public');

app.use(express.static(PUBLIC));

app.get('/', (req,res)=>{
    res.sendFile(path.join(PUBLIC, 'home.html'));
});

app.listen(PORT, ()=>{
    console.info(`Server running at port ${PORT}`)
});





