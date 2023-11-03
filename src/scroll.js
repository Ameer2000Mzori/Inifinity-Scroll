//fetching data from unsplash

const count = 10;
const apiKey = "eht-EOsGj2CmKm6T6TuIy9kxY0g9zthBb-2FUNiKen4";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//calling the function
async function getImages() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
    loadImg(data);
  } catch (erorr) {
    console.log(erorr);
  }
}

const scrollWrap = document.getElementsByClassName("scroll-wrap")[0];
scrollWrap.innerHTML = "";
// load imgs function
function loadImg(data) {
  data.forEach((data) => {
    // creating elements:
    const p = document.createElement("p");
    const viewsP = document.createElement("p");
    const likesP = document.createElement("p");
    const button = document.createElement("a");
    const scrollimgs = document.createElement("img");
    const imgInfo = document.createElement("div");
    const card = document.createElement("div");

    // giving classes to elements we created
    scrollimgs.classList = "scrollimgs";
    imgInfo.classList = "img-info";
    card.classList = "card";
    button.classList = "a";

    // giving data to each element
    button.href = data.links.html;
    button.target = "_blank";
    likesP.textContent = `❤️ ${data.likes}`;
    viewsP.textContent = `👀:${data.views}`;
    scrollimgs.src = data.urls.regular;
    scrollimgs.title = data.alt_description;
    scrollimgs.alt = data.alt_description;

    // appndingchilderen to the UI
    imgInfo.appendChild(likesP);
    imgInfo.appendChild(viewsP);
    button.appendChild(scrollimgs);
    card.appendChild(button);
    card.appendChild(imgInfo);
    scrollWrap.appendChild(card);
  });
}

window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >=
    document.body.offsetHeight - 1000
  ) {
    getImages();
  }
});
getImages();
