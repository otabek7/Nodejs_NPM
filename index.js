// var generateName = require('sillyname');

import generateName from "sillyname";

// var superheroes = require('superheroes');
import superheroes from "superheroes";

var sillyName = generateName();
var superName = superheroes.random();

console.log(`My name is ${sillyName}.`);
console.log(`My superhero name is ${superName}`);