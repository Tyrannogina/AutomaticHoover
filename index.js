var readline = require('readline');
var Room = require('./src/room')
var Hoover = require('./src/hoover')

let lineCount = 0
let room, hoover

// We create an interface to connect to stdin/stdout
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

const consumeLine = (line) => {
    // If the first character of the line is NaN we are on the last line, containing
    // the instructions, so we execute them, print the results and end the process with success code
    if (isNaN(line[0])) {
        hoover.executeInstructions(line, room)
        console.log(hoover.position.x, hoover.position.y)
        console.log(hoover.cleanedPatches)
        process.exit(0)
    }
    // Parse line coordinates
    let [x, y] = line.split(' ')
    x = parseInt(x)
    y = parseInt(y)
    // First line: we create the room, passing the size
    // Second line: we create a hoover and assign its position
    // Rest of lines with numbers are dirt patches, so we add them to the room floor
    if (lineCount === 0) {
        room = new Room(x, y)
    } else if (lineCount === 1) {
        hoover = new Hoover(x, y)
    } else {
        room.addDirtPatch(x, y)
    }
    lineCount++
}
rl.on('line', consumeLine);

