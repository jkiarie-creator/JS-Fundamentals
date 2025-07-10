const squareSize = parseInt(process.argv[2], 10);
if (isNaN(squareSize) || squareSize === undefined) {
    console.log('Missing size');
} else {
    for (let i = 0; i < squareSize; i++) {
        let row = '';
        for (let j = 0; j < squareSize; j++) {
            row += 'X';
        }
        console.log(row);
    }
}
