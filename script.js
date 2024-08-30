function getNextAugust30() {
    const now = new Date();
    const year = now.getMonth() > 7 || (now.getMonth() === 7 && now.getDate() > 30) ? now.getFullYear() + 1 : now.getFullYear();
    return new Date(year, 7, 31); // August is month 7 (0-indexed)
}

function updateCountdown() {
    const now = new Date();
    
    // Check if the current date is 31st August
    if (now.getMonth() === 7 && now.getDate() === 31) { // August is month 7 (0-indexed)
        const canvas = document.getElementById('canvas');
        if (canvas) {
            canvas.style.display = 'block'; // Show the canvas
        }
        document.getElementById('countdown').style.display = 'none';
        document.getElementById('text1').innerHTML = "Happy birthday";
        document.getElementById('text2').innerHTML = "Lucy!";

        document.getElementById('container').style.backgroundImage = 'url("background1.jpeg")';
        
        return;
    } else {
        const canvas = document.getElementById('canvas');
        if (canvas) {
            canvas.style.display = 'none'; // Hide the canvas
        }
    }

    const targetDate = getNextAugust30();
    const diff = targetDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call to display immediately