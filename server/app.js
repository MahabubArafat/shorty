const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors());

app.get('/', function(req, res){
    res.send(
        "Hello"
    )
})

app.post('/', function(req, res){
    console.log(req.body);
    
    res.send(
        "Hello from Post"
    )
})
app.listen(3000, function(){
    console.log("Running")
});