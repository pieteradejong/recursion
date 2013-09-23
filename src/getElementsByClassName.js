var getElementsByClassName = function (className) {

  //save results in a closure outside the subroutine
  
  //create subroutine
    //check if the current node contains the class if yes, push to result
    //check if the current node has children; if yes recurse using subrouting through child nodes
 //outside the sub routine return result
  
  var result = [];
  
  var walkDOM = function (element) {

    if (_.contains(element.classList, className)) {
        result.push(element);
    }

      for (var i = 0; i < element.childNodes.length; i++) {
          var child = element.childNodes[i];
          walkDOM(child);
      }

  }
    walkDOM(document.body);
    return result;
}