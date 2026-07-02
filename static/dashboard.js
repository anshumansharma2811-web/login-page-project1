// ============================================
// MODERN DASHBOARD JS
// Part 1
// ============================================

// Wait until the page is fully loaded
window.addEventListener("DOMContentLoaded", () => {

    initializeDashboard();

});

// ============================================
// INITIALIZE DASHBOARD
// ============================================

function initializeDashboard(){

    setGreeting();

    animateCounters();

    setupSidebar();

    setupSearch();

    setupCards();

    setupProfile();

    startClock();

}

// ============================================
// LOGOUT
// ============================================

function logout(){

    const confirmLogout = confirm("Are you sure you want to logout?");

    if(confirmLogout){

        window.location.href="/";

    }

}

// ============================================
// GREETING
// ============================================

function setGreeting(){

    const heading=document.querySelector(".topbar h1");

    if(!heading) return;

    const hour=new Date().getHours();

    if(hour<12){

        heading.innerHTML="☀️ Good Morning";

    }

    else if(hour<18){

        heading.innerHTML="🌤 Good Afternoon";

    }

    else{

        heading.innerHTML="🌙 Good Evening";

    }

}

// ============================================
// COUNTER ANIMATION
// ============================================

function animateCounter(id,end,prefix="",suffix=""){

    const element=document.getElementById(id);

    if(!element) return;

    let current=0;

    const increment=Math.ceil(end/100);

    const timer=setInterval(()=>{

        current+=increment;

        if(current>=end){

            current=end;

            clearInterval(timer);

        }

        element.innerHTML=prefix+current.toLocaleString()+suffix;

    },20);

}

function animateCounters(){

    animateCounter("users",1245);

    animateCounter("revenue",12500,"$");

    animateCounter("orders",583);

    animateCounter("visitors",18000);

}

// ============================================
// SIDEBAR NAVIGATION
// ============================================

function setupSidebar(){

    const sections={

        dashboard:document.getElementById("dashboardSection"),

        profile:document.getElementById("profileSection"),

        analytics:document.getElementById("analyticsSection"),

        products:document.getElementById("productsSection"),

        users:document.getElementById("usersSection"),

        settings:document.getElementById("settingsSection")

    };

    const buttons={

        dashboard:document.getElementById("dashboardBtn"),

        profile:document.getElementById("profileBtn"),

        analytics:document.getElementById("analyticsBtn"),

        products:document.getElementById("productsBtn"),

        users:document.getElementById("usersBtn"),

        settings:document.getElementById("settingsBtn")

    };

    function showSection(name){

        Object.keys(sections).forEach(key=>{

            sections[key].style.display="none";

            buttons[key].classList.remove("active");

        });

        sections[name].style.display="block";

        buttons[name].classList.add("active");

    }

    buttons.dashboard.onclick=()=>showSection("dashboard");

    buttons.profile.onclick=()=>showSection("profile");

    buttons.analytics.onclick=()=>showSection("analytics");

    buttons.products.onclick=()=>showSection("products");

    buttons.users.onclick=()=>showSection("users");

    buttons.settings.onclick=()=>showSection("settings");

    showSection("dashboard");

}
// ============================================
// SEARCH BAR
// ============================================

function setupSearch(){

    const search=document.querySelector(".search input");

    if(!search) return;

    search.addEventListener("keyup",()=>{

        console.log("Searching:",search.value);

    });

}

// ============================================
// CARD HOVER EFFECT
// ============================================

function setupCards(){

    const cards=document.querySelectorAll(".card");

    cards.forEach(card=>{

        card.addEventListener("mousemove",(e)=>{

            const rect=card.getBoundingClientRect();

            const x=e.clientX-rect.left;

            const y=e.clientY-rect.top;

            card.style.background=`
            radial-gradient(
                circle at ${x}px ${y}px,
                rgba(56,189,248,.25),
                rgba(255,255,255,.08)
            )`;

        });

        card.addEventListener("mouseleave",()=>{

            card.style.background="rgba(255,255,255,.08)";

        });

    });

}

// ============================================
// PROFILE IMAGE ANIMATION
// ============================================

function setupProfile(){

    const profile=document.querySelector(".profile img");

    if(!profile) return;

    profile.addEventListener("click",()=>{

        profile.style.transition=".6s";

        profile.style.transform="rotate(360deg) scale(1.08)";

        setTimeout(()=>{

            profile.style.transform="";

        },600);

    });

}

// ============================================
// RIPPLE EFFECT
// ============================================

const rippleButtons=document.querySelectorAll("button");

rippleButtons.forEach(button=>{

    button.addEventListener("click",function(e){

        const ripple=document.createElement("span");

        const diameter=Math.max(
            button.clientWidth,
            button.clientHeight
        );

        const radius=diameter/2;

        ripple.style.width=diameter+"px";
        ripple.style.height=diameter+"px";

        ripple.style.left=
            (e.clientX-button.offsetLeft-radius)+"px";

        ripple.style.top=
            (e.clientY-button.offsetTop-radius)+"px";

        ripple.classList.add("ripple");

        const oldRipple=button.querySelector(".ripple");

        if(oldRipple){

            oldRipple.remove();

        }

        button.appendChild(ripple);

    });

});

// ============================================
// LIVE CLOCK
// ============================================

function startClock(){

    const clock=document.createElement("div");

    clock.id="liveClock";

    clock.style.position="fixed";
    clock.style.bottom="20px";
    clock.style.right="20px";
    clock.style.padding="12px 20px";
    clock.style.borderRadius="12px";
    clock.style.background="rgba(255,255,255,.08)";
    clock.style.backdropFilter="blur(15px)";
    clock.style.color="white";
    clock.style.fontWeight="600";
    clock.style.boxShadow="0 0 20px rgba(0,0,0,.3)";

    document.body.appendChild(clock);

    setInterval(()=>{

        const now=new Date();

        clock.innerHTML=now.toLocaleTimeString();

    },1000);

}
// ============================================
// TABLE ROW ANIMATION
// ============================================

function setupTableRows(){

    const rows=document.querySelectorAll("tbody tr");

    rows.forEach(row=>{

        row.addEventListener("mouseenter",()=>{

            row.style.transform="scale(1.02)";
            row.style.transition=".3s";

        });

        row.addEventListener("mouseleave",()=>{

            row.style.transform="scale(1)";

        });

    });

}

// ============================================
// PAGE FADE IN
// ============================================

window.addEventListener("load",()=>{

    document.body.style.opacity="1";

});

// ============================================
// WELCOME MESSAGE
// ============================================

setTimeout(()=>{

    console.log("✅ Welcome to your Modern Dashboard");

},800);

// ============================================
// BUTTON HOVER EFFECT
// ============================================

const allButtons=document.querySelectorAll("button");

allButtons.forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        button.style.transition=".3s";
        button.style.transform="translateY(-3px)";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform="translateY(0px)";

    });

});

// ============================================
// CARD CLICK EFFECT
// ============================================

document.querySelectorAll(".card").forEach(card=>{

    card.addEventListener("click",()=>{

        card.animate(

            [

                {transform:"scale(1)"},

                {transform:"scale(.96)"},

                {transform:"scale(1.03)"},

                {transform:"scale(1)"}

            ],

            {

                duration:350

            }

        );

    });

});

// ============================================
// FLOATING EFFECT FOR CARDS
// ============================================

document.querySelectorAll(".card").forEach((card,index)=>{

    card.style.animation+=`, floatCard 5s ease-in-out ${index*.2}s infinite`;

});

// ============================================
// INITIALIZE REMAINING FEATURES
// ============================================

document.addEventListener("DOMContentLoaded",()=>{

    setupTableRows();

});

// ============================================
// END OF FILE
// ============================================