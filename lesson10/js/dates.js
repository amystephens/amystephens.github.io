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


