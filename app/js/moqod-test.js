(function() {

  'use strict';

  angular
  .module('moqodTest', [])
  .controller('moqodTestController', ['$scope', function($scope) {
    $scope.aufgaben = [{
        title: "116 Holzbauarbeiten/Fassade",
        number: "11006",
        info: "Pendenezen"
    }, {
        title: "116 Holzbauarbeiten/Fassade",
        number: "11006",
        info: "Pendenezen"
    }, {
        title: "116 Holzbauarbeiten/Fassade",
        number: "11006",
        info: "Pendenezen"
    }, {
        title: "116 Holzbauarbeiten/Fassade",
        number: "11006",
        info: "Pendenezen"
    }, {
        title: "116 Holzbauarbeiten/Fassade",
        number: "11006",
        info: "Pendenezen"
    }];

    $scope.bautickets = [{
        title: "Malerarbeiten - Wand",
        info: "Zusätzliche Informationen sind erforderlich"
    }, {
        title: "Nachreinigen — Boden",
        info: "Zusätzliche Informationen sind erforderlich"
    }, {
        title: "Malerarbeiten ausbessern — Decke",
        info: "Zusätzliche Informationen sind erforderlich"
    }, {
        title: "Nachreinigen — Boden",
        info: "Zusätzliche Informationen sind erforderlich"
    }, {
        title: "Nachreinigen — Boden",
        info: "Zusätzliche Informationen sind erforderlich"
    }];

    $scope.dokumente = [{
        file: "Plan.pdf",
        info: "#Ebenenplan Nessleren"
    }, {
        file: "Protokoll Begehung 220416.docx",
        info: "#Begehung"
    }, {
        file: "Settings.pdf",
        info: "#Ebenenplan Nessleren"
    }, {
        file: "Ebenenplan.pdf",
        info: "#Ebenenplan Nessleren"
    }, {
        file: "Ebenenplan.pdf",
        info: "#Ebenenplan Nessleren"
    }];

  }]);

})();
/*var data = [1, 1, 2, 3, 5, 8, 13, 21];
var arcs = d3.pie()(data);*/


/*var width = 82,
    height = 82,
    radius = 41,
    colors = d3.scaleOrdinal()
        .range(['#28703A','#C1835F','#ABB483','#9E927A','#DB8510','#80B56E','#53523C']);
    
var dataset = [ 15, 25, 35, 25 ];

var pie = d3.pie()
    .value(function(d) {
      return d.value;
    });

var arc = d3.svg.arc()
    .outerRadius(radius)
 
var myChart = d3.select('#chart1').append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', 'translate('+(width-radius)+','+(height - radius)+')')
    .selectAll('path').data(pie(piedata))
    .enter().append('g')
        .attr('class', 'slice')
 
var slices = d3.selectAll('g.slice')
        .append('path')
        .attr('fill', function(d,i) {
          return colors(i);
        })
        .attr('d', arc)    */