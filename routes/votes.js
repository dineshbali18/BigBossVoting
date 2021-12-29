const express=require("express");
const router=express.Router()

const {
    getUserById,
  } = require("../controllers/user");

  const {
    decrementVotes,updateVotesOfAllUsers,loadUserVotes
  }=require("../controllers/votes")

  const {isSignedIn,isAuthenticated,isAdmin}=require("../controllers/auth")

router.param("userId",getUserById);

router.get("/user/:userId/loadvotes",isSignedIn,isAuthenticated,loadUserVotes);
router.get("/user/:userId/votes/decre",isSignedIn,isAuthenticated,decrementVotes);
router.get("/user/:userId/admin/user/updatevotes",isSignedIn,isAuthenticated,isAdmin,updateVotesOfAllUsers);

module.exports=router;