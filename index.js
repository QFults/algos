// Binary Search

// const nums = [10, 34, 56, 67, 93, 120, 137, 168, 259, 280, 311, 342, 413, 514]

// const binarySearch = (arr, x) => {
//   let i, y
//   let min = 0
//   let max = arr.length - 1

//   while (min <= max) {
//     i = Math.floor((min + max) / 2)
//     y = arr[i]

//     if (y < x) {
//       min = i + 1
//     } else if (x < y) {
//       max = i - 1
//     } else {
//       return i
//     }
//   }

//   return false
// }

const nums = [
  77, 8, 16, 80, 45, 72, 1, 55, 23, 28, 42, 72,
  11, 9, 13, 8, 5, 56, 89, 38, 89, 5, 14, 76,
  53, 72, 72, 75, 79, 34, 77, 85, 44, 11, 77, 33,
  68, 25, 14, 8, 36, 38, 19, 88, 34, 95, 20, 93,
  38, 64, 89, 24, 17, 78, 90, 94, 52, 4, 41, 73,
  52, 25, 56, 84, 16, 64, 92, 39, 20, 91, 42, 97,
  68, 83, 59, 62, 87, 77, 64, 34, 96, 65, 84, 79,
  12, 88, 88, 15, 88, 7, 72, 39, 15, 17, 41, 26,
  52, 94, 18, 47
]

// Array Sort Method

// arr.sort((a, b) => a - b)

// Array Selection Sort

// const selectionSort = arr => {

//   for (let i = 0; i < arr.length; i++) {
//     let min = i

//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[min]) {
//         min = j
//       }
//     }

//     if (i !== min) {
//       let temp = arr[i]
//       arr[i] = arr[min]
//       arr[min] = temp
//     }
//   }
//   return arr
// }

// Insertion Sort

// const insertionSort = arr => {

//   let j, i

//   for (i = 0; i < arr.length; i++) {

//     const val = arr[i]

//     for (j = i - 1; j > -1 && arr[j] > val; j--) {
//       arr[j + 1] = arr[j]
//     }
    
//     arr[j + 1] = val
//   }

//   return arr
// }
