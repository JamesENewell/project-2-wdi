

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

###### What was a challenge

###### What would I do differently

###### What additional features would I add
I will aim to include the ability to differentiate between a landlord who can add a pub but not review and a user who will be able to review pubs but not add them themselves
