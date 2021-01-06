const usernameInput = document.getElementById("username");
const errorUsername = document.getElementById("errorUsername");
// const typInput = document.getElementById("typ");
// const errorTyp = document.getElementById("errorTyp");


const errorsSummary = document.getElementById("errorsSummary");

function validateForm() {

    resetErrors([usernameInput],[errorUsername], errorsSummary);
    let valid = true;
    if (!checkRequired(usernameInput.value)) {
      valid = false;
      usernameInput.classList.add("error-input");
      errorUsername.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(usernameInput.value, 2, 15)) {
      valid = false;
      usernameInput.classList.add("error-input");
      errorUsername.innerText = "Pole powinno zawierać od 2 do 15 znaków";
	}
	

    if (!valid) {
      errorsSummary.innerText = "Formularz zawiera błędy";
    }

    return valid;
  }
