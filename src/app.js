'use strict';

require('angular');

angular
    .module('WorkersModule', [])
    .controller('WorkersController', ['$scope', function($scope) {

        $scope.workersList = require('json-loader!./org-structure.json');

        $scope.showChildrens = (worker) => {
            return angular.isDefined(worker.children) && worker.children.length;
        };

        $scope.modalShown = false;

        $scope.showEditDialog = (worker) => {
            $scope.modalShown = !$scope.modalShown;
            $scope.copyWorkersList = angular.copy($scope.workersList);
            $scope.worker = worker;
        };

        $scope.dismissChanges = () => {
            $scope.modalShown = false;
            $scope.workersList = $scope.copyWorkersList;
        };

        $scope.save = () => {
            $scope.modalShown = false;
        };

        $scope.exportWorkersList = () => {
            console.log($scope.workersList.structure);
        };

    }]);

require("!style-loader!css-loader!sass-loader!./main.scss");


