if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                return i;
            }
        };
        return -1;

    },

    sum : function(arr) {
        var total = 0;
        for (var i = 0; i < arr.length; i++) {
            total += arr[i]
        };
        return total;
    },

    remove : function(arr, item) {
        var return_array = [];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] !== item) {
                return_array.push(arr[i])
            }
        };
        return return_array;
    },

    removeWithoutCopy : function(arr, item) {
        var i, length;

        for (var i = 0; length = arr.length; i < arr.length; i++) {
            if (arr[i] === item) {
                arr.splice(i, 1)
                i = i-1
                length = length - 1
            }
        };

        return arr;

    },

    append : function(arr, item) {

    },

    truncate : function(arr) {

    },

    prepend : function(arr, item) {

    },

    curtail : function(arr) {

    },

    concat : function(arr1, arr2) {

    },

    insert : function(arr, item, index) {

    },

    count : function(arr, item) {

    },

    duplicates : function(arr) {

    },

    square : function(arr) {

    },

    findAllOccurrences : function(arr, target) {

    }
  };
});
