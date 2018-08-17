"use strict"

console.log("Dice Game");

function diceGame(){
    let turnCount = 1
    alert("Would you like to play??");
    let playerOne = 100;
    let playerTwo = 100;
    let isPlayerOneTurn = true;

    //while(playerOne > 0 && playerTwo > 0){
        let userInput = prompt("attack or pass");
        let numberOfSides = 5;

        if(isPlayerOneTurn){
            
            if(userInput === "attack"){
                let attackStrength = rollDie(numberOfSides);
                let maxAttackPower = getMaxAttackPower(attackStrength);
                let damage = rollDie(maxAttackPower);
                playerTwo -= damage;
                console.log("Player Two", playerTwo);
            }
            else if(userInput === "pass"){
                if(playerTwo < 100){
                    playerTwo += 1;
                    console.log("Player Two", playerTwo);
                }
            }
        }

        else{

            if(userInput === "attack"){
                let attackStrength = rollDie(numberOfSides);
                let maxAttackPower = getMaxAttackPower(attackStrength);
                let damage = rollDie(maxAttackPower);
                playerOne -= damage;
                console.log("Player One", playerOne);
            }
            else if(userInput === "pass"){
                if(playerOne < 100){
                    playerOne += 1;
                    console.log("Player One", playerOne);
                }
            }

        }
        isPlayerOneTurn = !isPlayerOneTurn;   
        console.log(turnCount);
        console.log("Player One", playerOne);
        console.log("Player Two", playerTwo);
        turnCount++;
    }
}
   
function getMaxAttackPower(attackStrength){
    
    let maxAttackPower;

    if(attackStrength === 1){
        maxAttackPower = 12;
    }
    else if(attackStrength === 2){
        maxAttackPower = 14;
    }
    else if(attackStrength === 3){
        maxAttackPower = 16;
    }
    else if(attackStrength === 4){
        maxAttackPower = 18;
    }
    else if(attackStrength === 5){
        maxAttackPower = 20;
    }
    return maxAttackPower;
}

function rollDie(numberOfSides) {
    return Math.floor(Math.random() * numberOfSides) + 1;
}

console.log("Dice Game");
diceGame();
