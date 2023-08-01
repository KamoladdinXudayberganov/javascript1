// // // // for (let c = 0; c <= 10; c++){
// // // //     if(c % 2!= 1){
// // // //         console.log(c);
// // // //     }
// // // // }

// let count = 20
// let total = 0
// for (i = 1; i <= count; i++ ){
//     total = total + i
//     console.log(total);
// }
 
// // // //1

// // // // let w = 20
// // // // let k = 12
// // // // for (w = 2; w <= k; w++){
// // // //     console.log(w);
// // // // }

// // // //2

// // // // let a = 0
// // // // for (a = 12; a > 0; a--){
// // // //     console.log(a);
// // // // }

// // // //3

// // // let a = 100
// // // for( i = 1; i <= 10; i++){
// // //     console.log(`${i}kg narxi: ${a*i}`);
// // // }  

//4
// let a = 100
// for( i = 1; i <= 10; i++){
//     console.log(`${i/10}kg narxi ${a*i/10}`);
// }

//5

// let a = 100
// for( i = 1; i <= 10; i++){
//     if(i%2===0){
//         console.log(`${1+i/10}kg : ${a+i/10*a} so'm`);
//     }
// }

//6

// let a = 10
// let summ = 0
// for( i = 1; i <= 10; i++){
//     summ+=i
// }
// console.log(summ);

//7

// let a = 10
// let summ = 3
// for( i = 1; i <= 10; i++){
//     summ*=i
// }
// console.log(summ);

//8

// let a = 10
// let summ = 0.1
// for( i = 1; i <= 10; i++){
//     summ+=i
//     console.log(summ);
    
// }

//9

// let a = 100
// for( i = 1; i <= 10; i++){
//     console.log(`${i}kg narxi: ${a*i}`);
// }

//10

// let w = 20
// let k = 12
// for (w = 1; w <= k; w++){
//     console.log(w);
// }

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  let = num
//     for(let i = 1; i <= 10; i++) {
//      number.push(i);
// }
// console.log(number); 

//eng kattasi

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let maxNumber = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] > maxNumber) {
//     maxNumber = numbers[i];
//   }
// }

// console.log("eng katta son:", maxNumber);

// // //eng kichigi

// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let minNumber = Infinity;

// for (let i = 0; i < number.length; i++) {
//   if (number[i] < minNumber) {
//     minNumber = numbers[i];
//   }
// }

// console.log("eng kichik son", minNumber);

// 1

// let array = [1,2,3,4,5,6,7]
// function findAverage(array) {
//   if (array.length !== 0) {
//     let summ = 0;
//     for (let i = 0; i < array.length; i++) {
//       summ += array[i];
//     }
//     let resault = summ / array.length;
//     return console.log(resault);
//   } else {
//     return console.log(array.length);
//   }
// }
// findAverage(array)

// 2

// let numbers = '45385593107843568'
// function fakeBin(numbers) {
//     let resault = ''
//     for(let i = 0; i < numbers.length; i++) {
//         if(numbers[i] < 5) {
//             resault += '0'
//         } else {
//             resault += '1'
//         }
//     }
//     return resault
// }
// console.log(fakeBin(numbers));

//3

// let n = 10
// let num = 1
// let newArr = []
// for (let i = 0; i < n; i++) {
//     newArr.push(num)
//     num += 2
    
// }
// console.log(newArr);

//4

// let n = 4
// let num = 1
// const newArr = []
// for (let i = 0; i < n; i++) {
//     num = num * 2
//     newArr.push(num)
// }
// console.log(newArr);

//5

// let n = 3
// let a = 4
// let b = 9 
// let newArr = []
// for (let i = 0; i < n; i++) {
//     newArr.push(a)
//     a+=b
// }
// console.log(newArr);

//6

// let n = 3
// let a = 4
// let b = 9 
// let newArr = []
// for (let i = 0; i < n; i++) {
//     newArr.push(a)
//     a*=b
// }
// console.log(newArr);

//7

// let n = 3
// let a = 4
// let b = 9 
// let newArr = []
// for (let i = 0; i < n; i++) {
//     newArr.push(a)
//     a-=b
// }
// console.log(newArr);

//domoshni zadaniya

//1

// let array = [1, 2, 3, 4, 5];
// function vicual(array) {
//   let newArr = array.map((e) => (e > 0 ? e * - 1 : e * -1));
//   return newArr
// }

// const vicual = array => array.map(num => -num)
// console.log(vicual(vicual))

//2

// let num = [4, 5, 7, 8, 6, 9]
// let number = 0
// let newArr = []
// for(let i = num.length - 1; i >= 0; i--){
//     if(num[i] % 2 === 0 ){
//         number += 1
//         newArr.push(num[i])
//     }
// }
// console.log(`natija: ${newArr} juftlar soni:`,number)

//3

// let n = 10
// let num = 1
// let newArr = []
// for (let i = 0; i < n; i++) {
//     newArr.push(num)
//     num += 2
    
// }
// console.log(newArr);

//4

// let n = 4
// let num = 1
// const newArr = []
// for (let i = 0; i < n; i++) {
//     num = num * 2
//     newArr.push(num)
// }
// console.log(newArr);

//5

// let n = 3
// let a = 4
// let b = 9 
// let newArr = []
// for (let i = 0; i < n; i++) {
//      newArr.push(a)
//      a*=b
// }
// console.log(newArr);

//6

// 1
// let l = 3;
// let w = 3;
// const areaOrPerimeter = function (l, w) {
//     l === w
//     ? S = l * w
//     : S = 2 * ( l + w )
//   return S
// }
// areaOrPerimeter(l, w)

// 7
// let arr = [];
// function positiveSum(arr) {
//   if (arr.length > 0) {
//     let newArr = arr.filter((e) => e > 0);
//     S = 0;
//     newArr.forEach((e) => (S += e));
//     return console.log(S);
//   } else {
//     arr = 0;
//     return console.log(arr);
//   }
// }
// positiveSum(arr);

// 8
// let x = [1, 2, 3, 4];
// function grow(x) {
//   let newArr = x.reduce((initial, value) => initial * value);
//   return console.log(newArr);
// }
// grow(x);

// 9

// let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (var i = newArr.length - 1; i >= 0; i--) {
//     console.log(newArr[i]);
// }

//10

// let a = 10
// let summ = 0
// for( i = 1; i <= 10; i++){
    //     summ+=i
// }
// console.log(summ);

// let array = [2, 5, 7, 3, 9, 54, 20, 97, 23, 4, 8, 32]
// myFunction = (array) => {
//     let lastEl = array[array.length - 1]
//     let filtNum = array.filter( (e) => lastEl > e)
//     let resault = filtNum.sort( (a, b) => a - b)
//     return console.log(resault[resault.length - 1]);
// }
// myFunction(array)

// Masala

// function test(arr, count) {
//     let d = arr.Filter(value = count)
//     return value > count
// }
// test([12, 51, 844, 7, 56, 252, 9])


// function test (arr, count) {
//     let arr = [`a, b, c, hello, e, r, d, hello`]
//     console.log(arr.fill( hello = arr));
//         if(hello = world){
        
//         }
// }

// let arr = [1, 2, 4, 5, 6, 7, 8, 9, 10]
// arr.pop()
// console.log(arr);


// let arr = [1, 2, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < arr.length; i++) {
//   arr[i] += 1;
// }
// console.log(arr);



// let arr = [1, 2, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < arr.length; i++) {
//   arr[i] += arr[i];
// }
// console.log(arr);

// const arr = [1, 2, 3, 4, 5, 9, 9, 8, 8,100];

// const legion = 0;
// const sumWithInitial = arr.reduce((kamoladdin,lenovo)=>kamoladdin+lenovo,legion);

// console.log(sumWithInitial);
// // array.reduce(funktsiya (jami, joriy qiymat, joriy indeks, arr), boshlang'ich qiymat)



// const arr = [1, 2, 3, 4, 5, 9, 9, 8, 8,100];
// arr.splice(2, 5);
// console.log(arr);

// let arr = [`banan`, `orange`, `Apple`, `ananas`, `Nok`, `cherry`]
// console.log(arr.sort((a,b) => b.localeCompare(a)))

// let str = `hello world hello world hello world hello world hello world`
// str=str.replace(/world/g,'');
// console.log(str);

// var obj = {"1":5,"2":7,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0}
// var result = Object.entries(obj);
// result.map(x =>console.log(x))
// console.log(result);

// let data = [
//     {id: 1, name:`test 1`, surname:`surname 1`,age:16, solary:1200 },
//     {id: 2, name:`test 2`, surname:`surname 2`,age:17, solary:1300 },
//     {id: 3, name:`test 3`, surname:`surname 3`,age:18, solary:1400 },
//     {id: 4, name:`test 4`, surname:`surname 4`,age:19, solary:4200 },
//     {id: 5, name:`test 5`, surname:`surname 5`,age:54, solary:5200 },
//     {id: 6, name:`test 6`, surname:`surname 6`,age:30, solary:7200 },
//     {id: 7, name:`test 7`, surname:`surname 7`,age:24, solary:200  },
//     {id: 8, name:`test 8`, surname:`surname 8`,age:16, solary:3200 },
// ]
// let a = data.filter((user) => user.age > 19)
// console.log(a);
// let b = 0
// a.map((user) => {b+=user.solary})
// console.log(b);
// let arr = [
//     {name:'Alibek', age:32, status:'student'},
//     {name:'Dima', age:37, status:'usta'},
//     {name:'Sarvar', age:32, status:'SMM'},
//     {name:'Bekzod', age:72, status:'santexnik'},
//     {name:'Kamoladdin', age:12, status:'mobilograf'}
//   ];
  
//     arr.sort((a, b) => {
//     if (a.name < b.name) {
//       return -1;
//     }
//   });
  
//   console.log(arr);

// let arr = [1, 2, 3, 4, 5,]
// let arr1 = [6, 7, 8, 9, 10]
// let arr3 = [11, 12, 13, 14, 15]
// let arr2 = [ 'hello world','','solam gap'] 
// let res =[...arr, ...arr1, ...arr2, ...arr3]
// console.log(...res);

// const input1 = document.querySelector('input1')
// const input2 = docment.querySelector('input2')

// const emailInput = document.getElementById("email")
// const emailLabel = document.getElementsByClassName(".span-input")

// emailInput.addEventListener("click", function() {
//     const inputValue = emailInput.value;
  
//   if (inputValue.includes("@")) {
//       emailInput.style.borderColor = "green";
//     } else {
//         emailInput.style.border = "1px solid red ";
//         emailLabel.style.display = "block"
//     }
// });

const input1 = document.querySelector("#input1")
const input2 = document.querySelector("#input2")
const input3 = document.querySelector("#input3")
const input4 = document.querySelector("#input4")

object.style.padding = "0 10px"

input1.addEventListener("keyup", (e) => {
  object.style.width = e.target.value + "px"
})
input2.addEventListener("keyup", (e) => {
  object.style.height = e.target.value + "px"
  object.style.border = "2px solid black"
})

input4.addEventListener("keyup", (e) => {
  function myFunction() {
    object.style.backgroundColor = e.target.value
    object.style.border = "none"

  }
  myFunction()
})
input3.addEventListener("keyup", (e) => {
  object.style.borderRadius = e.target.value + "px"
})
