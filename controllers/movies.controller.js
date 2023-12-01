const Movie = require('../models/movie.model');

exports.getMovies = async (req, res) => {
    try {
        const movies = await Movie.find();
        return res.status(200).json({
            msg: "Exito al consultar",
            data: movies
        });
    }catch (error) {
        return res.status(500).json({         
            msg: "Error al consultar",
            data: error
         
        });
    }
}

exports.getMovieById = async (req, res) => {
    const movieId = req.params.movieId;
    try {
        const movie = await Movie.findById(movieId);
        return res.status(200).json({
            msg: "Pelicula obtenida con exito",
            data: movie
        });
    }catch (error) {
        return res.status(500).json({         
            msg: "Error al consultar",
            data: error
         
        });
    }
}

exports.newMovie = async (req, res) => {
    try {
        const {name, director, year, duration, gender} = req.body;
        const newMovie = new Movie({
            name,
            director,
            year,
            duration,
            gender
        });
        await newMovie.save();
        return res.status(200).json({
            msg: "Pelicula creada con exito",
            data: newMovie
        });
    }catch (error) {
        return res.status(500).json({         
            msg: "Error al crear la Pelicula",
            data: error
         
        });
    }
}

exports.updateMovie = async (req, res) => {
    const movieId = req.params.movieId;
    const newDatos= req.body;
    try {
        const updateMovie =await Movie.findByIdAndUpdate(movieId, newDatos, {new: true});
        return res.status(200).json({
            msg: "Pelicula actualizada con exito",
            data: updateMovie
        });
    }catch (error) {
        return res.status(500).json({         
            msg: "Error al actualizar la pelicula",
            data: error
        });
    }
}

exports.deleteMovie = async (req, res) => {
    const movieId = req.params.movieId;
    try {
       await Movie.findByIdAndDelete(movieId);
        return res.status(200).json({
            msg: "Pelicula eliminada con exito",
        });
    }catch (error) {
        return res.status(500).json({         
            msg: "Error al eliminar la pelicula",
            data: error
        });
    }
}