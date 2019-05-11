var data = [
    ['a', 'c', 'b', 'e', 'd'],
    ['g', 'e', 'f']
];

var data2 = ['e', 'g'];

function sub(arr) {
    var i = arr.length - 1;
    var newArr = [];
    while (i >= 0) {
        let sorted = arr[i].sort();
        newArr.push(sorted);
        i--;
    }

    return newArr;
}

// console.log(sub(data));
console.log(data2);