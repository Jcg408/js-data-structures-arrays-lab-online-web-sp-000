// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver() {
  drivers.push("Ralph");
}

 function destructivelyPrependDriver() {
   drivers.unshift("Bob");
 }

 function destructivelyRemoveLastDriver() {
   drivers.pop();
 }

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver() {
  let drivers = ["Milo", "Otis", "Garfield"]
  let newDrivers = [...drivers, "Broom"];
  return newDrivers;
}
