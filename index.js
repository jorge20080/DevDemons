$(document).ready(()=>{
    $("#header_container").load("shared_components/header/header.html header",()=>{
        $('head').append('<script src="shared_components/header/header.js"></script>');
        $('head').append('<link rel="stylesheet" href="shared_components/header/header.css">');
    });
    $("#content_container").load("pages/home/home.html main",()=>{
        $('head').append('<script src="pages/home/home.js"></script>');
        $('head').append('<link rel="stylesheet" href="pages/home/home.css">');
    });
})
