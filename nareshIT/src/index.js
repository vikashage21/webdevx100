let array = [45, 46, 85, 78, 96, 63]

// sort the array

let swap;
let i = 0;
while (i < array.length - 1) {
    if (array[i] > array[i + 1]) {

        swap = array[i]
        array[i] = array[i + 1]
        array[i + 1] = swap
        i = 0;
    } else if (array[i] <= array[i + 1]) {
        i++;
    }
}

//  bubble sort

let l = 0;
let h = array.length - 1;
let mid = Math.floor((l + h) / 2)
let item = 96;

while (l <= h) {
    if (array[mid] == item) {
        console.log("item found at index " + mid);
        break;
    } else if (item < array[mid]) {
        h = mid - 1;
    } else {

        l = mid + 1;
    }

    mid = Math.floor((l + h) / 2)
}