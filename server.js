const express = require('express');
const app = express();
const cors = require('cors');

app.get('/', (req, res) => {
    return res.status(200).json({
        message: 'Hello there'
    })
})

app.use(express.json());
app.use(cors());

app.listen(2000, ()=>{
    console.log('WOWOWO, it\' running');
});

console.log('Node.js web server at port 2000 is running..')