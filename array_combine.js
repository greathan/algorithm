

// const arr = [
//     ['a', 'b', 'c'],
//     [1, 2 ,3],
//     ['m'],
//     ['x', 'y']
// ]

function combine(arr) {

    return arr.reduce((prev, cur) =>
        combineTwo(prev, cur), arr.shift()
    );

}

function combineTwo(arr1, arr2) {

    let ret = [];

    arr1.forEach(a1 => {
        arr2.forEach(a2 => {
            ret.push(`${a1}|${a2}`)
        })
    })

    return ret;

}
