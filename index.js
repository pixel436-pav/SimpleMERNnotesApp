import express from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

//JSON parsing middleware (provided by express)
app.use(express.json());
const PORT = process.env.PORT || 2008

app.listen(PORT,() => {

console.log(`App Is Listening on PORT ${PORT}`)

})

app.get('/',(req,res,next) => {
    
    res.status(200).json({"Description": `Hello, this is a MERN Project `})
    
})