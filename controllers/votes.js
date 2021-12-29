const User = require("../models/user");

exports.decrementVotes=(req,res)=>{
    User.updateOne({_id:req.profile._id},{$inc:{votelimit:-1}})
    .exec((err,user)=>{
        if (err || !user) {
            return res.status(400).json({
              error: "decrement of votes not worked"
            });
          }
          res.end();
    })
}

exports.updateVotesOfAllUsers=(req,res)=>{
    User.updateMany({},{$set:{votelimit:10}}).exec((err,upda)=>{
        if (err) {
            return res.status(400).json({
              error: "decrement of votes not worked"
            });
          }
          res.end();
        
    })
}

exports.loadUserVotes=(req,res)=>{
  User.find({_id:req.profile._id}).exec((err,data)=>{
    if(err){
      return res.status(400).json({
        error: "load user votes not working"
      });
    }
    var remaining_votes=data[0].votelimit;
    return res.json({remaining_votes})
  })
}