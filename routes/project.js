var models = require('../models');

exports.projectInfo = function(req, res) { 
  var projectID = req.params.id;

  models.Project.find({"_id": projectID}).exec(afterQuery);

  function afterQuery(err, projects) {
    if(err) console.log(err);
    res.json(projects[0]);
  }
}

exports.addProject = function(req, res) {
  var form_data = req.body;
  console.log(form_data);

  var newPost = new models.Project (form_data);

  newPost.save(afterSaving);

  function afterSaving (err) {
    if (err) 
      console.log(err);
    res.send();
  }

}

exports.deleteProject = function(req, res) {
  var projectID = req.params.id;

  models.Project.find({"_id":projectID}).remove().exec(afterRemove);

  function afterRemove (err) {
    if (err) 
      console.log(err);
    res.send();
  }

  // find the project and remove it
  // YOU MUST send an OK response w/ res.send();
}