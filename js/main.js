const userScore=document.getElementById('userScoreVal');
const compScore=document.getElementById('compScoreVal');
const userResult=document.getElementById('result-user-stat');
const compResult=document.getElementById('result-comp-stat');
const finalResult=document.getElementById('result-final-stat');
const choice=document.querySelectorAll('.choice img');
const main=document.querySelector('main');
const gameRe=document.querySelector('.game-result');
const h2=document.getElementById('win-msg');
const h3=document.getElementById('winner');
const btn=document.getElementById('restart-btn')

const userImg=document.createElement('img');
const compImg=document.createElement('img');
const resultVal=document.createElement('span');
resultVal.style.fontSize='40px';
resultVal.style.color='#fee11a';

userResult.appendChild(userImg);
compResult.appendChild(compImg);
finalResult.appendChild(resultVal);

let move=0;

// function for user's game
function userGame(el){
    userImg.setAttribute('src', el.src);
    userImg.style.height='40px';
    userImg.style.marginLeft='10px';
    return el.alt;
};

// function for computer's game
function compGame(){
    element=choice[Math.floor(Math.random()*choice.length)];
    compImg.setAttribute('src', element.src);
    compImg.style.height='40px';
    compImg.style.marginLeft='10px';
    return element.alt;
};

// function for deciding winners for each move  
const finalAns=function(el){
    let userAns=userGame(el);
    let compAns=compGame();
    if(userAns===compAns){
        resultVal.textContent=" Tie !!"
    }
    else if(userAns=='paper' && compAns=='rock'){
        resultVal.textContent=" USER";
        userScore.textContent++;
    }
    else if(userAns=='paper'&& compAns=='scissors'){
        resultVal.textContent=" COMPUTER";
        compScore.textContent++;
    }
    else if(userAns=='rock' && compAns=='scissors'){
        resultVal.textContent=" USER";
        userScore.textContent++;
    }
    else if(userAns=='rock'&& compAns=='paper'){
        resultVal.textContent=" COMPUTER";
        compScore.textContent++;
    }
    else if(userAns=='scissors' && compAns=='paper'){
        resultVal.textContent=" USER";
        userScore.textContent++;
    }
    else if(userAns=='scissors'&& compAns=='rock'){
        resultVal.textContent=" COMPUTER";
        compScore.textContent++;
    }
    return
};

// function for final result after 10 moves
function gameResult(move){
    if(move==10){
        main.style.display='none';
        gameRe.style.display='flex';
        
      if(userScore.textContent>compScore.textContent){
            h2.textContent="CONGRATULATIONS !!"
            h3.textContent=" You Won The Game"
        }else if(compScore.textContent>userScore.textContent){
            h2.innerText="SORRY !!"
            h3.textContent="Computer Won The Game";
        }else{
            span.textContent="Game Is Tie";
        }
   }
   
//  to reload the game
   btn.addEventListener('click',()=>{
    location.reload();
   })
}
 
//  click events for playing game
choice.forEach((el)=>{
    el.addEventListener('click', ()=>{
        move++;
        userGame(el);
        compGame();
        finalAns(el);
        gameResult(move)
    } )
})
