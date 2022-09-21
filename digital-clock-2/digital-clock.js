

function showTime(){
var date = new Date();
var h = date.getHours();
var m = date.getMinutes();
var s = date.getSeconds();
var sesstion = "Am";

if(h==0){
    h = 12;
}
if(h>12){
    h = h-12;
    sesstion ="PM";
}

h = (h < 10) ? "0" + h : h;
m = (m<10)? "0" + m : m;
s = (s<10) ? "0" + s : s;

document.getElementById("clock") .innerHTML = h + ":" + m + ":" + s + " "+ sesstion;
var vicky = document.getElementById("clock");
console.log(vicky);
vicky.style.fontSize = "50px";
vicky.style.borderColor ="red"
setTimeout(showTime,1000);
}
showTime();