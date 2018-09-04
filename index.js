function getLinksFromMd(str) {
  //  let regExpUrl = new RegExp(/(https?:\/\/)?(www\.)?[a-z0-9]+(\.\w{2,}){1,2}|(\/\w{2,})/g);
  let regExpUrl = new RegExp(/(https?:\/\/)?(www\.)?[a-z0-9]+(\.\w{2,}){1,2}/g);
  let url = str.match(regExpUrl); 

  let regExpText = new RegExp(/\[([^\]]+)\]/g);
  let text = str.match(regExpText);

  return arrayToObject(url, text); 
}

function arrayToObject(firstArray, secondArray) {  
  let array = [];
  
  firstArray.forEach(function(value) {
    let obj = {};
    obj['href'] = value;
    array.push(obj);
    secondArray.forEach(function(value) {
      obj['text'] = value;
      array.push(obj);
    })
  })

/*
  firstArray.map(function(value) {
    let obj = {};
    obj['href'] = value;
    array.push(obj);
  })
  secondArray.map(function(value) {
    let obj = {};
    obj['text'] = value;
    array.push(obj);
  })  
*/

/*
  for (i = 0; i < firstArray.length; i++) {
    let obj = {};
    obj['href'] = firstArray[i];
    for(j = 0; j < secondArray.length; j++) {
      obj['text'] = secondArray[j];
      array.push(obj);
    }   
  } 
*/
  
  return array;
}

module.exports = getLinksFromMd;