'use strict';

const BST = require('./bst');


const main = ()=> {

  let myTree = new BST();
  let arr = [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22];
  const stocks = [128, 97, 121, 96, 98, 97, 105];

  for(let n of arr){
    myTree.insert(n);
  }

  // console.log(inOrder(myTree));
  // console.log(preOrder(myTree));
  // console.log(postOrder(myTree));
  console.log(maxProfit(stocks));

//     3
//    / \
//   1   5
//  / \
// 0   2

};

let preOrder = (tree)=>{

  let values = [];

  if((!tree.left)&&(!tree.right)){
    return [tree.key];
  }

  values = [tree.key, ...values];

  if(tree.left){
    values = [...values, ...preOrder(tree.left)];
  }

  if(tree.right){
    values = [...values, ...preOrder(tree.right)];
  }

  return values;
};


let inOrder = (tree)=>{

  let values = [];

  if((!tree.left)&&(!tree.right)){
    return [tree.key];
  }

  if(tree.left){
    values = [...values, ...inOrder(tree.left)];
  }

  values = [...values, tree.key];

  if(tree.right){
    values = [...values, ...inOrder(tree.right)];
  }

  return values;

};


let postOrder = (tree)=>{

  let values = [];

  if((!tree.left)&&(!tree.right)){
    return [tree.key];
  }



  if(tree.left){
    values = [...values, ...postOrder(tree.left)];
  }

  if(tree.right){
    values = [...values, ...postOrder(tree.right)];
  }

  values = [...values, tree.key];

  return values;
};


// const stocks = [128, 97, 121, 96, 98, 97, 105];


function maxProfit(stocksArr) {

  if (stocksArr.length === 2) {
    return stocksArr;
  }


  if (stocksArr[0] >= stocksArr[1]) {
    return maxProfit(stocksArr.slice(1))
  }
  else if (stocksArr[2] >= stocksArr[1]) {
    return maxProfit([stocksArr[0], ...stocksArr.slice(2)]);
  }
  else if (stocksArr[2] >= stocksArr[0]) {
    return maxProfit([...stocksArr.slice(0,2), ...stocksArr.slice(3)]);
  }
  else {
    if (stocksArr.length === 3) {
      return stocksArr.slice(0,2);
    }

    let a = maxProfit([...stocksArr.slice(0,2), ...stocksArr.slice(3)]),
        b = maxProfit(stocksArr.slice(2));

    if (a[1] - a[0] > b[1] - b[0]) {
      return a;
    }
    else {
      return b;
    }
  }
}


main();








const testArr = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5];


function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return `Algorithm took ${i + 1} of tries to find value`; //how many tries it takes to search for value
    }
  }

  return `Value was not in list. Algorithm took ${arr.length} tries`;
}

// console.log(linearSearch(testArr, 115));




testArr.sort((a,b) => a-b );

function binarySearch(arr, value, start = 0, end = arr.length, cycles=1){

  let index = Math.floor((start+end)/2);
  console.log(cycles, index, arr[index])


  if(arr[index]===value){
    return `Algorithm took ${cycles} of tries to find value`;
  }
  else if( start === end){
    return `Value was not in list. Algorithm took ${cycles} tries`;
  }
  else if(arr[index] > value){
    return binarySearch(arr, value, start, index -1, cycles +1);
  }
  else if(arr[index] < value){
    return binarySearch(arr, value, index +1, end, cycles +1);
  }
}


// console.log(binarySearch(testArr, 45));
