import React from 'react'
import { useState, useEffect } from 'react';
import { getNotes, createNote, deleteNote, updateNote } from './api.js';


function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editingId, setEditingId] = useState(null);

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
      if (editingId) {
        // We're editing an existing note
        await updateNote(editingId, { title, content });
        setEditingId(null);  // Clear editing mode
      } else {
        // We're creating a new note
        await createNote({ title, content });
      }

      setTitle('');
      setContent('');
      fetchNotes();
    } catch (error) {
      console.error('Error saving note:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteNote(id); // calls Api to Delte Note
      fetchNotes(); // Refresh the Notes list
    } catch (error) {
      console.error('Error Deleting Note', error)
    }

  };

  const handleEdit = (note) => {
    setTitle(note.title); // Fill the title Input
    setContent(note.content); // fill the content Input
    setEditingId(note._id) // Rember which note you were editing
  };

  const handleCancel = () => {
    setTitle('');
    setContent('');
    setEditingId(null);
  };


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

        <button type="submit" style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>
          {editingId ? 'Update Note' : 'Add Note'}
        </button>

        {editingId && (
          <button
            type="button"
            onClick={handleCancel}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: '#999',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              marginLeft: '10px'
            }}
          >
            Cancel
          </button>
        )}
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

              <button
                onClick={() => handleEdit(note)}
                style={{
                  padding: '5px 10px',
                  backgroundColor: '#2196F3',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  marginTop: '10px',
                  marginRight: '10px'
                }}
              >
                Edit
              </button>


              <button onClick={() => handleDelete(note._id)} style={{
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