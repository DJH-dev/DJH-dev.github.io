function activateGallery() {
  let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
  let mainImage = document.querySelector("#gallery-photo > img");

  thumbnails.forEach(function(thumbnail) {
    //Preload large images
    let newImageSrc = thumbnail.dataset.largeVersion;
    let largeVersion = new Image();
    largeVersion.src = newImageSrc;
    
    thumbnail.addEventListener("click", function() {
      //code to set clicked image as main images and set alt tag
      let newImageSrc = thumbnail.dataset.largeVersion;
      mainImage.setAttribute("src", newImageSrc);
      mainImage.setAttribute("alt", thumbnail.alt);

      //code to change which thumbnail is current
      let currentClass = "current";
      document.querySelector(".current").classList.remove(currentClass);
      thumbnail.parentNode.classList.add(currentClass);

      //code to change image info
      let title = document.querySelector(".gallery-info > .title");
      let description = document.querySelector(".gallery-info > .description");

      let newImageTitle = thumbnail.dataset.title;
      let newImageDescription = thumbnail.dataset.description;

      title.innerHTML = newImageTitle;
      description.innerHTML = newImageDescription;
    });
  });
}
