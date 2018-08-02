

//[[1], [2,3], [], [,4,5]]

function Iterator(arr) {
    this.arr = arr;
    this.cur = 0;
    this.innerCur = -1;
}

Iterator.prototype.hasNext = function() {


    var l = this.arr.length;

    var curArr = this.arr[this.cur];

    //赋值新变量 不改变this的变量
    var innerCursor = this.innerCur,
        cursor = this.cur;

    var next;


    while (curArr === undefined && cursor < l) {
        cursor++;
        curArr = this.arr[cursor];
    }



    if (curArr === undefined) return false;

    while (curArr !== undefined) {

        if (!Array.isArray(curArr)) {

            return true;

        }


        next = curArr[++innerCursor];

        while (next === undefined && innerCursor < curArr.length - 1) {

            next = curArr[innerCursor]

        }

        if (next === undefined) {
            innerCursor = -1
            curArr = this.arr[++cursor]

            while (curArr === undefined && cursor < l) {
                curArr = this.arr[++cursor]
            }

            if (curArr === undefined) return false

        } else {
            return true;
        }



    }

}

Iterator.prototype.next = function() {


    var curArr = this.arr[this.cur],
        l = this.arr.length;


    while (curArr === undefined && this.cur < l) {
        curArr = this.arr[++this.cur]
    }


    if (curArr === undefined) {

        return null

    } else {

        if (!Array.isArray(curArr)) {
            this.cur++;

            return curArr;

        }

        var next = curArr[++this.innerCur];

        while (next === undefined && this.innerCur < curArr.length - 1) {
            next = curArr[this.innerCur]
        }


        if (next === undefined) {
            this.cur++;
            this.innerCur = -1;
            return this.next();
        } else {
            return next;
        }


    }


}

Iterator.prototype.reset = function() {
    this.cur = 0;
    this.innerCur = -1;
}

var it = new Iterator([[], [1],2,,[] , [], [2,3], [], [], [5]])
while (it.hasNext()) {
    console.log(it.next())
}
