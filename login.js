function login() {
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

    fetch("http://localhost:8080/user/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            message.innerText = "Login successful! Redirecting...";
            message.style.color = "green";

            setTimeout(() => {
                window.location.href = "welcome.html"; 
            }, 2000);
        } else {
            message.innerText = data.message; 
            message.style.color = "red";
        }
    })
    .catch(error => {
        console.error("Error:", error);
        message.innerText = "An error occurred. Try again.";
        message.style.color = "red";
    });
}
