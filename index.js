const express = require('express');
const app = express();
const Vibrant = require('node-vibrant');

var colors;

//vibrant object created from uploaded image
let v = new Vibrant('/Users/JANG3LET/Desktop/IMG_2303.jpg');
//gets RGB palette values from vibrant object, assigns to colors
v.getPalette((err, palette) => (colors = palette));

app.get('/', (req, res) => res.(colors));

app.listen(3000, () => console.log('Centi listening on port 3000!'));
