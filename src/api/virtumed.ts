import axios from 'axios'
import { Auth } from '../helpers/Auth';

const token = Auth.token();

const api = axios.create({
    baseURL:'http://localhost:3333',
    headers: {'Authorization': 'Bearer '+ token}
})

api.interceptors.request.use((config: any) => {
    try {
      const token = localStorage.getItem("jwtLocalStorage");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    } catch (error: any) {
      console.log(error);
    }
  });
  
  export default api;