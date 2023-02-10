

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", () => {
//     console.log("Database connected");
// });



const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
// const methodOverride = require('method-override');
const Campground = require('./models/campground');
mongoose.set('strictQuery',true);

mongoose.connect('mongodb://https://0.0.0.0:27017/yelp-camp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log(adauhdah);
}).catch(err => {
    console.log("Error, MONGO CONNECTION!!!!")
    console.log(err)
});
const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride('_method'));


app.get('/', (req, res) => {
    res.render('home')
});

app.get('/campground', async(req,res)=>{
    const camp = new Campground({title:'first capm ground'})
    await camp.save();
    res.send(camp);
})



app.listen(3000, ()=>{
    console.log('Connecting successful');
})