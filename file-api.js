let fs = require('fs');

// fs.writeFileSync('out.txt', 'This should be written in file!');
// console.log('This should print after previous line');

fs.writeFile('out.txt', 'This should be written asynchronously!', (err) => {
    console.log('This is printed after the file is written');
})

console.log('This should be printed after previous line');

let myLoggerAPI = function(logMessage, callback){
    fs.writeFile('out.log', logMessage, callback);
}

myLoggerAPI('Logthis', (err) =>{
    updateLogMetrics();
})