const wordsUnique = [
    'fish',
    'fish',
    'fish',
    'fish',
    'fish',
    'fish',
    'fish',
    'fish',
  
  ];
  
  function uniquifyArray(input) {
    if(input.length === 0){
        return null
    }
  
    else{
      for (i=0 ; i<input.length-i; i++){
        for (j=i+1; j<input.length; j++){
          if (input[i] === input[j]){
            console.log(input[j] + " is repeated ... removing index "+i)
            input.splice(i,1)
          }
        }
      }
    }
    return input
  }

console.log(uniquifyArray(wordsUnique))