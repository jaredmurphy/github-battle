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
    /////// player constructors ///////
    ///////////////////////////////////
    var createPlayer = function(){
      this.data = {
        github_id: null,
        login: null,
        image: null,
        followers: null,
        following: null,
        public_repos: null,
        public_gists: null,
        github_url: null,
        location: null,
        blog: null,
        company: null,
        created: null,
        email: null
      },
      this.selected = false
     }

     createPlayer.prototype.isSelected = function(){
          this.selected = true
     }

     createPlayer.prototype.dataFromGithub = function(){
         this.isFromGithub = true;
     }

     createPlayer.prototype.dataFromDb = function(){
         this.isFromGithub = false;
     }

     var players = { player_one: new createPlayer(), player_two: new createPlayer() }
     //console.log('current player', players[players.current_player])

    ///////////////////////////////////
    // github username api functions //
    ///////////////////////////////////

    // // player select
    // var players = {
    //   player_one: {
    //     selected: false,
    //     data: '',
    //     dataFromDB: false
    //   },
    //   player_two: {
    //     selected: false,
    //     data: '',
    //     dataFROMDB: false
    //   }
    // };


    // save github data to players object
    var saveDataToPlayer = function(data, player){
      if (!data.avatar_url){ data.avatar_url = data.image }
      players[player].data.github_id = data.id;
      players[player].data.login = data.login;
      players[player].data.image = data.avatar_url;
      players[player].data.followers = data.followers;
      players[player].data.following = data.following;
      players[player].data.public_repos = data.public_repos;
      players[player].data.public_gists = data.public_gists;
      players[player].data.github_url = data.html_url;
      players[player].data.location = data.location;
      players[player].data.blog = data.blog;
      players[player].data.company = data.company;
      players[player].data.email = data.email;
      players[player].data.created = data.created_at;
      //debugger;
    } // ends saveDataToPlayer

    // changes dom on success of finding player
    var addPlayerToDom = function(player, data) {
      if (!data.avatar_url){ data.avatar_url = data.image }
      $('#' + player + '_card').append('<img class="select_user ' + player + '_img tooltipped" data-position="right" data-delay="50" data-tooltip=' + data.login + ' src=' + data.avatar_url + '/>');
      $('.tooltipped').tooltip({delay: 50});
      $('.' + player + '_img').trigger('mouseenter');
      $('.' + player + '_button').removeClass('disabled');
      $('.' + player + '_button').addClass('waves-effect waves-light');
    } // ends add player to dom

    // changes dom on failure to find player
    var addErrorToDom = function(player, error){
      $('.' + player + '_button').removeClass('waves-effect waves-light');
      $('.' + player + '_button').addClass('disabled');
      var warningMessage = $('<p id="warningMessage">' + error + '</p>');
      warningMessage.addClass('danger');
      $('#' + player + '_card').append(warningMessage);
    }

    // ajax call to github - save player data if successful - change dom for sucess or error
    var getGithubData = function(player, login) {
      $.ajax({
        type: "GET",
        url: "https://api.github.com/users/" + login,
        success: function(data){
          addPlayerToDom(player, data);
          saveDataToPlayer(data, player);
          players[player].dataFromGithub();
        },
        error: function(error){
          //debugger;
          var error = "Github user not found";
          addErrorToDom(player, error);
        }
      });
    } // ends getGithubData

    // sends request to github to update user data
    // var updateGithubData = function(login) {
    //   $.ajax({
    //     type: "GET",
    //     url: "https://api.github.com/users/" + login,
    //     success: function(data){
    //       console.log(data)
    //       //debugger;
    //       addPlayerToDom(player, data);
    //       saveDataToPlayer(data, player);
    //       console.log(players)
    //     },
    //     error: function(error){
    //       addErrorToDom(player, error);
    //       console.log(error);
    //     }
    //   });
    // } // ends getGithubData

    // // find players in db
    // getDbData = function(player, login){
    //   $.ajax({
    //     type: "GET",
    //     url: "/getPlayerData/" + login,
    //     success: function(res){
    //       if (res === "Error. User could not be shown") {
    //         getGithubData(player, login)
    //       } else {
    //         saveDataToPlayer(res, player);
    //         addPlayerToDom(player, res);
    //         players[player].dataFromDb();
    //       }
    //     },
    //     error: function(error){
    //       console.log(error);
    //     }
    //   })
    // } // ends getDbData

    // get player info from db first
    var getPlayerData = function() {
      if (!players.player_one.selected) {
        var player = 'player_one';
      } else {
        var player = 'player_two';
      }

      var login = $('#' + player + '_input').val();
      $('#' + player + '_input').val('');
      $('.' + player + '_img').trigger('mouseleave');
      $('.' + player + '_img').remove();
      $('#warningMessage').remove();

      getGithubData(player, login)
    } // ends getPlayerFromDb

    // button selects player
    $('.player_button').click(function() {
      if (!$(this).hasClass('disabled')) {
        if ($(this).hasClass('player_one_button')){
          var player = 'player_one';
          $('#player_two_input').removeClass('disabled_input');
        } else if ($(this).hasClass('player_two_button')){
          var player = 'player_two';
        }
        $("#" + player + '_input').addClass('disabled_input');
        players[player].isSelected();
        $('.' + player + '_img').trigger('mouseleave');
        $('.' + player + '_button').text(players[player].data.login);
      }
      if (players.player_one.selected === true && players.player_two.selected === true){
        console.log(players)
        $('#battle_button').fadeIn('slow');
        $('#battle_button').css('display', 'block');
      }
    }); // ends .player_button click function

    // queries database for users and either creates or updates them
    var createOrUpdateGithubUsers = function(player) {
      var data = player.data;
      //debugger;
      $.ajax({
        url: "/create_or_update_githubUsers",
        type: "POST",
        data: data,
        success: function(res){
          console.log("success", res);
        },
        error: function(error){
          console.log("error", error)
        }
      }) // ends ajax
    } // ends createOrUpdateGithubUsers

    // parses out data for api call
    var winnerLoserData = function(scores){
      var winner = scores.winner;
      var loser = scores.loser;

      if(!winner.data.avatar_url){ winner.data.avatar_url = winner.data.image }
      if(!loser.data.avatar_url){ loser.data.avatar_url = loser.data.image }

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

    //
    var createBattle = function(battleData){
      $.ajax({
        url: "/battle/new",
        type: "POST",
        data: battleData,
        success: function(res){
          //console.log("res", res);
          window.location.replace("/battle/" + res.id);
        },
        error: function(error){
          console.log(error)
        }
      })
    }

    var findScore = function(player){
      return (player.followers * 10) + player.following + (player.public_repos * 5) + (player.public_gists * 3) ;
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
      createOrUpdateGithubUsers(players.player_one);
      createOrUpdateGithubUsers(players.player_two);
      //debugger;
      //var scores = findWinner(players)

      //createBattle(winnerLoserData(scores))
    })

    var timer;
    $('.player_input').on('keyup', function(e) {
      clearTimeout(timer);
      if ($(this).val()){
        timer = setTimeout(getPlayerData, 1000);
      }
    });


}); // ends doc.ready
