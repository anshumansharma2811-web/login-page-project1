function togglePassword() {
    const pass = document.getElementById("password");
    pass.type = pass.type === "password" ? "text" : "password";
}

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const loader = document.getElementById("loader");
    const btnText = document.getElementById("btnText");
    const message = document.getElementById("message");

    // Show loader
    loader.style.display = "block";
    btnText.style.display = "none";

    fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
    .then(res => res.json())
    .then(data => {
        loader.style.display = "none";
        btnText.style.display = "inline";

        if (data.success) {
            window.location.href = "dashboard.html";
        } else {
            message.innerText = "Invalid Credentials!";
            message.style.color = "red";
        }
    })
    .catch(err => {
        loader.style.display = "none";
        btnText.style.display = "inline";
        message.innerText = "Server Error!";
    });
}