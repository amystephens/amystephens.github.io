function windChill() {
    let t = parseInt(document.getElementById("hightemp").textContent); //air average/high temp in F
    let s = parseInt(document.getElementById("windspeed").textContent); // wind speed in mph
}

if (t <= 50 && s >= 3.0) {
   return windchill = Math.round(35.74 + (.6215 * t) - (35.75 * (Math.pow(s,.16))) + (.4275 * t * (Math.pow(s, .16))));
}
else {
    windchill = "NA";
}
document.getElementById("windchill").textContent = windchill;

// Old One
<script type="text/javascript">
//input: get a temp and wind speed from the text fields in html
function compute() {
    temp1 = parseInt(document.getElementById("tempIn").value);
    speed1 = parseInt(document.getElementById("windIn").value);
    //processing: call the second function and store value in this function's variable
    windyChill = windChill(temp1, speed1);
    //output: output the value to the div
    document.getElementById("output").innerHTML = "It feels like " + windyChill + "° F.";
}


function windChill(tempF, speed) {
//input: take the values from function compute()
t = tempF;
s = speed;
//processing: compute the wind chill factor
windChillFactor = Math.round(35.74 + (.6215 * t) - (35.75 * (Math.pow(s,.16))) + (.4275 * t * (Math.pow(s, .16))));
//output: return the value to the windyChill variable in the function compute()
return windChillFactor;
}

</script>