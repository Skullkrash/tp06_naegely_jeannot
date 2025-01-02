const { v4: uuidv4 } = require ("uuid");
const { ACCESS_TOKEN_SECRET }  = require ("../config.js");

const jwt = require('jsonwebtoken');

function generateAccessToken(user) {
  return jwt.sign(user, ACCESS_TOKEN_SECRET, { expiresIn: '365d' });
}

const users = [
  {
    id: uuidv4(),
    login: "a",
    password: "a",
  },
];

exports.login = (req, res) => {
  const { login, password } = req.body;
  const user = users.find(user => user.login == login && user.password == password);
  if (user) {
    const accessToken = generateAccessToken(user);
    res.status(200).send({ accessToken, userLogin: user.login });
  } else {
    res.status(404).send("login or password is incorrect");
  }
}

exports.register = (req, res) => {
  const { login, password, passwordConfirmation } = req.body;
  if (password !== passwordConfirmation) {
    res.status(404).send("Password and confirmation do not match");
  }
  const user = users.find(user => user.login == login);
  if (user) {
    res.status(404).send("Login already exists");
  } else {
    users.push({ id: uuidv4(), login, password });
    res.status(201).send("User created");
  }
}

exports.updateUserLogin = (req, res) => {
  const { login, newLogin } = req.body;
  const user = users.find(user => user.login == login);
  if (user) {
    user.login = newLogin;
    res.status(200).send("Login updated");
  } else {
    res.status(404).send("User not found");
  }
}

exports.updateUserPassword = (req, res) => {
  const { login, newPassword, newPasswordConfirmation } = req.body;
  const user = users.find(user => user.login == login);

  if (newPassword !== newPasswordConfirmation) {
    res.status(404).send("New password and confirmation do not match");
  }
  else if (user) {
    if (user.password === newPassword) {
      res.status(404).send("New password is the same as the old one");
    }
    user.password = newPassword;
    res.status(200).send("Password updated");
  } else {
    res.status(404).send("User not found");
  }
}