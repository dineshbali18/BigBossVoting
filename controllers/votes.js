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

exports.sendNameWithPercentages=(req,res)=>{
  Contestant.find().exec((err,contestan)=>{
    if(err){
      return res.status(400).json({
        error:"Unable to Fetch your req at this Time"
      })
    }
    var total_votes=0;
        var Percentagesarr=[]
        var conteName=[]
         contestan.map((conte,index)=>{
           conteName.push(conte.name)
           total_votes+=conte.votes;
         })
         contestan.map((conte,index)=>{
          var tmp_contestant_per=((conte.votes)/total_votes)*100;
          Percentagesarr.push(tmp_contestant_per);
        })
        res.send({conteName,Percentagesarr})
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
