const express = require('express');
const hbs=require('hbs');

var app= express();

app.set('view engine','hbs');
app.use(express.static(__dirname + '/public'));

app.get('/home',(req,res)=>{
	res.render('home.hbs',{
		pageTitle:'Home Page',
		currentYear: new Date().getFullYear()
	});
});

app.get('/', (req,res)=>{
	res.send("<h1>Welcome</h1>");
});

app.listen(3000,()=>{
	console.log("Server start up port 3000");
});