import express from 'express'
import Note from "../models/notes.js";

const router = express.Router();

router.post('/notes', async (req,res) => {

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

router.get('/notes', async (req,res) => {
    try {
        const getNotes = await Note.find()
        res.json(getNotes)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
)

router.put('/notes/:id',async (req,res) => {
    
    try {
        const updatedNote = await Note.findByIdAndUpdate(req.params.id,
            {title: req.body.title,
            content : req.body.content

        },
        {new: true}
        
    )
    if (!updatedNote){
        return res.status(404).json({message: `Note Not Updated`})
    }
    res.json(updatedNote)

        
    } catch (error) {
        res.status(500).json({message: error.message})
    }

});

router.delete('/notes/:id',async (req,res) => {
  
    try {
        const noteDelete = await Note.findByIdAndDelete(req.params.id)
        res.json({message: `Note Deleted`})
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }



})

export default router;
