// let arr = [1,2,3,4,5,6,7,8,9,];
// console.log(arr);

// Concat Method 
// let arr1 = [1,2,3,4,5,6,7,8,9,];
// let arr2 = [10,11,12,13,14,14];
// let arr = arr1.concat(arr2);
// console.log(arr);


let arr = ['Apple', 'Banana', 'Orange', 'Grapes', 'pinneaple',];
// to push an object in the array
arr.push('Lemon');

// to cut and add another object
arr.splice(0, 2, 'kiwi', 'lemon',);

// to remove object from the beggining
arr.shift();

// to add object in the beggining
arr.unshift('kiwi','Papaya');

// to sort according to alphabets
arr.sort();

// to reverse the array
arr.reverse();

for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
let result = [];

