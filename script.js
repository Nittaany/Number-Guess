'use strict';


//check Button Functionalities

function generateRandom(){
    return Math.floor((Math.random()*20)+1)
}
let ranno = generateRandom();
console.log(ranno);
let score = 10;
let highscore = 0;

document.querySelector(".check").addEventListener("click",function(){
    const guessed_no= Number(document.querySelector(".guess").value);
    
    console.log(ranno); 
    if (!guessed_no  /* guessed_no==0 */){
        document.querySelector(".message").textContent="Input Field Empty 😤"
    }
    else if (guessed_no==ranno){
        if(score >= 1){
            document.querySelector(".message").textContent="🎉 You WIN 🏆";
            document.querySelector("body").style.backgroundColor = "#60b347";
            document.querySelector(".number").style.width = "22rem";
            document.querySelector(".number").textContent=ranno;
            if (score>highscore){
                highscore = score;
                document.querySelector(".highscore").innerHTML=highscore;
            }
            document.querySelector(".check").disabled=true;
            document.querySelector(".guess").setAttribute("disabled", "");
            document.querySelector(".check").innerHTML ="🥳";
        }}else {
            if (score > 1){
            document.querySelector(".message").textContent= (guessed_no > ranno ? "Your Guess Was Greater🤪" : "Your Guess Was Smaller😳");
            score --;
            document.querySelector(".score").textContent=score;
           }else{
            document.querySelector(".score").textContent=0;
            document.querySelector(".message").textContent="🥶 You Lost! 🫣"
            document.querySelector("body").style.backgroundColor = "rgb(247, 36, 50)";
            document.querySelector(".check").setAttribute("hidden", "");
            document.querySelector(".guess").setAttribute("disabled", "");
           }
        }
    
})


    // }else if (guessed_no > ranno){
    //    if (score > 1){
    //     document.querySelector(".message").textContent="Your Guess Was Greater🤪";
    //     score = score-1;
    //     document.querySelector(".score").textContent=score;
    //    }else{
    //     document.querySelector(".score").textContent=0;
    //     document.querySelector(".message").textContent="🥶 You Lost! 🫣"
    //     document.querySelector("body").style.backgroundColor = "rgb(247, 36, 50)";
    //     document.querySelector(".check").setAttribute("hidden", "");
    //     document.querySelector(".guess").setAttribute("disabled", "");
    //    }

    // }else if (guessed_no < ranno){
    //     if (score > 1){
    //         document.querySelector(".message").textContent="Your Guess Was Smaller😳";
    //         score = score-1;
    //         document.querySelector(".score").textContent=score;
    //        }else{
    //         document.querySelector(".message").textContent="🥶 You Lost! 🫣";
    //         document.querySelector(".score").textContent=0;
    //         document.querySelector("body").style.backgroundColor = "rgb(247, 36, 50)";
    //         document.querySelector(".check").setAttribute("hidden", "");
    //         document.querySelector(".guess").setAttribute("disabled", "");

    //        }
    // }
//})



// Again Button Functionality

document.querySelector(".again").addEventListener("click",()=>{
    score = 10;
    ranno = generateRandom();
    document.querySelector(".score").innerHTML=10;
    document.querySelector("body").style.backgroundColor="#16273f";
    document.querySelector(".message").textContent="Start guessing...";
    document.querySelector(".guess").value=" ";
    document.querySelector(".check").innerHTML ="Check!";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").disabled=false;
    document.querySelector(".check").hidden=false;
    document.querySelector(".check").disabled=false;
})