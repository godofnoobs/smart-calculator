"use strict";
class SmartCalculator {
    constructor(initialValue) {
        this.expr = '0';
        if (initialValue) {
            var op = ' + ' + initialValue;
            this.expr += op;
        }
    }

    valueOf() {
        var temp = eval(this.expr);
        return temp;
    }

    add(number) {
        var op = ' + ' + number;
        this.expr += op;
        return this;
    }

    subtract(number) {
        var op = ' - ' + number;
        this.expr += op;
        return this;
    }

    multiply(number) {
        var op = ' * ' + number;
        this.expr += op;
        return this;
    }

    devide(number) {
        var op = ' / ' + number;
        this.expr += op;
        return this;
    }
    
    pow(number) {
        var op;
        var arr = this.expr.split(' ');
        var lastNum = arr[arr.length - 1];
        if (lastNum[0] === 'M') {
            arr[arr.length - 1] = this.powFormat(lastNum, number);
            this.expr = arr.join(' ');
            return this;
        }

        op = 'Math.pow(' + lastNum + ',' + number + ')';
        arr[arr.length - 1] = op;
        this.expr = arr.join(' ');
        return this;
    }
    
    powFormat(txt, n) {
        var arr = txt.split(',');
        var leftSide = arr.slice(0, arr.length - 1).join(',');
        var lastNum = arr[arr.length - 1].split(')')[0];
        lastNum = 'Math.pow(' + lastNum + ',' + n;
        var br = ')';
        for (var i in txt)
            if (txt[i] === 'M')
                br += ')';
        return [leftSide, lastNum].join(',') + br;
    }
    
}






module.exports = SmartCalculator;