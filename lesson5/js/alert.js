var day = new Date();
var dayofweek = day.getDay();
  if (dayofweek == 2) {
  var show = document.querySelector("#saturdayAlert");
  show.style.display = "block";
//alert works
  //alert(dayofweek);
}