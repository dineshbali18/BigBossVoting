const express=require("express");
const router=express.Router();
const {createContestant, increVotes, getContestantById,getContestantIdByName,getAllContestants}=require("../controllers/contestant")

router.param("contestantId",getContestantById)

router.post("/contestant/create",createContestant)

router.put("/contestant/incre/:contestantId",increVotes)
router.post("/nominations/contestant",getContestantIdByName)
router.get("/all/contestants",getAllContestants)


module.exports=router;