const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

//  dynamic port for heroku
const port = process.env.PORT || 3000;
//  connect express
const app = express();
//  register partials for handlebars view engine
hbs.registerPartials(__dirname + '/views/partials');
//  set handlebars view engine as a view rngine for our node js app
app.set('view engine', 'hbs');

//  middlewares
app.use((req, res, next) => {
  const now = new Date().toString();
  const log = `${now}: ${req.method} ${req.url}`;

  console.log(log);
  fs.appendFile('server.log', `${log}\n`, err => {
    if (err) {
      console.log('Unable to append to server.log');
    }
  });

  next();
});

// app.use((req, res, next) => {
//   res.render('maintenance.hbs');
// });

//  static path
app.use(express.static(__dirname + '/public'));

//  helpers - you can use it in any place of hbs file
hbs.registerHelper('getCurrentYear', () => (
  new Date().getFullYear()
));

hbs.registerHelper('sceamIt', text => text.toUpperCase());

//  http routes
app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    welcomeMessage: 'Welcome to my website'
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page'
  });
});

app.get('/projects', (req, res) => {
  res.render('projects.hbs', {
    pageTitle: 'Projects Page'
  });
});

//  listen port
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
//  offtop
//  for comfort development:
//  nodemon server.js -e js,hbs
