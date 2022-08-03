"use strict";


function ex7(arr,size) {
    let result = [];

    if (size <= 0) {
        return "ты помоему перепутал";
    } else {
        for (let i = 0; i < Math.ceil(arr.length/size); i++) {
            result[i] = arr.slice(i*size,i*size+size);
        }
        return result;
    }


}

let arr123 =[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4];
let num = 2;

console.log(ex7(arr123,num));

