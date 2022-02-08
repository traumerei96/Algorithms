const array = [1, 2, 4, 8, 0, 19, 7, 5, 11, 1];
// const array = [1, 2, 4, 900, 0, 19, -12, 5, 11, -1];
// const array = [0];
// const array = [-100000, -12, 12, 3, 5, 0, 12, 2];

let count = 0;

function linearSearch(array, item){
  for (let i = 0; i < array.length; i++){
    count += 1;
    if(array[i] === item){
      return i;
    }
  }
  return null;
}

console.log(linearSearch(array, 11))
console.log('count = ', count);