// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

/*
returns set of elements which all have the given class names

uses:
document.body
element.childNodes
element.classList

*/


// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
  
  var walkDOM = function (element) {

    var result = [];

    if (element.childNodes.length === 0 && _.indexOf(element.classList, className) > -1) {
        console.log("element pushed: \n");
        console.log(element);
        result.push(element);
    }

    for (var i = 0; i < element.childNodes.length; i++) {
      
      var child = element.childNodes[i];
      var res = walkDOM(child);

      if (res.length > 0) result.push(walkDOM(child));

    }
    return result;
  }
  return walkDOM(document.body);
}