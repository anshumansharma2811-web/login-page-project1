// =======================================
// PAGE LOAD ANIMATION
// =======================================

window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

// =======================================
// LOGOUT
// =======================================

function logout() {
    if (confirm("Are you sure you want to logout?")) {
        window.location.href = "/";
    }
}

// =======================================
// COUNT-UP ANIMATION
// =======================================

function animateCounter(id, end, prefix = "", suffix = "") {

    let current = 0;

    const element = document.getElementById(id);

    const increment = Math.max(1, Math.ceil(end / 100));

    const timer = setInterval(() => {

        current += increment;

        if (current >= end) {
            current = end;
            clearInterval(timer);
        }

        element.innerHTML = prefix + current.toLocaleString() + suffix;

    }, 20);

}

window.onload = () => {

    animateCounter("users", 1245);

    animateCounter("revenue", 12500, "$");

    animateCounter("orders", 583);

    animateCounter("visitors", 18000);

};

// =======================================
// CARD HOVER EFFECT
// =======================================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        card.style.background =
            `radial-gradient(circle at ${x}px ${y}px,
            rgba(56,189,248,.25),
            rgba(255,255,255,.08))`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background = "rgba(255,255,255,.08)";

    });

});

// =======================================
// SEARCH BOX
// =======================================

const search = document.querySelector(".search input");

search.addEventListener("keyup", () => {

    console.log("Searching:", search.value);

});

// =======================================
// SIDEBAR ACTIVE MENU
// =======================================

const menuItems = document.querySelectorAll(".sidebar ul li");

menuItems.forEach(item => {

    item.addEventListener("click", () => {

        menuItems.forEach(i => i.classList.remove("active"));

        item.classList.add("active");

    });

});

// =======================================
// TABLE ROW HIGHLIGHT
// =======================================

const rows = document.querySelectorAll("tbody tr");

rows.forEach(row => {

    row.addEventListener("mouseenter", () => {

        row.style.transform = "scale(1.02)";

    });

    row.addEventListener("mouseleave", () => {

        row.style.transform = "scale(1)";

    });

});

// =======================================
// RIPPLE EFFECT
// =======================================

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

    button.addEventListener("click", function(e) {

        const circle = document.createElement("span");

        const diameter = Math.max(button.clientWidth, button.clientHeight);

        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;

        circle.style.left = `${e.clientX - button.offsetLeft - radius}px`;

        circle.style.top = `${e.clientY - button.offsetTop - radius}px`;

        circle.classList.add("ripple");

        const ripple = button.getElementsByClassName("ripple")[0];

        if (ripple) {

            ripple.remove();

        }

        button.appendChild(circle);

    });

});

// =======================================
// LIVE CLOCK
// =======================================

const clock = document.createElement("div");

clock.style.position = "fixed";
clock.style.bottom = "20px";
clock.style.right = "20px";
clock.style.padding = "10px 18px";
clock.style.borderRadius = "12px";
clock.style.background = "rgba(255,255,255,.08)";
clock.style.backdropFilter = "blur(15px)";
clock.style.fontWeight = "600";
clock.style.color = "#fff";
clock.style.boxShadow = "0 0 20px rgba(0,0,0,.3)";

document.body.appendChild(clock);

setInterval(() => {

    const now = new Date();

    clock.innerHTML = now.toLocaleTimeString();

}, 1000);

// =======================================
// GREETING
// =======================================

const heading = document.querySelector(".topbar h1");

const hour = new Date().getHours();

if (hour < 12)
    heading.innerHTML = "☀️ Good Morning";

else if (hour < 18)
    heading.innerHTML = "🌤 Good Afternoon";

else
    heading.innerHTML = "🌙 Good Evening";

// =======================================
// PROFILE IMAGE ROTATION
// =======================================

const profile = document.querySelector(".profile img");

profile.addEventListener("click", () => {

    profile.style.transform = "rotate(360deg)";

    setTimeout(() => {

        profile.style.transform = "";

    }, 600);

});

// =======================================
// WELCOME MESSAGE
// =======================================

setTimeout(() => {

    console.log("Welcome to the Dashboard!");

}, 1000);