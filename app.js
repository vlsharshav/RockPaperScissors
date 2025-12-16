

let userScore= 0;
let computerScore= 0;

let uScoreDisplay=document.querySelector("#human");
let cScoreDisplay=document.querySelector("#computer");
let result = document.querySelector("#msg");


let choices = document.querySelectorAll(".choice");

const genCompChoice=()=>{
    const avail=["rock","paper","scissor"];
    return avail[Math.floor(Math.random()*3)];
};

const displayWinner=(userWin)=>{
    if(userWin){
        userScore++;
        uScoreDisplay.innerText=userScore;
        result.innerText="You Win!";
        
    }

    else{
        
        computerScore++;
        cScoreDisplay.innerText=computerScore;
        result.innerText="Lost!!!";
    }
};

const drawGame=()=>{
    
    result.innerText="Game was draw";
};

const playgame=(userChoice)=>{
    let computerChoice = genCompChoice();
    console.log("User choice", userChoice);
    console.log("Computer choice",computerChoice);
    if(userChoice===computerChoice){
        drawGame();
    }

    else{

        let userWin=true;
        if(userChoice==="rock")
        {
            userWin=computerChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            userWin=computerChoice==="scissor"?false:true;
        }

        else{
            userWin=computerChoice==="rock"?false:true;
        }

        displayWinner(userWin);
    }
};

choices.forEach((choice)=> {
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playgame(userChoice);
    });
});

