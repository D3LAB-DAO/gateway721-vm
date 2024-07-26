# Run Server

```bash
$ node src/server.js
```

# Call `run` via curl

```bash
$ curl -X POST http://localhost:3327/run \
-H "Content-Type: application/json" \
-d '{
  "code": "function addNumbers(params) { const { a, b } = params; return a + b; } mainFunction = addNumbers;",
  "inputs": { "a": 5, "b": 3 }
}'
```
