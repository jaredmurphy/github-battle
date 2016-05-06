//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function() {
    console.log('js loaded');
    var url = window.location.href
    var splitUrl = url.split('/')

    // checks to see if app is ready for ajax to github
    if (splitUrl.length === 6) {
        var playerOne = splitUrl[4];
        var playerTwo = splitUrl[5];
        console.log('player one: ' + playerOne);
        console.log('player two: ' + playerTwo);
           


        
    } else {
        console.log('no ' + splitUrl.length)
    }

}); // ends document.ready

// select players
$(document).on('page:change', function () {
    $('.player_select').click(function() {
        event.preventDefault();
        var player = $('.player').val();
        var url = window.location.href;
        window.location.href = url + "/" + player;
        return false;
    });
}); // ends document.on page:change
