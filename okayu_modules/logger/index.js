// version 2 of okayuLogger
// by okawaffles

function getTime() {
    let d = new Date();
    let hr = d.getHours();
    let mn = d.getMinutes();
    let sc = d.getSeconds();
    if (hr < 10) hr = `0${hr}`;
    if (mn < 10) mn = `0${mn}`;
    if (sc < 10) sc = `0${sc}`;
    return `${hr}:${mn}:${sc}`
}

function info(name, text) {
    console.log(`[${getTime()}] INFO  | [${name}] ${text}`);
}

function warn(name, text) {
    console.warn(`[${getTime()}] WARN  | [${name}] ${text}`);
}

function error(name, text, doTrace) {
    console.error(`[${getTime()}] ERROR | [${name}] ${text}`);
    if (doTrace) {
        var err = new Error();
        console.error(err.stack);
    }
}

module.exports = {info, warn, error}