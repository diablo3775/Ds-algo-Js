//1st
function bubbleSort(arr) {
  for(let i = 0;i < arr.length;i++) {
  for(let j = 0;j < arr.length;j++) {
    console.log(arr,arr[j],arr[j+1])
    if(arr[j] > arr[j+1]) {
      // let temp = arr[j];
      // arr[j] = arr[j+1];
      // arr[j+1] = temp;
      [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
    }
  }
    console.log("One Pass Complete")
}
  return arr;
}

console.log(bubbleSort([4,2,1,3]))

//2nd
function bubbleSort(arr) {
  for(let i = arr.length-1;i > 0;i--) {
  for(let j = 0;j < i;j++) {
    console.log(arr,arr[j],arr[j+1])
    if(arr[j] > arr[j+1]) {
      // let temp = arr[j];
      // arr[j] = arr[j+1];
      // arr[j+1] = temp;
      [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
    }
  }
    console.log("One Pass Complete")
}
  return arr;
}

console.log(bubbleSort([4,2,1,3]))

//3rd
function bubbleSort(arr) {
  let noSwaps;
  for(let i = arr.length-1;i > 0;i--) {
    noSwaps = true;
  for(let j = 0;j < i;j++) {
    console.log(arr,arr[j],arr[j+1])
    if(arr[j] > arr[j+1]) {
      // let temp = arr[j];
      // arr[j] = arr[j+1];
      // arr[j+1] = temp;
      [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
      noSwaps = false;
    }
  }
    if(noSwaps) break;
    console.log("One Pass Complete")
}
  return arr;
}

console.log(bubbleSort([4,2,1,3]))
