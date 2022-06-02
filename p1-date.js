/*
    CIT 281 Project 1
    Name: Teresa Tseng
*/


// Multiple Lines
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let day = weekday[d.getDay()];
console.log(day)


// One line Version
console.log(weekdays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][new Date().getDay()]);
