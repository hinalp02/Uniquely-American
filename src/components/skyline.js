import * as d3 from 'd3';
import jsonData from '../data/skyline.json'; // Import JSON data

export default function(element) {
    console.log("Entering function");

    // Load image data
    var imageData = [
        {url: require("../images/k-12_school.svg"), id: 0},
        {url: require("../images/college_university.svg"), id: 1},
        {url: require("../images/government_building_place_of_civic_importance.svg"), id: 2},
        {url: require("../images/house_of_worship.svg"), id: 3},
        {url: require("../images/retail.svg"), id: 4},
        {url: require("../images/restaurant_bar_nightclub.svg"), id: 5},
        {url: require("../images/office.svg"), id: 6},
        {url: require("../images/place_of_residence.svg"), id: 7},
        {url: require("../images/outdoors.svg"), id: 8},
        {url: require("../images/warehouse_factory.svg"), id: 9},
        {url: require("../images/post_office.svg"), id: 10},
    ];
    console.log("imagedata loaded")

    // Match JSON data with image data based on a common identifier (Location Code)
    imageData.forEach(function(image) {
        console.log("Processing image", image.id);
        var matchingRow = jsonData.find(function(row) {
            console.log("Matching row:", row);
            return row['Location Code'] === image.id;
        });
        console.log("Matching Row:", matchingRow);
        if (matchingRow) {
            // Set tooltip data for each image using matched JSON data
            image.tooltipData = `
                Location Code: ${matchingRow['Location Code']}<br>
                Shooting Count: ${matchingRow['Shooting Count']}<br>
                # of Metropolitan Area Shootings: ${matchingRow['# of Metropolitan Area Shootings']}<br>
                Percentages of shooting at this location type: ${matchingRow['Percentages of shooting at this location type']}<br>
                Total Number Injured: ${matchingRow['Total Number Injured']}<br>
                Total Number Killed: ${matchingRow['Total Number Killed']}
            `;
            console.log("Successfully setting tooltip data using JSON");
        } else {
            // Handle missing data if necessary
            image.tooltipData = 'No data available';
            console.log("Image has no data available")
        }
    });

    // Select the SVG element where images will be appended
    var svg = d3.select(element).append('svg');
    console.log("svg element selected")

    // Define the width and height of each image
    var imageWidth = 75;
    var imageHeight = 50;
    console.log("dimensions specified");

    // Append images to the SVG
    // var images = svg.selectAll("img")
    var images = d3.select(element).selectAll("img")
        .data(imageData)
        .enter()
        .append("img")
        .attr("src", function(d) { return d.url; })
        .attr("width", imageWidth)
        .attr("height", imageHeight);
    console.log("appended images to svg")

    // Append a tooltip div to the body
    var tooltip = d3.select("body")
        .append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);
    console.log("appended tooltip to body");

// Event listener for mouseover event to show tooltip
        images.on("mouseover", function(event, d) {
            tooltip.transition()
                .duration(200)
                .style("display", "block");
            console.log("responding to mouse")
            tooltip.html(d.tooltipData)
                .style("left", (event.pageX + 10) + "px")
                .style("top", (event.pageY - 28) + "px");
        })
        // Event listener for mouseout event to hide tooltip
        .on("mouseout", function(event, d) {
            tooltip.transition()
                .duration(500)
                .style("display", "none");
        });
    console.log("event listener");
}


// // VERSION THAT WORKS WITH NO TOOLTIP
// import * as d3 from 'd3';
//
// // precondition: imagedata is an array of objects where each object contains the url of an image and the corresponding tooltip data.
// export default function (element) {
//         var imageData = [
//             {url: require("../images/k-12_school.svg"), id: 0},
//             {url: require("../images/college_university.svg"), id: 1},
//             {url: require("../images/government_building_place_of_civic_importance.svg"), id: 2},
//             {url: require("../images/house_of_worship.svg"), id: 3},
//             {url: require("../images/retail.svg"), id: 4},
//             {url: require("../images/restaurant_bar_nightclub.svg"), id: 5},
//             {url: require("../images/office.svg"), id: 6},
//             {url: require("../images/place_of_residence.svg"), id: 7},
//             {url: require("../images/outdoors.svg"), id: 8},
//             {url: require("../images/warehouse_factory.svg"), id: 9},
//             {url: require("../images/post_office.svg"), id: 10},
//         ];
//
//     // select the svg element where images will be appended.
//     //var svg = d3.select(element).append('svg');
//     // select the svg element where images will be appended.
//     //var svg = d3.select(element).append('svg');
//
//     // define the width and height of each image.
//     var imageWidth = 50;
//     var imageHeight = 75;
//
//     // append a group for each image in the imagedata array.
//     var images = d3.select(element).selectAll("img")
//         .data(imageData)
//         .enter()
//         .append("img")
//         .attr("src", d => d.url)
//         .attr("width", imageWidth)
//         .attr("height", imageHeight)
//     // .attr("transform", function (d, i) {
//     //     return "translate(" + (i * (imageWidth + 10)) + ",0)";
//     // })
//
//     // append a tooltip div to the body.
//     var tooltip = d3.select("body")
//         .append("div")
//         .attr("class", "tooltip")
//         .style("opacity", 1);
//
//     // event listener for mouseover event to show tooltip.
//     images.on("mouseover", function (d) {
//         console.log("Hovered img:", d)
//         tooltip.transition()
//             .duration(200)
//             .style("opacity", .9);
//         tooltip.html(d.tooltipData)
//             .style("left", (d.clientX) + "px")
//             .style("top", (d.clientY - 28) + "px");
//     })
//         // event listener for mouseout event to hide tooltip.
//         .on("mouseout", function (d) {
//             tooltip.transition()
//                 .duration(500)
//                 .style("opacity", 0);
//         });
//
//     // append an image element to each group, setting its attributes.
//     // images.append("img")
//     //     .attr("src", function (d) {
//     //         console.log(d)
//     //         return d.url;
//     //     })
//     //     .attr("width", imageWidth)
//     //     .attr("height", imageHeight);
// }
// //
//
