import * as axios from 'axios';

const instance =  axios.create({

    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'f0fe7918-e0d7-4ecb-bead-7ac67421be9e'
    }
});

export const usersAPI = {
    getUsers(currentPage =1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data;
        });
    }
}    



 