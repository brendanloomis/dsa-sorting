function qSort(array, start = 0, end = array.length) {
    if (start >= end) {
        return array;
    }
    const middle = partition(array, start, end);
    array = qSort(array, start, middle);
    array = qSort(array, middle + 1, end);
    return array;
}

function partition(array, start, end) {
    const pivot = array[end - 1];
    let j = start;
    for (let i = start; i < end - 1; i++) {
        if (array[i] <= pivot) {
            swap(array, i, j);
            j++;
        }
    }
    swap(array, end - 1, j);
    return j;
}

function swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
}

let data = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26];

console.log('quick sort', qSort(data));

function mSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);

    left = mSort(left);
    right = mSort(right);
    return merge(left, right, array);
}

function merge(left, right, array) {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++];
        }
        else {
            array[outputIndex++] = right[rightIndex++];
        }
    }

    for (let i = leftIndex; i < left.length; i++) {
        array[outputIndex++] = left[i];
    }

    for (let i = rightIndex; i < right.length; i++) {
        array[outputIndex++] = right[i];
    }
    return array;
}

console.log('merge sort', mSort(data));

function shuffle(array) {
    for (let i = 0; i < array.length; i++) {
        let newIndex = Math.floor(Math.random() * array.length);
        swap(array, i, newIndex);
    }

    return array;
}

console.log('shuffle', shuffle(data));

function sortBooks(books) {
    if (books.length <= 1) {
        return books;
    }

    const middle = Math.floor(books.length / 2);
    let left = books.slice(0, middle);
    let right = books.slice(middle, books.length);

    left = sortBooks(left);
    right = sortBooks(right);
    return merge(left, right, books);
}

const books = [
    'The Perks of Being a Wallflower',
    'The Life of Pi',
    'Don Quixote',
    'The Great Gatsby',
    'Moby Dick',
    'War and Peace',
    'The Odyssey',
    'Crime and Punishment',
    'The Catcher in the Rye',
    'Catch-22',
    'Invisible Man',
    'Jane Eyre',
    'To Kill a Mockingbird'
];

console.log('sorted books', sortBooks(books));