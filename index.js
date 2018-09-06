function getLinksFromMd(str) {
  let regExpUrl = new RegExp(/(https?:\/\/)?(www\.)?[a-z0-9]+(((\.\w{2,}){1,2})+(\/\w{2,})*)/g);
  let url = str.match(regExpUrl); 

  let regExpText = new RegExp(/\[([^\]]+)\]/g);
  let text = str.match(regExpText);

  return arrayToObject(url, text); 
}

function arrayToObject(firstValue, secondValue) {  
  let array = [];
  let newSecondValue = secondValue.map((item) => item.replace(/\[|\]/g, ''));
  
  firstValue.forEach(function(value, index) {
    let obj = {};
    obj['href'] = value;
    obj['text'] = newSecondValue[index]
    array.push(obj);
  })
    
  return array;
}

module.exports = getLinksFromMd;
