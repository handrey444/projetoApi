import mongoose from "mongoose";

const pessoaSchema = new mongoose.Schema({
    
    nome : String,
    cpf : String,
    cidade : String,
    telefone: Number
    
})
export default mongoose.model ('Pessoa', pessoaSchema)