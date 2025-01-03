const express = require("express");
const cors = require("cors");

const app  = express ();

const corsOptions = {
  origin: "*",
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  headers: 'Content-Type, Authorization',
  exposedHeaders:'Authorization'
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./routes/catalogue.routes")(app);
require("./routes/utilisateur.routes")(app);

// set port, listen for requests
const port = process.env.PORT || 8080;
const url = process.env.URL || 'http://localhost';
app.listen(port, () => {
  console.log(`Server is running on ${url}:${port}.`);
});
// const PORT =  443;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}.`);
// });
