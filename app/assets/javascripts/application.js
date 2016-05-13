//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function() {
    console.log('js loaded');
}); // ends document.ready

// select players
$(document).on('page:change', function () {
    // new funcitonality#
    $('.choose_player').click(function() {
        event.preventDefault();
        var url = window.location.href;
        var player = $('.player').val();
        console.log(player);
        window.location = url + "/" + player;
    });

    // old functionality

    $('.player_select').click(function() {
        //event.preventDefault();
        var player = $('.player').val();
        //var url = window.location.href;
        //window.location.href = url + "/" + player;
        //return false;
        $.ajax({
            url: 'https://api.github.com/users/' + player,
            type: 'GET',
            data: {
                format: 'json'
            },
            error: function() {
              // error message
            },
            success: function(data) {
                console.log(data)
                $('.username').val(data.login);
                $('.blog').val(data.blog)
                $('.location').val(data.location);
                $('.avatar_url').val(data.avatar_url);
                $('.github_url').val(data.html_url);
                
            }
         }); // ends player one ajax call
    });

    $('.generateWinner').click(function() {
        var playerOneScore = $('.p_one_score').text();
        var playerTwoScore = $('.p_two_score').text();
        var winner;

        if (playerOneScore > playerTwoScore) {
           winner = $('.p_one_name').text(); 
        } else if (playerTwoScore > playerOneScore) {
            winner = $('.p_two_name').text();
        }
        $('.winner').append(winner + " won!");
        
    });



}); // ends document.on page:change
