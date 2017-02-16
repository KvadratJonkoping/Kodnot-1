const reduce = Array.prototype.reduce;


function solve(count) {
    let prev = "1", curr = "1", tot = 0;
    while (count--) {
        [prev, curr] = [curr, nextFib(prev, curr)];
        tot += reduce.call(curr, (sum, digit) => sum + Number(digit), 0) % 10;
    }
    return tot % 10;
}

// Adds two numbers represented as strings.
// The function is intended for calculating Fibonacci numbers and
// requires that curr = n + prev for some number n, where 0 < n < prev.
function nextFib(prev, curr) {
    let i = curr.length - 1;
    if (prev.length == i) {
        prev = "0" + prev;
    }
    let res = [], carry = 0;
    for (; i >= 0; i -= 1) {
        let sum = carry + Number(prev[i]) + Number(curr[i]);
        if (sum > 9) {
            res.unshift(sum - 10);
            carry = 1;
        } else {
            res.unshift(sum);
            carry = 0;
        }
    }
    if (carry == 0) {
        return res.join("");
    }
    return "1" + res.join("");
}


let count = Number(process.argv[2]);

console.log(`${count} = ${solve(count)}`);
