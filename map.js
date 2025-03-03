import * as d3 from 'd3';
import * as topojson from 'topojson';

import us from '../data/us.json'

export default function Map(element) {
  const width = 975;
  const height = 610;

  const projection = d3.geoAlbersUsa()
    .scale(1300)
    .translate([487.5, 305]);

  const path = d3.geoPath();

  const svg = d3.select(element).append('svg')
    .attr("viewBox", [0, 0, width, height])
    .attr("style", "max-width: 100%; height: auto;");

  svg.append("g")
    .attr("fill", "none")
    .attr("stroke", "#333")
    .style("stroke-linejoin", "round")
    .style("stroke-linecap", "round")
    .attr("id", "map")
    .selectAll("path")
    .data([
      topojson.feature(us, us.objects.nation),
      topojson.mesh(us, us.objects.states),
    ])
    .join("path")
    .attr("d", path);

  this.counties = svg.append("g")
    .attr("class", "counties")
    .selectAll("path")
    .data(topojson.feature(us, us.objects.counties).features)
    .join("path")
    .attr("fill", "none")
    .attr("stroke", "#777")
    .attr("stroke-linejoin", "round")
    .attr("d", path)
    .attr("opacity", .1);

  svg.append("g").attr("id", "points");

  this.update = (data, dataKey) => {
    const radiusScale = d3.scaleSqrt()
      .domain([
        d3.min(data, d => d[dataKey]),
        d3.max(data, d => d[dataKey])
      ])
      .range([4, d3.max(data, d => d[dataKey])/3]);

  this.points = svg.select('#points').selectAll('circle')
    .data(data)
    .enter()
    .append('circle')
      .attr('id', d => d['Case #'])
      .attr('cx', d => projection([d.Longitude, d.Latitude])[0])
      .attr('cy', d => projection([d.Longitude, d.Latitude])[1])
      .attr('r', d => radiusScale(d[dataKey]))
      .attr('fill', "red")
    .attr('opacity', 0.5)
    .style('mix-blend-mode', 'multiply');

    this.makeCircleLegendWithNums(data, radiusScale, dataKey);
  }

  this.highlightCircles = (key) => {
    this.points.classed("highlighted", d => d.Location === key).raise();
  };

  this.unHighlightCircles = () => {
    this.points.classed("highlighted", false);
  };

  this.makeCircleLegendWithNums = (data, scale, dataKey) => {
    const w = 150
    const h = 75
    const legendPts = [4, 28, 60]
    const legendScale = d3.scalePoint()
      .domain(legendPts)
      .range([0, w])

    const legend = svg.append("g")
      .attr("transform", `translate(${width - 285}, ${40})`)

    legend.append("text")
      .attr("x", w / 2)
      .attr("y", h)
      .attr('font-size', "12px")
      .attr("text-anchor", "middle")
      .text(dataKey);

    // Labels
    const axis = d3.axisBottom(legendScale)
      .tickValues(legendPts)

    legend.append("g")
      .attr("transform", `translate(0, ${h / 2})`)
      .call(axis)

    legend.selectAll("circle")
      .data(legendPts)
      .join("circle")
      .attr("cx", legendScale)
      .attr("cy", d => h / 2 - scale(d))
      .attr("r", scale)
      .attr("fill", "red")
      .attr("opacity", 0.7)
      .style('mix-blend-mode', 'multiply');
  }
}
