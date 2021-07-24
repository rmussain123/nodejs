const moment = require('moment-timezone');

moment.tz.setDefault('America/Los_Angeles');

let targetTimeZone;

if(process.argv.length != 3){
    console.log("Usage: node <script-file> <time-zone>");
    process.exit;
}else{
    targetTimeZone = process.argv[2];
}

 console.log(`The time at the ${targetTimeZone} timezone is ${moment().tz(targetTimeZone).format()}`);
