// recursion

// On the most basic level, using recursion in programming means calling a function within itself until a certain condition is reached.
// In JavaScript the function can be passed to itself as one of the arguments, and then called within the body of the function.

// The classic example of a recursive function is using a factorial. 
// In math, a factorial (written n!) is the product of an integer (n) and all positive integers less than n.
// ex) 4! is equal to 4 x 3 x 2 x 1, or 24.

// recursive functions have two steps
// base case
// recursive step

// we should approach recurssive problems in that order first find your base case to EXIT you out of your function then handle drilling downward to your recurssive depth

factorial = n => {
    if (n === 0) {
        return 1;
    } // BC

    return n * factorial(n - 1);
}

const result = factorial(4); // 24
console.log(result);


// MERGE SORT

// Merge sort is one of the most popular sorting algorithms today and it uses the concept of divide and conquer to sort a list of elements
// it will divide the bigger problem into smaller problems and then solve each of the small problems in order to solve the bigger problem that we started out with.

const exampleArr = [10, -1, 2, 5, 0, 6, 4, -5];

mergeSort = unsortedArray => {
    // No need to sort the array if the array only has one element or empty
    if (unsortedArray.length <= 1) {
        return unsortedArray;
    }

    // In order to divide the array in half, we need to figure out the middle
    const middle = Math.floor(unsortedArray.length / 2);

    // This is where we will be dividing the array into left and right
    const left = unsortedArray.slice(0, middle);
    const right = unsortedArray.slice(middle);

    // Using recursion to combine the left and right
    return merge(
        mergeSort(left), mergeSort(right)
    );
}

// Merge the two arrays: left and right
merge = (left, right) => {
    let resultArray = [],
        leftIndex = 0,
        rightIndex = 0;

    // We will concatenate values into the resultArray in order
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++; // move left array cursor
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++; // move right array cursor
        }
    }

    // We need to concat here because there will be one element remaining
    // from either left OR the right
    return resultArray
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
}