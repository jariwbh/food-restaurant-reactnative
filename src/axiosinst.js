import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://live.membroz.com/api',
    headers: {
        'Content-Type': 'application/json',
        'authkey': '5ece552879b40e583fa63927'
    }
});

export default instance;