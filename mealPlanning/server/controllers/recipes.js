const Recipe = require('mongoose').model('Recipe');

module.exports = {
    index(req, res){
        Recipe.find({}, function (err, recipes){
            if(err){
                console.log("SERVER.JS > Error retrieving recipes")
                res.json(err)
            } else {
                console.log("SERVER JS > successfully retrieved recipes")
                res.json(recipes)
            }
        })
    },
    
    show(req, res){
        console.log("before search for one recipe",req.params)
        Recipe.findOne({_id: req.params.userID}, function(err, thisRecipe){
            if(err){
                console.log("SERVER.JS > error retrieving one recipe")
                res.json(err)
            } else {
                console.log("SERVER.JS > successfully retrieved one recipe")
                res.json(thisRecipe)
            }
        })
    },
    
    create(req, res){
        console.log("SERVER.JS > add recipe: ", req.body)
        const recipe = new Recipe ({
            name: req.body.name,
            difficulty: req.body.difficulty,
            method: req.body.method.split("\n"),
            ingredients: req.body.ingredients.split(",")
        })
        recipe.save(function(err){
            if(err){
                console.log("SERVER.JS > error saving", err)
                res.json(err)
            } else {
                console.log("SERVER.JS > successful save")
                res.json({message: "success"})
            }
        })
    }
}