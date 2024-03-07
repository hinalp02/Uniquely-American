import * as d3 from 'd3';
import Tooltip from './components/tooltip.js';
import USAMap from './components/map.js';
import Sankey from './components/sankey.js';
import data from './data/ViolenceProjData.json';
import Skyline from "./components/skyline.js";
import skylineData from "./data/skyline.json";

function loadSkyline() {
  const element = document.getElementById('skyline');
  const skyline = new Skyline(element)
  console.log("loadSkyline reached")
}

function loadMap() {
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

  map.points.on("mousemove", tooltip.move)
  map.points.on("mouseout", () => {
    map.unHighlightCircles();
    tooltip.hide();
  })
}

function loadSankey() {
  const element = document.getElementById('sankey')
  const sankey = new Sankey(element)
}


loadMap()
loadSankey()
loadSkyline()


// import * as d3 from 'd3';
// import Tooltip from './components/tooltip.js';
// import USAMap from './components/map.js';
// import Sankey from './components/sankey.js';
// import data from './data/ViolenceProjData.json';
// import Skyline from "./components/skyline.js";
// import skylineData from "./data/skyline.json";
//
// function loadSkyline() {
//   const element = document.getElementById('skyline');
//   const skyline = new Skyline(element)
//   // const tooltip = new Tooltip(container)
//   //
//   // skyline.images.on("mouseover", function(event, d) {
//   //   tooltip.transition()
//   //       .duration(200)
//   //       .style("display", "block");
//   //   tooltip.html(d.tooltipData)
//   //       .style("left", (event.pageX + 10) + "px")
//   //       .style("top", (event.pageY - 28) + "px");
//   // })
//   //     // Event listener for mouseout event to hide tooltip
//   // skyline.images.on("mouseout", function(event, d) {
//   //       tooltip.transition()
//   //           .duration(500)
//   //           .style("display", "none");
//   //     });
//   console.log("loadSkyline reached")
// }
//
// function loadMap() {
//   const sortedData = data.sort((a, b) => b["Number Killed"] - a["Number Killed"]);
//
//   const container = document.getElementById('map');
//
//   const map = new USAMap(container);
//   const tooltip = new Tooltip(container);
//
//   map.update(sortedData, "Number Killed");
//
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
//
//   map.points.on("mousemove", tooltip.move)
//   map.points.on("mouseout", () => {
//     map.unHighlightCircles();
//     tooltip.hide();
//   })
// }
//
// function loadSankey() {
//   const element = document.getElementById('sankey')
//   const sankey = new Sankey(element)
// }
//
//
// loadMap()
// loadSankey()
// loadSkyline()
//
