!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired53d;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var l={id:e,exports:{}};return t[e]=l,o.call(l.exports,l,l.exports),l.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired53d=o),o.register("alqyX",function(e,t){var n=o("7KuJr"),l=o("2X5g8");n(1).then(e=>console.log(e)),n(2).then(e=>console.log(e)),n(3).then(e=>console.log(e)),n(4).then(e=>console.log(e)),e.exports=e=>{n(e).then(e=>{let t;(t=document.querySelector(".movies__container")).innerHTML="",e.forEach(e=>{let n=function(e){let t=document.createElement("div");t.classList.add("movies__container__item");let n=document.createElement("img");n.src=`https://image.tmdb.org/t/p/w500${e.poster_path}`,n.classList.add("movies__container__image"),t.appendChild(n);let o=document.createElement("div"),l=document.createElement("p"),i="";if(e.title.length<=25)i=e.title;else{let t=e.title.split("");for(;t.length>30;)t.pop();t.push("."),t.push("."),t.push("."),i=t.join("")}l.innerHTML=`${i}`,l.classList.add("movies__container__title"),o.appendChild(l);let r="";r+=" | ";let d=e.release_date.slice(0,4);r+=`${d}`;let c=document.createElement("p");return c.innerHTML=r,c.classList.add("movies__container__genre"),o.appendChild(c),t.appendChild(o),t}(e);n.addEventListener("click",t=>{l(e),console.log("------   Obiect Vlad    ------"),console.log(e)}),t.appendChild(n)})})}}),o.register("7KuJr",function(e,t){var n=o("jlIdh").key;e.exports=async e=>{let t=await fetch(`https://api.themoviedb.org/3/trending/movie/day?page=${e}&api_key=${n}`),o=await t.json(),l=o.results;return l}}),o.register("jlIdh",function(e,t){e.exports={key:"8b218b85545392c9f8705c30fbfd1bce"}}),o.register("2X5g8",function(e,t){e.exports=e=>{let t=document.querySelector(".modal-wrapper"),n=document.querySelector(".backdrop");t.classList.toggle("is-hidden"),n.addEventListener("click",()=>{t.classList.add("is-hidden")});let o=document.getElementById("voteRating"),l=document.getElementById("voteCount"),i=document.getElementById("popul"),r=document.getElementById("origTitle"),d=document.getElementById("about"),c=document.getElementById("img"),a=document.getElementById("film-title");o.innerHTML=e.vote_average,l.innerHTML=e.vote_count,i.innerHTML=e.popularity,r.innerHTML=e.original_title,d.innerHTML=e.overview,c.src=`https://image.tmdb.org/t/p/w500${e.poster_path}`,a.innerHTML=e.title,console.log(a),console.log(e.title)}}),o("alqyX");var l={};l=()=>{let e=o("alqyX"),t=1,n=document.querySelector(".numbers"),l=document.getElementById(`${t}`),i=document.querySelector(".right"),r=document.querySelector(".left");function d(){n.innerHTML="";for(let o=t-2;o<=t+2&&o<20;o++)if(o>1&&o<20){let i=document.createElement("div");i.classList.add("number"),i.innerHTML=`${o}`,i.setAttribute("id",`${o}`),n.appendChild(i),i.addEventListener("click",()=>{a(),t=i.id,l=document.getElementById(`${t}`),e(t),console.log(t),c()})}}function c(){l.classList.add("current-page")}function a(){l.classList.toggle("current-page")}c(),window.addEventListener("DOMContentLoaded",function(){e(t),d()}),i.addEventListener("click",()=>{t<20&&(a(),e(++t),d(),l=document.getElementById(`${t}`),a())}),r.addEventListener("click",()=>{t>1&&(a(),e(--t),d(),l=document.getElementById(`${t}`),c())})};var i=o("2X5g8");(()=>{let e;let t=document.querySelector(".search-bar");t.addEventListener("input",t=>{e=t.target.value});let n=document.querySelector(".search-button");n.addEventListener("click",t=>{let n;let l=o("jlIdh").key,r=`https://api.themoviedb.org/3/search/movie?query=${e}&include_adult=false&language=en-US&page=1&api_key=${l}`;(async()=>{let e=await fetch(r),t=await e.json();n=t.results[0],console.log("------  Obiect Giulia  -----"),console.log(n),i(n)})()})})(),l()}();
//# sourceMappingURL=index.72be6a66.js.map
