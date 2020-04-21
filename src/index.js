'use strict'

const limit = 15; // regra: números de série até passar de 350

const fibonacci = () => {
    return Array.from({ length: limit })
		.reduce((acc, _val, i) => 
            acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),[]);
}

const isFibonnaci = (num) => fibonacci().includes(num);

module.exports = {
    fibonacci,
    isFibonnaci
}
