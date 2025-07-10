const argv = process.argv;
if(argv[2] === undefined) {
    console.log(`undefined is undefined`);
}else if (argv[3] === undefined) {
    console.log(`${argv[2]} is undefined`);
}else{
    console.log(`${argv[2]} is ${argv[3]}`);
}
