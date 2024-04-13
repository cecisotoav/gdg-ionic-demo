const hamburgerMenu = () => {
    document.getElementById("panel").classList.toggle("is-active");
    
}
document.getElementById("myBtn").addEventListener("click", hamburgerMenu);

//document.getElementById("myBtn").addEventListener("click", ()=>( document.getElementById("panel").classList.toggle("is-active")))

