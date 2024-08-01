import express  from 'express';
import dotenv from "dotenv";

dotenv.config();

const app = express();

const port = process.env.PORT;

app.use(express.json())
app.use((req,res,next)=>{
    console.log('new request received');
    next();
})
app.get('/', (req,res)=> {
    console.log(req.body)
    res.send('hello')
})

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });