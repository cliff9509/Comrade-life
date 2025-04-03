function showMessage(message, type = "success") {
    let messageBox = document.getElementById("messageBox");
    messageBox.textContent = message;
    messageBox.className = "message-box " + (type === "error" ? "error" : "");
    messageBox.style.display = "block";

    setTimeout(() => { messageBox.style.display = "none"; }, 3000);
}

function sendResetLink() {
    let email = document.getElementById("email").value;
    if(email) {
        showMessage("A reset link has been sent to " + email);
        document.getElementById("emailForm").classList.add("hidden");
        document.getElementById("resetForm").classList.remove("hidden");
    } else {
        showMessage("Please enter a valid email.", "error");
    }
}

function resetPassword() {
    let newPassword = document.getElementById("newPassword").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (newPassword.length < 6) {
        showMessage("Password must be at least 6 characters long.", "error");
        return;
    }
    if (newPassword !== confirmPassword) {
        showMessage("Passwords do not match.", "error");
        return;
    }

    showMessage("Your password has been successfully reset!");
    setTimeout(() => { window.location.reload(); }, 2000);
}