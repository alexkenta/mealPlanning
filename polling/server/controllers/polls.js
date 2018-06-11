const Poll = require('mongoose').model('Poll')

module.exports = {

    create(req, res){
        console.log("Polls.js>req.body",req.body)
        const poll = new Poll({
            question: req.body.question,
            optOne: {response: req.body.optOne, score: 0},
            optTwo: {response: req.body.optTwo, score: 0},
            optThree: {response: req.body.optThree, score: 0},
            optFour: {response: req.body.optFour, score: 0},
            createdBy: req.body.createdBy
        })
        poll.save(function(err){
            if(err){
                console.log("SERVER.JS > error saving", err)
                res.json(err)
            } else {
                console.log("SERVER.JS > successful save")
                res.json({message: "success"})
            }
        })
    },

    getAll(req, res){
        Poll.find({}, function(err, allPolls){
            if(err){
                res.json(err)
            } else {
                res.json(allPolls)
            }
        })
    },

    getOne(req, res){
        console.log("params Id", req.params.pollId)
        Poll.findOne({_id: req.params.pollId}, function(err, thisPoll){
            if(err){
                res.json(err)
            } else {
                res.json(thisPoll)
                console.log("got the poll!!!!", thisPoll)
            }
        })
    },

    upVote(req, res){
        console.log("should be opt",req.params.id, "should be poll id",req.params.pollId)
        // thisResponse = req.params.pollId[0]
        // upVoteNow = thisResponse.score += 1;
        responseObject = req.params.pollId
        Poll.findOne({_id: req.params.id},function(err, upvotedPoll){
            if(err){
                console.log(err)
                res.json(err);
            } 
                
            console.log("give me poll",upvotedPoll[responseObject])
            upvotedPoll[responseObject].reponse += 1
            console.log(upvotedPoll)
            
            upvotedPoll.save(function(err, updatedPoll){
                if(err){
                    console.log(err)
                    res.json(true)
                } else {
                    console.log("success", upvotedPoll)
                    console.log("success")
                    res.json(true)
                }
            })
            // console.log(upVote)
            
            
                
            
        })
    }
    
}