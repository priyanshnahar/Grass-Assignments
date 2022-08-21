let myPromise = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve("Hello world!");
    }, 2000);
})
console.log(myPromise);

async function a () {
    let res = await new promise((resolve, reject) => {
        let a = 10;
        if (a === 10){
            resolve('Promise resolved')
        }else 
        reject('Promise rejected');
    })
}

console.log(a());

// const axios = require('axios');

// async function fetchData() {
//     try {
//         const resposnse = await axios.get();
//         console.log(resposnse);
//     } catch (error) {
//         console.log('Inside error');
//         setTimeout(() => {
//             console.log(error);
//         }, 2000)
//     }
// }

let grassPromise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve(console.log('Promise resolved  --- Get a Job......!'));
    }, 2000)
})

console.log(grassPromise);