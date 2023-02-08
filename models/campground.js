const mongoose = require('mongoose')
const Schema = mongoose.Schema



const campSchema = new Schema ({
    title:String,
    price:Number,
    description:String,
  location:String
})
module.exports = mongoose.model('CampGround', campSchema)