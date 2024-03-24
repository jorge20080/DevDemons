$(document).ready(()=>{
    const liElements = document.querySelectorAll("nav a");
    for(let element of liElements){
        element.addEventListener("click", (e)=>{
            const input = document.getElementById("menu_switch");
            input.checked = true;
            $(".fa-x").css("display", "none");
            $(".fa-bars").css("display", "block");
            e.preventDefault();
            document.querySelector(".active").classList.toggle("active");
            element.parentElement.classList.add("active")
        });
    }
    let currenPage = "home";

    $("#about_link").on("click",()=>{
        $(`#${currenPage}css`).remove();
        $(`#${currenPage}js`).remove();
        currentElement = 'about';
        $("#content_container").load("pages/about/about.html main",()=>{
            $('head').append('<script id="aboutjs" src="pages/about/about.js"></script>');
            $('head').append('<link id="aboutcss" rel="stylesheet" href="pages/about/about.css">');
        });
    })
    $("#home_link").on("click",()=>{
        $(`#${currenPage}css`).remove();
        $(`#${currenPage}js`).remove();
        currenPage = "home";
        $("#content_container").load("pages/home/home.html main",()=>{
            $('head').append('<script id="homejs" src="pages/home/home.js"></script>');
            $('head').append('<link id="homecss" rel="stylesheet" href="pages/home/home.css">');
        });
    })
    $(".fa-bars").on("click",(e)=>{
        e.target.style="display:none";
        $(".fa-x").css("display", "block");
    })
    $(".fa-x").on("click",(e)=>{
        e.target.style="display:none";
        $(".fa-bars").css("display", "block");
    })
})