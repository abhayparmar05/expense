const express  = require('express')
const app = express()
const port = 3000
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

app.use(express.json())

app.post('/addExpense',async(req,res)=>{
    const {title,amount,date} =req.body
    const parsedDate = new Date(date);
    if (isNaN(parsedDate)) {
        return res.status(400).send({ error: 'Invalid date format' });
    }
    try{
        const add = await prisma.expense.create({
            data: {
                title,
                amount,
                date: parsedDate,
            },
        });
        res.send(add).status(200)
    }
    catch(error){
        console.log(error)
        res.send(error).status(500)
    }
})
app.get("/listExpense",async (req,res)=>{
    try{
        const data =await prisma.expense.findMany()
        res.send(data).status(200)
    }catch(error){
        console.log(error)
        res.send(error).status(500)
    }
})

app.listen(port,()=>{
    console.log(`app run on port ${port}`)
})