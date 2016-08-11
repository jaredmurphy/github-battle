$(document).ready(function() {
    // activates collapsable menu on click
    $(".button-collapse").sideNav();

    // make menu links active on click
    $('.navbar_item').click(function() {
      console.log('click')
      $('.navbar_item').removeClass('active');
      $(this).addClass('active');
    });

    // images carousel
    $('.carousel').carousel();
    setInterval(function() {
      $('.carousel').carousel('next');
    }, 1800);



}); // ends doc.ready
