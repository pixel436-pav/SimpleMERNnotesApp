import React from 'react'
import { useState, useEffect } from 'react';
import { getNotes, createNote } from './api.js';
import { deleteNote , updateNote } from './api.js';

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // Fetch notes when the app loads
  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await getNotes();
      setNotes(response.data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!title || !content) {
      alert('Please fill in both title and content!');
      return;
    }

    try {
      await createNote({ title, content });
      setTitle('');  // Clear the form
      setContent('');
      fetchNotes();  // Refresh the list
    } catch (error) {
      console.error('Error creating note:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteNote(id); // calls Api to Delte Note
      fetchNotes(); // Refresh the Notes list
    } catch (error) {
      console.error('Error Deleting Note', error)
    }
    
  }
  

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', maxWidth: '800px', margin: '0 auto' }}>
      <h1>My Notes App</h1>
      
      {/* Form to create new notes */}
      <form onSubmit={handleSubmit} style={{ marginBottom: '30px', padding: '20px', border: '2px solid #4CAF50', borderRadius: '8px' }}>
        <h2>Create New Note</h2>
        
        <div style={{ marginBottom: '10px' }}>
          <input 
            type="text" 
            placeholder="Title" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ 
              width: '100%', 
              padding: '10px', 
              fontSize: '16px',
              border: '1px solid #ddd',
              borderRadius: '4px'
            }}
          />
        </div>
        
        <div style={{ marginBottom: '10px' }}>
          <textarea 
            placeholder="Content" 
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows="4"
            style={{ 
              width: '100%', 
              padding: '10px', 
              fontSize: '16px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              resize: 'vertical'
            }}
          />
        </div>
        
        <button 
          type="submit"
          style={{ 
            padding: '10px 20px', 
            fontSize: '16px', 
            backgroundColor: '#4CAF50', 
            color: 'white', 
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Add Note
        </button>
      </form>

      {/* Display all notes */}
      <h2>All Notes ({notes.length})</h2>
      
      <div>
        {notes.length === 0 ? (
          <p style={{ color: '#666' }}>No notes yet. Create your first note above!</p>
        ) : (
          notes.map(note => (
            <div 
              key={note._id} 
              style={{ 
                border: '1px solid #ddd', 
                padding: '15px', 
                margin: '10px 0',
                borderRadius: '5px',
                backgroundColor: '#f9f9f9'
              }}
            >
              <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>{note.title}</h3>
              <p style={{ margin: '0', color: '#666' }}>{note.content}</p>

              <button onClick={()=>handleDelete(note._id)} style={{
      padding: '5px 10px',
      backgroundColor: '#f44336',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      marginTop: '10px'
    }} >Delete</button>

            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;