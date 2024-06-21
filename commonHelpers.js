import{a as c,i as u,S as m}from"./assets/vendor-c493984e.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function r(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(t){if(t.ep)return;t.ep=!0;const a=r(t);fetch(t.href,a)}})();const d={imageSearchForm:document.querySelector(".search-form"),imageSearchInput:document.querySelector(".search-input"),submitButton:document.querySelector(".search-btn"),imageList:document.querySelector(".images-list")};function p(s){const e=s.hits.map(r=>`<li class="images-list-item">
  <a class="img-link" href=${r.largeImageURL} onclick="event.preventDefault()"><img class="img" src=${r.webformatURL} alt=${r.tags}></img></a>
   <ul class="img-dscr">
      <li class="img-data">
        <p class="img-data-title">Likes</p>
        <p class="img-data-numbers">${r.likes}</p>
      </li>
      <li class="img-data">
        <p class="img-data-title">Views</p>
        <p class="img-data-numbers">${r.views}</p>
      </li>
      <li class="img-data">
        <p class="img-data-title">Comments</p>
        <p class="img-data-numbers">${r.comments}</p>
      </li>
      <li class="img-data">
        <p class="img-data-title">Downloads</p>
        <p class="img-data-numbers">${r.downloads}</p>
      </li>
    </ul>
</li>`).join(`
`);d.imageList.innerHTML=e}async function g(s){try{c.defaults.baseURL="https://pixabay.com";const e=await c.get("/api",{params:{key:"44319460-4af2fb7eeaa8b0840083a4a49",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:15}});return console.log(e.data),e.data}catch(e){console.log(e)}}const i={imageSearchForm:document.querySelector(".search-form"),imageSearchInput:document.querySelector(".search-input"),submitButton:document.querySelector(".search-btn"),imageList:document.querySelector(".images-list"),loader:document.querySelector(".loader")};i.loader.style.display="none";let n;i.imageSearchForm.addEventListener("submit",s=>{if(s.preventDefault(),n=s.target.elements.userData.value,n.trim()==="")return i.imageList.innerHTML="",u.info({message:"You need to enter search request!",position:"topRight",transitionIn:"bounceInDown",transitionOut:"fadeOutDown"});document.querySelector(".loader"),i.loader.style.display="block",g(n).then(e=>{if(e.hits.length===0)return i.imageList.innerHTML="",u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",transitionIn:"bounceInDown",transitionOut:"fadeOutDown"});p(e),new m(".images-list-item a",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250,animationSpeed:300,widthRatio:1,heightRatio:.95,disableRightClick:!0}).refresh()}).then(()=>i.loader.style.display="none").catch(e=>{console.log(e),i.loader.style.display="none"}),s.target.reset()});
//# sourceMappingURL=commonHelpers.js.map
