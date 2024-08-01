let second = 0;
let display = document.querySelector('.timer .display');
let str_btn = document.getElementById('str');
let sto_btn = document.getElementById('sto');
let res_btn = document.getElementById('res');

//Start timer
function startTimer(){
    second++;
    let hh = Math.floor(second/3600);
    let mm = Math.floor((second-3600*hh)/60);
    let ss = second%60;
    let str = `${hh}:${mm}:${ss}`
    display.innerHTML = str;
}
//Start Clock
let interval =  null;
function startClock(){
    if(interval!=null) return;  
    interval = setInterval(startTimer, 1000);
    console.log(interval);
}
str_btn.addEventListener("click", startClock);


//Stop Clock
function stopTimer(){
    clearInterval(interval);
    interval = null;
}
sto_btn.addEventListener("click", stopTimer);


//Reset Clock    
function resetTimer(){
    clearInterval(interval);
    interval = null;
    second = 0;
    let hh = 0;
    let mm = 0;
    let ss = 0;
    let str = `${hh}:${mm}:${ss}`
    display.innerHTML = str;
}
res_btn.addEventListener("click", resetTimer);


