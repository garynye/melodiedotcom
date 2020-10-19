var express = require ('express')
var app = express()

app.get('/', function (req, res){
    res.send('hello bitch - with changes for tutorial')
})

app.listen(80, function (){
    console.log('app listening bitch on port 80! - with changes for tutorial')
})