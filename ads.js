// ads.js
async function loadAds() {
    try {
        const response = await fetch('ads.json');
        const ads = await response.json();
        const adContainer = document.getElementById('ad-container');

        // Select a random ad
        const randomAd = ads[Math.floor(Math.random() * ads.length)];
        adContainer.innerHTML = `
            <div class="advertisement">
                <h3>${randomAd.title}</h3>
                <p>${randomAd.content}</p>
            </div>
        `;
    } catch (error) {
        console.error('Error loading ads:', error);
    }
}

document.addEventListener('DOMContentLoaded', loadAds);
