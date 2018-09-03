function getLinksFromMd(str) {
  //  let regExpUrl = new RegExp(/(https?:\/\/)?(www\.)?[a-z0-9]+(\.\w{2,}){1,2}|(\/\w{2,})/g);
  let regExpUrl = new RegExp(/(https?:\/\/)?(www\.)?[a-z0-9]+(\.\w{2,}){1,2}/g);
  let url = str.match(regExpUrl); 

  let regExpText = new RegExp(/\[([^\]]+)\]/g);
  let text = str.match(regExpText);

  return arrayToObject(url, text); 
}

function arrayToObject(firstArray, secondArray) {
  let obj = {};
  let array = [];

  for (i = 0; i < firstArray.length; i++) {
    obj['href'] = firstArray[i];
    for(j = 0; j < secondArray.length; j++) {
      obj['text'] = secondArray[j];
      array.push(obj);
    }   
  } 

  return array;
}

module.exports = getLinksFromMd;