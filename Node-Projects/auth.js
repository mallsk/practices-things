const express = require('express');
const jwt = require('jsonwebtoken')
const JWT_SECRET = "mallsloveself"
const app = express();

app.use(express.json());

let users = [];

app.post("/signup",(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    users.push({
        username : username,
        password : password
    })
    res.json({
        message : "Signed in"
    })
    console.log(users);
})


app.post("/signin",(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    let foundUser = null;
    for( let i =0; i < users.length; i++)
    {
        if(users[i].username == username && users[i].password == password)
        {
            foundUser = users[i];
        }
    }
    if(foundUser){
        const token = jwt.sign({
            username: username,
            password: password
        }, JWT_SECRET) ;

        // foundUser.token = token;
        res.json({
            token: token
        })
    } else {
        res.status(403).send({
            message: "Invalid username or password"
        })
    }
})

app.listen(3000);