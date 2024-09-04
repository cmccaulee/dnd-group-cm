import axios from 'axios';

const http = axios.create({
    "baseURL": "http://localhost:8000/api/notes",
})

const NoteService = {
    "getAll": async (campaign) => {
        try {
            const endPoint = campaign ? `/campaign/${campaign}` : '/';
            const response = await http.get(endPoint);
            return response.data
        }
        catch (error) { throw error }
    },
    "create": async (note) => {
        try {
            const response = await http.post('/', note);
            return response.data
        }
        catch (error) { throw error }
    },
    "getOne": async (id) => {
        try {
            const response = await http.get(`/${id}`);
            return response.data;
        } catch (error) { throw error }
    },
    "update": async (id, note) => {
        try {
            const response = await http.put(`/${id}`, note);
            return response.data;
        } catch (error) { throw error }
    },
    "delete": async (id) => {
        try {
            const response = await http.delete(`/${id}`);
            return response.data;
        } catch (error) { throw error }
    }
}
export default NoteService