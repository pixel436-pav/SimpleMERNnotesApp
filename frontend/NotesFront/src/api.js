import axios from "axios";


const API_URL = 'http://localhost:2008/api/notes';

export const getNotes = () => axios.get(API_URL);

export const createNote = (note) => axios.post(API_URL,note);

export const updateNote = (id, updatedData) => axios.put(`${API_URL}/${id}`, updatedData)

export const deleteNote = (id) => axios.delete(`${API_URL}/${id}`)
