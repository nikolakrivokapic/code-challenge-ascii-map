export const existsRight = (array, position) => array && array[position + 1] && array[position + 1] !== ' ';
export const existsLeft = (array, position) => array && array[position - 1] && array[position - 1] !== ' ';
export const notExistsRight = (array, position) => array && !array[position + 1] || array[position + 1] === ' ';
export const notExistsLeft = (array, position) => array && !array[position - 1] || array[position - 1] === ' ';
export const existsAtPosition = (array, position) => array && array[position] && array[position] !== ' ';
export const arraysEqual = (arr1, arr2) => (arr1.length !== arr2.length) ? false : !(arr1.some((row, index) => arr1[index] !== arr2[index]));
