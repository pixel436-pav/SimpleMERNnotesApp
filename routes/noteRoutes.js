import express from 'express'
import Note from "../models/notes.js";

const router = express.Router();

router.post('/notes', async (req,res,next) => {

    try {
        const newNote = new Note({
            title: req.body.title,
            content: req.body.content
        })
        await newNote.save();
        res.json(newNote);
    
        
    } catch (error) {
        res.status(500).json({message: error.message});
    }
  
})

router.get('/notes', async (req,res,next) => {
    try {
        const notes = await Note.find()
        res.json(notes)
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
)

router.delete('/notes/:id',async (req,res,next) => {
  
    try {
        const noteDelete = await Note.findByIdAndDelete(req.params.id)
        res.json({message: `Note Deleted`})
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }



})

export default router;
