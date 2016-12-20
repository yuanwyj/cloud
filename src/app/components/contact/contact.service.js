(function() {
    'use strict';

    angular.module('gulpAngular').factory('contactService', contactService);

    function contactService($resource, $q) {
        var service = {
            getList: getList,
            list: []
        };

        return service;

        function getList(type) {
            var deferred = $q.defer();

            $resource('test/contacts.json').get(function(data) {
                var hits = data.hits;

                for (var i = 0; i < hits.length; i++) {
                    if (hits[i].type === type) {
                        service.list = hits[i].list;
                        deferred.resolve();
                    }
                }
            });

            return deferred.promise;
        }
    }
})();
