require('dotenv').config();
const path = require('path');
const { urlencoded } = require('express');
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const User = require('./database/usermodel');
const allUsers = require('./tempFiles/allUsers');
const connectDB = require('./database/mongo');


connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());



app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));


app.post("/registerAllUserToDatabase", (req, res)=>{    
        User.insertMany(allUsers)
        .then(users=>{
            res.status(200).json({
                success: "true",
                users
            });
        }).catch(err=>{
            console.log(err.message);
            res.json({
                message: "failed"
            })
        });
});

app.delete("/deleteAllUsersFromDatabase", async(req, res)=>{
    try {
            await User.collection.drop();
            res.status(200).json({
            success: "true"
        });
    }
    catch(err) {
        console.log("ERROR WHILE DELETION...");
        console.log(err.message);
        res.status(400).json({
            message: "failed"
        })
    }
})

app.put("/RestartDatabase", async(req, res)=>{
    try {
        const users = await User.find({});
        users.forEach(async user=>{
            await User.findByIdAndUpdate(user._id, {loginCount:0,token:null})
        });
        res.status(200).json({
            success: "true",
            message:"Database Restart Successfully"
        });
    }catch(err) {
        console.log("Error Occured While Restarting Database");
        console.log(err);

        res.status(400).json({
            success:"false",
            message: err.message
        })
    }
})


app.get("/", (req,res, next)=>{
    res.render('index.ejs')
})

app.post("/yrtbsdf6529m7hdsfjh", async(req, res, next)=>{
    const {teamName, teamId} = req.body;
    const myuser = await User.findOne({teamId});

    if(!myuser) {
        return res.status(401).json({
            success:false,
            message:"TeamId does not Exists !!!"
        })
    }

    if(teamId === "RIDDLES" || myuser.loginCount===0) {
        const token = await jwt.sign({teamName, teamId}, process.env.JSON_WEB_TOKEN_SECRET_KEY, {
            expiresIn:"48h"
        });

        myuser.loginCount = 1;
        myuser.token = token;
        await myuser.save();

        res.cookie('permission','aqwertyumn',{
            httpOnly:false,
            expires: new Date(
                Date.now()+2*24*60*60*1000
            )
        })
        res.status(200).cookie('codewalkerztokenhere', token, {
            httpOnly:false,
            expires: new Date(
                Date.now()+2*24*60*60*1000
            ),
        }).json({
            success:true
        })
    } 
    else{    
        const cookieToken = req.cookies.codewalkerztokenhere;
        if(cookieToken === myuser.token) {
            res.status(200).json({
                success:true
            })
        } else {
            res.status(403).json({
                success:false,
                message:"User is already loggedIn in other device."
            });
        }
    }
});

app.get("/ufhsnvrjroxm934", (req, res)=>{
    const pageNo = req.cookies.permission;

    if(pageNo[0] >= 'a')
        res.render('firstPage');
})

app.get("/uhhdfnskhd6632", (req, res)=>{
    const pageNo = req.cookies.permission;  

    if(pageNo[0] >= 'b')
        res.render('secondPage');
})

app.get("/ufdxuth897jhdhf", (req, res)=>{
    const pageNo = req.cookies.permission;

    if(pageNo[0] >= 'c')
    res.render('birdPage');
});

app.get("/unfhshdhbmsdfdsh", async(req, res)=>{
    const pageNo = req.cookies.permission;

    if(pageNo[0] >= 'd')
    res.render('forthPage');
}); 

app.get("/ufhsdhbfdhshn33434",async (req, res)=>{
    const token = req.cookies.codewalkerztokenhere;
    const user = await jwt.verify(token, process.env.JSON_WEB_TOKEN_SECRET_KEY);
    const {teamId} = user;

    const pageNo = req.cookies.permission;

    if(pageNo[0] === 'e')
        res.render('finalPage', {teamId});
});

app.get("/clearCookie", async(req, res)=>{
    res.status(200).cookie('codewalkerztokenhere', undefined, {
        expires: new Date(Date.now()),
        httpOnly: true
    }).json({
        success: true,
        message: "cookie cleared"
    });
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Running on port http://localhost:${PORT}`);
});


// https://firstproj1234.onrender.com/thirdPage