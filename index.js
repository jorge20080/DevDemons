$(document).ready(()=>{
    $("#header_container").load("shared_components/header/header.html header",()=>{
        $('head').append('<script src="shared_components/header/header.js"></script>');
        $('head').append('<link rel="stylesheet" href="shared_components/header/header.css">');
    });
    $("#content_container").load("pages/home/home.html main",()=>{
        $('head').append('<script id="homejs" src="pages/home/home.js"></script>');
        $('head').append('<link id="homecss" rel="stylesheet" href="pages/home/home.css">');
        $('title').text("Home");
    });
    $("#footer_container").load("shared_components/footer/footer.html footer",()=>{
        $('head').append('<script src="shared_components/footer/footer.js"></script>');
        $('head').append('<link rel="stylesheet" href="shared_components/footer/footer.css">');
    });
})
