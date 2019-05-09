var tempFahr = prompt("Enter the Temperature");

var eventType = prompt("Enter the Event type");

if (tempFahr < 54) {
    var tempOutput = "a coat";
} else if (tempFahr >= 54 && tempFahr <= 70) {
    var tempOutput = "a jacket";
} else if (tempFahr > 70) {
    var tempOutput = "no jacket";
}

if (eventType == "casual") {
    var clothingOutput = "something comfy";
} else if (eventType == "semi-formal") {
    var clothingOutput = "a polo";
} else if (eventType == "formal") {
    var clothingOutput = "a suit";
}

var result = "Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear " + clothingOutput + " and " + tempOutput + ".";

console.log(result);
