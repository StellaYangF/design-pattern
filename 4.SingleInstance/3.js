let express = require("express");
let bodyerParser = require("body-parser");
let fs = require("fs");
let app = express();
app.use(bodyerParser.urlencoded({ extended: true }));
app.use(bodyerParser.json());

let cache = {};
app.get("/user/:id", (req, res) => {
  let id = req.params.id;
  let user = cache[id];
  if (user) {
    res.json(user);
  }else {
    user = fs.readFile(`./users/${id}.json`, "utf8", (err, data) => {
      if (err) return res.send({ code: 404, msg: `No such user id ${id}.`});
      cache[id]  = JSON.parse(data);
      res.json(cache[id]);
    })
  }
})
app.post("/user", (req,res) => {
  let user = req.body;
  let id = user.id;
  fs.writeFile(`./users/${id}.json`, JSON.stringify(user), err => {
    res.json(user);
  })
})

app.listen(3000, ()=>{
  console.log("Server has started on port: 3000, press Ctrl + C to stop.")
})