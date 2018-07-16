//Dependencies

const express     = require('express');

//object for express
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

//Route
app.get('/', (req, res) =>{
	res.render('/pages/home');
});

app.get('/home', (req, res) =>{
	res.render('/pages/home');
});
//Creating server
app.listen(8080, () =>{
	console.log('Server running on 8080');
});