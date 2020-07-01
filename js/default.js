//top horizontal sscroll bar
window.addEventListener("scroll",()=>{
    const totalHeight = document.body.scrollHeight-window.innerHeight;
    document.querySelector("#scroll-indicator").style.width= (window.scrollY/totalHeight * 100)+"%";
})