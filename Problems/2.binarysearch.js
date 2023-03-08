// .This function accepts a sorted array and a value.
// .Create a left pointer at the start of the array, and a
// right pointer at the end of the array.
// .While the left poiter comes before the right pointer:
// =>Create a pointer in the middle
// =>If you find the value you want, return the index.
// =>If the value is too small, move the left pointer up.
// =>If the value is too large, move the right pointer down.
// .If you never find the value, return -1

function sorted(arr,val) {
    let start = 0;
    let end = arr.length-1;
    let middle = Math.floor((start + end) / 2);
    while(arr[middle] !== val) {
        if(val < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if(arr[middle] === val) {
        return middle;
    }
    return -1;
}

// sorted([2,5,6,9,13,15,28,30], 15)
console.log(sorted([2,5,6,9,13,15,28,30], 15))
// console.log(sorted([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],19))
