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
    }, 1800);

    // about page tabs
    $('ul.tabs').tabs();

    ///////////////////////////////////
    // github username api functions //
    ///////////////////////////////////

    // ajax call to github
    var getGithubUser = function() {
      //clearTimeout(timer);
      var user = $('#player_one_input').val();
      $('#player_one_input').val('');
      $('img.select_user').remove();
      $('#warningMessage').remove();

      $.ajax({
        type: "GET",
        url: "https://api.github.com/users/" + user,
        success: function(data){
          $('#player_one_card').append('<img class="select_user" src=' + data.avatar_url + '/>');
          $('#player_one_button').removeClass('disabled');
          $('#player_one_button').addClass('waves-effect waves-light');
        },
        error: function(error){
          $('#player_one_button').addClass('disabled');
          $('#player_one_button').removeClass('waves-effect waves-light');
          var warningMessage = $('<p id="warningMessage">Github Username ' + error.responseJSON.message + '</p>');
          warningMessage.addClass('danger');
          $('#player_one_card').append(warningMessage);
        }
      });
    };

    var timer;
    $('#player_one_input').on('keyup', function(e) {
      clearTimeout(timer);
      if ($(this).val()){
        timer = setTimeout(getGithubUser, 1000);
      }
    });


}); // ends doc.ready
