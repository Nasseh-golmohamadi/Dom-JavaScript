//App Div
const app = document.querySelector("#app");

//Create Header
const mainPage = document.createElement("div");
mainPage.className = "container";
app.appendChild(mainPage);

const header = document.createElement("header");
mainPage.appendChild(header);

const nav = document.createElement("nav");
header.appendChild(nav);
const ul = document.createElement("ul");
nav.appendChild(ul);

const headerNav = [
  { text: "", href: "#" },
  { text: "Vectors", href: "#" },
  { text: "Photos", href: "#" },
  { text: "PSD", href: "#" },
  { text: "Video", href: "#" },
  { text: "More", href: "#" },
];

headerNav.forEach((item, index) => {
  const li = document.createElement("li");
  ul.append(li);
  const a = document.createElement("a");
  a.innerHTML = item.text;
  a.href = item.href;
  li.appendChild(a);

  if (index === 5) {
    const i = document.createElement("i");
    i.className = "fa-solid fa-caret-down";
    a.style.color = "black";
    const lastChild = li.lastChild.appendChild(i);
    lastChild.style.color = "black";
  }
});

const div = document.createElement("div");
header.appendChild(div);

const aDiv = document.createElement("a");
aDiv.className = "btn";
aDiv.innerHTML = `<a class="fa-solid fa-plus">Submit</a>`;
div.appendChild(aDiv);

const span = document.createElement("span");
div.appendChild(span);

const imgSpan = document.createElement("img");
imgSpan.src = "../img/facebook.png";
span.appendChild(imgSpan);
const imgSpan2 = document.createElement("img");
imgSpan2.src = "../img/Gmail1.png";
span.appendChild(imgSpan2);

//Body
const main = document.createElement("main");
mainPage.appendChild(main);

const h1 = document.createElement("h1");
h1.innerHTML = "Popular Pro Stock Vectors";
h1.style.fontWeight = "500";
main.appendChild(h1);

const p = document.createElement("p");
p.innerHTML =
  "High quality Vectors with worry-free licensing for personal and commercial use.";
main.appendChild(p);

const bodyInput = document.createElement("div");
bodyInput.classList.add("bodyInput");
main.appendChild(bodyInput);

const magnifying = document.createElement("i");
magnifying.className = "fa-solid fa-magnifying-glass";
bodyInput.appendChild(magnifying);

const input = document.createElement("input");
input.placeholder = "Search Vectors";
bodyInput.appendChild(input);

const vectorOptions = document.createElement("select");
bodyInput.appendChild(vectorOptions);

const option = document.createElement("option");
option.innerHTML = "Vectors";
vectorOptions.appendChild(option);
const option1 = document.createElement("option");
option1.innerHTML = "Popular";
vectorOptions.appendChild(option1);

const lineSection = document.createElement("section");
main.appendChild(lineSection);

const ulSection = document.createElement("ul");
lineSection.appendChild(ulSection);

const objSection = ["Latest", "Popular", "|", "Premium", "Free"];

objSection.forEach((text) => {
  const li = document.createElement("li");
  li.innerHTML = text;
  ulSection.appendChild(li);
});

const pSection = document.createElement("p");
lineSection.appendChild(pSection);

const iP = document.createElement("i");
iP.className = "fa-solid fa-dumpster-fire";
pSection.appendChild(iP);

const iP1 = document.createElement("i");
iP1.className = "fa-solid fa-hand-dots";
pSection.appendChild(iP1);

//Articles Div
const mainDiv = document.createElement("div");
mainDiv.classList = "articles";
main.appendChild(mainDiv);

const materialArticle = [
  { text: "Workout", src: "../img/Fitness_Monochromatic.png" },
  { text: "Freedom", src: "../img/Statue of liberty_Monochromatic.png" },
  { text: "Try Hard", src: "../img/Designer _Two Color.png" },
];

materialArticle.forEach((material) => {
  const articleDiv = document.createElement("div");
  articleDiv.className = "article";
  mainDiv.appendChild(articleDiv);

  const divOnImg = document.createElement("div");
  articleDiv.appendChild(divOnImg);

  const imgArticle = document.createElement("img");
  imgArticle.src = material.src;
  divOnImg.appendChild(imgArticle);

  const h3 = document.createElement("h3");
  h3.innerHTML = material.text;
  articleDiv.appendChild(h3);

  const downloadText = document.createElement("h2");
  downloadText.innerHTML = `Download   <i class="fa-regular fa-circle-down"></i>`;
  articleDiv.appendChild(downloadText);
});

const footer = document.createElement("footer");
mainPage.appendChild(footer);

const divFooter = document.createElement("div");
divFooter.className = "left";
footer.append(divFooter);

const aLeft = document.createElement("a");
aLeft.innerHTML = "Discover All Collections";
alert.href = "#";
divFooter.appendChild(aLeft);

const footerSection = document.createElement("section");
divFooter.appendChild(footerSection);

const imgSrcs = [
  "../img/angryBird.png",
  "../img/Bob.jpg",
  "../img/schoolBus.jpg",
  "../img/yellowHair.png",
];

imgSrcs.forEach((pic) => {
  const imgpic = document.createElement("img");
  imgpic.src = pic;
  footerSection.appendChild(imgpic);
});

const aFooter=document.createElement('a');
aFooter.href="#";
aFooter.className="aFooter"
aFooter.innerHTML=`Next Page  <i class="fa-solid fa-arrow-right"></i>`;
footer.appendChild(aFooter);


