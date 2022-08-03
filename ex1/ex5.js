"use strict";
function ex5(str) {


    let arr = str.split(' ');
    let result = '';
    console.log(arr);



    for (let i = 0; i < arr.length; i++) {
        result += (arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase()) + ' ';
    }

    return result;
}


let str = "How can mirrors be real if our eyes aren't real";

console.log(ex5(str));


