import * as d3 from 'd3';

export default function(element) {
    // Load CSV data
    d3.csv("../data/skyline.csv").then(function(csvData) {
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

        // Match CSV data with image data based on a common identifier (Location Code)
        imageData.forEach(function(image) {
            var matchingRow = csvData.find(function(row) {
                return +row['Location Code'] === image.id; // Convert to number for comparison
            });
            if (matchingRow) {
                // Set tooltip data for each image using matched CSV data
                image.tooltipData = `
                    Location Code: ${matchingRow['Location Code']}<br>
                    Shooting Count: ${matchingRow['Shooting Count']}<br>
                    # of Metropolitan Area Shootings: ${matchingRow['# of Metropolitan Area Shootings']}<br>
                    Percentages of shooting at this location type: ${matchingRow['Percentages of shooting at this location type']}<br>
                    Total Number Injured: ${matchingRow['Total Number Injured']}<br>
                    Total Number Killed: ${matchingRow['Total Number Killed']}
                `;
            } else {
                // Handle missing data if necessary
                image.tooltipData = 'No data available';
            }
        });

        // Select the SVG element where images will be appended
        var svg = d3.select(element).append('svg');

        // Define the width and height of each image
        var imageWidth = 75;
        var imageHeight = 50;

        // Append images to the SVG
        var images = svg.selectAll("img")
            .data(imageData)
            .enter()
            .append("img")
            .attr("src", function(d) { return d.url; })
            .attr("width", imageWidth)
            .attr("height", imageHeight);

        // Append a tooltip div to the body
        var tooltip = d3.select("body")
            .append("div")
            .attr("class", "tooltip")
            .style("opacity", 0);

        // Event listener for mouseover event to show tooltip
        images.on("mouseover", function(d) {
            tooltip.transition()
                .duration(200)
                .style("opacity", .9);
            tooltip.html(d.tooltipData)
                .style("left", (d3.event.pageX) + "px")
                .style("top", (d3.event.pageY - 28) + "px");
        })
            // Event listener for mouseout event to hide tooltip
            .on("mouseout", function(d) {
                tooltip.transition()
                    .duration(500)
                    .style("opacity", 0);
            });
    });
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
