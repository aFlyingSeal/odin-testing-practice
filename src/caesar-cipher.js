function isLetter(char){
    return /^[A-Za-z]/.test(char);
}

function shiftLetter(char, n){
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let newIdx;
    if (lower.indexOf(char) != -1){
        newIdx = (lower.indexOf(char) + n) % 26;
        return lower[newIdx];
    }
    else{
        newIdx = (upper.indexOf(char) + n) % 26;
        return upper[newIdx];
    }
}

function caesarCipher(str, n){
    return str.split("").map(char => {
        if (isLetter(char)){
            return shiftLetter(char, n);
        }
        return char;
    }).join("");
}

export { caesarCipher }