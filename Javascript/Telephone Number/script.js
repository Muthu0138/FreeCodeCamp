function isValidUSPhoneNumber(phone) {
    const phoneRegex = /^1? ?(\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}$/;
    return phoneRegex.test(phone);
}

document.getElementById('check-btn').addEventListener('click', () => {
    const userInput = document.getElementById('user-input').value.trim();
    const resultsDiv = document.getElementById('results-div');

    if (!userInput) {
        alert("Please provide a phone number");
        return;
    }

    const isValid = isValidUSPhoneNumber(userInput);
    const resultText = `${isValid ? "Valid" : "Invalid"} US number: ${userInput}`;
    resultsDiv.textContent = resultText;
});

document.getElementById('clear-btn').addEventListener('click', () => {
    document.getElementById('results-div').textContent = '';
});



