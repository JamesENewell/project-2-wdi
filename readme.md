

![image](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# Project-2-wdi - Full Stack Application - PubReviewer

For our second project, we were given a week to design and build a full stack Application with authentication as well as using MongoDB as an online database.

###### PubReviewer - About my application

The full stack Application I chose to make was a website that reviews pubs. From a user experience you can sign up an account, add a pub with it's name, location and a brief description.


<img src="https://i.imgur.com/2NMur3o.jpg" width="700">


###### Models
The basis of the application revolves around the different models be it User or Pub. Each Schema contains different aspects for example the location of a pub which a user won't have. I've left a code snippet below to show the Model of the pub.

```
const pubSchema = new mongoose.Schema({
  title: String,
  description: String,
  location: String,
  image: String,
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  comments: [commentSchema]
});
```

###### Pub View Page

Part of the user experience is to show them the details of a pub. I have uploaded an image of an example pub below where you can see it's location, description as well as reviews left by users.

<img src="https://imgur.com/kqW8xiC.jpg" width="700">



###### What was a win

Setting up the initial layout of the app itself as well as adding the verification for logging in as shown in the creating session route.

```
function createRoute(req, res) {
  User
    .findOne({email: req.body.email })
    .then( (user)=>{
      console.log(user);
      if(!user || !user.validatePassword(req.body.password)){
        return res.status(401).render('sessions/new', {message: 'Unrecognised Credentials'});
      }
      req.session.userId = user.id;

      return res.redirect('/');
    });
}
```

###### What was a challenge

I found the time limit I had was the biggest challenge as I never got to add the option to differentiate between a user who will only be capable of viewing pubs and adding a review compared to that of a landlord who is only able to create a pub.

###### What would I do differently

I think if I was to do this differently I'd take a different idea and go with that so I could face a totally new set of problems to tackle through the build process. I've always wanted to do a fantasy football website so this could be the direction I take next.

###### What additional features would I add
I'd start off by adding the option to differentiate between user and landlord and then add a restriction so that a landlord can only create one pub. In the long term the possibilities are endless but I'd definitely focus on the user experience initially.
