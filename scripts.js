
   document.addEventListener("DOMContentLoaded", function() {
    const buyButton = document.getElementById("buyButton");
    const tokenInput = document.getElementById("tokenInput");
    const verifyButton = document.getElementById("verifyButton");
    const downloadSection = document.getElementById("downloadSection");

    function generateToken() {
        return "TOKEN" + Math.floor(100000 + Math.random() * 900000);
    }

    if (buyButton) {
        buyButton.addEventListener("click", function() {
            let userToken = generateToken();
            localStorage.setItem("userToken", userToken);
            alert("Your unique token is: " + userToken + "\nPlease enter it to access the download.");
        });
    }

    if (verifyButton) {
        verifyButton.addEventListener("click", function() {
            let enteredToken = tokenInput.value;
            let storedToken = localStorage.getItem("userToken");
            if (enteredToken === storedToken) {
                alert("Token Verified! You can now download the book.");
                downloadSection.style.display = "block";
                localStorage.setItem("paymentVerified", "true");
            } else {
                alert("Invalid Token! Please enter the correct token.");
            }
        });
    }

    const countdownElement = document.getElementById("countdown");
    if (countdownElement) {
        let countdownTime = 744 * 60 * 60; // 24 hours in seconds
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

    // Check if the user has already verified payment
    const paymentVerified = localStorage.getItem("paymentVerified");
    if (paymentVerified) {
        downloadSection.style.display = "block";
    }
});
