'use strict';

const map = (arr, fn) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i], i, arr));
  }
  return newArr;
};

export default map;
