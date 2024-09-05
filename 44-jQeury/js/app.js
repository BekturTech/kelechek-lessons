console.log($(".nav-toggle"));
console.log($(".nav-center .links-container"));
console.log($(".links-container .links"));

$(".nav-toggle").click(function() {
    $(".links-container").toggleClass("show-links");
});