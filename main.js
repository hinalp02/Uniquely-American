import * as d3 from 'd3';
import Tooltip from './components/tooltip.js';
import USAMap from './components/map.js';
import Sankey from './components/sankey.js';
import Skyline from "./components/skyline.js";

// Load data and initialize visualizations
fetch('./data/ViolenceProjData.json')
  .then((response) => response.json())
  .then((data) => loadMap(data))
  .catch((error) => console.error('Error loading ViolenceProjData:', error));

fetch('./data/skyline.json')
  .then((response) => response.json())
  .then((skylineData) => loadSkyline(skylineData))
  .catch((error) => console.error('Error loading skyline data:', error));

function loadSkyline(skylineData) {
  const element = document.getElementById('skyline');
  const skyline = new Skyline(element);
  skyline.render(skylineData);
  console.log("loadSkyline reached");
}

function loadMap(data) {
  const sortedData = data.sort((a, b) => b["Number Killed"] - a["Number Killed"]);

  const container = document.getElementById('map');

  const map = new USAMap(container);
  const tooltip = new Tooltip(container);

  map.update(sortedData, "Number Killed");

  map.points.on("mouseover", function (evt, d) {
    d3.select(this).classed('highlighted', true);
    tooltip.show(`
      City: ${d.City}<br>
      State: ${d.State}<br>
      Date: ${d["Full Date"]}<br>
      Number Killed: ${d["Number Killed"]}<br>
      Number of Injured: ${d["Number Injured"]}<br>
      Shooter Knew Victims: ${d["Insider or Outsider"] === 0 ? 'No' : 'Yes'}<br>
      Current or Former Employee: ${d["Workplace Shooting"] === 0 ? 'No' : 'Yes'}<br>
      Location of Shooting: ${d["Location Specified"]}<br>
    `);
  });

  map.points.on("mousemove", tooltip.move);
  map.points.on("mouseout", () => {
    map.unHighlightCircles();
    tooltip.hide();
  });
}

function loadSankey() {
  const element = document.getElementById('sankey')
  const sankey = new Sankey(element)
}

// Load all visualizations
loadSankey();

// import * as d3 from 'd3';
// import Tooltip from './components/tooltip.js';
// import USAMap from './components/map.js';
// import Sankey from './components/sankey.js';
// //import data from './data/ViolenceProjData.json';
// fetch('./data/ViolenceProjData.json')
//   .then((response) => response.json())
//   .then((data) => loadMap(data))
//   .catch((error) => console.error('Error loading ViolenceProjData:', error));
// import Skyline from "./components/skyline.js";
// //import skylineData from "./data/skyline.json";
// fetch('./data/skyline.json')
//   .then((response) => response.json())
//   .then((skylineData) => loadSkyline(skylineData))
//   .catch((error) => console.error('Error loading skyline data:', error));



// function loadSkyline(skylineData) {
//   const element = document.getElementById('skyline');
//   const skyline = new Skyline(element);
//   skyline.render(skylineData);
//   console.log("loadSkyline reached");
// }



// function loadMap(data) {
//   const sortedData = data.sort((a, b) => b["Number Killed"] - a["Number Killed"]);

//   const container = document.getElementById('map');

//   const map = new USAMap(container);
//   const tooltip = new Tooltip(container);

//   map.update(sortedData, "Number Killed");

//   map.points.on("mouseover", function (evt, d) {
//     d3.select(this).classed('highlighted', true);
//     tooltip.show(`
//       City: ${d.City}<br>
//       State: ${d.State}<br>
//       Date: ${d["Full Date"]}<br>
//       Number Killed: ${d["Number Killed"]}<br>
//       Number of Injured: ${d["Number Injured"]}<br>
//       Shooter Knew Victims: ${d["Insider or Outsider"] === 0 ? 'No' : 'Yes'}<br>
//       Current or Former Employee: ${d["Workplace Shooting"] === 0 ? 'No' : 'Yes'}<br>
//       Location of Shooting: ${d["Location Specified"]}<br>
//     `);
//   });

//   map.points.on("mousemove", tooltip.move);
//   map.points.on("mouseout", () => {
//     map.unHighlightCircles();
//     tooltip.hide();
//   });
// }


// function loadSankey() {
//   const element = document.getElementById('sankey')
//   const sankey = new Sankey(element)
// }



// loadSankey();



