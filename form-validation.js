const inputs = document.querySelectorAll("input, textarea");

// Add event listener to each input
inputs.forEach(input => {
    input.addEventListener("input", () => {
        if (input.checkValidity()) {
            input.classList.remove("error");
            input.classList.add("valid");
        } else {
            input.classList.remove("valid");
            input.classList.add("error");
        }
    });
});

document.getElementById('contact-form').addEventListener('submit', function (event) {
    // Prevent the form from submitting
    event.preventDefault(); 

    // Check if all inputs are valid
    let formIsValid = true;

    // Verify each input
    inputs.forEach(function (input) {
        if (!input.checkValidity()) {
            formIsValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });

    // If all inputs are valid, submit the form
    if (formIsValid) {
        console.log('Form Sent Successfully');
    }
});
