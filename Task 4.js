// case 4 Count Occurrences
function countOccurrences(arr, value) {
    let count = 0;
    for (let item of arr) {
        if (item === value) count++;
    }
    return count;
}

const list = prompt("Enter any int values (e.g. a,b,a,c):").split(",");
const value = prompt("Enter target value:");
alert(`Occurrences of '${value}': ${countOccurrences(list, value)}`);
