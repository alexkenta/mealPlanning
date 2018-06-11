const User = require('mongoose').model('User')

module.exports = {

    logReg(req, res){
        console.log("logreg auth.js", req.body)
        User.findOne({name: req.body.name}, function(err, existingUser){
            if(existingUser){
                completeLogin(req, res, existingUser)
            } else {
                User.create(req.body)
                .then(user => {
                    console.log("sucessfully added", user)
                    completeLogin(req, res, user)
                })
                .catch(error => console.log)
                    }
                })
        
    },

    getUser(req, res){
        User.findOne({_id: req.params.id}, function(err, user){
            if(err){
                console.log("couldn't find user")
                res.json(false)
            } else {
                console.log("found user", user)
                res.json(user)
            }
        })
       
    },

    logout(req, res){
        console.log("logging out");
        req.session.destroy();
        res.clearCookie('userID');
        res.clearCookie('expiration')
        res.json(true);
    },
}

function completeLogin (req, res, user){
    req.session.user = user.toObject();
    res.cookie('userID', user._id.toString());
    res.cookie('expiration', Date.now() + 864000 * 1000);
    res.json(user);
}