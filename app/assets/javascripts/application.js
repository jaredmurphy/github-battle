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

       
        $.ajax({
            url: 'https://api.github.com/users/' + playerOne,
            type: 'GET',
            data: {
                format: 'json'
            },
            error: function() {
              // error message
            },
            success: function(data) {
                console.log(data)
                 function score(data) {
                     var followers = data.followers
                     var publicRepos = data.public_repos
                     return followers + publicRepos;
                }
                $('.p_one_location').append("location: " + data.location);
                $('.p_one_img').attr('src', data.avatar_url);
                var score = score(data);
                $('.p_one_score').append("Score: " + score);
            }
         }); // ends player one ajax call

        $.ajax({
            url: 'https://api.github.com/users/' + playerTwo,
            type: 'GET',
            data: {
                format: 'json'
            },
            error: function() {
              // error message
            },
            success: function(data) {
                console.log(data)
                 function score(data) {
                     var followers = data.followers
                     var publicRepos = data.public_repos
                     return followers + publicRepos;
                }
                $('.p_two_location').append("location: " + data.location);
                $('.p_two_img').attr('src', data.avatar_url);
                var score = score(data);
                $('.p_two_score').append("Score: " + score);

            }
         }); // ends player one ajax call

        
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
