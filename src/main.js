'use strict';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { renderImages } from "./js/render-functions";
import { getImages } from "./js/pixabay-api";
import { checkScroll, toTheTop } from "./js/scroll-to-the-top";
import { refs } from "./js/refs";
import { hideLoader, hideMoreBtn, showLoader, showMoreBtn } from "./hide-show-button-loader";

let request;
let page = 1;
let maxPage = 1;
const per_page = 15;

const lightbox = new SimpleLightbox('.images-list-item a',{
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
                    

refs.imageSearchForm.addEventListener('submit', async e => {
    e.preventDefault();

    request = e.target.elements.userData.value.trim();
    page = 1;

        if (!request) {
            refs.imageList.innerHTML = '';
            hideMoreBtn();
            hideLoader();
        return iziToast.info({
            message: 'You need to enter search request!',
            position: 'topRight',
            transitionIn: 'bounceInDown',
            transitionOut: 'fadeOutDown',
        });
        }
        
    showLoader();
    hideMoreBtn();

    const data = await getImages(request, page, per_page);
     if (data.hits.length === 0) {
         refs.imageList.innerHTML = '';
         hideLoader();
            return iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight',
                transitionIn: 'bounceInDown',
                transitionOut: 'fadeOutDown',
            });
        }
   
    const markup = renderImages(data.hits);
    refs.imageList.innerHTML = markup;

    maxPage = Math.ceil(data.totalHits / per_page);

    lightbox.refresh();
     
    checkBtnStatus();
    hideLoader();

    e.target.reset();
   });
      
refs.more.addEventListener('click', async () => {
    page++;
    showLoader();
    hideMoreBtn();
    const data = await getImages(request, page, per_page);
    const markup = renderImages(data.hits);
    refs.imageList.insertAdjacentHTML('beforeend', markup);
    
    skipPrewElem();
    
            lightbox.refresh();

        checkBtnStatus(page, maxPage);
    hideLoader();
   })
     
function checkBtnStatus(page, maxPage) {
          if (page >= maxPage) {
        hideMoreBtn();
        iziToast.info({
            message: "We're sorry, but you've reached the end of search results.",
            position: 'topRight',
            transitionIn: 'bounceInDown',
            transitionOut: 'fadeOutDown',
        });
    } else {
        showMoreBtn();
    }
}
 
function skipPrewElem() {
    const height = refs.imageList.children[0].getBoundingClientRect().height;

    scrollBy({
        top: height * 3 + 48,
        behavior: 'smooth',
    })
}
    
window.addEventListener('scroll', checkScroll);
refs.upBtn.addEventListener('click', toTheTop);

    