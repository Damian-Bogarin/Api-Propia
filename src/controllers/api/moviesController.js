const db = require('../../database/models');
const sequelize = db.sequelize;


const moviesController = {
    create: (req, res) => {
       const { title, rating,awards,release_date,length, genre_id } = req.body
        //console.log(req.body)
       // return res.json(req.body)
        
        
         db.Movie.create({
            title,
            rating,
            awards,
            release_date,
            length,
            genre_id
        })
            .then( result => {
               return res.status(200).json({
                   result
               })
            }) 
    },
    delete: (req, res) =>{
        db.Movie.destroy({
            where:{
                id: req.params.id
            }
        })
        .then( result =>{
            return res.json(
                result
            )
        })
    }
    
}

module.exports = moviesController;