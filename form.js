/** * User Data State 
 */
let formData = {
    name: "",
    email: "",
    status: "Active", // Defaulting to Active
    gender: "Male" // Defaulting to Male
};

// Element Selectors
const myFormEl = document.getElementById('myForm');
const nameEl = document.getElementById('name');
const emailEl = document.getElementById('email');
const statusEl = document.getElementById('status');
const nameErrMsg = document.getElementById('nameErrMsg');
const emailErrMsg = document.getElementById('emailErrMsg');
const genderRadios = document.querySelectorAll('input[name="gender"]');

/**
 * Validation Helpers
 */
const validateField = (value, errorElement) => {
    if (value.trim() === "") {
        errorElement.textContent = "*Required";
        return false;
    } else {
        errorElement.textContent = "";
        return true;
    }
};

/**
 * Event Listeners
 */

// Name Input
nameEl.addEventListener("blur", (event) => {
    validateField(event.target.value, nameErrMsg);
    formData.name = event.target.value;
});

// Email Input
emailEl.addEventListener("blur", (event) => {
    validateField(event.target.value, emailErrMsg);
    formData.email = event.target.value;
});

// Working Status Dropdown
statusEl.addEventListener("change", (event) => {
    formData.status = event.target.value;
});

// Gender Selection (Handles both Male and Female chips)
genderRadios.forEach(radio => {
    radio.addEventListener("change", (event) => {
        formData.gender = event.target.value;
    });
});

/**
 * Form Submission
 */
myFormEl.addEventListener("submit", function(event) {
    event.preventDefault();

    // Final validation check before "submitting"
    const isNameValid = validateField(nameEl.value, nameErrMsg);
    const isEmailValid = validateField(emailEl.value, emailErrMsg);

    if (isNameValid && isEmailValid) {
        console.log("Success! Form Data Captured:", formData);

        // Optional: Visual feedback for the user
        const submitBtn = document.querySelector('.glow-btn span');
        const originalText = submitBtn.textContent;

        submitBtn.textContent = "User Created! ✓";
        setTimeout(() => {
            submitBtn.textContent = originalText;
            myFormEl.reset(); // Clear the form
        }, 2000);
    } else {
        console.warn("Validation failed. Please check the inputs.");
    }
});