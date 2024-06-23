import{a as w,i as d,S as g}from"./assets/vendor-c493984e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const m of a.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&s(m)}).observe(document,{childList:!0,subtree:!0});function r(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(t){if(t.ep)return;t.ep=!0;const a=r(t);fetch(t.href,a)}})();document.querySelector(".search-form"),document.querySelector(".search-input"),document.querySelector(".search-btn"),document.querySelector(".images-list");function S(e){return`<li class="images-list-item">
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
</li>`}function h(e){return e.map(S).join(`
`)}async function f(e,o,r){try{return(await w.create({baseURL:"https://pixabay.com"}).get("/api/",{params:{key:"44319460-4af2fb7eeaa8b0840083a4a49",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:r}})).data}catch{console.log(enterError("","api get error"))}}const i={imageSearchForm:document.querySelector(".search-form"),imageSearchInput:document.querySelector(".search-input"),submitButton:document.querySelector(".search-btn"),imageList:document.querySelector(".images-list"),loader:document.querySelector(".loader"),more:document.querySelector(".more-button"),upBtn:document.querySelector(".up-button")};function q(){i.imageSearchForm.scrollIntoView({behavior:"smooth"}),i.upBtn.setAttribute("hidden","")}function v(){window.scrollY>=300?i.upBtn.removeAttribute("hidden"):i.upBtn.setAttribute("hidden","")}let c,n=1,y=1;const p=15;i.imageSearchForm.addEventListener("submit",async e=>{if(e.preventDefault(),c=e.target.elements.userData.value.trim(),n=1,!c)return i.imageList.innerHTML="",u(),l(),d.info({message:"You need to enter search request!",position:"topRight",transitionIn:"bounceInDown",transitionOut:"fadeOutDown"});L(),u();const o=await f(c,n,p);if(o.hits.length===0)return i.imageList.innerHTML="",l(),d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",transitionIn:"bounceInDown",transitionOut:"fadeOutDown"});const r=h(o.hits);i.imageList.innerHTML=r,y=Math.ceil(o.totalHits/p),new g(".images-list-item a",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250,animationSpeed:300,widthRatio:1,heightRatio:.95,disableRightClick:!0}).refresh(),b(),l(),e.target.reset()});i.more.addEventListener("click",async()=>{n++,L(),u();const e=await f(c,n,p),o=h(e.hits);i.imageList.insertAdjacentHTML("beforeend",o),I(),new g(".images-list-item a",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250,animationSpeed:300,widthRatio:1,heightRatio:.95,disableRightClick:!0}).refresh(),b(n,y),l()});function b(e,o){e>=o?(u(),d.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",transitionIn:"bounceInDown",transitionOut:"fadeOutDown"})):D()}function D(){i.more.classList.remove("hidden")}function u(){i.more.classList.add("hidden")}function L(){i.loader.style.display="block"}function l(){i.loader.style.display="none"}function I(){const e=i.imageList.children[0].getBoundingClientRect().height;scrollBy({top:e*3+48,behavior:"smooth"})}window.addEventListener("scroll",v);i.upBtn.addEventListener("click",q);
//# sourceMappingURL=commonHelpers.js.map
