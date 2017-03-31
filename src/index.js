function min(array) {
  if (typeof array !== 'undefined') {
  if(!array.length){
  return undefined;
  }
  var numFilter = array.filter(function(i){
  if(typeof i ==='number' && !isNaN(i)){
  return true;
  }
  else {
  return false;
  }
  });
 return Math.min.apply(null, numFilter);
 }
}
function max(array) {
  if (typeof array !== 'undefined') {
  if(!array.length){
  return undefined;
  }
  var numFilter = array.filter(function(i){
  if(typeof i ==='number' && !isNaN(i)){
  return true;
  }
  else {
  return false;
  }
  });
 return Math.max.apply(null, numFilter);
 }
}

function sum() {
  var result = 0;
  for (var i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }

  return result;
}