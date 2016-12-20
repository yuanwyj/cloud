(function() {
    'use strict';

    angular.module('gulpAngular').directive('acmeUserinfo', acmeUserinfo);

    function acmeUserinfo() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/userInfo/userInfo.html'
        };
        return directive;
    }
})();