var diceOneNumber = 0;
var diceTwoNumber = 0;
var winner;
var resultMessage;

function rollNumber(){
    return Math.floor(6 * Math.random()) + 1;
}

function returnImagePath(numberOfImage){
    var imagePath;
    switch (numberOfImage){
        case 1: imagePath ='images/dice1.png'; break;
        case 2: imagePath ='images/dice2.png'; break;
        case 3: imagePath ='images/dice3.png'; break;
        case 4: imagePath ='images/dice4.png'; break;
        case 5: imagePath ='images/dice5.png'; break;
        case 6: imagePath ='images/dice6.png'; break;
    }
    return imagePath;
}

function setDicesNumber(){
    diceOneNumber = rollNumber();
    diceTwoNumber = rollNumber();
}

function changeImageOfDices(){
    document.querySelector('.img1').setAttribute('src', returnImagePath(diceOneNumber));    
    document.querySelector('.img2').setAttribute('src', returnImagePath(diceTwoNumber));    
}

function setWinner(){
    if(diceOneNumber > diceTwoNumber)
        winner = 1;
    else if(diceOneNumber < diceTwoNumber)
        winner = 2;
    else   
        winner = 0;
}

function generateResultMessage(){
    switch (winner){
        case 0: resultMessage = 'Ninguem ganhou!! Temos um impate'; break;
        case 1: resultMessage = 'O Player 1 venceu!!'; break;
        case 2: resultMessage = 'O Player 2 venceu!!'; break;
        default: resultMessage = 'Resultado inválido';
    }
}

function setWinnerMessage(){
    document.querySelector('.result p').innerHTML = resultMessage;
}

function setMessageOnPage(){
    setWinner();
    generateResultMessage();
    setWinnerMessage();
}

function onLoad(){
    setDicesNumber();
    changeImageOfDices();    
    setMessageOnPage();
}



// document.querySelector('.img1').setAttribute('src', 'images/dice2.png');
// document.querySelector('.number2').textContent = imagePath;
onLoad();


