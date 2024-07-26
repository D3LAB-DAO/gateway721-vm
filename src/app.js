const { Script, createContext } = require('vm');

let sandbox = {
    console: console,
    fetch: fetch
};

async function run(code, inputs) {
    const context = createContext(sandbox);
    const script = new Script(code, { timeout: 60000 });
    script.runInContext(context);

    console.log(code);
    console.log(inputs);

    // Assume the function name is 'mainFunction'
    const mainFunction = context.mainFunction;
    if (typeof mainFunction === 'function') {
        const result = await mainFunction(inputs);
        console.log(result);
        return result;
    } else {
        throw new Error("VM failed.");
    }
}

module.exports = { run };
