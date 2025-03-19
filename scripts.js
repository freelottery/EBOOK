// scripts.js
function purchaseTicket(price) {
    const ticketNumber = Math.floor(100000 + Math.random() * 900000);
    alert(`Ticket purchased successfully! Your ticket number is: ${ticketNumber}`);
    generateTicketPDF(ticketNumber);
}

function generateTicketPDF(ticketNumber) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.text(`Premium Lottery Ticket`, 20, 20);
    doc.text(`Ticket Number: ${ticketNumber}`, 20, 40);
    doc.text(`Thank you for purchasing!`, 20, 60);
    doc.save(`Lottery_Ticket_${ticketNumber}.pdf`);
    alert('Your ticket PDF has been downloaded!');
    downloadEbook();
}

function downloadEbook() {
    const link = document.createElement("a");
    link.href = "ebook.pdf"; // Replace with the actual ebook file path
    link.download = "Winning_Strategies_Ebook.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    alert('Ebook has been downloaded!');
}

// Countdown Timer
let countdownDays = 10;
function updateCountdown() {
    document.getElementById("countdown").innerText = countdownDays;
    if (countdownDays > 0) {
        countdownDays--;
        setTimeout(updateCountdown, 86400000); // Update every 24 hours
    }
}
updateCountdown();

