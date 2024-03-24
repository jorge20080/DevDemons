$(document).ready(()=>{
    const liElements = document.querySelectorAll("nav a");
    for(let element of liElements){
        element.addEventListener("click", (e)=>{
            e.preventDefault();
            document.querySelector(".active").classList.toggle("active");
            element.parentElement.classList.add("active")
        });
    }
    $(".fa-bars").on("click",(e)=>{
        e.target.style="display:none";
        $(".fa-x").css("display", "block");
    })
    $(".fa-x").on("click",(e)=>{
        e.target.style="display:none";
        $(".fa-bars").css("display", "block");
    })
})