const menuButton=document.getElementById("menuButton");

const closeMenu=document.getElementById("closeMenu");

const mobileMenu=document.getElementById("mobileMenu");

const overlay=document.getElementById("overlay");

menuButton.onclick=()=>{

mobileMenu.style.right="0";

overlay.classList.remove("hidden");

}

closeMenu.onclick=()=>{

mobileMenu.style.right="-100%";

overlay.classList.add("hidden");

}

overlay.onclick=()=>{

mobileMenu.style.right="-100%";

overlay.classList.add("hidden");

}

window.addEventListener("scroll",()=>{

const nav=document.getElementById("navbar");

if(window.scrollY>50){

nav.classList.add("glass");

nav.classList.add("shadow-card");

nav.querySelectorAll(".nav-link").forEach(item=>{

item.style.color="#1e293b";

});

nav.querySelector("h2").style.color="#166534";

nav.querySelector("span").style.color="#64748b";

}else{

nav.classList.remove("glass");

nav.classList.remove("shadow-card");

nav.querySelectorAll(".nav-link").forEach(item=>{

item.style.color="white";

});

nav.querySelector("h2").style.color="white";

nav.querySelector("span").style.color="rgba(255,255,255,.7)";

}

});
