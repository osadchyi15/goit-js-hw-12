'use strict';
import axios from "axios";

export async function getImages(request, page, per_page) {
    try {
        const imagesApi = axios.create({
            baseURL: 'https://pixabay.com',
        })   
           const res = await imagesApi.get('/api/', {
               params: {
                key: '44319460-4af2fb7eeaa8b0840083a4a49',
                q: request,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: true,
                page: page,
                per_page: per_page,
            }
           })
            
             return res.data;
    } catch (error) {
        console.log(enterError('','api get error'));
    };
}