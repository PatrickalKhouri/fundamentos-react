function megaSena (numbers) {

  var times = numbers;
  
  const numberArray = [];
 
  
  for(var i=0; i < times; i++){
    var randomize = Math.floor(Math.random() * (59)) + 1;

    if(numberArray.includes(randomize)) {
     i--; 
    } else {
    numberArray.push(randomize);
  }
}
  
return numberArray.sort((n1, n2) => n1 - n2);
  
};

console.log(megaSena(6));

