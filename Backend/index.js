const express = require("express");
const app = express();
const port = 8080;

//const http = require("http").createServer(app);

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.listen(port, () => {
  console.log(`server running ${port}`);
});

app.get("/register", (req, res) => {
    let {user,password}=req.query;
  res.send(`GET req sent Welcome ${user}`);
});

app.post("/register", (req, res) => {
   
    let {user,password}=req.body;
  res.send(`POST req sent ${user} ${password} welcome !`);
});
