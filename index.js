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
        const users = await User.find({});
        users.forEach(async user=>{
            await User.findByIdAndDelete(user.id);
        });
        res.status(200).json({
            success: "true"
        });
    }catch(err) {
        console.log("ERROR WHILE DELETION...");
        console.log(err.message);
        res.status(400).json({
            message: "failed"
        })
    }
})


app.get("/", (req,res, next)=>{
    res.render('index');
})

app.post("/yrtbsdf6529m7hdsfjh", async(req, res, next)=>{
    const {teamName, teamId} = req.body;
    const myuser = await User.findOne({teamId});
    if(!myuser) {
        return res.status(200).render('index');
    }
    if(myuser.loginCount===0) {
        const token = await jwt.sign({teamName, teamId}, "codewalkerzJsonWebTokenForUser", {
            expiresIn:"2d"
        });
        myuser.loginCount = 1;
        myuser.token = token;
        await myuser.save();
        res.status(200).cookie('codewalkerztokenhere', token, {
            httpOnly:true,
            expires: new Date(
                Date.now()+24*60*60*1000
            ),
        }).render('firstPage');
    } else {    
        const cookieToken = req.cookies.codewalkerztokenhere;
        if(cookieToken===myuser.token) {
            res.status(200).render('firstPage');
        } else {
            res.status(400).render('index');
        }
    }
});

app.get("/uhhdfnskhd6632", (req, res)=>{
    res.render('secondPage');
})

app.get("/ufdxuth897jhdhf", (req, res)=>{
    res.render('birdPage');
});

app.get("/unfhshdhbmsdfdsh", (req, res)=>{
    res.render('forthPage');
});


app.get("/ufhsdhbfdhshn33434",async (req, res)=>{
    const token = req.cookies.codewalkerztokenhere;
    const user = await jwt.verify(token, "codewalkerzJsonWebTokenForUser");
    const {teamId} = user;
    res.render('finalPage', {teamId});
});

app.get("/lastPage",async(req, res, next)=>{
    const token = req.cookies.codewalkerztokenhere;
    const user = await jwt.verify(token, "c2o0d2e3walkerz");
    console.log(user['teamName']);
    res.status(200).json({
        user
    });
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
    console.log(`Running on port ${PORT}`);
});


// https://firstproj1234.onrender.com/thirdPage