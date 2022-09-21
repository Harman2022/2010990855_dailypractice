import planetData from "./data.json" assert { type: "json" };

// Base functions
const sum = (...elements) => {
  return elements.reduce((acc = 0, v) => {
    acc += v;
    return acc;
  });
};
Array.prototype.toNormal = function () {
  let array = [];
  array = this.map((el) => {
    const pattern = /(?<number>\d+.\d+).*\^(?<tens>\d+)/;
    const result = pattern.exec(el).groups;
    return result.number * 10 ** result.tens;
  });
  return array;
};
Array.prototype.toPercent = function () {
  let array = [];
  array = array.concat(
    this.map((x) => {
      x = Math.round(x);
      return x;
    })
  );
  const arraySum = sum(...array);
  array = array.map((x) => Number(((x / arraySum) * 100).toFixed(1)));
  return array;
};

let currentPlanet;
// Selecting elements
const planetsDiv = document.querySelector(".planets");
const planetNameEl = document.querySelector("#planet-name");
const planetDescEl = document.querySelector("#planet-desc");
const planetTaglineEl = document.querySelector("#planet-tagline");
const planetNameResultEl = document.querySelector("#current-planet");
const inputEl = document.querySelector("input");
const resultEl = document.querySelector("#result");

// Custom functions
const createPlanetDiv = (planetName, planetData) => {
  const planetDiv = document.createElement("div");
  const divEl = document.createElement("div");
  const imageEl = document.createElement("img");
  const divLabel = document.createElement("div");
  // Adding classes
  planetDiv.classList.add("planet");
  divEl.classList.add("planet-image");
  divLabel.classList.add("label");
  // Setting html
  divEl.appendChild(imageEl);
  planetDiv.appendChild(divLabel);
  planetDiv.appendChild(divEl);
  // Setting attributes
  imageEl.src = planetData.img_src;
  imageEl.alt = planetName;
  imageEl.width = 100;
  imageEl.height = 100;

  return planetDiv;
};

// Script

const calculateWeightOn = (planet, weight_value) => {
  let weight = (weight_value / planetData.earth.g) * planet.g;
  return Math.fround(weight).toFixed(1);
};

const setWeight = () => {
  const weight = inputEl.value;
  const answer = calculateWeightOn(currentPlanet, weight);
  resultEl.textContent = answer;
};

const setPlanetData = () => {
  const planetDistances = Object.entries(planetData)
    .map(([_, planet]) => planet.distance_from_sun)
    .toNormal()
    .toPercent();

  const planetRadiuses = Object.entries(planetData)
    .map(([_, planet]) => planet.radius)
    .toPercent();

  const planetTilts = Object.entries(planetData)
    .map(([_, planet]) => planet.axis_tilt)
    .toPercent();

  Object.values(planetData).forEach((p, i) => {
    p.distance_percent = planetDistances[i];
    p.radius_percent = planetRadiuses[i];
    p.axis_tilt_percent = planetTilts[i];
  });
};

const setInitialPlanet = (planet) => {
  currentPlanet = planet;
  planetDescEl.textContent = planet.desc;
  planetNameEl.textContent = planet.name;
  planetTaglineEl.textContent = planet.tagline;
  const index = Object.keys(planetData).indexOf(planet.name);
  planetsDiv.querySelectorAll(".planet")[index].classList.add("active");
};

const init = (planetArg = planetData.earth) => {
  setPlanetData();

  Object.entries(planetData).forEach(([planetName, planetData], index) => {
    const planetDiv = createPlanetDiv(planetName, planetData);
    const planetImg = planetDiv.querySelector("img");
    planetsDiv.appendChild(planetDiv);
    planetDiv.style.transform = `
    translate(${planetData.distance_percent * 4}px) scale(${
      planetData.radius_percent / 100 + 0.9
    })
    `.trim();
    planetImg.style.rotate = planetData.axis_tilt_percent + "deg";

    planetDiv.setAttribute("role", "button");
    planetDiv.addEventListener("click", () => {
      currentPlanet = planetData;
      planetDescEl.textContent = planetData.desc;
      planetNameEl.textContent = planetName;
      planetTaglineEl.textContent = planetData.tagline;
      planetNameResultEl.textContent = planetName + " ";

      planetsDiv
        .querySelectorAll(".planet")
        .forEach((el) => el.classList.remove("active"));

      planetDiv.classList.add("active");
      setWeight();
    });
  });
  setInitialPlanet(planetArg);
  inputEl.addEventListener("input", setWeight);
};

init();
