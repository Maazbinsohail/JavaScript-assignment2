// 1st qustion

// let a = 7;
// function print (add) {
  
//   return function (ghi) {
//     console.log (add + ghi)
//   }
// }
// let innerFunction = print(7);
// let innerFunction2 = print(8);
// innerFunction  (5)
// innerFunction2 (5)

// 2nd question

// const arr = [1, 2, 7, 4, 5];
//  function findArray(arr, val) {
//    if (arr.length === 0){
//      return false;
//    } else if (arr[0] === val) {
//      return true;
//    } else {
//      return findArray(arr.slice(1), val);
//    }
//  }

// console.log(findArray(arr,2));
// console.log(findArray(arr,6));

// 3rd question

// let myPara = document.querySelector("p");
// myPara.innerHTML = "<b>Pakistan Zindabad</b>"
// console.log(myPara);

// 4th question

// function addListItem(text) {
//   const list = document.querySelector('ul');
//   const newItem = document.createElement('li');
//   newItem.textContent = text;
//   list.appendChild(newItem);
// }

// addListItem('This is a new list item.');

// Qustion 5

//  let yourPara = document.querySelector("#your-para");
// yourPara.innerHTML = "<b>Pakistan Zindabad</b>";
// yourPara.style.backgroundColor = "#000";
// yourPara.style.color = "#fff";
// yourPara.style.width = "100%";

// Question 6

// function saveObjectToLocalStorage(key, obj) {
//   const objString = JSON.stringify(obj);
//   localStorage.setItem(key, objString);
// }

// const myObj = {name: 'ahmed', age: 20};
// saveObjectToLocalStorage('myKey', myObj);

// Question 7

// function getObjectFromLocalStorage(key) {
//   const objString = localStorage.getItem(key);
//   const obj = JSON.parse(objString);
//   return obj;
// }

// const myObj = getObjectFromLocalStorage('myKey');
// console.log(myObj);




// Question 8




function saveToLocalStorage(obj) {
  for (let key in obj) {
    localStorage.setItem(key, JSON.stringify(obj[key]));
  }

  const newObj = {};

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    newObj[key] = JSON.parse(localStorage.getItem(key));
  }

  return newObj;
}

const myObj = { name: 'Ahemd', age: 20, city: 'karachi' };
const savedObj = saveToLocalStorage(myObj);

console.log(savedObj);
