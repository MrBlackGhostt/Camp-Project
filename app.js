const express = require('express');
const app = express();
const path = require('path')
const mongoose = require('mongoose')
const CampGround = require('./models/campground.js')

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost:27017/campGround', {useNewUrlParser:true})
.then(data=>
    console.log('CONNECT'))
    .catch(err=>{
        console.log(err);
    })

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'))

app.get('/', (req,res)=>{
    res.render('home')
})

app.get('/campground', async(req,res)=>{
    const camp = new CampGround({title:'first capm ground'})
    await camp.save();
    res.send(camp);
})



app.listen(3000, ()=>{
    console.log('Connecting successful');
})