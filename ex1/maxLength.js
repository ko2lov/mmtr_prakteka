function maxLenght(str) {
    // Переводим все в нижинй регистр
    let vremen = str.toLowerCase();
    let intermediateArray = '';

    //Число для проверки на букву
    let numberInUncode = 0;

    for (let i = 0; i < vremen.length; i++) {

        //Букву перводим в цифру
        numberInUncode = vremen[i].charCodeAt(0);

        //Проверяем на букву
        if((numberInUncode>= 1072 && numberInUncode<=1105) || (numberInUncode>= 97 && numberInUncode<=122)){
            intermediateArray +=vremen[i];
        } else {
            intermediateArray += ' ';
        }
        // После этого получили ерунду бурунду из букв и пробелов 
    }
    //делим пробелами получаем массив из пробелов из слов
    let maas = intermediateArray.split(' ');
    
    

    //зааменяем каждый элемент массив на его длину (элемента)
    for (let i = 0; i < maas.length; i++) {
        maas[i]=maas[i].length;
    }

    
    //сортируем числа по возростанию и возвращаем последний
    return maas.sort((a,b) => a-b)[maas.length-1];

}

maxLenght('"/ .;123 "/.qwe.q;w.e qekqpwke 32193801283 ooqwpe 1&#^!@(#&!(@#&"');