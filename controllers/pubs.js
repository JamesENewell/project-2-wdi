const Pub = require('../models/pub');


function indexRoute(req, res){
  Pub
    .find()
    .populate('creator')
    .exec()
    .then( pubs =>{
      console.log(pubs);
      res.render('pubs/index', {pubs});
    });
}
function showRoute(req, res){
  Pub
    .findById(req.params.id)
    .populate('creator')
    .populate('comments.user')
    .exec()
    .then( pub =>{
      res.render('pubs/show', {pub});
    });
}
function newRoute(req, res){
  if(!res.locals.isLoggedIn) return res.redirect('/');
  res.render('pubs/new');
}
function createRoute(req, res){
  // console.log(req.body);
  const pubData = req.body;
  // console.log(req.body);
  pubData['creator'] = res.locals.user.id;
  // console.log(pubData);
  Pub
    .create(pubData)
    .then( pub =>{
      console.log(pub);
      return res.redirect(`/pubs/${pub.id}`);
    });
}
function editRoute(req, res){
  Pub
    .findById(req.params.id)
    .exec()
    .then( pub =>{
      res.render('pubs/edit', {pub});
      console.log(pub);
    });
}
function updateRoute(req, res){
  console.log(req.body);
  Pub
    .findById(req.params.id)
    .then( pub =>{
      Object.assign(pub, req.body);
      pub.save();
      return res.redirect(`/pubs/${pub.id}`);
    });
}
function deleteRoute(req, res){
  Pub
    .findById(req.params.id)
    .then( pub =>{
      pub.remove();
      return res.redirect('/pubs');
    });
}

function createCommentRoute(req, res){
  Pub
    .findById(req.params.id)
    .exec()
    .then( pub => {
      const commentData = req.body;
      commentData.user = res.locals.currentUser.id;
      pub.comments.push(commentData);
      pub.save();
      return res. redirect(`/pubs/${pub.id}`);
    });
}

module.exports = {
  index: indexRoute,
  show: showRoute,
  new: newRoute,
  create: createRoute,
  edit: editRoute,
  update: updateRoute,
  delete: deleteRoute,
  createComment: createCommentRoute
};
