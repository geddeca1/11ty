const nunjucks = require("nunjucks");
const fs = require("fs");

fs.writeFile("index.html", nunjucks.render("index.njk"), function(err, data) {
  if (err) console.log(err);
  console.log("Compiled index.html.");
});
