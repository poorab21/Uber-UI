const express = require('express');
const mysql = require('mysql');
const crypto = require('crypto');
const app = express();
const db = require('./database');
const jwt = require('jsonwebtoken');

app.use(express.json());

let salt = 'f844b09ff50c';

const Exists = (db,email) => {
    for(var i = 0 ; i < db.length ; i++ ){
        if(db[i].email === email) return db[i].password;
    }
    return false;
}

app.post('/register',(req,res)=>{
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;
    console.log(Exists(db,email));
    if(Exists(db,email)) res.json({ err : 'Email with same name already exists ! Please use another name for email' }).end();
    else {
        const hashedPassword = crypto.pbkdf2Sync(password,salt,1000,64,'sha256').toString('hex');
        db.push(
        {
            firstname : firstname ,
            lastname : lastname ,
            email : email ,
            password : hashedPassword
        });
        res.json({
            msg : 'Registration Successful'
        }).end();
    }              
});

app.post('/login',(req,res) => {
    const email = req.body.email;
    const password = req.body.password;
    if(Exists(db,email)){
        const storedPassword = Exists(db,email);
        const hashedPassword = crypto.pbkdf2Sync(password,salt,1000,64,'sha256').toString('hex');
        if(hashedPassword === storedPassword){
            const token = jwt.sign({ email },'Poorab',{ expiresIn : '1d'})
            res.json({ token : token }).end();     
        }
        else {
            res.json({ err : 'Invalid Password'}).end();
        }
    }   
    else {
        res.json({ err : 'You are not Registered' }).end();
    } 
})

app.listen(3000 , () => {
    console.log('Server running succesfully');
})