const mongoose = require('mongoose');

const WordSchema = new mongoose.Schema({
    tittle: String,
    tags:[],
    description:String,
    date: Date
})

module.exports = mongoose.models.Word ?? mongoose.model("Word", WordSchema);