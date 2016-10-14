//Opening narration prior to character creation, naming, etc.
alert("Pain. Everywhere, pain. Your mind swims as you grasp for control over your body. Your lungs crack as you try to breath, gasping and coughing. Best to take only shallow breaths for now. ");
alert("The darkness is complete around you. You struggle to open your swollen eyes, and are at last able to blink the crusted sleep away. Though blurry, your vision begins to clear and you see a faint glow through luminescent bars.");
alert("You feel around with your bruised fingers. The surface below you feels hard and cold, and damp. You force yourself into a sitting positions and nudge your way to the banded darkness.");
alert("You reach outward and are stopped by something rough to the touch. Iron. Bars. Of course. Iron bars, my dear old friend; it seems this day we meet again. You clumbsily pull yourself up to a standing position, straining your pulsing muscles.");

//Character object with base stats
function Player(){
    var name = "Poots";
    var vim = 25;
    var pith = 0;
    // physical power
    var ardor = 5;
    //physical fortitude
    var grit = 5;
    // mental acuity
    var savvy = 0;
    // mental fortitude and state of mind
    var fettle = 3;
    // situational awareness
    var knack = 3;

    var weapon = "fists";
    var armor = "nudity";
    var accessory = "nothing";

}

function Antagonist(){
    var name = "";
    var vim = 25;
    var pith = 0;
    // physical power
    var ardor = 5;
    //physical fortitude
    var grit = 5;
    // mental acuity
    var savvy = 0;
    // mental fortitude and state of mind
    var fettle = 3;
    // situational awareness
    var knack = 3;

}

player1 = new Player;
guard = new Antagonist;
rat = new Antagonist;
tavernWench = new Antagonist;

player1.name = "Lag";

alert("You grasp at the swirling bits inside your head for any memory of who and what you are... ");
        
    prompt("Can you tell me your name?");

alert("Your memory seems hazy... I refuse to call you that. I think I'll call you Lag instead.")

    player1.name = "Lag"

alert(player1.name + ", in the darkness, you brush against something hard and wet. It's a stone! A weapon would be useful. Will you take it?")

    prompt("Yes or no?");

player1.weapon = "Stone";

alert("Your weary eyes adjust to the darkness and you are able to make out a hallway, with a large braced wooden door at the end. You hear muffled laughter emanating from behind it.")
alert("You step nearer the bars in order to better hear, and you're able to make out two voices. ...must be a shift change for the guards. Now is your chance")

    prompt("Try to escape or sit quietly and await trial?")

//Player name if/else statement
if ("try to escape") {
    alert("You beat viciously against the bars. The reverberation rattles your already aching head and you cease your action");
    alert("The door opens abruptly and a shadowy figure clanks through. You step back from the bars and raise your " + player.weapon + "!");
    alert("What're you doin' in there, you wee pikey bastard?!, the guard exclaims!");
        
        prompt("Throw the stone between the bars or wait?");
            
            alert("Doesn't matter... Let's call you Lag.")
} else{
    alert("You are wracked with guilt over your poor decision to await trial. A coldness overtakes you and you cease to exist. Farewell, Lag... You were a pretty cool guy...");
    alert("You are thrust across the room by a violent kick to the face.");
}

//Player check name - You've got to want to!
function CheckPlayerName () {
    switch (player1.name) {
        case 1:
            player1.name = prompt("");
            if(CheckPlayerName == player1.name) {
                alert("Your memory seems hazy... I refuse to call you that. I think I'll call you Lag instead.");
            }
            CheckPlayerName();
            break;

        case 2:
            alert("");
            
            break;

        case 3:
            
            break;

        default:
            alert("");
            break;
    }
}




