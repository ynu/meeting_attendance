var express = require('express');
var router = express.Router();
var models  = require('../models');

/* GET meeting attendance page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'customization' });
});

/* GET meeting attendance page. */
router.post('/', function(req, res, next) {
  var name = req.body.name;
  var phone_number = req.body.phone_number;
  var localtion = req.body.localtion;
  // var department = req.body.department;
  // var job = req.body.job;

  models.attendance.create({
    name: name,
    phone_number: phone_number,
    // department: department,
    // job: job
    localtion: localtion
  }).then(function(user) {
    res.render('attend_success', { title: 'customization' });
  }).catch(function(err) {
    console.log(err);
    res.render('attend_failed', { title: 'customization' });
  }).finally(function() {
    // finally gets called always regardless of
    // whether the promises resolved with or without errors.
    // however this handler does receive any arguments.
  });

});

module.exports = router;
