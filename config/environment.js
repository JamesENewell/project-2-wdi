const port = process.env.PORT || 3000;
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/PubReviewer';


module.exports = { dbURI, port };
