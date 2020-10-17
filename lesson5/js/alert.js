//lesson 5 - determines day of the week and tells to show the alert or not on fridays

function showFridays () {
    var day = new Date;
    if (day.getDay() == 6) {
        document.querySelector('#saturdayAlert').style.display = "block";
    }
}
