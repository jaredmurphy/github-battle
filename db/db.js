const pgp = require('pg-promise')();
const db = pgp('postgres://Jared@localhost:5432/open_source_champ');

const bcrypt = require('bcrypt');
const salt = bcrypt.genSalt(10);

var login = function(req, res, next){
  var email = req.body.email;
  var password = req.body.password;
  var auth_error = 'Incorrect Email / Password!';

  db.one(
    "SELECT * FROM users WHERE email = $1",
    [email]
  ).catch(function(){
    res.error = auth_error;
    next();
  }).then(function(user){
    bcrypt.compare(
      password,
      user.password_digest,
      function(err, cmp){
        if(cmp){
          req.session.user = {
            'email': user.email
          };
          next();
        } else {
          res.error = auth_error;
          next();
        }
      }
    );
  });
};

var logout = function(req, res, next){
  req.session.user = null;
  next()
};

var create_user = function(req, res, next){
  var email = req.body.email;
  var password = req.body.password;

  bcrypt.hash(password, 10, function(err, hashed_password){
    db.none(
      "INSERT INTO users (email, password_digest) VALUES ($1, $2)",
      [email, hashed_password]
    ).catch(function(){
      res.error = 'Error. User could not be created.';
      next();
    }).then(function(user){
      req.session.user = {
        'email': email
      };
      next();
    });
  });
};

var create_or_update_githubUser = function(req, res, next){
  console.log(req.body)
  var github_id = req.body.github_id,
    login = req.body.login,
    image = req.body.image,
    followers = req.body.followers,
    following = req.body.followers,
    public_repos = req.body.public_repos,
    public_gists = req.body.public_gists,
    github_url = req.body.github_url,
    location = req.body.location,
    blog = req.body.blog,
    company = req.body.company,
    created = req.body.created,
    email = req.body.email;

    var updateUser = function() {
      console.log('update user')
      db.one("UPDATE githubUsers SET github_id=$1, login=$2, image=$3, followers=$4, following=$5, public_repos=$6, public_gists=$7, github_url=$8, location=$9, blog=$10, company=$11, created=$12, email=$13 WHERE github_id=$1;",
        [github_id, login, , image, followers, following, public_repos, public_gists, github_url, location, blog, company, created, email])
      .then(function(user){
        console.log("updated", user);
      })
    } // ends update user

    var createUser = function() {
      console.log('createuser')
      //console.log(image)

      db.none("INSERT INTO githubUsers (github_id, login, image, followers, following, public_repos, public_gists, github_url, location, blog, company, created, email) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13);",
        [github_id, login, image, followers, following, public_repos, public_gists, github_url, location, blog, company, created, email])
      .then(function(user){
        console.log("created", user);
        next();
      }).catch(function(err){
        console.log(err)
        next();
      })
    } // ends update user

  db.one("SELECT * FROM githubUsers WHERE github_id=$1", [github_id])
    .then(function(user){
      console.log(user)
      updateUser();
      next();
    }).catch(function(err){
      //console.log(err)
      //console.log(err.received)
      if (err.received === 0){
      //  console.log(true)
        createUser();
      }
    });
  // db.none("UPDATE githubUsers SET login=$2, followers=$3, following=$4, public_repos=$5, public_gists=$6, github_url=$7, location=$8, blog=$9, company=$10, created=$11, email=$12 WHERE github_id=$1;",
  //   [github_id, login, followers, following, public_repos, public_gists, github_url, location,
  //   blog, company, created, email]
  // )
  // db.none("INSERT INTO githubUsers (github_id, login, followers, following, public_repos, public_gists, github_url, location, blog, company, created, email) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12"),
  //   [github_id, login, followers, following, public_repos, public_gists, github_url, location,
  //   blog, company, created, email]
} // ends update or create githubUser

var create_battle = function(req, res, next){
  var winner_id = Number(req.body.winner_id);
  var loser_id = parseInt(req.body.loser_id);

  var winner_login = req.body.winner_login;
  var loser_login = req.body.loser_login;

  var winner_image = req.body.winner_image;
  var loser_image = req.body.loser_image;

  var winner_score = Number(req.body.winner_score);
  var loser_score = Number(req.body.loser_score);

  var winner_url = req.body.winner_url;
  var loser_url = req.body.loser_url;

  var winner_image = req.body.winner_image;
  var loser_image = req.body.loser_image;

  db.none(
    "INSERT INTO battles (winner_id, loser_id, winner_login, loser_login, winner_image, loser_image, winner_score, loser_score, winner_url, loser_url) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)",
      [winner_id, loser_id, winner_login, loser_login, winner_image, loser_image, winner_score, loser_score, winner_url, loser_url]
    ).then(function(battle) {
      console.log("battle", battle)
      next();
    }).catch(function(error){
      console.log(error)
      res.error = 'Error. Battle could not be created.';
      next();
    });

}; // ends create_battle

var show_battle = function(req, res, next){
  db.one("SELECT * FROM battles WHERE id=$1", [req.params.id])
    .catch(function(error){
      console.log(error);
      res.error  = 'Error. Battle could not be shown';
      next();
    }).then(function(battle){
      res.battle = battle;
      //console.log(res.battle)
      next();
    });
} // ends show battle


module.exports = { login, logout, create_user, show_battle, create_battle, create_or_update_githubUser };
