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

// var _postPost = $('#post_Post');
// var max = 10;
// var len = 0;

// var _leftspan = $('#left_char');

// _postPost.keypress(function(e) {
//     cc = this.value.length;
//     len = max - cc;
//     console.log(len);
//     _leftspan.html(len);

//     if (cc == max) {
//         e.preventDefault();
//     }
// });