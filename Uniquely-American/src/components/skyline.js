// // VERSION THAT WORKS WITH TOOLTIP
import * as d3 from 'd3';
import jsonData from '../data/skyline.json';
// precondition: imagedata is an array of objects where each object contains the url of an image and the corresponding tooltip data.
export default function (element) {
    var imageData = [
        { category: "K-12 Schools", url: require("../images/k-12_school.svg"), id: 0},
        { category: "Colleges & Univesities", url: require("../images/college_university.svg"), id: 1},
        { category: "Government Buildings", url: require("../images/government_building_place_of_civic_importance.svg"), id: 2},
        { category: "Places of Worship", url: require("../images/house_of_worship.svg"), id: 3},
        { category: "Retail", url: require("../images/retail.svg"), id: 4},
        { category: "Bars & Restaurants", url: require("../images/restaurant_bar_nightclub.svg"), id: 5},
        { category: "Offices", url: require("../images/office.svg"), id: 6},
        { category: "Residential", url: require("../images/place_of_residence.svg"), id: 7},
        { category: "Outdoors", url: require("../images/outdoors.svg"), id: 8},
        { category: "Warehouses & Factories", url: require("../images/warehouse_factory.svg"), id: 9},
        { category: "Post Offices", url: require("../images/post_office.svg"), id: 10},
    ];
    imageData.forEach(function(image) {
        var matchingRow = jsonData.find(function(row) {
            console.log("Matching row:", row);
            return row['Location Code'] === image.id;
        });
        if (matchingRow) {
            // Set tooltip data for each image using matched JSON data
            image.tooltipData = `
                Type of Building: ${matchingRow['Type of Building']}<br>
                Shooting Count: ${matchingRow['Shooting Count']}<br>
                # of Metropolitan Area Shootings: ${matchingRow['# of Metropolitan Area Shootings']}<br>
                Percentages of shooting at this location type: ${matchingRow['Percentages of shooting at this location type']}<br>
                Total Number Injured: ${matchingRow['Total Number Injured']}<br>
                Total Number Killed: ${matchingRow['Total Number Killed']}
            `;
            // console.log(d.tooltipData);
            console.log("Successfully setting tooltip data using JSON");
        } else {
            // Handle missing data if necessary
            image.tooltipData = 'No data available';
            console.log("Image has no data available")
        }

    });
    // define the width and height of each image.
    var imageWidth = 75;
    var imageHeight = 75;

    // append a group for each image in the imagedata array.
    var images = d3.select(element).selectAll("svg")
        .data(imageData)
        .enter()
        .append("svg")
        .attr("data-src", d => d.url)
        .attr("width", imageWidth)
        .attr("height", imageHeight)
        .attr("y", 0)
        .attr("fill", '#222')
        .style("stroke", "none")

    // append a tooltip div to the body.
    var tooltip = d3.select(document.body)
        .append("div")
        .attr('class', 'tooltip')

    // event listener for mouseover event to show tooltip.
    images.on("mouseover", function (evt, d) {
        d3.select(this)
            .attr("fill", "red")
            //.style("stroke", "red")
            .attr('width', imageWidth * 1.5)
            .attr("transform", "translate(0, -5)")
        tooltip.classed("active", true)
            .html(d.tooltipData)
            .style("left", (evt.pageX) + "px")
            .style("top", (evt.pageY - 28) + "px");
    })
    // event listener for mouseout event to hide tooltip.
    images.on("mouseout", function (d) {
        d3.select(this)
            .attr("fill", "#222")
            .attr("width", imageWidth)
            .attr("transform", null)
            .style("stroke", "none")
        tooltip.classed("active", false)
    });

}


// not working stretching
// import * as d3 from 'd3';
// import jsonData from '../data/skyline.json';
//
// export default function (element) {
//     var imageData = [
//         { category: "K-12 Schools", url: require("../images/k-12_school.svg"), id: 0, stretch: false },
//         { category: "Colleges & Univesities", url: require("../images/college_university.svg"), id: 1, stretch: true, stretchValue: 1.5 },
//         { category: "Government Buildings", url: require("../images/government_building_place_of_civic_importance.svg"), id: 2, stretch: false },
//         { category: "Places of Worship", url: require("../images/house_of_worship.svg"), id: 3, stretch: true, stretchValue: 2 },
//         { category: "Retail", url: require("../images/retail.svg"), id: 4, stretch: false },
//         { category: "Bars & Restaurants", url: require("../images/restaurant_bar_nightclub.svg"), id: 5, stretch: true, stretchValue: 1.8 },
//         { category: "Offices", url: require("../images/office.svg"), id: 6, stretch: false },
//         { category: "Residential", url: require("../images/place_of_residence.svg"), id: 7, stretch: false },
//         { category: "Outdoors", url: require("../images/outdoors.svg"), id: 8, stretch: true, stretchValue: 1.3 },
//         { category: "Warehouses & Factories", url: require("../images/warehouse_factory.svg"), id: 9, stretch: false },
//         { category: "Post Offices", url: require("../images/post_office.svg"), id: 10, stretch: false }
//     ];
//
//     var maxImageHeight = d3.max(imageData, d => d.stretch ? d.stretchValue * 75 : 75); // Calculate the maximum height of all images
//
//     imageData.forEach(function(image) {
//         var matchingRow = jsonData.find(function(row) {
//             return row['Location Code'] === image.id;
//         });
//         if (matchingRow) {
//             image.tooltipData = `
//                 Type of Building: ${matchingRow['Type of Building']}<br>
//                 Shooting Count: ${matchingRow['Shooting Count']}<br>
//                 # of Metropolitan Area Shootings: ${matchingRow['# of Metropolitan Area Shootings']}<br>
//                 Percentages of shooting at this location type: ${matchingRow['Percentages of shooting at this location type']}<br>
//                 Total Number Injured: ${matchingRow['Total Number Injured']}<br>
//                 Total Number Killed: ${matchingRow['Total Number Killed']}
//             `;
//         } else {
//             image.tooltipData = 'No data available';
//         }
//     });
//
//     var images = d3.select(element).selectAll("svg")
//         .data(imageData)
//         .enter()
//         .append("svg")
//         .attr("data-src", d => d.url)
//         .attr("width", 50)
//         .attr("height", d => d.stretch ? d.stretchValue * 75 : 75) // Set height based on stretching
//         .attr("y", d => maxImageHeight - (d.stretch ? d.stretchValue * 75 : 75)) // Adjust vertical position
//         .attr("fill", '#222')
//         .style("stroke", "none")
//         .each(function(d) {
//             if (d.stretch) {
//                 d3.select(this).style("transform", "scaleY(" + d.stretchValue + ")"); // Stretch vertically with different values
//             }
//         });
//
//     var tooltip = d3.select(document.body)
//         .append("div")
//         .attr('class', 'tooltip');
//
//     images.on("mouseover", function (evt, d) {
//         d3.select(this)
//             .attr("fill", "red")
//             .style("transform", d.stretch ? "scaleY(" + (d.stretchValue * 2) + ")" : null); // Adjust vertical stretch on mouseover for images that should stretch
//         tooltip.classed("active", true)
//             .html(d.tooltipData)
//             .style("left", (evt.pageX) + "px")
//             .style("top", (evt.pageY - 28) + "px");
//     });
//
//     images.on("mouseout", function (d) {
//         d3.select(this)
//             .attr("fill", "#222")
//             .style("transform", null); // Restore original vertical stretch on mouseout
//         tooltip.classed("active", false);
//     });
// }


// import * as d3 from 'd3';
// import jsonData from '../data/skyline.json'; // Import JSON data

// export default function(element) {
//     console.log("Entering function");

//     // Load image data
//     var imageData = [
//         {url: require("../images/k-12_school.svg"), id: 0},
//         {url: require("../images/college_university.svg"), id: 1},
//         {url: require("../images/government_building_place_of_civic_importance.svg"), id: 2},
//         {url: require("../images/house_of_worship.svg"), id: 3},
//         {url: require("../images/retail.svg"), id: 4},
//         {url: require("../images/restaurant_bar_nightclub.svg"), id: 5},
//         {url: require("../images/office.svg"), id: 6},
//         {url: require("../images/place_of_residence.svg"), id: 7},
//         {url: require("../images/outdoors.svg"), id: 8},
//         {url: require("../images/warehouse_factory.svg"), id: 9},
//         {url: require("../images/post_office.svg"), id: 10},
//     ];
//     console.log("imagedata loaded")

//     // Match JSON data with image data based on a common identifier (Location Code)
//     imageData.forEach(function(image) {
//         console.log("Processing image", image.id);
//         var matchingRow = jsonData.find(function(row) {
//             console.log("Matching row:", row);
//             return row['Location Code'] === image.id;
//         });
//         console.log("Matching Row:", matchingRow);
//         if (matchingRow) {
//             // Set tooltip data for each image using matched JSON data
//             image.tooltipData = `
//                 Type of Building: ${matchingRow['Type of Building']}<br>
//                 Location Code: ${matchingRow['Location Code']}<br>
//                 Shooting Count: ${matchingRow['Shooting Count']}<br>
//                 # of Metropolitan Area Shootings: ${matchingRow['# of Metropolitan Area Shootings']}<br>
//                 Percentages of shooting at this location type: ${matchingRow['Percentages of shooting at this location type']}<br>
//                 Total Number Injured: ${matchingRow['Total Number Injured']}<br>
//                 Total Number Killed: ${matchingRow['Total Number Killed']}
//             `;
//             // console.log(d.tooltipData);
//             console.log("Successfully setting tooltip data using JSON");
//         } else {
//             // Handle missing data if necessary
//             image.tooltipData = 'No data available';
//             console.log("Image has no data available")
//         }
//     });

//     // Select the SVG element where images will be appended
//     var svg = d3.select(element).append('svg');
//     console.log("svg element selected")

//     // Define the width and height of each image
//     var imageWidth = 50;
//     var imageHeight = 50;
//     console.log("dimensions specified");

//     // Append images to the SVG
//     // var images = svg.selectAll("img")
//     var images = d3.select(element).selectAll("img")
//         .data(imageData)
//         .enter()
//         .append("img")
//         .attr("src", function(d) { return d.url; })
//         .attr("width", imageWidth)
//         .attr("height", imageHeight);
//     console.log("appended images to svg")

//     // Append a tooltip div to the body
//     var tooltip = d3.select("body")
//         .append("div")
//         .attr("class", "tooltip")
//         .style("opacity", 0);
//     console.log("appended tooltip to body");

// // Event listener for mouseover event to show tooltip
//         images.on("mouseover", function(event, d) {
//             console.log(d.tooltipData);
//             tooltip.transition()
//                 .duration(200)
//                 .style("display", "block");
//             console.log(d.tooltipData);
//             console.log("responding to mouse")
//             tooltip.html(d.tooltipData)
//                 .style("visibility", "visible")
//                 .style("left", (event.pageX + 10) + "px")
//                 .style("top", (event.pageY - 28) + "px");
//         })
//         // Event listener for mouseout event to hide tooltip
//         .on("mouseout", function(event, d) {
//             tooltip.transition()
//                 .duration(500)
//                 .style("display", "none");
//         });
//     console.log("event listener");
// }


// // VERSION THAT WORKS WITH NO TOOLTIP
// import * as d3 from 'd3';

// export default function(element) {
//     // Load CSV data
//     d3.csv("../data/skyline.csv").then(function(csvData) {
//         // Load image data
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

//         // Match CSV data with image data based on a common identifier (Location Code)
//         imageData.forEach(function(image) {
//             var matchingRow = csvData.find(function(row) {
//                 return +row['Location Code'] === image.id; // Convert to number for comparison
//             });
//             if (matchingRow) {
//                 // Set tooltip data for each image using matched CSV data
//                 image.tooltipData = `
//                     Location Code: ${matchingRow['Location Code']}<br>
//                     Shooting Count: ${matchingRow['Shooting Count']}<br>
//                     # of Metropolitan Area Shootings: ${matchingRow['# of Metropolitan Area Shootings']}<br>
//                     Percentages of shooting at this location type: ${matchingRow['Percentages of shooting at this location type']}<br>
//                     Total Number Injured: ${matchingRow['Total Number Injured']}<br>
//                     Total Number Killed: ${matchingRow['Total Number Killed']}
//                 `;
//             } else {
//                 // Handle missing data if necessary
//                 image.tooltipData = 'No data available';
//             }
//         });
//         var totalWidth = startX + imageData.length * imageWidth + (imageData.length - 1) * imageSpacing;
//         var svgHeight = 100;
//         // Select the SVG element where images will be appended
//         var svg = d3.select(element).append('svg')
//             .attr("width", 600)
//             .attr("height", svgHeight);

//         // Define the width and height of each image
//         var imageWidth = 75;
//         var imageHeight = 50;

//         // Append images to the SVG
//         var imageSpacing = -25; // Spacing between images
//         var startX = 10; // Starting X position for the first image

//         // Append images to the SVG and position them
//         var images = svg.selectAll("image")
//             .data(imageData)
//             .enter()
//             .append("image")
//             .attr("href", function(d) { return d.url; })
//             .attr("width", imageWidth)
//             .attr("height", imageHeight)
//             .attr("x", function(d, i) { return startX + i * (imageWidth + imageSpacing); }) // Calculate the X position based on index
//             .attr("y", 20); // Set a fixed Y position

//         // Append a tooltip div to the body
//         var tooltip = d3.select("body")
//             .append("div")
//             .attr("class", "tooltip")
//             .style("opacity", 0);

//         // Event listener for mouseover event to show tooltip
//         images.on("mouseover", function(event, d) {
//             tooltip.transition()
//                 .duration(200)
//                 .style("opacity", .9);
//             tooltip.html(d.tooltipData)
//                 .style("left", (event.pageX) + "px")
//                 .style("top", (event.pageY - 28) + "px");
//         })

//             // Event listener for mouseout event to hide tooltip
//             .on("mouseout", function(d) {
//                 tooltip.transition()
//                     .duration(500)
//                     .style("opacity", 0);
//             });
//     });
// }
