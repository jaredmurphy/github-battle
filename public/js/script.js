$(document).ready(function() {

    ///////////////////////////////////
    ////// materialize functions //////
    ///////////////////////////////////

    // activates collapsable menu on click
    $(".button-collapse").sideNav();

    // images carousel
    $('.carousel').carousel();
    setInterval(function() {
      $('.carousel').carousel('next');
    }, 1500);

    // about page tabs
    $('ul.tabs').tabs();

    ///////////////////////////////////
    // github username api functions //
    ///////////////////////////////////

    // battle funcction
    var battle = function() {
      console.log(players);
    }

    // player select
    var players = {
      player_one: {
        selected: false,
        data: ''
      },
      player_two: {
        selected: false,
        data: ''
      }
    };

    // ajax call to github
    var getGithubUser = function() {
      if (!players.player_one.selected) {
        var player = 'player_one';
      } else {
        var player = 'player_two';
      }

      var user = $('#' + player + '_input').val();
      $('#' + player + '_input').val('');
      $('img.select_' + player).remove();
      $('#warningMessage').remove();

      $.ajax({
        type: "GET",
        url: "https://api.github.com/users/" + user,
        success: function(data){
          $('#' + player + '_card').append('<img class="select_user ' + player + '_img tooltipped" data-position="right" data-delay="50" data-tooltip=' + data.login + ' src=' + data.avatar_url + '/>');
          $('.tooltipped').tooltip({delay: 50});
          $('.' + player + '_img').trigger('mouseenter');
          $('.' + player + '_button').removeClass('disabled');
          $('.' + player + '_button').addClass('waves-effect waves-light');
          $('.' + player + 'input').remove();
          players[player].data = data;
        },
        error: function(error){
          $('.' + player + '_button').removeClass('waves-effect waves-light');
          $('.' + player + '_button').addClass('disabled');
          var warningMessage = $('<p id="warningMessage">Github Username ' + error.responseJSON.message + '</p>');
          warningMessage.addClass('danger');
          $('#' + player + '_card').append(warningMessage);
        }
      });
    };

    $('.player_button').click(function() {
      if (!$(this).hasClass('disabled')) {
        if ($(this).hasClass('player_one_button')){
          var player = 'player_one';
          $('#player_two_input').removeClass('disabled_input');
        } else if ($(this).hasClass('player_two_button')){
          var player = 'player_two';
        }
        players[player].selected = true;
        $('.' + player + '_img').trigger('mouseleave');
        $('.' + player + '_button').text(players[player].data.login);
        $('.' + player + '_input').remove();
        $('#' + player + '_card p').remove();
      }
      if (players.player_one.selected === true && players.player_two.selected === true){
        $('#players p').remove();
        $('#battle_button').fadeIn();
        $('#battle_button').css('display', 'block');
      }
    });

    $('#battle_button').click(function() {
      console.log(players);
    })

    var timer;
    $('.player_input').on('keyup', function(e) {
      clearTimeout(timer);
      if ($(this).val()){
        timer = setTimeout(getGithubUser, 1000);
      }
    });


}); // ends doc.ready
