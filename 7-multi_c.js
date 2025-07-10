const argv = process.argv;
let numberOfOccurrences = parseInt(argv[2], 10);
if (isNaN(numberOfOccurrences) || numberOfOccurrences === undefined) {
    console.log('Missing number of occurrences');
} else {
    for (let i = 0; i < numberOfOccurrences; i++) {
        console.log('C is fun');
    }
}