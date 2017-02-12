const bigInt = require("big-integer");
const chalk = require("chalk");
const ProgressBar = require("progress");
var Table = require('cli-table');

let codeNutSolution = (depths, startFibonacciAt = 1) => {
    
    // Sort depths to make sure the largest value is last in array
    let sortByNumber = (a, b) => a - b;
    depths.sort(sortByNumber);
    
    let fibonacciStartingAt = [
        bigInt(startFibonacciAt), 
        startFibonacciAt === 1 
            ? bigInt(1) 
            : bigInt(bigIstartFibonacciAt + 1)
    ];

    console.log(`\nSearching for solution for: ${chalk.green(depths.join(", "))}`)
    console.log(`Fibonacci starting at: ${chalk.green("[" + fibonacciStartingAt[0].value + ", " + fibonacciStartingAt[1].value + "]")}\n`)
    
    // Set max depth to last in array
    let maxDepth = depths[depths.length-1];
    let index = 0;

    // Set fibonacci start values, and initiate other props
    let result = {
        previous: fibonacciStartingAt, 
        sumOfPartGoals: 0, 
        results: {}
    };

    // Setup progress bar
    let progressBar = new ProgressBar(":bar :percent calculating", {total: maxDepth, width: 30, complete: chalk.yellow("=")});
    let start = process.hrtime();

    // Add timer
    const elapsed = () => {
        let elapsed = process.hrtime(start)[1] / 1000000;
        return process.hrtime(start)[0] + " s " + elapsed.toFixed(0) + " ms";
    }

    let calculate = (result, depths, index, maxDepth) => {
        progressBar.tick();
        if(index >= maxDepth) return result;
        index += 1;

        // Calculate current fibonacci
        let fibonacci = result.previous[0].add(result.previous[1]); 

        // Sum value splitted to array and get sum % 10
        let modSum = fibonacci
            .toString() // turn number to a string for splitting
            .split("") // split to char array
            .reduce((p, c) => p + Number(c), 0) // sum all values of array 
            % 10; // modulo 10 (delmål)
        
        result.sumOfPartGoals += modSum; // add new value to total sum of part goals
        
        // if depth array contains value of index, store result modulo 10
        if(depths.includes(index)) {
            result.results[index.toString()] = {
                value: result.sumOfPartGoals % 10,
                time: elapsed()
            }
        }

        // Set fibonacci values for next iteration
        result.previous.shift();
        result.previous.push(fibonacci);

        return calculate(result, depths, index, maxDepth);
    };

    // Calculate solution and return
    return calculate(result, depths, index, maxDepth);

}

// Values to find solution for
const solveFor = [10, 50, 1000, 2000, 4000, 6000, 8000, 10000];

// Calculate solution
const solution = codeNutSolution(solveFor);

// Output result
let table = new Table({
    head: [chalk.white("Solutions..."), "", chalk.white("time spent")],
    style: { "padding-left": 1, "padding-right": 1 }
})

table.push(...solveFor.map(num => [chalk.white(num), chalk.yellow(solution.results[num].value), chalk.white(solution.results[num].time)]));
process.hrtime.hrtime
console.log(table.toString(), "\n");

