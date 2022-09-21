
const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

const formE1 = document.getElementById("form");
const scoreE1 = document.getElementById("score");
const questionE1 = document.getElementById("question");
const inputE1 = document.getElementById("input");

let score = JSON.parse(localStorage.getItem("score"));

if(!score){
    score= 0;
}

scoreE1.innerText = `score: ${score}`

questionE1.innerText = `what is ${num1} multiply by ${num2}?`;

const correctAns = num1 * num2;

formE1.addEventListener("submit",()=>{
    const userAns = +inputE1.value
    if(userAns === correctAns){
        score++;
        updateLocalStorege()
    }
    else{
        score--;
       updateLocalStorege()
    }
});

function updateLocalStorege(){
    localStorage.setItem("score",JSON.stringify(score))
}



