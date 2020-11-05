//lesson 5 - determines day of the week and tells to show the alert or not on fridays
var day = new Date();
var dayofweek = day.getDay();
  if (dayofweek == 5) {
  var show = document.querySelector("#saturdayAlert");
  show.style.display = "block";
//alert works
  //alert(dayofweek);
}
