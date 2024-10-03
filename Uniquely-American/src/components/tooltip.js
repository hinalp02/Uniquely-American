import * as d3 from 'd3';
export default function Tooltip(element) {
  const tooltip = d3.select(element).append('div')
    .attr('class', 'tooltip')
    .style('position', 'absolute')
    .style('background', '#fff')
    .style('padding', '5px')
    .style('border', '1px solid #ccc')
    .style('border-radius', '5px')
    .style('pointer-events', 'none');

  this.hide = () => tooltip.style('visibility', 'hidden');
  this.show = (text) => {
    tooltip.style('visibility', 'visible')
      .html(text);
  }
    this.move = (event) => {
      tooltip.style('top', (event.pageY - 10) + 'px')
      tooltip.style('left', (event.pageX + 10) + 'px');
    }
}
