function signup() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (!username || !password) {
        message.innerText = "Please enter both username and password.";
        message.style.color = "red";
        return;
    }

    const payload = {
        name: username,
        pswd: password
    };

    fetch("http://localhost:8080/user/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            message.innerText = "Sign-up successful! Redirecting to login...";
            message.style.color = "green";

            // Redirect to login page after 2 seconds
            setTimeout(() => {
                window.location.href = "login.html";
            }, 2000);
        } else {
            message.innerText = data.message; // Show error message from backend
            message.style.color = "red";
        }
    })
    .catch(error => {
        console.error("Error:", error);
        message.innerText = "An error occurred. Try again.";
        message.style.color = "red";
    });
}
