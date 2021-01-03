const markaInput = document.getElementById('marka');
const errorMarka = document.getElementById('errorMarka');

function validateForm() {
	resetErrors([markaInput], [errorMarka], errorsSummary);
	let valid = true;
    if (!checkRequired(markaInput.value)) {
        valid = false;
        markaInput.classList.add("error-input");
        errorMarka.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(markaInput.value, 2, 20)) {
        valid = false;
        markaInput.classList.add("error-input");
        errorMarka.innerText = "Pole powinno zawierać od 2 do 20 znaków";
    }

    if (!valid) {
        errorsSummary.innerText = "Formularz zawiera błędy";
    }
    
    return valid;
 
}