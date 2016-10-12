//Opening narration prior to character creation, naming, etc.
alert("Pain. Everywhere, pain. Your mind swims as you grasp for control over your body. Your lungs crack as you try to breath, gasping and coughing. Best to take only shallow breaths for now. ");
alert("The darkness is complete around you. You struggle to open your swollen eyes, and are at last able to blink the crusted sleep away. Though blurry, your vision begins to clear and you see a faint glow through luminescent bars.");
alert("You feel around with your bruised fingers. The surface below you feels hard and cold, and damp. You force yourself into a sitting positions and nudge your way to the banded darkness.");
alert("You reach outward and are stopped by something rough to the touch. Iron. Bars. Of course. Iron bars, my dear old friend; it seems this day we meet again. You clumbsily pull yourself up to a standing position, straining your pulsing muscles");

//Character object with base stats
function Player(){
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

//Player name if/else statement
if (player1.name) {
    player1.name = "";
    alert("You grasp at the swirling bits inside your head for any memory of who and what you are... Can you tell me your name?");
        prompt() = "";
            alert("Doesn't matter... Let's call you Lag.")
            player1.name = "Lag";
} else {
    alert("Face kick!");
    alert("You are thrust across the room by a violent kick to the face.");
}