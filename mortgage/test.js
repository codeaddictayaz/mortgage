const defaultText = document.getElementById("defaultText");
const calculationContainer = document.getElementById("calculationContainer");

document.querySelectorAll(".mortgageType").forEach((input) => {
  input.addEventListener("change", function () {
    document.querySelectorAll(".radioInput").forEach((div) => {
      div.classList.remove("selected");
    });
    if (this.checked) {
      this.parentElement.classList.add("selected");
    }
  });
});

document.getElementById("calculate-btn").addEventListener("click", () => {
  const amount = parseFloat(document.getElementById("mortgageAmount").value);
  const term = parseFloat(document.getElementById("mortgageTerm").value);
  const rate = parseFloat(document.getElementById("interestRate").value) / 100;
  const mortgageType = document.querySelector(
    'input[name="mortgageType"]:checked'
  ).value;
  let isValid = true;

  document.querySelectorAll(".formFlex").forEach((e) => {
    e.classList.remove("error");
  });

  if (isNaN(amount) || amount <= 0) {
    document.getElementById("amountAlert").style.display = "block";
    document.getElementById("mortgageAmountMain").classList.add("error");
    isValid = false;
  } else {
    document.getElementById("amountAlert").style.display = "none";
  }

  if (isNaN(term) || term <= 0) {
    document.getElementById("termAlert").style.display = "block";
    document.getElementById("mortgageTermMain").classList.add("error");
    isValid = false;
  } else {
    document.getElementById("termAlert").style.display = "none";
  }

  if (isNaN(rate) || rate <= 0) {
    document.getElementById("rateAlert").style.display = "block";
    document.getElementById("interestRateMain").classList.add("error");
    isValid = false;
  } else {
    document.getElementById("rateAlert").style.display = "none";
  }

  if (!mortgageType) {
    document.getElementById("typeAlert").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("typeAlert").style.display = "none";
  }

  if (isValid) {
    let monthlyPayment;
    if (mortgageType === "repayment") {
      const monthlyRate = rate / 12;
      const numberOfPayments = term * 12;
      monthlyPayment =
        (amount * monthlyRate) /
        (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
    } else if (mortgageType === "interestOnly") {
      monthlyPayment = (amount * rate) / 12;
    }

    const totalPayment = monthlyPayment * term * 12;

    document.getElementById("result").textContent = monthlyPayment.toFixed(2);
    document.getElementById("termResult").textContent = totalPayment.toFixed(2);

    defaultText.style.display = "none";
    calculationContainer.style.display = "block";
  }
});
