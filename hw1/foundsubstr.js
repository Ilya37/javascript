let str = 'Ослик иа-иа смотрел на виадук';
let substring = 'иа';

function search(str, substring){
  let foundIndex = 0;
  while(foundIndex != -1) {
    foundIndex = str.indexOf(substring, foundIndex);
    if(foundIndex != -1){
      console.log(foundIndex);
      foundIndex++;
    }
  }
}

search(str, substring);
