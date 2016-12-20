(function() {
    'use strict';

    angular.module('gulpAngular').directive('acmeFooter', acmeFooter);

    function acmeFooter() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/footer/footer.html'
        };
        return directive;
    }
})();