//shows last updated for footer
// document.getElementById("lastModified").textContent = document.lastModified;

//shows last updated for footer with day, number, month year - new format for Lesson 4
var options = {
    weekday: 'long', 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric',
}
document.getElementById('lastModified').textContent = new Date().toLocaleDateString('en-US', options);

//shows current year for copyright
document.getElementById("currentYear").textContent = new Date().getFullYear();

