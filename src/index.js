'use strict'

const fibonacci = () => {
    const limit = 350; // regra: números de série até passar de 350
    const array = [0,1]; 
    while(array[array.length - 1] <= limit){ // 1 menor ou igual a 350 ?
        array.push(array[array.length - 2] + array[array.length - 1]); // 1 + 0 = 1... 1 + 1 = 2 .. 1 + 2 = 3 .. 2 + 3 = 5 ..
    }
    return array;
}

const isFibonnaci = (num) => fibonacci().includes(num); // num está dentro da lista ? sim : não

module.exports = {
    fibonacci,
    isFibonnaci
}
