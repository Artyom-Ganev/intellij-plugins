angular
    .module("acme")
    .factory('myService', function () {
               return {
                 /**
                  * Fobbalize
                  * @param num the number of feebles
                  */
                 foo: function (num) {
                 },
                 bar: function (text) {
                 }
               }
             })
    .controller('myDiController', ['my<caret>Service', function (myService) {
                }]);