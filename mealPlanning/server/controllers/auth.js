const User = require('mongoose').model('User')
const Recipe = require('mongoose').model('Recipe')
const bcrypt = require('bcrypt');


module.exports = {

    login(req, res){
        User.findOne({email: req.body.email.toLowerCase()})
        .then((user) => { 
            if (!user) {
                err = {error: "No user registered with that email"};
                res.status(401).json(err);
            }
            else if (!bcrypt.compareSync(req.body.password, user.password)) {
                res.status(402).json({error: "Password is incorrect"});
            }
            else {
                completeLogin(req, res, user)
            }
        })
        .catch((err) => { res.status(409).json(err); });
    },
    
    register(req, res){
        console.log('reg', req.body);
        User.create(req.body)
            .then(user => {
                completeLogin(req, res, user);            
            })
            .catch(error => console.log)
    },
    
    logout(req, res){
        console.log("logging out");
        req.session.destroy();
        res.clearCookie('userID');
        res.clearCookie('expiration')
        res.json(true);
    },

index(req, res){
    console.log("getting user", req.params)
    User.findOne({ _id: req.params.id}, function(err, user){
        if(err){
            console.log("SERVER.JS > get user", err)
            res.json(err)
        } else {
            console.log("SERVER.JS > GET USER successful", user)
            res.json(user)
        }
    });
},

// put route for adding a recipe to a mealplan specific day
update(req, res){
    console.log("add to meal plan")
    Recipe.findOne({_id: req.params.recipeId}, function(err, recipe){
        if(err){
            console.log("err finding recipe", err)
        } else {
            User.findOneAndUpdate({_id: req.params.userId},{[req.params.dayOfWeek]: recipe}, function(err){
                if(err){
                    console.log("error in edit addPlan", err)
                } else {
                    console.log("successfull edit")
                    res.json({message: "successful edit json"})
                }
            })
        }
    }) 
},

toNull(req, res){
    User.findByIdAndUpdate({_id: req.params.userId}, {[req.params.day]: null}, function(err){
        if(err){
            console.log(err)
            res.json(err)
        } else {
            console.log("successful update")
            res.json(true)
        }
    })
}

};

function completeLogin (req, res, user){
    req.session.user = user.toObject();
    delete req.session.user.password;

    res.cookie('userID', user._id.toString());
    res.cookie('expiration', Date.now() + 864000 * 1000);
    res.json(user);
}