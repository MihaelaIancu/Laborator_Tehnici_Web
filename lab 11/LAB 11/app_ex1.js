//ex1

const express = require('express');
const fs = require('fs');
var app = express();

app.get("/ex1", function(req, res) {
    res.sendFile(__dirname + "/ex1.html");
});

app.use('/post', express.urlencoded({extended:false}));

app.post('/post', function(req, res){
    fs.readFile("persoane.json", function(err, date){
        if(err) throw err;
        var persoane = JSON.parse(date);
        res.status(200);
        res.write('<html><body>');
        console.log("a citit datele");
        for(a of persoane) {
            if(a[req.body.tip] == req.body.cuvant) {
               res.write('<p>' + a.nume + ' ' + a.prenume + '</p>');
               }
        }
        res.write('</html></body>');
        res.end();
    });
    console.log("a afisat datele");
});

app.listen(4000);
console.log("Serverul a pornit");
