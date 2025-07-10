const argv = process.argv;
if(argv[2]===undefined) {
    console.log("No argument");
}else{
    console.log(`Argument found: ${argv[2]}`);
}
