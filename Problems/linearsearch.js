// linearSearch([10, 15, 20, 25, 30], 15) // 1
// linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4) // 5
// linearSearch([100], 100) // 0
// linearSearch([1,2,3,4,5], 6) // -1
// linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10) // -1
// linearSearch([100], 200) // -1
// Write a function called linearSearch which accepts an array and a value, and returns the index at which the value exists. If the value does not exist in the array, return -1.
function linearSearch(arr, value) {
    let t;
    for(let i = 0; i < arr.length; i++) {
            if(arr[i] === value) {
                t = arr[i];
            } else {
                t = -1;
            }
        }
        return t;
}
console.log(linearSearch([1,3,4,2,6], 8))

// function linearSearch(arr,value) {
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] === value) {
//             return arr[i]
//         }
//     }
// }

// console.log(linearSearch([1,2,4,5],5))