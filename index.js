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
// const handlecontactPage = (req, res) => {
//   // res.send("hello this is home page");
//   // find
//   const contactPageFilePath = path.join(__dirname, "public", "contact.html");
//   // send
//   res.sendFile(contactPageFilePath);
// };
// const handleservicesPage = (req, res) => {
//   const servicesPageFilePath = path.join(__dirname, "public", "services.html");
//   res.sendFile(servicesPageFilePath);
// };
// Routes
// server.get("/", handleHomePage);
// server.get("/about", handleAboutPage);
// server.get("/contact", handlecontactPage);
// server.get("/services", handleservicesPage);

server.listen(4000, () => console.log("Server ready")); // Port should be a number
