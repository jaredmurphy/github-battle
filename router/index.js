module.exports = function(app){
  app.use('/', require('./routes/home'));
  app.use('/about', require('./routes/about'));
  //app.use('/users', require('./routes/users'));
  //app.use('/sessions', require('./routes/sessions'));
};
