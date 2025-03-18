document.addEventListener("DOMContentLoaded", function() {
    const buyButton = document.getElementById("buyButton");
    if (buyButton) {
        buyButton.addEventListener("click", function() {
            window.location.href = "";
        });
    }

    const countdownElement = document.getElementById("countdown");
    if (countdownElement) {
        let countdownTime = 744 * 60 * 60; // 744 hours in seconds
        function updateCountdown() {
            let hours = Math.floor(countdownTime / 3600);
            let minutes = Math.floor((countdownTime % 3600) / 60);
            let seconds = countdownTime % 60;
            countdownElement.innerText = `${hours}h ${minutes}m ${seconds}s`;
            if (countdownTime > 0) {
                countdownTime--;
                setTimeout(updateCountdown, 1000);
            } else {
                countdownElement.innerText = "Lottery Ended";
            }
        }
        updateCountdown();
    }
});
