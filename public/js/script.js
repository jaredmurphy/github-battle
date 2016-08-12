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
      $.ajax({
        type: "GET",
        url: "https://api.github.com/users/" + $('#player_one_input').val(),
        success: function(data){
          $('#player_one_card').append('<img class="select_user" src=' + data.avatar_url + '/>');
          $('#player_one_button').removeClass('disabled');
          $('#player_one_button').addClass('waves-effect waves-light');
          console.log(data);
        }
      });
    };

    var timer;

    $('#player_one_input').on('keyup', function(e) {
      clearTimeout(timer);
      timer = setTimeout(getGithubUser, 1000);
    });


}); // ends doc.ready
