let dateOne = "2024-01-01";
let dateTwo = "2024-12-31";

function calcDiff(dateOne, dateTwo) {
    return new Date(dateTwo) - new Date(dateOne);
}

let diferenca = calcDiff(dateOne, dateTwo);
console.log(diferenca);
