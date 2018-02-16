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
    }, {
        title: "Malerarbeiten ausbessern — Decke",
        info: "Zusätzliche Informationen sind erforderlich"
    }, {
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