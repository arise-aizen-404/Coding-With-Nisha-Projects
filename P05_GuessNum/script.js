let guessNum = document.getElementById('guess-Num');
const mssg = document.getElementById('message');
function generate(){
    return (Math.floor(Math.random()*100)+1);
}
let secretNum = generate();
function guess(){
    // console.log(secretNum);
    guessInput = parseInt(guessNum.value);
    // console.log(guessInput);
    if(secretNum == guessInput){
        mssg.innerHTML = "Congratulations! you've guessed it right"
        mssg.style.color = "green";
    }
    else if(secretNum > guessInput){
        mssg.innerHTML = "OOPS! Too low, Try again";
        mssg.style.color = "red";
    }
    else{
        mssg.innerHTML = "OOPS! Too high, Try again";
        mssg.style.color = "red";
    }
}
function resetNum(){
    secretNum = generate();
}
function showNum(){
    mssg.innerHTML = "The Number is "+secretNum;
    mssg.style.color = "#081b29";
}