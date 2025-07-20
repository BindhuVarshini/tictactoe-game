let boxes=document.querySelectorAll("#box");
let restart=document.querySelector("#x1");
let message=document.querySelector(".mssg");
let msg1=document.querySelector(".msg");
let newbutton=document.querySelector("#newb");

let player=true;//player x or 0//
const winpat=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];

const resetBoxes = () => {
    player=true;
    enable();
    message.classList.add("hide");
}

boxes.forEach((box) => {

box.addEventListener("click" ,()=> {
console.log("box was clicked");
if(player){
    box.innerText="X";
    player=false;
}
 else
    {
       box.innerText="O";  
       player=true;
    }
    box.disabled=true;
    checkWinner();
    });
});

const norepeat=()=>{
    for(let box of boxes)
    {
    box.disabled=true;
    }
};
const enable=()=>{
    for(let box of boxes)
    {
    box.disabled=false;
    box.innerText="";
    }
};

const showWin=( winner ) =>{
msg1.innerText=`${winner} is winner`;
message.classList.remove("hide");
norepeat();
}
const noWin=() =>{
    msg1.innerText="it's a draw!!! Play Again";
    message.classList.remove("hide");
    norepeat();
}
const checkWinner = () =>{
    let winnerFound = false;
    for(let pattern of winpat){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        
        if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
            if(pos1Val===pos2Val && pos2Val === pos3Val)
            {
                console.log("winner",pos1Val);
                winnerFound=true;
                showWin(pos1Val);
            }
            else{
                const arr = Array.from(boxes);
              if (!winnerFound && arr.every(box => box.innerText !== "")) {
              noWin();
              }

            }
        
        }
    }  

};

newbutton.addEventListener("click", resetBoxes);
restart.addEventListener("click", resetBoxes);