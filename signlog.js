const output = document.getElementById("output");

function validateSignInForm(event) {

    event.preventDefault();

    let form = document.forms["myForm"]; // Get form reference
    let username = form["username"].value.trim();
    let email = form["email"].value.trim();
    let password = form["password"].value.trim();

    if (username === "") {
        output.innerHTML = "Please put your username";
        return;
    }

    if (email === "") {
        output.innerHTML = "Please insert your email address";
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple regex for email validation

    if (!emailPattern.test(email)) {
        output.innerHTML = "Please enter a valid email address";
        return;
    }

    if (password === "") {
        output.innerHTML = "Please insert your password";
        return;
    }

    if (password.length < 6) {
        output.innerHTML = "Password must be at least 6 characters long";
        return;
    }

    // If form is valid, redirect
    window.location.href = "Login.html";
}

function validateLoginForm(event) {
    event.preventDefault(); // Prevent form submission

    let form = document.forms["loginForm"]; // Login form reference
    let username = form["username"].value.trim();
    let password = form["password"].value.trim();

    if (username === "") {
        output.innerHTML = "Please enter your username";
        return;
    }

    if (password === "") {
        output.innerHTML = "Please enter your password";
        return;
    }

    if (password.length < 6) {
        output.innerHTML = "Password must be at least 6 characters long";
        return;
    }
      // If form is valid, redirect
      window.location.href = "account.html";
}

    document.addEventListener("DOMContentLoaded", function () {
        let signInForm = document.getElementById("myForm");
        let loginForm = document.getElementById("loginForm");
    
        if (signInForm) {
            signInForm.addEventListener("submit", validateSignInForm);
        }
    
        if (loginForm) {
            loginForm.addEventListener("submit", validateLoginForm);
        }
    });