let gameSeq =[];
let userSeq =[];

let start = false;
let level = 0;
let h2 =document.querySelector("h2");
let btns =["red","green","blue","yellow"];


document.addEventListener("keypress", function(){
    if(start == false){
        console.log("Game is started");
        start = true;


        levelUp();
    };

    
});



function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },  300);
}; 

function userflash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },  300);
};


function levelUp(){
    userSeq=[];
    level++;
    h2.innerText = `level ${level}`;


    //choose random btn

    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    //console.log(randIdx);
    //console.log(randColor);
    //console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
};



function checkBtn(idx){

     if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,  1000);
        }
     }else{
         h2.innerHTML =`Game Over ! Your score was <b>${level}<b><br> Press any key to start the game`;
         document.querySelector("body").style.backgroundColor ="red";
         setTimeout(() => {
            document.querySelector("body").style.backgroundColor ="white";
         },  500);
         reset();
     }
}


function btnPress(){
     
    let btn = this;
    userflash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkBtn(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);

}


function reset(){
    start = false;
    userSeq=[];
    gameSeq=[];
    level = 0;
}

