'use strict';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { renderImages } from "./js/render-functions";
import { getImages } from "./js/pixabay-api";

const refs = {
    imageSearchForm: document.querySelector('.search-form'),
    imageSearchInput: document.querySelector('.search-input'),
    submitButton: document.querySelector('.search-btn'),
    imageList: document.querySelector('.images-list'),
    loader: document.querySelector('.loader'),
}

refs.loader.style.display = 'none';

let request;

refs.imageSearchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    request = e.target.elements.userData.value;

    if (request.trim() === '') {
        refs.imageList.innerHTML = '';
        return iziToast.info({
            message: 'You need to enter search request!',
            position: 'topRight',
            transitionIn: 'bounceInDown',
            transitionOut: 'fadeOutDown',
        });
    }
const loader = document.querySelector('.loader')
        refs.loader.style.display = 'block';

    getImages(request)
        .then(images => {
            if (images.hits.length === 0) {
                refs.imageList.innerHTML = '';
                return iziToast.error({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: 'topRight',
                    transitionIn: 'bounceInDown',
                    transitionOut: 'fadeOutDown',
                });
            } else {
                renderImages(images);

                const lightbox = new SimpleLightbox('.images-list-item a', {
                        captions: true,
                        captionSelector: 'img',
                        captionType: 'attr',
                        captionsData: 'alt',
                        captionPosition: 'bottom',
                        captionDelay: 250,
                        animationSpeed: 300,
                        widthRatio: 1,
                        heightRatio: 0.95,
                        disableRightClick: true,
                    });
                    lightbox.refresh();
}            
        })
        .then(() => refs.loader.style.display = 'none')
        .catch(err => {
            console.log(err);
            refs.loader.style.display = 'none';
        });
    e.target.reset();
})
 