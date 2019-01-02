function sumItems(array) {
  // Sum all the numbers in the array
  let counter = 0;

  function elementValue(element){
    if (Array.isArray(element)){
      element.forEach((newElement)=>{
        elementValue(newElement);
      })
    } else {
      return counter += element;
    }
  }

  while(array.length > 0){
    let checkVal = array.shift();
    elementValue(checkVal);
  }

  return counter;
}

module.exports = sumItems;