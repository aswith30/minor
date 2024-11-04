// script.js

// Function to change language
function changeLanguage(language) {
    document.querySelectorAll('[data-en]').forEach(element => {
        element.innerHTML = element.getAttribute(`data-${language}`);
    });
}

// Function to display ads
function displayAds() {
    const now = new Date();
    const adContainer = document.getElementById('ad-container');
    adContainer.innerHTML = '';

    busData.forEach(bus => {
        const busArrival = new Date(bus.arrival_time);
        if ((busArrival - now) / (1000 * 60) <= 10) { // Check if bus is arriving within the next 10 minutes
            ads.forEach(ad => {
                const adDiv = document.createElement('div');
                adDiv.innerHTML = ad.content;
                adContainer.appendChild(adDiv);
            });
        }
    });
}

// Function to handle ticket booking
document.getElementById('ticket-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const source = document.getElementById('source').value;
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    const confirmationDiv = document.getElementById('booking-confirmation');
    confirmationDiv.innerHTML = `Ticket booked from ${source} to ${destination} on ${date} at ${time}.`;
});

// Function to handle emergency transport request
document.getElementById('emergency-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const location = document.getElementById('location').value;

    alert(`Emergency transport requested at ${location}. Our team will reach you shortly.`);
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    const defaultLanguage = 'en';
    changeLanguage(defaultLanguage);
    displayAds();
    setInterval(displayAds, 60000); // Update ads every minute
});
// script.js

function changeLanguage(lang) {
    document.querySelectorAll('[data-en]').forEach(el => {
        el.textContent = el.getAttribute(`data-${lang}`);
    });
}

function trackBus() {
    const busNumber = document.getElementById('bus-number').value;
    if (busNumber) {
        alert(`Tracking information for bus number or route: ${busNumber}`);
    } else {
        alert('Please enter a bus number or route.');
    }
}

