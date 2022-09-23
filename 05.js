// Loop with range
const rangeLoop = (inputPertama, inputAkhir) => {
    let range = [];
    for (let i = inputPertama; i <= inputAkhir; i++) {
        range.push(i);
    }
    return range;
};

console.log(rangeLoop(4, 8));