import{a as w,S,i as d}from"./assets/vendor-c493984e.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const m of o.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&n(m)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();document.querySelector(".search-form"),document.querySelector(".search-input"),document.querySelector(".search-btn"),document.querySelector(".images-list");function q(e){return`<li class="images-list-item">
  <a class="img-link" href=${e.largeImageURL} onclick="event.preventDefault()"><img class="img" src=${e.webformatURL} alt=${e.tags}></img></a>
   <ul class="img-dscr">
      <li class="img-data">
        <p class="img-data-title">Likes</p>
        <p class="img-data-numbers">${e.likes}</p>
      </li>
      <li class="img-data">
        <p class="img-data-title">Views</p>
        <p class="img-data-numbers">${e.views}</p>
      </li>
      <li class="img-data">
        <p class="img-data-title">Comments</p>
        <p class="img-data-numbers">${e.comments}</p>
      </li>
      <li class="img-data">
        <p class="img-data-title">Downloads</p>
        <p class="img-data-numbers">${e.downloads}</p>
      </li>
    </ul>
</li>`}function g(e){return e.map(q).join(`
`)}async function h(e,r,a){try{return(await w.create({baseURL:"https://pixabay.com"}).get("/api/",{params:{key:"44319460-4af2fb7eeaa8b0840083a4a49",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:a}})).data}catch{console.log(enterError("","api get error"))}}const i={imageSearchForm:document.querySelector(".search-form"),imageSearchInput:document.querySelector(".search-input"),submitButton:document.querySelector(".search-btn"),imageList:document.querySelector(".images-list"),loader:document.querySelector(".loader"),more:document.querySelector(".more-button"),upBtn:document.querySelector(".up-button")};function v(){i.imageSearchForm.scrollIntoView({behavior:"smooth"}),i.upBtn.setAttribute("hidden","")}function I(){window.scrollY>=50?i.upBtn.removeAttribute("hidden"):i.upBtn.setAttribute("hidden","")}function B(){i.more.classList.remove("hidden")}function u(){i.more.classList.add("hidden")}function f(){i.loader.style.display="block"}function c(){i.loader.style.display="none"}let l,s=1,y=1;const p=15,b=new S(".images-list-item a",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250,animationSpeed:300,widthRatio:1,heightRatio:.95,disableRightClick:!0});i.imageSearchForm.addEventListener("submit",async e=>{if(e.preventDefault(),l=e.target.elements.userData.value.trim(),s=1,!l)return i.imageList.innerHTML="",u(),c(),d.info({message:"You need to enter search request!",position:"topRight",transitionIn:"bounceInDown",transitionOut:"fadeOutDown"});f(),u();const r=await h(l,s,p);if(r.hits.length===0)return i.imageList.innerHTML="",c(),d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",transitionIn:"bounceInDown",transitionOut:"fadeOutDown"});const a=g(r.hits);i.imageList.innerHTML=a,y=Math.ceil(r.totalHits/p),b.refresh(),L(),c(),e.target.reset()});i.more.addEventListener("click",async()=>{s++,f(),u();const e=await h(l,s,p),r=g(e.hits);i.imageList.insertAdjacentHTML("beforeend",r),D(),b.refresh(),L(s,y),c()});function L(e,r){e>=r?(u(),d.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",transitionIn:"bounceInDown",transitionOut:"fadeOutDown"})):B()}function D(){const e=i.imageList.children[0].getBoundingClientRect().height;scrollBy({top:e*3+48,behavior:"smooth"})}window.addEventListener("scroll",I);i.upBtn.addEventListener("click",v);
//# sourceMappingURL=commonHelpers.js.map
