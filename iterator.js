

//[[1], [2,3], [], [,4,5]]

function Iterator(arr) {
    this.arr = arr;
    this.cur = 0;
    this.innerCur = -1;
}

Iterator.prototype.hasNext = function() {

    var i = 1;

    var j = 1;

    var next = this.arr[this.cur];
    var nextInner;

     debugger;

    while (next && !next.length) {

        this.innerCur = -1;
        next = this.arr[this.cur + i++];
        
    }


    var l = next.length;

    if (next && l) {

        while (nextInner === undefined && j <= l) {

            nextInner = next[this.innerCur + j++]

        }

        return nextInner !== undefined;
        

    }else {
        return false;
    }

    
    
    
}

Iterator.prototype.next = function() {

    var next = this.arr[this.cur++],
        nextInner;

    while (next && !next.length) {
        this.innerCur = 0
        next = this.arr[++this.cur];
    }

    var l = next.length;

    // debugger;

    if (next && l) {

        while (nextInner === undefined && this.innerCur < l) {

            nextInner = next[this.innerCur++]
    
        }

        return nextInner || null;
        
    } else {
        return null
    }

    
    
}
