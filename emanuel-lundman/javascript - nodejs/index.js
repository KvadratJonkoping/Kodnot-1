

let codeNutSolution = (depths, startFibonacciAt = 1) => {
    
    // Sort depths to make sure the largest value is last in array
    let sortByNumber = (a, b) => a - b;
    depths.sort(sortByNumber);
    
    let fibonacciStartingAt = [
        startFibonacciAt, 
        startFibonacciAt === 1 
            ? 1 
            : startFibonacciAt + 1
    ];

    console.log(`Searching for solution for: ${depths.join(", ")}`)
    console.log(`Fibonacci starting at: ${JSON.stringify(fibonacciStartingAt)}`)
    
    // Set max depth to last in array
    let maxDepth = depths[depths.length-1];
    let index = 0;

    // Set fibonacci start values, and initiate other props
    let result = {
        previous: fibonacciStartingAt, 
        sumOfPartGoals: 0, 
        results: {}
    };

    let calculate = (result, depths, index, maxDepth) => {
        if(index >= maxDepth) return result;
        index += 1;

        // Calculate current fibonacci
        let fibonacci = result.previous[0] + result.previous[1]; 

        // Sum value splitted to array and get sum % 10
        let modSum = fibonacci
            .toString() // turn number to a string for splitting
            .replace(/[\.|,]/g, "") // remove any dot or comma
            .split("e")[0] // ignore trailing zeros
            .split("") // split to char array
            .reduce((p, c) => p + Number(c), 0) // sum all values of array 
            % 10; // modulo 10 (delmål)
        
        result.sumOfPartGoals += modSum; // add new value to total sum of part goals
        
        // if depth array contains value of index, store result modulo 10
        if(depths.includes(index)) 
            result.results[index.toString()] = result.sumOfPartGoals % 10;

        // Set fibonacci values for next iteration
        result.previous.shift();
        result.previous.push(fibonacci);

        return calculate(result, depths, index, maxDepth);
    };

    // Calculate solution and return
    return calculate(result, depths, index, maxDepth);

}

// Values to find solution for
const solveFor = [10, 50, 1000];

// Calculate solution
const solution = codeNutSolution(solveFor);

// Output result
console.log("Solutions are: ") 
solveFor.forEach(num => console.log(`${num}: ${solution.results[num]}`));