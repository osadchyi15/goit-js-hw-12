'use strict';


const refs = {
imageSearchForm: document.querySelector('.search-form'),
imageSearchInput: document.querySelector('.search-input'),
submitButton: document.querySelector('.search-btn'),
imageList: document.querySelector('.images-list'),
}

export function getImages(request) {
    const BASE_URL = 'https://pixabay.com';
    const END_POINT = '/api/';
    const PARAMS = new URLSearchParams({
        key: '44319460-4af2fb7eeaa8b0840083a4a49',
        q: request,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: 1,
        per_page: 30,
    });

    const url = `${BASE_URL}${END_POINT}?${PARAMS}`;
    console.log(url);

    const options = {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content - Type': 'application/json',

            'X-RateLimit-Limit': '100',
            'X-RateLimit-Remaining': '99',
            'X-RateLimit-Reset': '0.6',
    },
}

    return fetch(url)
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error(res.status);
                      }
        });
}

