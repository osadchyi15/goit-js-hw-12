import { refs } from "./js/refs";


export function showMoreBtn() {
    refs.more.classList.remove('hidden');
};

export function hideMoreBtn() {
     refs.more.classList.add('hidden');
};

export function showLoader() {
    refs.loader.style.display = 'block';
}

export function hideLoader() {
    refs.loader.style.display = 'none';
}