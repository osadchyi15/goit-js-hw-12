import { refs } from "./refs";

export function toTheTop() {
    refs.imageSearchForm.scrollIntoView({ behavior: 'smooth' });
    refs.upBtn.setAttribute('hidden', '');
}
    
export function checkScroll() {
            if (window.scrollY >= 50) {

                refs.upBtn.removeAttribute('hidden');
            } else {

                refs.upBtn.setAttribute('hidden', '');
            }
        }