const { run } = require("./app.js");

(async () => {
    try {
        const result1 = await run('./examples/simple_addition.js', { "a": 5, "b": 3 });
        console.log(result1);

        const result2 = await run('./examples/circle_area.js', { "radius": 10 });
        console.log(result2);

        process.exit(0);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
})();
