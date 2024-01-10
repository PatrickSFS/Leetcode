const two_sun = (arr, target) =>{
  for(let i = 0; i < arr.length; i++){
    var resul = [];
    if(arr[i] + arr[i+1] === target){
      resul.push(i);
      resul.push(i+1);
      return console.log(resul);
    }
  }
}

//first example
  two_sun([2,7,11,15], 9)
//second example
  two_sun([3,2,4], 6)
//third example
  two_sun([3,3], 6)
