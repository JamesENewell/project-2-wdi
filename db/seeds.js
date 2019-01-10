const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
const User = require('../models/user');
const Pub = require('../models/pub');

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase();

  User.create([{
    username: 'JamesTest',
    email: 'jn@test.com',
    password: 'test',
    passwordConfirmation: 'test'
  }])
    .then(users => {
      console.log(`${users.length} User(s) created`);
      return Pub.create([{
        title: 'Sussex Arms',
        description: 'Sensitively restored in 2011, this traditional pub with a real fire has now become a firm favourite with beer lovers. Fifteen hand-pulls dispense ales from independent breweries across the UK, including Twickenham, plus six ciders and perries. Every 10th pint free with the pub\'s loyalty card. Acoustic Blues and Irish music feature regularly, and recorded music is played from Vinyl LPs. Quiz night every Wednesday from 8pm. Food, served all day and every day, includes Anthea’s famous pies and much more. It has a large well-equipped garden. Twice CAMRA Greater London Cider Pub Of The Year and local Branch Pub Of The Year.',
        location: 'Twickenham',
        image: 'https://whatpub.com/img/HOU/6869/sussex-arms-twickenham/298/224/25280',
        creator: users[0],
        comments: []
      }]);
    })
    .then(pubs => console.log(`${pubs.length} pub(s) created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
