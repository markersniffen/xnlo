// get main DIV
const container = d3.select('#box');

// get width/height
let height = container._groups[0][0].offsetHeight;
let width = container._groups[0][0].offsetWidth;
const padLeft = 35;
const padRight = 35;
const padBottom = 35;
const padTop = 65;
let innerWidth = width - padLeft - padRight;
let innerHeight = height - padTop - padBottom;


function render() {
  svg = container.selectAll('#svg').data([null])
   .join(
      enter => enter
      .append('svg')
      .attr('id', 'svg')
      .style('background-color', 'steelblue')
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('viewbox', `0 0 ${width} ${height}`),
      update => update
      .attr('viewbox', `0 0 ${width} ${height}`)
   )

}