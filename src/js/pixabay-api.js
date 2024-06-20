'use strict';

import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com';

export async function getImages(request) {
    try {
        const res = await axios.get('/api', {
            params: {
                key: '44319460-4af2fb7eeaa8b0840083a4a49',
                q: request,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: true,
                page: 1,
                per_page: 15,
            }
        
        })
        return res.data;
    } catch (error) {
        console.log(error);
    };
}