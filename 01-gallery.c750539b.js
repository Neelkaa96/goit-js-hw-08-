!function(){function t(t,o){(null==o||o>t.length)&&(o=t.length);for(var a=0,e=Array(o);a<o;a++)e[a]=t[a];return e}var o=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}],a=document.querySelector(".gallery");a.addEventListener("click",function(t){t.preventDefault(),t.target.classList.contains("gallery__image")&&new SimpleLightbox(".gallery .gallery__item",{captionsData:"alt",captionDelay:250}).open()}),((function(o){if(Array.isArray(o))return t(o)})(o)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(o)||function(o,a){if(o){if("string"==typeof o)return t(o,a);var e=Object.prototype.toString.call(o).slice(8,-1);if("Object"===e&&o.constructor&&(e=o.constructor.name),"Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return t(o,a)}}(o)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).forEach(function(t){var o=document.createElement("a");o.classList.add("gallery__item"),o.setAttribute("href","".concat(t.original)),o.insertAdjacentHTML("afterbegin",'<img class="gallery__image" src="'.concat(t.preview,'" data-source="').concat(t.original,'" alt="').concat(t.description,'">')),a.appendChild(o)}),console.log(o)}();
//# sourceMappingURL=01-gallery.c750539b.js.map