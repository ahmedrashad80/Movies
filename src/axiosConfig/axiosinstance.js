import axios from "axios";
const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key:'52ef927bbeb21980cd91386a29403c78', 
    language:'ar'
  }
});


export default axiosInstance;

