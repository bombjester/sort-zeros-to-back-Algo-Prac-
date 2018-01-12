var moveZeros = function (arr) {
  console.log(arr);
  var counter = 0;
  for (var x =0; x<=arr.length-1;x++){
    if(arr[x] === 0){
      counter+=1;
      arr.splice(x,1);
      x= x-1;
    }
  }
  
  for (var i = 0; i<counter; i++){
      arr.push(0);
  }
  return arr;
}