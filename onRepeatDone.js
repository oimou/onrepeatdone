(function(define) {
  define([
    "directive/module"
  ], function(mod) {
    return mod.directive("onRepeatDone", function() {
      return {
        restrict: "A",

        link: function($scope, $element, $attr) {
          if ($scope.$last) {
            $scope.$emit($attr["onRepeatDone"] || "repeat_done", $element);
          }
        }
      };
    });
  });
})(
  typeof define !== "undefined" ? define :
  function(deps, factory) { if (typeof App !== "undefined") factory(App) }
);
