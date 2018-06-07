const express  = require("express");
const router   = express.Router();
const static = require('../controllers/static');
const registrations = require('../controllers/registrations');
const sessions = require('../controllers/sessions');
const pubs = require('../controllers/pubs');

router.route('/')
  .get(static.index);

router.route('/register')
  .get(registrations.new)
  .post(registrations.create);

router.route('/login')
  .get(sessions.new)
  .post(sessions.create);

router.route('/logout')
  .get(sessions.delete);

router.route('/pubs')
  .get(pubs.index)
  .post(pubs.create);
router.route('/pubs/new')
  .get(pubs.new);
router.route('/pubs/:id')
  .get(pubs.show)
  .put(pubs.update)
  .delete(pubs.delete);
router.route('/pubs/:id/edit')
  .get(pubs.edit);

router.route('/pubs/:id/comment')
  .post(pubs.createComment);

module.exports = router;
