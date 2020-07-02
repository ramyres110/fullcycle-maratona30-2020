const assert = require('assert').strict;

const soma = require('./handler').soma;

soma({ "queryStringParameters": null }).then(({ body }) => assert.strictEqual(JSON.parse(body).resultado, 0));
soma({ "queryStringParameters": {} }).then(({ body }) => assert.strictEqual(JSON.parse(body).resultado, 0));
soma({ "queryStringParameters": { a: 3, b: 4 } }).then(({ body }) => assert.strictEqual(JSON.parse(body).resultado, 7));
soma({ "queryStringParameters": { a: -1, b: 4 } }).then(({ body }) => assert.strictEqual(JSON.parse(body).resultado, 3));
soma({ "queryStringParameters": { a: 3, b: -4 } }).then(({ body }) => assert.strictEqual(JSON.parse(body).resultado, -1));

