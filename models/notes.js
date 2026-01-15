import mongoose from "mongoose";
import { Schema } from "mongoose";

const noteSchema = new Schema({
    title:{
        type : String,
    },
    content:{
        type: String,
        required: true,
        trim : true,
        maxlength: 500,
        index: true
    },
    
},{timestamps:true})

const Note = mongoose.model('Note',noteSchema)

export default Note;
