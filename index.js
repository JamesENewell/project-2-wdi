const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const methodOverride = require('method-override');
const expressLayouts = require('express-ejs-layouts');
const app = express();


const routes = require('./config/routes');
const User = require('./models/user');
const { port, dbURI } = require('./config/environment');

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

app.use(expressLayouts);
app.use(express.static(`${__dirname}/public`));

app.use(morgan('dev'));

app.use(methodOverride((req)=> {
  if(req.body && typeof req.body ==='object' && '_method' in req.body){
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  secret: process.env.SESSION_SECRET || 'ssh it\'s a secret',
  resave: false,
  saveUninitialized: false
}));


app.use((req, res, next) => {
  if(!req.session.userId) return next();

  User
    .findById(req.session.userId)
    .populate({path: 'pubs', populate: {path: 'creator'}})
    // .populate({path: 'landlord'})
    .exec()
    .then((user) =>{
      res.locals.user = user;
      res.locals.isLoggedIn = true;
      res.locals.landlord = false;
      next();
    });


});

app.use(routes);

app.listen(port, () => console.log(`Express started on port: ${port}`));
