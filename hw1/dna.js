function dnaStrand(str){
  var hash = {A: "T", T:"A", C:"G", G:"C"};
  var complement = [];
  for(i = 0; i < str.length; i++){
    complement.push(hash[str.charAt(i)]);
  }
  return complement.join("");
}


// Скажу честно, решение не мое - не додумал, так что разобрал чужое отсюда http://www.replit.info/HU9s/118 :(
