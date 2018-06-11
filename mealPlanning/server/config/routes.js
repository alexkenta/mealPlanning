const usersController = require('../controllers/auth');
const recipeController = require('../controllers/recipes');

module.exports = function(app){
    app.get('/allRecipes', recipeController.index);
    app.get('/getOneRecipe/:userID', recipeController.show);
    app.post('/addNewRecipe', recipeController.create);

    app.get('/thisUser/:id', usersController.index);
    app.put('/addPlan/:recipeId/:dayOfWeek/:userId', usersController.update);
    app.put('/removeFromPlan/:userId/:day', usersController.toNull);

    app.post('/login', usersController.login);
    app.post('/register', usersController.register);
    app.delete('/logout', usersController.logout);
}