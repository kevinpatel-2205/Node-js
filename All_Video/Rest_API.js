const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();

// this method use whan we can use browser request
// app.get("/users", (req, res) => {
//   const html=`<ul>
//   ${users.map((user)=>`<li>${user.first_name}</li>`).join("")}
//   </ul>`;
//     return res.send(html);
// });

// this is not a right way to write rather than we can use bellow code
// app.get("/api/users/:id", (req, res) => {
//     const  id=Number(req.params.id);
//     const user=users.find((user)=>user.id===id);
//   return res.json(user);
// });
// app.post("/api/users/:id",(req,res)=>{
//     return res.json({status:"pending"});
// });
// app.patch("/api/users/:id",(req,res)=>{
//     return res.json({status:"pending"});
// });
// app.delete("/api/users/:id",(req,res)=>{
//     return res.json({status:"pending"});
// });

// app
//   .route("/api/users/:id")
//   .get((req, res) => {
//     const id = Number(req.params.id);
//     const user = users.find((user) => user.id === id);
//     return res.json(user);
//   })
//   .patch((req, res) => {
//     // edit user with id
//     return res.json({ status: "pending" });
//   })
//   .delete((req, res) => {
//     // edit user with id
//     return res.json({ status: "pending" });
//   })
//   .post((req, res) => {
//     return res.json({ status: "pending" });
//   });


// we can set and retrive header
app.get("/api/users",(req,res)=>{
  res.setHeader("myName","Kevin Patel");
  console.log(req.headers);
  return res.json(users);
});


app.listen(8000, () => console.log("server is start !"));
