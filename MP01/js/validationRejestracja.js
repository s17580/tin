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
    } else if (!checkTextLengthRange(usernameInput.value, 2, 20)) {
      valid = false;
      usernameInput.classList.add("error-input");
      errorUsername.innerText = "Pole powinno zawierać od 2 do 15 znaków";
	}
	// if (!checkRequired(typInput.value)) {
	// 	valid = false;
	// 	typInput.classList.add("error-input");
	// 	errorTyp.innerText = "Pole jest wymagane";
	//   } else if (!checkTextLengthRange(typInput.value, 2, 15)) {
	// 	valid = false;
	// 	typInput.classList.add("error-input");
	// 	errorTyp.innerText = "Pole powinno zawierać od 2 do 15 znaków";
	//   }
	//   if (!checkRequired(numerRejestracyjnyInput.value)) {
	// 	valid = false;
	// 	numerRejestracyjnyInput.classList.add("error-input");
	// 	errorNumerRejestracyjny.innerText = "Pole jest wymagane";
	//   } else if (!checkTextLengthRange(numerRejestracyjnyInput.value, 2, 15)) {
	// 	valid = false;
	// 	numerRejestracyjnyInput.classList.add("error-input");
	// 	errorNumerRejestracyjny.innerText = "Pole powinno zawierać od 2 do 15 znaków";
	//   }
	//   if (!checkRequired(rokProdukcjiInput.value)) {
	// 	valid = false;
	// 	rokProdukcjiInput.classList.add("error-input");
	// 	errorRokProdukcji.innerText = "Pole jest wymagane";
	//   } else if (!checkTextLengthRange(rokProdukcjiInput.value, 4, 4)) {
	// 	valid = false;
	// 	rokProdukcjiInput.classList.add("error-input");
	// 	errorRokProdukcji.innerText = "Pole musi zawierać liczbę 4 cyfrową z przedziału 1900-2080";
	//   }
	//   if (!checkRequired(pojemnoscInput.value)) {
	// 	valid = false;
	// 	pojemnoscInput.classList.add("error-input");
	// 	errorPojemnosc.innerText = "Pole jest wymagane";
	//   } else if (!checkTextLengthRange(pojemnoscInput.value, 2, 4)) {
	// 	valid = false;
	// 	pojemnoscInput.classList.add("error-input");
	// 	errorPojemnosc.innerText = "Pole musi zawierać liczbę od 2 do 4 cyfr z przedziału 50-7000";
	//   }

    if (!valid) {
      errorsSummary.innerText = "Formularz zawiera błędy";
    }

    return valid;
  }
