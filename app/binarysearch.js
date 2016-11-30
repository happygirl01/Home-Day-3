module.exports = function binarySearch () {
  Array.prototype.toTwenty = function oneToTwenty (){
  for( var i=1; i<=20; i++){
    this.push(i);
  }
  return this;
}

Array.prototype.toForty = function twoToForty (){
  for( var i=2; i<=40; i+=2){
    this.push(i);
  }
  return this;
}

Array.prototype.toOneThousand = function tenToOneThousand(){
  for( var i=10; i<=1000; i+=10){
    this.push(i);
  }
  return this;
}

Array.prototype.search = function binarySearch(n){
  var resultObject ={count: 0, index: null, length: this.length};
  var minIndex = 0;
  var maxIndex = this.length - 1;

  while(minIndex <= maxIndex) {
    var midpoint = Math.floor((minIndex + maxIndex) /2); // this gets the whole number part of the division 
    if (this[maxIndex] === n) {
      resultObject.index = maxIndex;
      return resultObject;
    }
    else {
      maxIndex = maxIndex -1;
    }
    if(this[minIndex] === n){
      resultObject.index = minIndex;
      return resultObject
    }
    else{
      minIndex = minIndex + 1;
    }
    if (this[midpoint] === n) {
      resultObject.index = midpoint;
      return resultObject;
    }
    else if (this[midpoint] > n) maxIndex = midpoint -1;
    else if (this[midpoint]< n) minIndex = midpoint +1;
    resultObject.count ++;
  }
  resultObject.index = -1;
  return resultObject;
}
};
