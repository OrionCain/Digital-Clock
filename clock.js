// Function to display the current time in a 12-hour format
function digiClock() {
  // Create a new Date object to get the current date and time
  let time = new Date();

  // Get hours, minutes, and seconds from the Date object
  let hour = time.getHours(); // Variable for the hour
  let minutes = time.getMinutes(); // Variable for the minutes
  let seconds = time.getSeconds(); // Variable for the seconds

  // Function to determine AM/PM and adjust the hour to a 12-hour format
  let determineAmPm = (hours) => {
    let amPm; // Variable to hold AM or PM
    let displayHour = hours % 12; // Convert hours to 12-hour format

    if (displayHour === 0) {
      displayHour = 12; // Midnight should be displayed as 12 AM
    }

    amPm = hours >= 12 ? "PM" : "AM"; // Determine AM/PM using a ternary operator

    // Return the adjusted hour and AM/PM variables
    return { displayHour, amPm };
  };

  // Call determineAmPm with the current hour and destructure the result
  let { displayHour, amPm } = determineAmPm(hour);

  // Ensure minutes and seconds have 2 digits using a ternary operator
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  // Variables for the clock display
  let timeDisplay = `${displayHour}:${minutes}:${seconds}`;
  let amPmDisplay = `${amPm}`;

  // Update the content of the clock display element with the formatted time
  document.getElementById("ClockDisplay").innerText = timeDisplay;
  document.getElementById("AmPmDisplay").innerText = amPmDisplay;
}

digiClock(); // Call the digiClock function
setInterval(digiClock, 1000); // Set an interval to call digiClock again every second
