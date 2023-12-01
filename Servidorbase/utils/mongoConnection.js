const mongoose = require('mongoose');

mongoose.connect(
    `mongodb+srv://root:ZuYoGBHHhgT4uVf8@cluster0.1kuqfxv.mongodb.net/movie-db?retryWrites=true&w=majority`
    )
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.log('Error al conectar a MongoDB: ' , err));


module.exports = mongoose;