// case 3 Array reverse
function reverseArray(arr) {
    return [...arr].reverse();
}

const input = prompt("Enter any int values (e.g. 1,2,3):");
const initialArray = input.split(",");

alert("Reversed: " + reverseArray(initialArray).join(", "));
