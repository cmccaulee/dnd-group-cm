import axios from 'axios';

const http = axios.create({
    "baseURL": "http://localhost:8000/api/campaigns",
})

const CampaignService = {
    "getAll": async (user) => {
        try {
            const endPoint = user ? `/user/${user}` : '/';
            const response = await http.get(endPoint);
            return response.data
        }
        catch (error) { throw error }
    },
    "create": async (campaign) => {
        try {
            const response = await http.post('/', campaign);
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
    "update": async (id, campaign) => {
        try {
            const response = await http.put(`/${id}`, campaign);
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
export default CampaignService;