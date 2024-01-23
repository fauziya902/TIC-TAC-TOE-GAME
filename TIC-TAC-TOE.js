

let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelectorAll("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;// playerX , playerY


const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]

];

//                  RESET GAME 

const resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};


//                 DISABLE ALL BOXES AFTER WINNING

  const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
  }

//                 ENABLE ALL BOXES AFTER WINNING

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
  }

//                        SHOW THE WINNER
const showWinner = (winner) =>{
    msg.innerText = `Congratulations!, winner is ${winner}`;
    msgContainer.classList.remove("hide");
     disableBoxes()
};


//                         PLAY THE GAME

boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        console.log("box was clicked !");
        if( turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        
        checkWinner();
    });
});
     
//                         CHECK THE WINNER

const checkWinner = ()=>{
   for(pattern of winPattern){
    let position1 = boxes [pattern[0]].innerText;
    let position2 = boxes[pattern[1]].innerText;
    let position3 = boxes[pattern[2]].innerText;

    if(position1 != "" && position2 !="" && position3 !=""){
        if(position1 === position2 && position2 === position3){
            console.log("winner !", position1);
    
            showWinner(position1);
        }
    }
   }
}


newGameBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);