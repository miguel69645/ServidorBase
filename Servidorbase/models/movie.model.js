const mongoose = require('mongoose');

let movieSchema = new mongoose.Schema({
    name:{type:String},
    director:{type:String},
    year:{type:Number},
    duration:{type:Number},
    gender:{type:String},
});

module.exports = mongoose.model('Movie', movieSchema, 'movie');