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

    var createOrUpdateGithubUsers = function(player) {
      var data = {
        github_id: player.data.id,
        login: player.data.login,
        image: player.data.avatar_url,
        followers: player.data.followers,
        following: player.data.following,
        public_repos: player.data.public_repos,
        public_gists: player.data.public_gists,
        github_url: player.data.url,
        location: player.data.location,
        blog: player.data.blog,
        company: player.data.company,
        created: player.data.created_at,
        email: player.data.email
      }
      $.ajax({
        url: "/create_or_update_githubUsers",
        type: "POST",
        data: data,
        success: function(res){
          console.log(res);
        },
        error: function(error){
          console.log(error)
        }

      }) // ends ajax
    } // ends createOrUpdateGithubUsers

    var winnerLoserData = function(scores){
      var winner = scores.winner;
      var loser = scores.loser;
      //console.log(winner);
      //console.log(loser)

      return {
        winner_id: winner.data.id,
        loser_id: loser.data.id,
        winner_score: winner.score,
        loser_score: loser.score,
        winner_login: winner.data.login,
        loser_login: loser.data.login,
        winner_image: winner.data.avatar_url,
        loser_image: loser.data.avatar_url,
        winner_url: winner.data.html_url,
        loser_url: loser.data.html_url
      }
    }

    var getLastBattle = function(battleData) {
      console.log(battleData)
      $.ajax({
        url: "/battle/last/" + battleData.winner_id + "/" + battleData.loser_id,
        type: "GET",
        success: function(res){
          console.log("res", res);
          res = JSON.parse(res);
          window.location.replace("/battle/" + res.id);
        },
        error: function(error){
          console.log(error)
        }
      })
    } // ends last battle

    var createBattle = function(battleData){
    //  console.log('should be creating battle')
      $.ajax({
        url: "/battle/new",
        type: "POST",
        data: battleData,
        success: function(res){
          console.log("res", res);
          getLastBattle(battleData);
        },
        error: function(error){
          console.log(error)
        }
      })
    }

      // var data = {
      //   winner_id: req.body.winner_id;
      //   loser_id: req.body.loser_id;
      //
      //   winner_login: req.body.winner_login;
      //   loser_login: req.body.loser_login;
      //
      //   winner_image: req.body.winner_image;
      //   loser_image: req.body.loser_image;
      //
      //   winner_score: req.body.winner_score;
      //   loser_score: req.body.loser_score;
      //
      //   github_id: player.data.id,
      //   login: player.data.login,
      //   followers: player.data.followers,
      //   following: player.data.following,
      //   public_repos: player.data.public_repos,
      //   public_gists: player.data.public_gists,
      //   github_url: player.data.url,
      //   location: player.data.location,
      //   blog: player.data.blog,
      //   company: player.data.company,
      //   created: player.data.created_at,
      //   email: player.data.email
      // }
      // $.ajax({
      //   url: "/create_or_update_githubUsers",
      //   type: "POST",
      //   data: data,
      //   success: function(res){
      //     console.log(res);
      //   },
      //   error: function(error){
      //     console.log(error)
      //   }
      //
      // }) // ends ajax
     // ends createOrUpdateGithubUsers

    var findScore = function(player){
      return player.followers + player.following + (player.public_repos * 50);
    } // ends findScore

    var findWinner = function(players){
      var player_one_score = findScore(players.player_one.data);
      var player_two_score = findScore(players.player_two.data);
      players.player_one.score = player_one_score;
      players.player_two.score = player_two_score;

      if (player_one_score > player_two_score) {
        return { status: "winner", winner: players.player_one, loser: players.player_two };
      } else if (player_one_score < player_two_score){
        return { status: "winner", winner: players.player_two, loser: players.player_one };
      } else {
        return { status: "tie" }
      }
    } // ends findWinner

    $('#battle_button').click(function() {

      var scores = findWinner(players)
      createOrUpdateGithubUsers(players.player_one);
      createOrUpdateGithubUsers(players.player_two);
      createBattle(winnerLoserData(scores))
    })

    var timer;
    $('.player_input').on('keyup', function(e) {
      clearTimeout(timer);
      if ($(this).val()){
        timer = setTimeout(getGithubUser, 1000);
      }
    });


}); // ends doc.ready
