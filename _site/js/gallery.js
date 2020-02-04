function activateGallery(){
  let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
  let mainImage  = document.querySelector("#gallery-photo > img");

  thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener("click", function() {
      //code to set clicked image as main images and set alt tag
      let newImageSrc = thumbnail.dataset.largeVersion;
      mainImage.setAttribute("src", newImageSrc);
      mainImage.setAttribute("alt", thumbnail.alt);

      //code to set thumbnail as current
      document.querySelector(".current").classList.remove("current");
      thumbnail.parentNode.classList.add("current");
    });
  });
}