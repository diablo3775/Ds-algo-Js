function selectionSort(arr) {
  //with swap function
  function swap(arr,idx1,idx2) {
   ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]])
  }
  
  for(let i =0;i < arr.length;i++) {
  let lowest = i;
    for(let j=i+1;j < arr.length;j++) {
      if(arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if(i !== lowest) swap(arr, i, lowest)
  }
  return arr;
}

console.log(selectionSort([12,19,1,24,2,4,33,8]))
//without swap function
function selectionSort(arr) {  
  for(let i =0;i < arr.length;i++) {
  let lowest = i;
    for(let j=i+1;j < arr.length;j++) {
      if(arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if(i !== lowest) {
    [arr[i],arr[lowest]] = [arr[lowest],arr[i]]
    } 
  }
  return arr;
}

console.log(selectionSort([12,19,1,24,2,4,33,8]))
