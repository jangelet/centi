const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const Vibrant = require('node-vibrant');

//set up template engine
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'views')));

var colors;

//vibrant object created from uploaded image
let v = new Vibrant('/Users/JANG3LET/Desktop/IMG_2303.jpg');
//gets RGB palette values from vibrant object, assigns to colors
v.getPalette((err, palette) => (colors = palette));

app.get('/', (req, res) => res.render('main', { color: colors }));

// app.post('/', (reg, res) => res.send({ color: colors }));

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => console.log('Centi listening on port 3000!'));
