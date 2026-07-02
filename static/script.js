document.getElementById("loginForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    console.log("Sending:", username, password); // debug

    try {
        const res = await fetch("http://127.0.0.1:5000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        });

        const data = await res.json();

        console.log("Response:", data); // debug

       if (data.success) {
    window.location.href = "/dashboard";
} else {
    alert("Invalid Credentials");
}

    } catch (error) {
        console.error("Error:", error);
        alert("Server error");
    }
});