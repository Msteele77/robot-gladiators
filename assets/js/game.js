var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;


var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;












// Game States



// "WIN" - Player robot has defeated all enemy-robots









//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less










//////FIGHT expression   

var fight = function(enemyName) {
    window.alert("Welcome to Robot Gladiators!");

    //FIGHT OR SKIP
var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
console.log(promptFight);


//FIGHT 

    // if player choses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {

    // remove enemy's health by subtracting the amount set in the playerAttack variable
enemyHealth = enemyHealth - playerAttack;

    // Log a resulting message to the console so we know that it worked.
console.log(
    playerName + "attacked" + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
);

    //Check enemy's health
if (enemyHealth <=0) {
    window.alert(enemyName + " has died!");
}
else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
}
    
    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
playerHealth = playerHealth - enemyAttack;

    // Log a resulting message to the console so we know that it worked.
console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
);  

    //Cheeck player's health
if (playerHealth <= 0) {
    window.alert(playerName + " has died! ");
}
else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
}



///////////
    // if player choses to skip
} else if (promptFight === "skip" || promptFight === "SKIP") {
    //confirm player wants to skip
var confirmSkip = window.confirm("Are you sure you would like to quit?")

    // if yes (true), leave fight
if (confirmSkip) {
    window.alert(playerName + " has decided to skip this fight. Goodbye!");

    // subtract money from playerMoney for skipping 
playerMoney = playerMoney - 2;
}

    // if no (false), ask question again by running fight() again
 else {
     fight();
    }

window.alert(playerName + " has chosen to skip the fight!");

} else {
    window.alert("You need to choose a valid option. Try again!");
  }
};
//////





//fight function call:

for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
  }



