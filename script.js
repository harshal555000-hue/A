// Dark / Light mode
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }
});


// Get Started button
function showMessage() {
    alert(
        "Welcome to CloudEngine! 🚀\n\n" +
        "Your cloud infrastructure dashboard is ready."
    );
}


// Service buttons
function serviceInfo(service) {

    let message = "";

    if (service === "Compute") {
        message = "Compute Service\n\n24 virtual machines are currently available.";
    }

    else if (service === "Cloud Storage") {
        message = "Cloud Storage\n\n68% of your allocated storage is currently being used.";
    }

    else if (service === "Database") {
        message = "Database Service\n\nAll cloud databases are currently operational.";
    }

    else if (service === "Monitoring") {
        message = "Monitoring\n\nSystem uptime is currently 92%.";
    }

    alert(message);
}


// Simple VM counter animation
let vmCount = document.getElementById("vmCount");
let count = 0;
let target = 24;

let counter = setInterval(() => {

    count++;

    vmCount.textContent = count;

    if (count >= target) {
        clearInterval(counter);
    }

}, 50);
