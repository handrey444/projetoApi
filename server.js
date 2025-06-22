import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Pessoa from './pessoa.js'
dotenv.config();


const app = express();
const PORT = 3000; 
app.use(express.json());



const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Conexão concluída.")


    } catch (error) {
        console.log("Conexão ao mongoose deu errado.", error);


    }

}

app.post("/novapessoa",async (req,res)=>{
    try {
        const  novaPessoa = await Pessoa.create(req.body);
        res.json (novaPessoa);
    } catch (error) {
   
        res.json( error);
    }

})
app.get("/pessoas",async (req, res)=>{
   const pessoasLista = await Pessoa.find();
   res.json(pessoasLista);
})

app.put("/pessoas/:id", async (req,res)=>{

    try {
        
        const pessoaUpdate = await Pessoa.findByIdAndUpdate(req.params.id, req.body, {new:true});
        res.json(pessoaUpdate);
    } catch (error) {
        res.json( error)
    }
})
app.delete("pessoas/:id", async (req,res)=>{
    try {
      const pessoaExcluida = await  Pessoa.findByIdAndDelete(req.params.id);
      res.json(pessoaExcluida)
    } catch (error) {
        res.json(error)
    }
})


connectDB();
app.listen(PORT, ()=> console.log('Servidor rodando na porta:', PORT))