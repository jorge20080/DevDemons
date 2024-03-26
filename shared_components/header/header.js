let currenPage = "home";
$(document).ready(()=>{
    handleClickLinks();
    $("#about_link").on("click",()=> loadPagesLinks("about"));
    $("#home_link").on("click",()=> loadPagesLinks("home"));
    $("#events_link").on("click",()=> loadPagesLinks("events"));
    $("#resources_link").on("click",()=> loadPagesLinks("resources"));
    $("#news_link").on("click",()=> loadPagesLinks("news"));
    $("#discuss_link").on("click",()=> loadPagesLinks("discuss"));
    $("#login_link").on("click",()=> loadPagesLinks("login"));
    $("#join_btn").on("click",()=> loadPagesLinks("register", "#form_container"));
    handleMenuClickChanges();
})

function loadPagesLinks(pageName, elementToImport = "main"){
    $(`#${currenPage}css`).remove();
    $(`#${currenPage}js`).remove();
    currentElement = pageName;
    $("#content_container").load(`pages/${pageName}/${pageName}.html ${elementToImport}`,()=>{
        $('title').text(pageName);
        $('head').append(`<script id="${pageName}js" src="pages/${pageName}/${pageName}.js"></script>`);
        $('head').append(`<link id="${pageName}css" rel="stylesheet" href="pages/${pageName}/${pageName}.css">`);
    });
}
function handleMenuClickChanges(){
    $(".fa-bars").on("click",(e)=>{
        e.target.style="display:none";
        $(".fa-x").css("display", "block");
    })
    $(".fa-x").on("click",(e)=>{
        e.target.style="display:none";
        $(".fa-bars").css("display", "block");
    })
}

function handleClickLinks(){
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
}