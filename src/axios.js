import axios from 'axios';


//Feature that helps fetch API
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

export default instance;