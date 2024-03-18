$(document).ready(()=>{
    const liElements = document.querySelectorAll("nav a");
    for(let element of liElements){
        element.addEventListener("click", (e)=>{
            e.preventDefault();
            document.querySelector(".active").classList.toggle("active");
            element.parentElement.classList.add("active")
        });
    }
})