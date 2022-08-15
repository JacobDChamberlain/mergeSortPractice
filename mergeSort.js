// divide and conquer

const myArr = [4, 8, 7, 2, 11, 1, 3];

// function to merge two SORTED subarrays into a single sorted array:
function merge(left, right) {
    let arr = [];

    while (left.length && right.length) {
        // pick smaller of the two first elements of left and right subarrays:
        if (left[0] < right[0]) {
            arr.push(left.shift());
        } else {
            arr.push(right.shift());
        }
    }

    return [...arr, ...left, ...right];
}

function mergeSort(array) {
    const midpoint = array.length / 2;

    if (array.length < 2) {
        return array;
    }

    const left = array.splice(0, midpoint); // array.splice() changes contents of original array
    return merge(mergeSort(left), mergeSort(array));
}

console.log(mergeSort(myArr));
