$(document).ready(function() {
    // activates collapsable menu on click
    $(".button-collapse").sideNav();

    // images carousel
    $('.carousel').carousel();
    setInterval(function() {
      $('.carousel').carousel('next');
    }, 1800);

    // about page tabs
    $('ul.tabs').tabs();

}); // ends doc.ready
