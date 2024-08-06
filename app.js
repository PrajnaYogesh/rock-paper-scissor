let userScore =0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const genCompChoice = () =>{
const options = ["rock","paper","scissor"];
const randomIndex= Math.floor(Math.random()*3);
return options[randomIndex];
}

const drawGame = ()=>{
    console.log("game was draw");
    msg.innerText="Game was Draw!Play again"
    
}
const showWinner = (userWin)=>{
    if(userWin){
        console.log("you win");
        msg.innerText="You Win"
    }else{
        console.log("you lose");
        msg.innerText="You lose"
    }
}


const playGame= (userChoice)=>{
    console.log("user choice = ",userChoice);
let udata = document.createElement('p')
udata.innerHTML=`User: ${userChoice}`
let selection= document.querySelector(".selections")
selection.append(udata)
        const compChoice=  genCompChoice(userChoice);
    console.log("comp choice =",compChoice);
    let cdata = document.createElement('p')
    cdata.innerHTML=`Computer: ${compChoice}`
    selection.append(cdata)

        if(userChoice == compChoice){
      drawGame();  
    }
    else{
        let userWin=true;
        if(userChoice === "rock"){
            userWin = compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
           userWin= compChoice==="scissor"?false:true;
        }else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin)
    //   clear the newly created element
    }
}

choices.forEach((choice) =>{
        choice.addEventListener('click', ()=>{
         const userChoice = choice.getAttribute("id");
      playGame(userChoice)
      

    })
})