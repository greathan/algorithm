

const CARD_SUITS = [
    'hearts',
    'spade',
    'diamond',
    'club'
]

const CARD_NUM = [
    2,3,4,5,6,7,8,9,10,'J','Q','K','A'
]

function shuffle() {

    let temp = [];

    let ret = [];

    CARD_SUITS.forEach(suit => {

        CARD_NUM.forEach(num => {

            temp.push(`${num}|${suit}`);

        })


    })

    for (var i = 0, l = CARD_SUITS * CARD_NUM; i < l; i++) {

        let index = Math.round(Math.random() * (temp.length - 1));

        let item = temp.splice(index, 1)[0];

        ret.push(item);
    }


    return ret;

}
