//shows last updated for footer
// document.getElementById("lastModified").textContent = document.lastModified;

//shows last updated for footer with day, number, month year - new format for Lesson 4 - use en-GB to get the date before the month
const options = {
    weekday: 'long', 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric',
};

document.getElementById('currentDate').textContent = new Date().toLocaleDateString('en-GB', options);

//shows current year for copyright
document.getElementById("currentYear").textContent = new Date().getFullYear();

//function showhide() {
//    var d = new Date();
//    var s = document.getElementById(+d.getDay());
//    s.style.display = (s.style.display == 'block') ? 'none' : 'block';
//  }
//
//  function showhide {
//    var = currentDate,
//    if currentDate = "Friday"
//    then display
//  }