// All messages that will scroll one-by-one
const messages = [
    "🔴 Registration Open — Limited Seats!",
    "📢 Conference Date: 25-26 September 2026, Bihar",
    "🌐 Venue: BCE Campus"
];

let index = 0;  
const announcement = document.getElementById("announcementText");

function updateAnnouncement() {
    // Change text
    announcement.textContent = messages[index];

    // Restart scrolling animation
    announcement.style.animation = "none";
    void announcement.offsetWidth;  
    announcement.style.animation = "scroll-left 12s linear infinite";

    // Go to next text
    index = (index + 1) % messages.length;
}

// Run the function every 5 seconds
setInterval(updateAnnouncement, 5000);



// Set the date and time for the countdown: May 21, 2026
// Note: Month is 0-indexed in JavaScript Date (0 = Jan, 3 = April)
// Time is set to 00:00:00 (midnight) by default if not specified, 
// but it's best to be explicit.

// Target date: "April 17, 2026 00:00:00"
const targetDate = new Date("September 25, 2026 00:00:00").getTime();

// Helper function to add a leading zero if the number is less than 10
function formatTime(t) {
    return t < 10 ? "0" + t : t;
}

// Update the countdown every 1 second
const x = setInterval(function() {
    // Get current date and time
    const now = new Date().getTime();

    // Find the distance between now and the target date
    const distance = targetDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the corresponding HTML elements
    document.getElementById("days").innerHTML = formatTime(days);
    document.getElementById("hours").innerHTML = formatTime(hours);
    document.getElementById("minutes").innerHTML = formatTime(minutes);
    document.getElementById("seconds").innerHTML = formatTime(seconds);

    // If the countdown is finished, write some text and stop the timer
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown-timer").style.display = "none";
        document.getElementById("timer-title").style.display = "none";
        document.getElementById("timer-message").innerHTML = "🎉 The Event Has Begun! 🎉";
        document.getElementById("countdown-container").style.backgroundColor = "#2ecc71"; // Change background color
    }
}, 1000); // 1000 milliseconds = 1 second
// ------------ Toggle Menu ------------
function toggleMenu() {
  const nav = document.querySelector("nav ul");
  nav.classList.toggle("show");
}
