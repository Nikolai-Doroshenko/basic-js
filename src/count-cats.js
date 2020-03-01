module.exports = function countCats(matrix) {
  let number = 0;
  if (matrix === []) {
    return number
  } 
   matrix.forEach(function(element) {
       element.forEach(function(el) {
           if (el === "^^") {
               number++;
           } 
       }) 
   })
  return number;
}; 