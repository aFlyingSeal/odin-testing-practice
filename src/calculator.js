function isNumber(char){
    return typeof char === 'number';
}

const calculator = {
    add(a, b){
        if (isNumber(a) && isNumber(b)){
            return a + b;
        }
        throw new Error("Invalid input");
    },
    substract(a, b){
        if (isNumber(a) && isNumber(b)){
            return a - b;
        }
        throw new Error("Invalid input");
    },
    multiply(a, b){
        if (isNumber(a) && isNumber(b)){
            return a * b;
        }
        throw new Error("Invalid input");
    },
    divide(a, b){
        if (!isNumber(a) || !isNumber(b)){
            throw new Error("Invalid input");
        }
        if (b == 0){
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    }
};

export { calculator }