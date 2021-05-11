//ex2

const express = require('express');
const fs = require('fs');
var app = express();

app.use('/post', express.urlencoded({extended:false}));

valori=[
	{
		identificator:"a",
		valoare:14
	},
	{
		identificator:"b",
		valoare:10
	},
	{
		identificator:"c",
		valoare:12
	},
	{
		identificator:"d",
		valoare:10
	},
	{
		identificator:"e",
		valoare:10
	},
	{
		identificator:"f",
		valoare:10
	},
	{
		identificator:"g",
		valoare:10
	}
]

app.get("/ex2", function(req, res) {
    res.sendFile(__dirname + "/ex2.html");
});

fs.writeFileSync("operatii.json", JSON.stringify([]));

app.post("/post", function(req, res) {
    var v1, v2, rezultat, semn;
    var operatii = fs.readFileSync("operatii.json");
    var vector = JSON.parse(operatii);
    
    for(val of valori) {
        if(val.identificator == req.body.id1) {
            v1 = val.valoare; 
           }
        if(val.identificator == req.body.id2) {
            v2 = val.valoare; 
           }
    }
    
    switch(req.body.operatie) {
        case "adunare":
            semn = '+';
            rezultat = v1+v2;
            break;
        case "scadere":
            semn = '-';
            rezultat = v1-v2;
            break;
           }
    
    res.status(200);
    var ob = {};
    ob[req.body.id1] = v1;
    ob[req.body.id2] = v2;
    ob[req.body.operatie] = rezultat;
    vector.push(ob);
    fs.writeFileSync("operatii.json", JSON.stringify(vector));
    res.end(v1 + ' ' + semn + ' ' + v2 + ' = ' + rezultat);
    
});


app.listen(8010);
console.log("Serverul a pornit");

