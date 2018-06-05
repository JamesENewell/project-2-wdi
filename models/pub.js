const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

const pubSchema = new mongoose.Schema({
  title: String,
  description: String,
  location: String,
  image: String,
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  comments: [commentSchema]
});


module.exports = mongoose.model('Pub', pubSchema);
// module.exports = mongoose.model('Comment', commentSchema);
