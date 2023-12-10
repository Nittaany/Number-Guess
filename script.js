'use strict';
function generateRandom(){
    return Math.floor((Math.random()*21)+1)
}
const ranno = generateRandom();

let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click",function(){
    const guessed_no= Number(document.querySelector(".guess").value);
    
    console.log(ranno); 
    if (!guessed_no  /* guessed_no==0 */){
        document.querySelector(".message").textContent="Input Field Empty 😤"
    }else if (guessed_no==ranno){
        document.querySelector(".message").textContent="🎉 You WIN 🏆";
        document.querySelector('#body');
        document.querySelector(".highscore").innerHTML=score;
    }else if (guessed_no > ranno){
        document.querySelector(".message").textContent="Your Guess Was Greater🤪";
        score = score-1;
        document.querySelector(".score").textContent=score;
    }else if (guessed_no < ranno){
        document.querySelector(".message").textContent="Your Guess Was Smaller😳";
        score = score-1;
        document.querySelector(".score").textContent=score;
    }
})