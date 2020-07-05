//top horizontal sscroll bar
window.addEventListener("scroll",()=>{
    const totalHeight = document.body.scrollHeight-window.innerHeight;
    document.querySelector("#scroll-indicator").style.width= (window.scrollY/totalHeight * 100)+"%";
})

const menuIcon = document.querySelector(".menu-icon-container");
const navMob = document.querySelector(".navigation-mobile");
menuIcon.addEventListener("click",()=>{
    navMob.style.height="100%";
})
const closeMenu = document.querySelectorAll(".closemenu");
closeMenu.forEach(element=>{
    element.addEventListener("click",()=>{
        navMob.style.height="0";
    });
})