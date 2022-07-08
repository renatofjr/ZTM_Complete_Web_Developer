const fs = require('fs')

fs.readFile('./puzzle.txt', (err, data) => {
    console.time('funchallenge');
    if (err) {
        console.log('errrrrrroooorrr');
    }

    const content = data.toString();
    // console.log('Async', data.toString('utf8'))
    processFile(content);   // Or put the next step in a function and invoke it
    console.timeEnd('funchallenge')
});

function processFile(content) {
    // console.log(content.length);
    nTotal = 0

    for (let i = 0; i < content.length; i++) {
        if (content[i] === '(') {
            nTotal += 1
        } else if (content[i] === ')') {
            nTotal -= 1
        }
    }
 
    console.log(nTotal)
}