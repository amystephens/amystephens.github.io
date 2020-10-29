function calcWindChill() {
    let t = parseFloat(document.getElementById('currenttemp').textContent); // current temp in F
    let s = parseFloat(document.getElementById("windspeed").textContent); // wind speed in mph
    let wc = "N/A";
    if (t <= 50 && s >= 3.0) {
        let calc = (35.74 + (.6215 * t)) - (35.75 * (Math.pow(s, .16))) + (.4275 * (t * (Math.pow(s, .16))));
        wc = Math.round(calc);
    }
    document.getElementById("windchill").innerHTML = wc;
} 