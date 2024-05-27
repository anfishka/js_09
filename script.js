let main = document.getElementsByClassName("main")[0];
if (!main) {
  main = createElem("main", document.body);
}

function createElem(name, place = null) {
  let elem = document.createElement("div");
  elem.classList.add(name);
  if (place) {
    place.appendChild(elem);
  } else {
    document.body.appendChild(elem);
  }
  return elem;
}

document.addEventListener("DOMContentLoaded", (e) => {
  fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then((response) => response.json())
    .then((data) => {
      const numberOfCards = 9;
      let cards_block = createElem("cards_block", main);
      for (let i = 0; i < numberOfCards; i++) {
        createCard(data, cards_block);
      }
    });
});
function createCard(data, container) {
  const { copyright, title, explanation, hdurl, date } = data;
  let card = createElem("card", container);
  let imgContainer = createElem("img_container", card);
  let img_block = document.createElement("img");
  img_block.classList.add("img_block");
  img_block.src = hdurl;
  imgContainer.appendChild(img_block);
  let title_block = createElem("title_block", card);
  title_block.textContent = title;

  let explanation_block = createElem("explanation_block", card);
  explanation_block.textContent = explanation;

  let extra_info = createElem("extra_info", card);
  let copyright_block = createElem("copyright_block", extra_info);
  copyright_block.textContent = copyright;
  let date_block = createElem("date_block", extra_info);
  date_block.textContent = date;
}
