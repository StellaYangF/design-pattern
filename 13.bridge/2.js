let express = require("express");
let path  = require("path");
let app = express();

app.get("/", function(req,res) {
  res.sendFile(path.join(__dirname, "2.html"));
})

app.get('/user/:id', (req,res) => {
  let id = req.params.id;
  res.json({
    id,
    name: "stella" + id
  })
})

app.listen(8080);