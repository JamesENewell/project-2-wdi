const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

const pubSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  comments: [commentSchema]
});


module.exports = mongoose.model('pub', pubSchema);
module.exports = mongoose.model('comment', commentSchema);
