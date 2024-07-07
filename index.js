// const defaultText = document.getElementById("defaultText");
// const calculationContainer = document.getElementById("calculationContainer");
// document.querySelectorAll(".mortgageType").forEach((input) =>
//   input.addEventListener("change", function () {
//     document.querySelectorAll(".radioInput").forEach((div) => {
//       div.classList.remove("selected");
//     });
//     if (this.checked) {
//       this.parentElement.classList.add("selected");
//     }
//   })
// );
// document.getElementById("calculate-btn").addEventListener("click", () => {
//   const amount = parseFloat(document.getElementById("mortgageAmount").value);
//   const term = parseFloat(document.getElementById("mortgageTerm").value);
//   const rate = parseFloat(document.getElementById("interestRate").value) / 100;
//   const mortgageType = document.querySelector(
//     'input[name="mortgageType"]:checked'
//   );
//   let isValid = true;
//   document.querySelectorAll(".formFlex").forEach((e) => {
//     e.classList.remove("error");
//   });
//   if (isNaN(amount) || amount <= 0) {
//     document.getElementById("amountAlert").style.display = "block";
//     document.getElementById("mortgageAmountMain").classList.add("error");
//     isValid = false;
//   } else {
//     document.getElementById("amountAlert").style.display = "none";
//   }

//   if (isNaN(term) || term <= 0) {
//     document.getElementById("amountAlert").style.display = "block";
//     document.getElementById("mortgageAmountMain").classList.add("error");
//     isValid = false;
//   } else {
//     document.getElementById("typeAlert").style.display = "none";
//     document.querySelectorAll(".radioInput").forEach((e) => {
//       e.classList.remove("error");
//     });
//   }
//   if (isValid) {
//     let monthlyPayment = 0;
//     let totalRepayment = 0;
//     defaultText.classList.add("hide");
//     calculationContainer.classList.add("show");
//     if (mortgageType.value === "repayment") {
//       const monthlyRate = rate / 12;
//       const n = term * 12;
//       monthlyPayment =
//         (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -n));
//       totalRepayment = monthlyPayment * n;
//     } else if (mortgageType.value === "interestOnly") {
//       monthlyPayment = (amount * rate) / 12;
//       totalRepayment = monthlyPayment * term * 12;
//     }
//     document.getElementById("result").innerText = `$${monthlyPayment.toFixed(
//       2
//     )}`;
//     document.getElementById(
//       "termResult"
//     ).innerText = `$${totalRepayment.toFixed(2)}`;
//   } else {
//     document.getElementById("result").innerText = "";
//     document.getElementById("termResult").innerText = "";
//     defaultText.classList.remove("hide");
//     calculationContainer.classList.remove("show");
//   }
// });
// document.getElementById("clearBtn").addEventListener("click", () => {
//   document.getElementById("mortgageForm").reset();
//   document.getElementById("result").innerText = "";
//   document.getElementById("termResult").innerText = "";
//   document.querySelectorAll("formAlert").forEach((alert) => {
//     alert.style.display = "none";
//   });
//   defaultText.classList.remove("hide");
//   calculationContainer.classList.remove("show");

//   document.querySelectorAll(".radioInput").forEach((div) => {
//     div.classList.remove("selected");
//   });

//   document.querySelectorAll(".formFlex").forEach((el) => {
//     el.classList.remove("error");
//   });
// });

// document.querySelectorAll(".formAlert").forEach((alert) => {
//   alert.style.display = "none";
// });
const defaultText = document.getElementById("defaultText");
const calculationContainer = document.getElementById("calculationContainer");

document.querySelectorAll(".mortgageType").forEach((input) =>
  input.addEventListener("change", function () {
    document.querySelectorAll(".radioInput").forEach((div) => {
      div.classList.remove("selected");
    });
    if (this.checked) {
      this.parentElement.classList.add("selected");
    }
  })
);

document.getElementById("calculate-btn").addEventListener("click", () => {
  const amount = parseFloat(document.getElementById("mortgageAmount").value);
  const term = parseFloat(document.getElementById("mortgageTerm").value);
  const rate = parseFloat(document.getElementById("interestRate").value) / 100;
  const mortgageType = document.querySelector(
    'input[name="mortgageType"]:checked'
  );
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
    document.getElementById("itemAlert").style.display = "block";
    document.getElementById("mortgageTermMain").classList.add("error");
    isValid = false;
  } else {
    document.getElementById("itemAlert").style.display = "none";
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
    document.querySelectorAll(".radioInput").forEach((div) => {
      div.classList.add("error");
    });
    isValid = false;
  } else {
    document.getElementById("typeAlert").style.display = "none";
    document.querySelectorAll(".radioInput").forEach((div) => {
      div.classList.remove("error");
    });
  }

  if (isValid) {
    let monthlyPayment = 0;
    let totalRepayment = 0;
    defaultText.classList.add("hide");
    calculationContainer.classList.add("show");

    if (mortgageType.value === "repayment") {
      const monthlyRate = rate / 12;
      const n = term * 12;
      monthlyPayment =
        (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -n));
      totalRepayment = monthlyPayment * n;
    } else if (mortgageType.value === "interestOnly") {
      monthlyPayment = (amount * rate) / 12;
      totalRepayment = monthlyPayment * term * 12;
    }

    document.getElementById("result").innerText = `$${monthlyPayment.toFixed(
      2
    )}`;
    document.getElementById(
      "termResult"
    ).innerText = `$${totalRepayment.toFixed(2)}`;
  } else {
    document.getElementById("result").innerText = "";
    document.getElementById("termResult").innerText = "";
    defaultText.classList.remove("hide");
    calculationContainer.classList.remove("show");
  }
});

document.getElementById("clearBtn").addEventListener("click", () => {
  document.getElementById("mortgageForm").reset();
  document.getElementById("result").innerText = "";
  document.getElementById("termResult").innerText = "";
  document.querySelectorAll(".formAlert").forEach((alert) => {
    alert.style.display = "none";
  });
  defaultText.classList.remove("hide");
  calculationContainer.classList.remove("show");

  document.querySelectorAll(".radioInput").forEach((div) => {
    div.classList.remove("selected");
  });

  document.querySelectorAll(".formFlex").forEach((el) => {
    el.classList.remove("error");
  });
});

document.querySelectorAll(".formAlert").forEach((alert) => {
  alert.style.display = "none";
});
