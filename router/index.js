module.exports = function(app){
  app.use('/', require('./routes/home'));
  app.use('/about', require('./routes/about'));
  app.use('/leaderboard', require('./routes/leaderboard'));
  app.use('/battle', require('./routes/battle'));
  //app.use('/battle/:id', require('./routes/battle_show'));
  app.use('/battle/new', require('./routes/battle_new'));
  app.use('/create_or_update_githubUsers', require('./routes/githubUsers'));
  //app.use('/users', require('./routes/users'));
  //app.use('/sessions', require('./routes/sessions'));
};
