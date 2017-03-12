document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }

  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



// adding SF places as list items
const placeForm = document.getElementById("favorite-place");
placeForm.addEventListener("submit", e => {
  e.preventDefault();
  const placeInput = document.getElementsByClassName("favorite-input")[0];
  const newPlace = placeInput.value;
  placeInput.value = "";

  const ul = document.getElementById("sf-places");
  const newLi = document.createElement("li");
  newLi.textContent = newPlace;
  ul.appendChild(newLi);
});

//toggling display of photo form
const photoFormBtn = document.getElementsByClassName("photo-show-button")[0];
const photoFormForm = document.getElementsByClassName("photo-form-container")[0];

photoFormBtn.addEventListener("click", () => {
  if (photoFormForm.className === "photo-form-container hidden") {
    photoFormForm.className = "photo-form-container";
  } else {
    photoFormForm.className = "photo-form-container hidden";
  }
});

// adding new photos
photoFormForm.addEventListener("submit", e => {
  e.preventDefault();
  const ul = document.getElementsByClassName("dog-photos")[0];
  const urlInput = document.getElementsByClassName("photo-url-input")[0];
  const newUrl = urlInput.value;
  urlInput.value = "";
  const newImg = document.createElement("img");
  const newLi = document.createElement("li");
  newImg.src = newUrl;
  newLi.appendChild(newImg);
  ul.appendChild(newLi);
});

});
