const express=require("express")
require('dotenv').config()
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const cors=require("cors")


const app=express();
app.use(bodyParser.json())
app.use(cors());


mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true
  })
  .then(() => {
    console.log("DB CONNECTED");
  })
  .catch((e)=>{
      console.log(e);
      console.log("DB NOT CONNECTED SUCCESFULLY");
  });


const contestantRoutes=require("./routes/contestant")
const userRoutes=require("./routes/user")
const authRoutes=require("./routes/auth")
const otpRoutes=require("./routes/otp")

app.use("/api",contestantRoutes)
app.use("/api",userRoutes)
app.use("/api",authRoutes);
app.use("/api",otpRoutes);




app.listen(5000,()=>{
    console.log(`app is running at ${5000}`)
})