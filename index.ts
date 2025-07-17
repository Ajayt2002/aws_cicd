import express  from "express";
import cors from "cors";

const app=express();

// middleware
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.json("Hi there")
})
app.get("/users",(req,res)=>{
    res.json("Ajay you first deplyoment is completed")
})

app.listen(process.env.PORT,()=>{
    console.log("Server is Running......")
})
