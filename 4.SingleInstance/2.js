/**
* 单例模式的应用场景
* 1. 数据库的连接池
* 2. 缓存是为了提高性能
*/

let express = require("express");
let fs = require("fs");
let bodyParser = require("body-parser");
let app = express();
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
let cache = {};

app.get("/user/:id", (req, res)=>{
  let id = req.params.id;
  let user = cache[id];
  if (user) {
    res.json(user);
  } else {
    fs.readFile(`./users/${id}.json`, "utf8", (err,data) => {
      if(err) return res.send({code: 404, msg: "no such user"});
      let user = JSON.parse(data);
      cache[id]  = user;
      res.json(user);
    })
  }
})

app.post("/user", (req, res) =>{
  let user = req.body;
  fs.writeFile(`./users/${user.id}.json`, JSON.stringify(user) , err => {
    res.json(user);
  })
})

app.listen(3000);