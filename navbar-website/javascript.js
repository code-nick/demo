const btn  = document.getElementById("hambagger");
const nav = document.querySelector("#nav");
console.log(btn);
btn.addEventListener("click",function()
{
    nav.classList.toggle("off");
})