const CustomError = require('../extensions/custom-error');

const chainMaker = {
    simpleChain: [],

    getLength() {
        // remove line with error and write your code here
        return this.simpleChain.length;
    },

    addLink(value) {
        // remove line with error and write your code here
        stringAtt = `( ${value} )`;
        this.simpleChain.push(stringAtt);
        // console.log(this);
        return this;
    },

    removeLink(position) {
        // remove line with error and write your code here
        if (typeof position === 'number') {
            this.simpleChain.splice(position - 1, 1);
            return this;
        } else {
            this.simpleChain = [];
            throw Error();
        }
    },

    reverseChain() {
        // remove line with error and write your code here
        this.simpleChain.reverse();
        return this;
    },

    finishChain() {
        // remove line with error and write your code here
        let arrToStr = this.simpleChain.join('~~');
        this.simpleChain = [];
        return arrToStr;
    },
};

module.exports = chainMaker;
