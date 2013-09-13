// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  
  var result = '';

  if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null ) {
    result += obj;
  }

  else if (typeof(obj) === 'string') {
    result += "\"" + obj + "\"";    
  }
  
  else if (Array.isArray(obj)) {
    result += '[';
    for (var i = 0; i < obj.length; i++) {
      result += stringifyJSON(obj[i]);
      if (i < obj.length - 1) result += ",";
    }
    result += ']';
  }

  else if (!Array.isArray(obj)) {
    result += '{';
    var counter = 0;
    for (item in obj) {
      if (typeof obj[item] !== 'function' && typeof obj[item] !== 'undefined') {
        if(counter > 0) result += ",";
        result += stringifyJSON(item) + ":" + stringifyJSON(obj[item]);
        counter++;
      }
    }
    result += '}';
  }
  return result;
}