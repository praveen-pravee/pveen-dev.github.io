/*
// Typed.js
var type = new Typed(".content", {
    strings: ["I was always fascinated by how computers worked from a young age."],
    backSpeed: 100,
    typeSpeed: 100,
    loop: false
});
*/
setInterval(() => {

const date = new Date;

const hours =  date.getHours();
const minutes =  date.getMinutes();
const seconds =  date.getSeconds();

document.getElementById('time').innerHTML = [
    hours < 10 ? '0' + hours : hours,
     minutes < 10 ? '0' + minutes : minutes,
    seconds < 10 ? '0' + seconds : seconds,
    ].join(':');
},1000);


