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
  },{
    username: 'MayaTest',
    email: 'mv@test.com',
    password: 'test',
    passwordConfirmation: 'test'
  },
  {
    username: 'RalphTest',
    email: 'rf@test.com',
    password: 'test',
    passwordConfirmation: 'test'
  },{
    username: 'SimonTest',
    email: 'sw@test.com',
    password: 'test',
    passwordConfirmation: 'test'
  },{
    username: 'GaryTest',
    email: 'gw@test.com',
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
      },
      {
        title: 'The King\'s Tun',
        description: 'Wetherspoon’s pub, which opened in July 1997 in former Kingston Empire music hall, built in 1910. Later a cinema, supermarket and Reject Shop. Two large bars on separate floors. Attracts all during the day with a more younger crowd in the evenings, particularly at weekends when it can get busy with discos on Friday and Saturday nights from 9pm. Guest beers changing every few days include those from local micros. Wide ranging menu. Children welcome until 9pm if eating. Upstairs bar can be hired for functions. Alcohol served from 9am.',
        location: 'Kingston-upon-Thames',
        image: 'https://d1i2hi5dlrpq5n.cloudfront.net/~/media/images/pub-histories/0266-the-kings-tun/img_0647.jpg?h=510&&w=600&la=en&vs=1&d=20170825T102053Z&hash=EC4614DCD0B04E5BB7D0219A618C0BED982E8BE3',
        creator: users[1],
        comments: []
      },
      {
        title: 'The Bell',
        description: 'This historic coaching Inn, known locally as the Crooked House, dates from 1460 and was later East Molesey’s first post office. The 18th century highwayman Claude Duvalier hid from the Bow Street Runners here. The naval officer atop the weathervane looking through his spyglass for customers, originally stood on the parish church looking for the congregation. Full of nooks and crannies, suitable for romantic liaisons. The large garden has a children’s play areas in it. Stone and wood floors, walls decorated with old photos of the area. Three TV screens for sports. Quiz night Tue. The changing beers usually include a local one.',
        location: 'East Molesey',
        image: 'https://whatpub.com/img/KIN/6909/bell-east-molesey/200/150',
        creator: users[2],
        comments: []
      },
      {
        title: 'Three Horseshoes',
        description: 'Rambling old pub which has a number of separate bar and restaurant areas plus an extensive partly paved garden at the rear and a small patio at the front. Food led pub where team colours and singlets are discouraged. Seated children welcome in the bar until 7pm and 7.30pm in the restaurant. Dogs allowed in the garden and bar areas, but not the restaurant.',
        location: 'Laleham',
        image: 'https://pubshistory.com/Middlesex/Staines/ThreeHorseshoes.jpg',
        creator: users[3],
        comments: []
      }]);
    })
    .then(pubs => console.log(`${pubs.length} pub(s) created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
