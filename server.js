const express = require("express");
const path = require("path");
const routes = require("./src/routes")
const app = express();

const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.use("/api", routes)

app.listen(PORT, () => {
  console.log("Serveur demarré sur http://localhost:3000");
});
 
module.exports = app;
