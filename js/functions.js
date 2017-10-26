//DOM Cashing
var $menuCLose = $("#menu-close");
var $menuOpen = $("#menu-toggle");
var $sidebar = $("#sidebar-wrapper");

// Closes the sidebar menu
$menuCLose.click(function(e) {
    e.preventDefault();
    $sidebar.toggleClass("active");
});
// Opens the sidebar menu
$menuOpen.click(function(e) {
    e.preventDefault();
    $sidebar.toggleClass("active");
});