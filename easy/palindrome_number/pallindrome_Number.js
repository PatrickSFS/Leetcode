const palindrome_check = (integerNumber) => {
  if(integerNumber <= 0) {
    //numero menor que zero
    return console.log(false);
  }else{
    var nString =integerNumber.toString()
    if(nString.length % 2 == 0){
      //numero par de elemtos
      return console.log(false);
    }else{
      if(nString[0] == nString[nString.length -1]){
        return console.log(true);
      }else{
        return console.log(false);
      }
    }
  }
}

//first example
palindrome_check(121);
//second example
palindrome_check(-121);
//third example
palindrome_check(10);