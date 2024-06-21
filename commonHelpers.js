import{a as c,i as u,S as m}from"./assets/vendor-c493984e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(e){if(e.ep)return;e.ep=!0;const a=r(e);fetch(e.href,a)}})();const d={imageSearchForm:document.querySelector(".search-form"),imageSearchInput:document.querySelector(".search-input"),submitButton:document.querySelector(".search-btn"),imageList:document.querySelector(".images-list")};function p(s){const t=s.hits.map(r=>`<li class="images-list-item">
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
`);d.imageList.innerHTML=t}async function g(s){try{return c.defaults.baseURL="https://pixabay.com",(await c.get("/api/",{params:{key:"44319460-4af2fb7eeaa8b0840083a4a49",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:15}})).data}catch(t){console.log(t)}}const i={imageSearchForm:document.querySelector(".search-form"),imageSearchInput:document.querySelector(".search-input"),submitButton:document.querySelector(".search-btn"),imageList:document.querySelector(".images-list"),loader:document.querySelector(".loader")};i.loader.style.display="none";let n;i.imageSearchForm.addEventListener("submit",s=>{if(s.preventDefault(),n=s.target.elements.userData.value,n.trim()==="")return i.imageList.innerHTML="",u.info({message:"You need to enter search request!",position:"topRight",transitionIn:"bounceInDown",transitionOut:"fadeOutDown"});document.querySelector(".loader"),i.loader.style.display="block",g(n).then(t=>{if(t.hits.length===0)return i.imageList.innerHTML="",u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",transitionIn:"bounceInDown",transitionOut:"fadeOutDown"});p(t),new m(".images-list-item a",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250,animationSpeed:300,widthRatio:1,heightRatio:.95,disableRightClick:!0}).refresh()}).then(()=>i.loader.style.display="none").catch(t=>{console.log(t),i.loader.style.display="none"}),s.target.reset()});
//# sourceMappingURL=commonHelpers.js.map
