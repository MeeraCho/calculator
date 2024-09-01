const calculateBtn = document.getElementById('calculateBtn');
const results = document.getElementById('results');

//when the btn clicked, get results after validation
calculateBtn.addEventListener('click', (e) => {
    e.preventDefault();

    // Get input values 
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value / 100);
    const loanTerm = parseInt(document.getElementById('loanTerm').value);

    // Validation checks
    if (loanAmount <= 0) {
        alert("Loan amount must be greater than 0.");
        return;
    }

    if (interestRate <= 0 || interestRate > 100) {
        alert("Interest rate must be between 0 and 100.");
        return;
    }

    if (loanTerm <= 0 || loanTerm > 35) {
        alert("Loan term must be between 1 and 35 years.");
        return;
    }
    
    // Calculate monthly interest rate and total number of payments 
    const monthlyInterestRate = interestRate / 12; 
    const numberOfPayments = loanTerm * 12;

    // Calculate monthly payment 
    const monthlyPayment = (((loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1))).toFixed(2); 
    // const monthlyPayment = ((loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1)).toFixed(2);
    // Calculate monthly interest rate and total number of payments
    const totalPayment = (monthlyPayment * numberOfPayments).toFixed(2);
    const totalInterest = (totalPayment - loanAmount).toFixed(2);

    // Create result HTML
    const resultEls = `
        <div class="results">
            <h2>Results: </h2>
            <p>Monthly Payment: <span id="monthlyPayment">${monthlyPayment}</span></p>
            <p>Total Payment: <span id="totalPayment">${totalPayment}</span></p>
            <p>Total Interest: <span id="totalInterest">${totalInterest}</span></p>
        </div>
    `;

    results.innerHTML = resultEls
});

