import { refs } from "./refs";

export function toTheTop() {
    refs.imageSearchForm.scrollIntoView({ behavior: 'smooth' });
    refs.upBtn.setAttribute('hidden', '');
}
    
export function checkScroll() {
        const scrollPosition = window.scrollY;
         if (scrollPosition >= 500) {

                refs.upBtn.removeAttribute('hidden');
            } else {

                refs.upBtn.setAttribute('hidden', '');
            }
        }