const express = require('express')
const app = express()
const bodyParser=require("body-parser");
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname+"/public"));
let items=["Buy food", "cook food"];
let workItems=[];

app.get("/", (req, res) => {

  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  var today  = new Date();

  console.log(today.toLocaleDateString("en-US")); // 9/17/2016

  res.render("list", {kindOfDay: today ,kindOfMission: items});
})

app.post('/', (req, res) => {

let item=req.body.fn;
if (req.body.list ==="Work") {
  workItems.push(item);
  res.redirect("/work");
} else {
   items.push(item);
   res.redirect("/");
}


  });

app.get("/work", (req, res) => {
res.render("list", {kindOfDay: "Work List" ,kindOfMission: workItems});
});

app.get("/about", (req, res) => {
res.render("about");
});

app.listen(3000, function () {
  console.log(`Example app listening on port 3000`)
});
