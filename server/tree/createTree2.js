'use strict';
const fs = require('fs');
const fn = (id)=> {
    if (id === 1) {
        return 0;
    }
    let parent = Math.ceil(Math.random() * id) - 1;
    return parent ? parent : parent + 1;

}
var tree = [];
for (let i = 0; i < 2000; i++) {
    tree.push({
        id: i,
        parent: fn(i),
        name: `test-${i}`
    });
}
fs.writeFileSync("test.json", JSON.stringify(tree));