"use strict"

console.log("Dice Game 2.0");



function diceGame(){
    let turnCount = 1;
    let playerOne = 20;
    let playerTwo = 20;
    let playerThree = 20;
    let playerFour = 20;
    let isPlayerTurn = "1234";
    

    while(playersLeft(playerOne, playerTwo, playerThree, playerFour) > 1){
        console.log("Turn", turnCount);
        let numberOfSides = 5;

        for(let i = 0; i < isPlayerTurn.length; i++){

            if(isPlayerTurn[i] === "1" && playerOne > 0){
                let userInput = prompt("attack or pass");
                
                if(userInput === "attack"){
                    console.log("playerOne's choice: attack");
                    let attackedPlayer = prompt("choose target");
                    let attackStrength = rollDie(numberOfSides);
                    let maxAttackPower = getMaxAttackPower(attackStrength);
                    let damage = rollDie(maxAttackPower);

                        if(attackedPlayer === "playerTwo" && playerTwo > 0){
                            console.log("playerOne is attacking playerTwo");
                            playerTwo -= damage;
                            console.log("playerTwo recieved", damage, "damage");

                            if(playerThree < 20 && playerThree > 0){
                                playerThree += 1;
                            }
                            if(playerFour < 20 && playerFour > 0){
                                playerFour += 1;
                            }

                        }
                        else if(attackedPlayer === "playerThree" && playerThree > 0){
                            console.log("playerOne is attacking playerThree");
                            playerThree -= damage;
                            console.log("playerThree recieved", damage, "damage");

                            if(playerTwo < 20 && playerTwo > 0){
                                playerTwo += 1;
                            }
                            if(playerFour < 20 && playerFour > 0){
                                playerFour += 1;
                            }
                        }
                        else if(attackedPlayer === "playerFour" && playerFour > 0){
                            console.log("playerOne is attacking playerFour");
                            playerFour -= damage;
                            console.log("playerFour recieved", damage, "damage");

                            if(playerTwo < 20 && playerTwo > 0){
                                playerTwo += 1;
                            }
                            if(playerThree < 20 && playerThree > 0){
                                playerThree += 1;
                            }
                        }
                }
                else if(userInput === "pass"){
                    console.log("playerOne's choice: pass");
                    if(playerOne < 20 && playerOne > 0){
                        playerOne += 1;
                    }
                    if(playerTwo < 20 && playerTwo > 0){
                        playerTwo += 1;
                    }
                    if(playerThree < 20 && playerThree > 0){
                        playerThree += 1;
                    }
                    if(playerFour < 20 && playerFour > 0){
                        playerFour += 1;
                    }
                }
                console.log("Player One", playerOne);
                console.log("Player Two", playerTwo);
                console.log("Player Three", playerThree);
                console.log("Player Four", playerFour);
            }

            else if(isPlayerTurn[i] === "2" && playerTwo > 0){
                let userInput = prompt("attack or pass");

                if(userInput === "attack"){
                    console.log("playerTwo's choice: attack");
                    let attackedPlayer = prompt("choose target");
                    let attackStrength = rollDie(numberOfSides);
                    let maxAttackPower = getMaxAttackPower(attackStrength);
                    let damage = rollDie(maxAttackPower);

                        if(attackedPlayer === "playerOne" && playerOne > 0){
                            console.log("playerTwo is attacking playerOne");
                            playerOne -= damage;
                            console.log("playerOne recieved", damage, "damage");
                            
                            if(playerThree < 20 && playerThree > 0){
                                playerThree += 1;
                            }
                            if(playerFour < 20 && playerFour > 0){
                                playerFour += 1;
                            }
                        }
                        else if(attackedPlayer === "playerThree" && playerThree > 0){
                            console.log("playerTwo is attacking playerThree");
                            playerThree -= damage;
                            console.log("playerThree recieved", damage, "damage");
                            
                            if(playerOne < 20 && playerOne > 0){
                                playerOne += 1;
                            }
                            if(playerFour < 20 && playerFour > 0){
                                playerFour += 1;
                            }
                        }
                        else if(attackedPlayer === "playerFour" && playerFour > 0){
                            console.log("playerTwo is attacking playerFour");
                            playerFour -= damage;
                            console.log("playerFour recieved", damage, "damage");
                            
                            if(playerOne < 20 && playerOne > 0){
                                playerOne += 1;
                            }
                            if(playerThree < 20 && playerThree > 0){
                                playerThree += 1;
                            }
                        }
                }
                else if(userInput === "pass"){
                    console.log("playerTwo's choice: pass");
                    if(playerOne < 20 && playerOne > 0){
                        playerOne += 1;
                    }
                    if(playerTwo < 20 && playerTwo > 0){
                        playerTwo += 1;
                    }
                    if(playerThree < 20 && playerThree > 0){
                        playerThree += 1;
                    }
                    if(playerFour < 20 && playerFour > 0){
                        playerFour += 1;
                    }
                }
                console.log("Player One", playerOne);
                console.log("Player Two", playerTwo);
                console.log("Player Three", playerThree);
                console.log("Player Four", playerFour);
            } 

            else if(isPlayerTurn[i] === "3" && playerThree > 0){
                let userInput = prompt("attack or pass");

                if(userInput === "attack"){
                    console.log("playerThree's choice: attack");
                    let attackedPlayer = prompt("choose target");
                    let attackStrength = rollDie(numberOfSides);
                    let maxAttackPower = getMaxAttackPower(attackStrength);
                    let damage = rollDie(maxAttackPower);

                        if(attackedPlayer === "playerOne" && playerOne > 0){
                            console.log("playerThree is attacking playerOne");
                            playerOne -= damage;
                            console.log("playerOne recieved", damage, "damage");
                            
                            if(playerTwo < 20 && playerTwo > 0){
                                playerTwo += 1;
                            }
                            if(playerFour < 20 && playerFour > 0){
                                playerFour += 1;
                            }
                        }
                        else if(attackedPlayer === "playerTwo" && playerTwo > 0){
                            console.log("playerThree is attacking playerTwo");
                            playerTwo -= damage;
                            console.log("playerTwo recieved", damage, "damage");
                            
                            if(playerOne < 20 && playerOne > 0){
                                playerOne += 1;
                            }
                            if(playerFour < 20 && playerFour > 0){
                                playerFour += 1;
                            }
                        }
                        else if(attackedPlayer === "playerFour" && playerFour > 0){
                            console.log("playerThree is attacking playerFour");
                            playerFour -= damage;
                            console.log("playerFour recieved", damage, "damage");
                            
                            if(playerOne < 20 && playerOne > 0){
                                playerOne += 1;
                            }
                            if(playerTwo < 20 && playerTwo > 0){
                                playerTwo += 1;
                            }
                        }
                }
                else if(userInput === "pass"){
                    console.log("playerOThree's choice: pass");
                    if(playerOne < 20 && playerOne > 0){
                        playerOne += 1;
                    }
                    if(playerTwo < 20 && playerTwo > 0){
                        playerTwo += 1;
                    }
                    if(playerThree < 20 && playerThree > 0){
                        playerThree += 1;
                    }
                    if(playerFour < 20 && playerFour > 0){
                        playerFour += 1;
                    }
                }
                console.log("Player One", playerOne);
                console.log("Player Two", playerTwo);
                console.log("Player Three", playerThree);
                console.log("Player Four", playerFour);
            } 

            else if(isPlayerTurn[i] === "4" && playerFour > 0){
                let userInput = prompt("attack or pass");

                if(userInput === "attack"){
                    console.log("playerFour's choice: attack");
                    let attackedPlayer = prompt("choose target");
                    let attackStrength = rollDie(numberOfSides);
                    let maxAttackPower = getMaxAttackPower(attackStrength);
                    let damage = rollDie(maxAttackPower);
                        
                        if(attackedPlayer === "playerOne" && playerOne > 0){
                            console.log("playerFour is attacking playerOne");
                            playerOne -= damage;
                            console.log("playerOne recieved", damage, "damage");
                            
                            if(playerTwo < 20 && playerTwo > 0){
                                playerTwo += 1;
                            }
                            if(playerThree < 20 && playerThree > 0){
                                playerThree += 1;
                            }
                        }
                        else if(attackedPlayer === "playerTwo" && playerTwo > 0){
                            console.log("playerFour is attacking playerTwo");
                            playerTwo -= damage;
                            console.log("playerTwo recieved", damage, "damage");
                            
                            if(playerOne < 20 && playerOne > 0){
                                playerOne += 1;
                            }
                            if(playerThree < 20 && playerThree > 0){
                                playerThree += 1;
                            }
                        }
                        else if(attackedPlayer === "playerThree" && playerThree > 0){
                            console.log("playerFour is attacking playerThree");
                            playerThree -= damage;
                            console.log("playerThree recieved", damage, "damage");
                            
                            if(playerOne < 20 && playerOne > 0){
                                playerOne += 1;
                            }
                            if(playerTwo < 20 && playerTwo > 0){
                                playerTwo += 1;
                            }
                        }
                }
                else if(userInput === "pass"){
                    console.log("playerFour's choice: pass");
                    if(playerOne < 20 && playerOne > 0){
                        playerOne += 1;
                    }
                    if(playerTwo < 20 && playerTwo > 0){
                        playerTwo += 1;
                    }
                    if(playerthree < 20 && playerThree > 0){
                        playerThree += 1;
                    }
                    if(playerFour < 20 && playerFour > 0){
                        playerFour += 1;
                    }
                }
                console.log("Player One", playerOne);
                console.log("Player Two", playerTwo);
                console.log("Player Three", playerThree);
                console.log("Player Four", playerFour);
            } 
        }  
        console.log("End of Turn:", turnCount);
        console.log("Player One", playerOne);
        console.log("Player Two", playerTwo);
        console.log("Player Three", playerThree);
        console.log("Player Four", playerFour);
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

function playersLeft(playerOne, playerTwo, playerThree, playerFour){
    if(playerOne <= 0 && playerTwo <= 0 && playerThree <= 0){
        console.log("playerFour Wins");
        return 1;
    }
    else if(playerOne <= 0 && playerTwo <= 0 && playerFour <= 0){
        console.log("playerThree Wins");
        return 1;
    }
    else if(playerOne <= 0 && playerThree <= 0 && playerFour <= 0){
        console.log("playerTwo Wins");
        return 1;
    }
    else if(playerTwo <= 0 && playerThree <= 0 && playerFour <= 0){
        console.log("playerOne Wins");
        return 1;
    }
    else{
        return 2;
    }
}

console.log("Dice Game");

