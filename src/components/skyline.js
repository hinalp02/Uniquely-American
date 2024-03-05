
// import * as d3 from 'd3';
// precondition: imagedata is an array of objects where each object contains the url of an image and the corresponding tooltip data.
export default function (element) {
    var imageData = [
        {url: "src/images/civic.png", tooltipData: "data for image 1"},
        {url: "src/images/factory.jpeg", tooltipData: "data for image 2"},
        {url: "src/images/mall.jpeg", tooltipData: "data for image 3"},
        {url: "src/images/house.jpeg", tooltipData: "data for image 3"},
        {url: "src/images/office.jpg", tooltipData: "data for image 3"},
        {url: "src/images/postoffice.png", tooltipData: "data for image 3"},
        {url: "src/images/restaurant.jpg", tooltipData: "data for image 3"},
        {url: "src/images/school.jpeg", tooltipData: "data for image 3"},
        {url: "src/images/soccergoal.jpeg", tooltipData: "data for image 3"},
        {url: "src/images/university.png", tooltipData: "data for image 3"},
        {url: "src/images/worship.jpeg", tooltipData: "data for image 3"}
    ];
    console.log("images and data defined")

// select the svg element where images will be appended.
    var svg = d3.select("svg");
    console.log("svg for image appending")

// define the width and height of each image.
    var imageWidth = 100;
    var imageHeight = 100;
    console.log("width and height defined")

// append a group for each image in the imagedata array.
    var images = svg.selectAll("g")
        .data(imageData)
        .enter()
        .append("g")
        .attr("transform", function (d, i) {
            return "translate(" + (i * (imageWidth + 10)) + ",0)";
        })
        // event listener for mouseover event to show tooltip.
        .on("mouseover", function (d) {
            tooltip.transition()
                .duration(200)
                .style("opacity", .9);
            tooltip.html(d.tooltipData)
                .style("left", (d3.event.pageX) + "px")
                .style("top", (d3.event.pageY - 28) + "px");
        })
        // event listener for mouseout event to hide tooltip.
        .on("mouseout", function (d) {
            tooltip.transition()
                .duration(500)
                .style("opacity", 0);
        });
    console.log("imagedata array appended")

// append an image element to each group, setting its attributes.
    images.append("image")
        .attr("xlink:href", function (d) {
            return d.url;
        })
        .attr("width", imageWidth)
        .attr("height", imageHeight);
    console.log("image appended")

// append a tooltip div to the body.
    var tooltip = d3.select("body")
        .append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);
    console.log("tooltip appended")
}
//
//     let data = FileAttachment("Copy of The Violence Project Mass Shooter Database - Version 8 (January 2024)  - Full Database.csv").csv({typed: "auto"})
// let x;
// let chart = {
//     // Declare the chart dimensions and margins.
//     const width = 928;
//     const height = 500;
//     const marginTop = 30;
//     const marginRight = 0;
//     const marginBottom = 30;
//     const marginLeft = 40;
//
//     // Declare the x (horizontal position) scale.
//     x = d3.scaleBand()
//     .domain(d3.groupSort(data, ([d]) => -d3.count(data, d => d.Location), (d) => d.Location)) // descending frequency
//     .range([marginLeft, width - marginRight])
//     .padding(0.1);
//
//     // Declare the y (vertical position) scale.
//     const y = d3.scaleLinear()
//     .domain([0, d3.count(data, d => d.Location)])
//     .range([height - marginBottom, marginTop]);
//
//     // Create the SVG container.
//     const svg = d3.create("svg")
//     .attr("width", width)
//     .attr("height", height)
//     .attr("viewBox", [0, 0, width, height])
//     .attr("style", "max-width: 100%; height: auto;");
//
//     // Add a rect for each bar.
//     svg.append("g")
//     .attr("fill", "steelblue")
//     .selectAll()
//     .data(data)
//     .join("rect")
//     .attr("x", (d) => x(d.Location))
//     .attr("y", (d) => y(d3.count(data, d => d.Location)))
//     .attr("height", (d) => y(0) - y(d3.count(data, d => d.Location)))
//     .attr("width", x.bandwidth());
//
//     // Add the x-axis and label.
//     svg.append("g")
//     .attr("transform", `translate(0,${height - marginBottom})`)
//     .call(d3.axisBottom(x).tickSizeOuter(0));
//
//     // Add the y-axis and label, and remove the domain line.
//     svg.append("g")
//     .attr("transform", `translate(${marginLeft},0)`)
//     .call(d3.axisLeft(y).tickFormat((y) => (y * 100).toFixed()))
//     .call(g => g.select(".domain").remove())
//     .call(g => g.append("text")
//     .attr("x", -marginLeft)
//     .attr("y", 10)
//     .attr("fill", "currentColor")
//     .attr("text-anchor", "start")
//     .text("↑ Frequency"));
//
//     // Return the SVG element.
//     return svg.node();
// }