export default function analyzeArray(arr){
    if (arr.length === 0){
        return {
            average: null,
            min: null,
            max: null,
            length: 0
        };
    }
    const average = arr.reduce((a, b) => a + b) / arr.length;
    return {
        average,
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length
    }
}