const express = require("express");
const path = require("path");

const server = express(); // No need for an argument

// Middleware definitions
server.use(express.static(path.join(__dirname, "public")));

// route request handler

// manual////////////////////////////////
////////////////////////////////////

// const handleHomePage = (req, res) => {
//   // res.send("hello this is home page");
//   // find
//   const homePageFilePath = path.join(__dirname, "public", "index.html");
//   // send
//   res.sendFile(homePageFilePath);
// };
// const handleAboutPage = (req, res) => {
//   // res.send("hello this is home page");
//   // find
//   const aboutPageFilePath = path.join(__dirname, "public", "about.html");
//   // send
//   res.sendFile(aboutPageFilePath);
// };
// const handleProductPage = (req, res) => {
//   // res.send("hello this is home page");
//   // find
//   const productPageFilePath = path.join(__dirname, "public", "product.html");
//   // send
//   res.sendFile(productPageFilePath);
// };
// const handleTeamPage = (req, res) => {
//   const teamPageFilePath = path.join(__dirname, "public", "team.html");
//   res.sendFile(teamPageFilePath);
// };
// Routes
// server.get("/", handleHomePage);
// server.get("/about", handleAboutPage);
// server.get("/product", handleProductPage);
// server.get("/team", handleTeamPage);

server.listen(4000, () => console.log("Server ready")); // Port should be a number
