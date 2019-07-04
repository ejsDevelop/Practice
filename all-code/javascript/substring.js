/**
 * @param {string} name
 */
function getThreeChars(name){
  console.log(name.substring(1));
  return name.substring(1,4)
}

//sample usage
console.log(getThreeChars("Hello"));