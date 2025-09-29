function addition(a, b){
    return a + b;
}

function soustraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    if (b === 0) {
        throw new Error("Division par 0 interdite !");
    }
    return a / b;
}

module.exports = {addition, soustraction, multiplication, division}