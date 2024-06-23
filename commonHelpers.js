import{a as S,i as d,S as h}from"./assets/vendor-c493984e.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function r(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(t){if(t.ep)return;t.ep=!0;const a=r(t);fetch(t.href,a)}})();document.querySelector(".search-form"),document.querySelector(".search-input"),document.querySelector(".search-btn"),document.querySelector(".images-list");function w(e){return`<li class="images-list-item">
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
</li>`}function f(e){return e.map(w).join(`
`)}async function y(e,i,r){try{return(await S.create({baseURL:"https://pixabay.com"}).get("/api/",{params:{key:"44319460-4af2fb7eeaa8b0840083a4a49",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:i,per_page:r}})).data}catch{console.log(enterError("","api get error"))}}const o={imageSearchForm:document.querySelector(".search-form"),imageSearchInput:document.querySelector(".search-input"),submitButton:document.querySelector(".search-btn"),imageList:document.querySelector(".images-list"),loader:document.querySelector(".loader"),more:document.querySelector(".more-button")};let c,s=1,p=1;const g=15;o.imageSearchForm.addEventListener("submit",async e=>{if(e.preventDefault(),c=e.target.elements.userData.value.trim(),s=1,!c)return o.imageList.innerHTML="",m(),l(),d.info({message:"You need to enter search request!",position:"topRight",transitionIn:"bounceInDown",transitionOut:"fadeOutDown"});L(),m();const i=await y(c,s,g);if(i.hits.length===0)return o.imageList.innerHTML="",l(),d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",transitionIn:"bounceInDown",transitionOut:"fadeOutDown"});const r=f(i.hits);o.imageList.innerHTML=r,p=Math.ceil(i.totalHits/g),new h(".images-list-item a",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250,animationSpeed:300,widthRatio:1,heightRatio:.95,disableRightClick:!0}).refresh(),b(),l(),e.target.reset()});o.more.addEventListener("click",async()=>{s++,L(),m();const e=await y(c,s,g),i=f(e.hits);o.imageList.insertAdjacentHTML("beforeend",i),D(),new h(".images-list-item a",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250,animationSpeed:300,widthRatio:1,heightRatio:.95,disableRightClick:!0}).refresh(),b(s,p),l(),console.log(s,p)});function b(e,i){e>=i?(m(),d.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",transitionIn:"bounceInDown",transitionOut:"fadeOutDown"})):q()}function q(){o.more.classList.remove("hidden")}function m(){o.more.classList.add("hidden")}function L(){o.loader.style.display="block"}function l(){o.loader.style.display="none"}function D(){const e=o.imageList.children[0].getBoundingClientRect().height;scrollBy({top:e*3+48,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
