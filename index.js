$(document).ready(()=>{
    $("#header_container").load("shared_components/header/header.html header",()=>{
        $('head').append('<script src="shared_components/header/header.js"></script>');
    });
    $("#content_container").load("pages/home/home.html main",()=>{
        $('head').append('<script src="shared_components/home/home.js"></script>');
    });
})
