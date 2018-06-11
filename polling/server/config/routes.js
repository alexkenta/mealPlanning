const userController = require('../controllers/auth')
const pollController = require('../controllers/polls')

module.exports = function(app){
    app.post('/logReg', userController.logReg);
    app.get('/getUser/:id', userController.getUser);
    app.delete('/logout', userController.logout);

    app.post('/create', pollController.create);
    app.get('/allPolls', pollController.getAll);
    app.get('/getOne/:pollId', pollController.getOne);
    app.put('/vote/:pollId/:id', pollController.upVote);
}