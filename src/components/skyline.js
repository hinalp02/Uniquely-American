import * as d3 from 'd3';

export default function(element) {
    // Load CSV data
    d3.csv("../data/skyline.csv").then(function(csvData) {
        // Preprocess the CSV data if needed

        // Load image data
        var imageData = [
            {url: require("../images/civic.svg"), id: 0},
            {url: require("../images/warehouse.svg"), id: 1},
            {url: require("../images/mall.svg"), id: 2},
            {url: require("../images/residence.svg"), id: 3},
            {url: require("../images/office.svg"), id: 4},
            {url: require("../images/postoffice.svg"), id: 5},
            {url: require("../images/restaurant.svg"), id: 6},
            {url: require("../images/school.svg"), id: 7},
            {url: require("../images/tent.svg"), id: 8},
            {url: require("../images/university.svg"), id: 9},
            {url: require("../images/church.svg"), id: 10}
        ];

        // Merge CSV data with image data based on a common identifier
        imageData.forEach(function(image) {
            var matchingRow = csvData.find(function(row) {
                return row['Location Code'] == image.id;
            });
            if (matchingRow) {
                // Set tooltipData based on CSV data
                image.tooltipData = `
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
        var imageWidth = 50;
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
            .style("opacity", 1);

        // Event listener for mouseover event to show tooltip
        images.on("mouseover", function(d) {
            tooltip.transition()
                .duration(200)
                .style("opacity", .9);
            tooltip.html(d.tooltipData)
                .style("left", (d.clientX) + "px")
                .style("top", (d.clientY - 28) + "px");
        })
            // Event listener for mouseout event to hide tooltip
            .on("mouseout", function(d) {
                tooltip.transition()
                    .duration(500)
                    .style("opacity", 0);
            });
    });
}

// import * as d3 from 'd3';
//
// // precondition: imagedata is an array of objects where each object contains the url of an image and the corresponding tooltip data.
// export default function (element) {
//     var imageData = [
//         {url: require("../images/civic.svg"), tooltipData: "data for image 1"},
//         {url: require("../images/warehouse.svg"), tooltipData: "data for image 2"},
//         {url: require("../images/mall.svg"), tooltipData: "data for image 3"},
//         {url: require("../images/residence.svg"), tooltipData: "data for image 4"},
//         {url: require("../images/office.svg"), tooltipData: "data for image 5"},
//         {url: require("../images/postoffice.svg"), tooltipData: "data for image 6"},
//         {url: require("../images/restaurant.svg"), tooltipData: "data for image 7"},
//         {url: require("../images/school.svg"), tooltipData: "data for image 8"},
//         {url: require("../images/tent.svg"), tooltipData: "data for image 9"},
//         {url: require("../images/university.svg"), tooltipData: "data for image 10"},
//         {url: require("../images/church.svg"), tooltipData: "data for image 11"}
//     ];
//     console.log("images and data defined")
//
//     // select the svg element where images will be appended.
//     //var svg = d3.select(element).append('svg');
//
//     // define the width and height of each image.
//     var imageWidth = 50;
//     var imageHeight = 50;
//     console.log("width and height defined")
//
//     // // append a group for each image in the imagedata array.
//     // var images = d3.select(element).selectAll("img")
//     //     .data(imageData)
//     //     .enter()
//     //     .append("img")
//     //     .attr("src", d => d.url)
//     //     .attr("width", imageWidth)
//     //     .attr("height", imageHeight)
//     //     // .attr("transform", function (d, i) {
//     //     //     return "translate(" + (i * (imageWidth + 10)) + ",0)";
//     //     // })
//     var images = d3.select(element).selectAll("img")
//         .data(imageData)
//         .enter()
//         .append("img")
//         .attr("src", d => d.url)
//         .attr("width", function (d) {
//             // Check if the image is 'tent.svg' and set width accordingly
//             return d.url.includes('tent.svg') ? 10 : imageWidth;
//         })
//         .attr("height", function (d) {
//             // Check if the image is 'tent.svg' and set height accordingly
//             return d.url.includes('tent.svg') ? 10 : imageHeight;
//         });
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
//     console.log("imagedata array appended")
//
// }
