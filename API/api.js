const express = require("express");
const app = express();
const usersRoute = require("./v1/users");
const coursesRoute = require("./v1/courses");

// Static url endpoint for future version updates
const API_ENDPOINT = `/api/v1`;

// Default page (API documentation using docsify)
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

// Enable routes to be used in main app
app.use(`${API_ENDPOINT}/users`, usersRoute);
app.use(`${API_ENDPOINT}/courses`, coursesRoute);

// Redirects any invalid pages back to the index
app.use((req, res, next) => {
  res.status(404).redirect("/");
});

// Setup port
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is up and running on port: ${PORT}`);
});
