//top horizontal sscroll bar
window.addEventListener("scroll",()=>{
    const totalHeight = document.body.scrollHeight-window.innerHeight;
    document.querySelector("#scroll-indicator").style.width= (window.scrollY/totalHeight * 100)+"%";
});

const menuIcon = document.querySelector(".menu-icon-container");
const navMob = document.querySelector(".navigation-mobile");
menuIcon.addEventListener("click",()=>{
    navMob.style.height="100%";
});
const closeMenu = document.querySelectorAll(".closemenu");
closeMenu.forEach(element=>{
    element.addEventListener("click",()=>{
        navMob.style.height="0";
    });
});

const mod0 = document.querySelector(".modal-0");
const closeMod = document.querySelector(".close-modal");
const allImgs = document.querySelectorAll(".pic-with-caption img");
allImgs.forEach((img)=>{
    img.addEventListener("click",(e)=>{
        mod0.children[0].src=e.target.src;
        mod0.style.display="block";
        closeMod.style.display="block";
    });
});
mod0.addEventListener("click",(e)=>{
    e.target.style.display = "none";
});
closeMod.addEventListener("click",(e)=>{
    mod0.style.display = "none";
});