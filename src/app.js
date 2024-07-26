const { readFileSync } = require('fs');
const { Script, createContext } = require('vm');

let sandbox = {
    console: console,
    fetch: fetch
};

async function run(file, inputs) {
    const fileString = readFileSync(file, { encoding: 'utf8' });

    const context = createContext(sandbox);
    const script = new Script(fileString, { timeout: 60000 });
    script.runInContext(context);

    // Assume the function name is 'mainFunction'
    const mainFunction = context.mainFunction;
    if (typeof mainFunction === 'function') {
        const result = await mainFunction(inputs);
        return result;
    } else {
        throw new Error("VM failed.");
    }
}

module.exports = { run };
