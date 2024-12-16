$(document).ready(()=>{
    let navToggle = $("#nav_toggle");
    let mainMenu = $("#main_menu");
    
    navToggle.click(()=>{
        // mainMenu.slideToggle(500);
        mainMenu.toggleClass('hidden');
    });
});