function validateFullName() {
    const fullName = document.getElementById("full-name").value;
    const fullNameError = document.getElementById("full-name-error");
    const fullNamePattern = /^[A-Za-z\s]{3,}$/;

    if (fullNamePattern.test(fullName)) {
        fullNameError.textContent = "";
        return true;
    } else {
        fullNameError.textContent = "Full name must contain at least 3 alphabetic characters and spaces only.";
        return false;
    }
}

function validateEmail() {
    const email = document.getElementById("email").value;
    const emailError = document.getElementById("email-error");
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (emailPattern.test(email)) {
        emailError.textContent = "";
        return true;
    } else {
        emailError.textContent = "Invalid email format.";
        return false;
    }
}

function validatePassword() {
    const password = document.getElementById("password").value;
    const passwordError = document.getElementById("password-error");
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

    if (passwordPattern.test(password)) {
        passwordError.textContent = "";
        return true;
    } else {
        passwordError.textContent = "Password must be at least 8 characters long and contain letters and numbers.";
        return false;
    }
}

function validateConfirmPassword() {
    const confirmPassword = document.getElementById("confirm-password").value;
    const password = document.getElementById("password").value;
    const confirmPasswordError = document.getElementById("confirm-password-error");

    if (confirmPassword === password) {
        confirmPasswordError.textContent = "";
        return true;
    } else {
        confirmPasswordError.textContent = "Passwords do not match.";
        return false;
    }
}

function calculateAge() {
    const dob = document.getElementById("dob").value;
    const ageError = document.getElementById("age-error");
    const dobDate = new Date(dob);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - dobDate.getFullYear();

    if (currentDate.getMonth() < dobDate.getMonth() || (currentDate.getMonth() === dobDate.getMonth() && currentDate.getDate() < dobDate.getDate())) {
        age--;
    }

    if (age < 18) {
        ageError.textContent = "You must be at least 18 years old.";
        return false;
    } else {
        ageError.textContent = "";
        return true;
    }
}

function validateForm(event) {
    const isValidFullName = validateFullName();
    const isValidEmail = validateEmail();
    const isValidPassword = validatePassword();
    const isValidConfirmPassword = validateConfirmPassword();
    const isValidAge = calculateAge();

    if (!(isValidFullName && isValidEmail && isValidPassword && isValidConfirmPassword && isValidAge)) {
        event.preventDefault();
    }
}

document.getElementById("full-name").addEventListener("input", validateFullName);
document.getElementById("email").addEventListener("input", validateEmail);
document.getElementById("password").addEventListener("input", validatePassword);
document.getElementById("confirm-password").addEventListener("input", validateConfirmPassword);
document.getElementById("dob").addEventListener("input", calculateAge);

document.getElementById("registration-form").addEventListener("submit", validateForm);



