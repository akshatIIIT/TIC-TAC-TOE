let boxes=document.querySelectorAll(".box");
let reset_btn=document.querySelector("#resetbtn");
let newgamebtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msgContainer");
let MSG=document.querySelector("#msg")
let turno=true;   
let count=0; 
const winPatterns=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("button was clicked");
        if(turno==true){
            box.style.color="red"; 
            box.innerText="O";
            count++;
            turno=false;        
        }
        else{
            box.style.color="darkviolet";
            box.innerText="X";
            count++;
            turno=true;
        }
        box.disabled=true;
        checkwinner();
    })
});
const resetGame=()=>{
    turno=true;
    enableBoxes();
    msgContainer.classList.add("hide");
    count=0;
}
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const showWinner=(winner)=>{
    MSG.innerText=`Congratulation,the Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const drawwinner=()=>{
    MSG.innerText=`Its a Draw`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkwinner=()=>{
    for(let pattern of winPatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log("winner",pos1val);
                showWinner(pos1val);
            }
        }
    } 
    if((count==9) && (typeof winner==='undefined')){
        drawwinner();
    }

};
newgamebtn.addEventListener("click",resetGame);
reset_btn.addEventListener("click",resetGame); 
