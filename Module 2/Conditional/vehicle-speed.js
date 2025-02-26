var vehicleSpeed = 90;
var speedLimit = 50;
var fineAmount = 0;

if ( vehicleSpeed > speedLimit){
    var speedDifference = vehicleSpeed - speedLimit;
    fineAmount = Math.ceil(speedDifference / 5)* 50;
    console.log (
        "You were driving at "+ vehicleSpeed + " km/hr, exceeding the speed limit at "+ speedLimit
        + "km/hr."
    );

    console.log ("You have been fined $" + fineAmount + ".");
}
else {
    console.log("You were driving within the speed limit of " + speedLimit + "km/hr.");
}