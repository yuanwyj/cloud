(function() {
    'use strict';

    angular.module('gulpAngular').directive('acmeDocumentcount', acmeDocumentcount);

    function acmeDocumentcount() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/documentCount/documentcount.html'
        };
        return directive;
    }
})();