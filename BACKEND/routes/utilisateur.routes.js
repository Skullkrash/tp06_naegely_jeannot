const { checkJwt }  = require('./jwtMiddleware');

module.exports = app => {
  const utilisateur = require("../controllers/utilisateur.controllers.js");

  let router = require("express").Router();

  // login user
  router.post("/login", utilisateur.login);

  // register user
  router.post("/register", utilisateur.register);

  // update user login
  router.post("/updateUserLogin", checkJwt, utilisateur.updateUserLogin);

  // update user password
  router.post("/updateUserPassword", checkJwt, utilisateur.updateUserPassword);

  app.use('/api/utilisateur', router);
};
