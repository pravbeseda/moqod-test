var width = 194;
var height = 190;
var center = [width / 2, height / 2];
var innerRadius = 0;
var outerRadius = 58;

var data = [
  [0, 15, 'ss'], 
  [0, 25], 
  [0, 35], 
  [0, 25],
];

var labels = [15, 25, 35, 25];

var color = d3.scale.ordinal()
    .range(["#fde14a", "#99f0cc", "#fda04a", "#dd4c5d"]);

var pie = d3.layout.pie()
  .value(function (d) { return d[0]; })
  .sort(null);

var svg = d3.select('#piechart')
  .attr('width', width)
  .attr('height', height)
  .append('g')
  .attr('transform', 'translate(' + center[0] + ', ' + center[1] + ')');

var arc = d3.svg.arc()
  .innerRadius(innerRadius)
  .outerRadius(outerRadius);

var hoverArc = d3.svg.arc()
  .innerRadius(innerRadius)
  .outerRadius(outerRadius + 10);

var path = svg.datum(data).selectAll('path')
  .data(pie)
  .enter().append('path')
  .attr('fill', function (d, i) { return color(i); })
  .attr('d', arc)
  // set wedge opacity to 0 if it has mass on load (only the last wedge has mass to account for transition in
  .style('opacity', function (d) { return d.data[0] === 0 ? 1 : 0; })
  .each(function (d) { this._current = d; })
  .on('mouseover', function (d, i) {
    d3.select(this)
      .transition()
      .duration(500)
      .ease('elastic')
      .attr('transform', function (d) {
        var dist = 10;
        d.midAngle = ((d.endAngle - d.startAngle) / 2) + d.startAngle;
        var x = Math.sin(d.midAngle) * dist;
        var y = -Math.cos(d.midAngle) * dist;
        return 'translate(' + x + ',' + y + ')';
      });
  }).on('mouseout', function (d, i) {
    d3.select(this)
      .transition()
      .duration(500)
      .ease('bounce')
      .attr('transform', 'translate(0,0)')
  });


// new values for transitions
pie.value(function (d) { return d[1]; });

path = path.data(pie);
path.transition().duration(1000).attrTween('d', arcTween);

function arcTween(a) {
  var i = d3.interpolate(this._current, a);
  this._current = i(0);
  return function(t) {
    return arc(i(t));
  };
}
