function myEach(collection, callback) {
    if (Array.isArray(collection)){
        for(let i =0; i<collection.length;i++){
        (callback(collection[i]))
        }
    } else if(typeof collection === 'object') {
        const newColl = Object.values(collection)
        for(let i=0;i<newColl.length;i++){
        (callback(newColl[i]))
        }
    }
    return collection;
}

function myMap(collection,callback){
    let newArr = []
    if(Array.isArray(collection)) {
        for(let i = 0;i<collection.length;i++){
            newArr.push(callback(collection[i]))
        }
    } else if (typeof collection === 'object') {
        const newColl2 = Object.values(collection)
        for(let i=0;i<newColl2.length;i++){
         newArr.push(callback(newColl2[i]))
        }
    } return newArr
}


function standardizeInput(collection){
   return Array.isArray(collection) ? collection.slice(): Object.values(collection)
}
function myReduce(collection,callback,acc){
 let newColl = standardizeInput(collection)
 if(!acc) {
    acc = newColl[0]
    newColl = newColl.slice(1)
 }
 for(let i=0;i<newColl.length;i++){
    acc = callback(acc, newColl[i],newColl)
 }
 return acc
}

function myFind(collection, predicate){
    let nextColl = standardizeInput(collection)
    for(let i=0;i<nextColl.length;i++){
        if(predicate(nextColl[i])){
            return nextColl[i];
        }
    }
    return undefined
}

function myFilter(collection, predicate) {
    let thirdColl = standardizeInput(collection);
    let newArr = [];
    for(let i=0;i<thirdColl.length;i++){
        if(predicate(thirdColl[i])){
             newArr.push(thirdColl[i]);
        }
    }
    return newArr;
}

function mySize(collection){
    let fourthColl = standardizeInput(collection)
    return fourthColl.length
}

function myFirst(array, n) {
     if (n === undefined){
      return array[0];
      } else {
      return array.slice(0,n);
      }
  }


  function myLast(array, n){
   if( n===undefined){
    return array[array.length-1]
   } else {
    return array.slice(array.length-n)
    }
  }

  function myKeys(object) {
    return Object.keys(object)
  }

  function myValues(object) {
    return Object.values(object)
  }