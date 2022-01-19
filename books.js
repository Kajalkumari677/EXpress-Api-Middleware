const express = require("express");
const user = require("./MOCK_DATA.json");
const app = express();


app.use(homelogger);
//we can use express.json instead of logger

// app.use(express.json());
app.get("/", (req, res) => {
    console.log("homepage")
   return res.send("Homepage")
});

app.use(userlogger);

app.get("/users", (req, res) => {
    console.log("users")
    return res.send(user)
});




function homelogger(req, res,next)
{
    console.log("home before")
    next();
    console.log("home after")
    //next();

}

function userlogger(req,res,next)
{
    console.log("userlogger before");
    next();
    console.log("userlogger after");

}


app.listen(4567, () => {
    console.log("listening on port 4567");
})