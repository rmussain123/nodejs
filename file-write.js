const { randomBytes } = require("crypto");
const fs = require("fs");
const readline = require("readline");


const writeGreetingToFile = (name) => {
    fs.writeFile(`greeting.txt`, `Hello, ${name}!`, err => {
        if(err){
            console.log(`Error occured when writing file!`)
        }
    })
}

const r1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

r1.question('what is your name? ', (name) =>{
    r1.close();
    writeGreetingToFile(name);
});