'use strict';
const fs = require('fs');

var tree = {name:"Корень"};
var count = 0;
const fn = (tree, name, level)=>{
    if(level>4){
        return ;
    }
    let countChild = Math.ceil(Math.random()*5);
    tree.children=[];
    for(let i=0; i<countChild; i++){
        count+=1;
        let newName;
        if(level===1){
            newName = `${name} ${i+1}`;
        }else{
            newName = `${name}.${i+1}`;
        }

        tree.children.push({name: newName});
        fn(tree.children[i], newName, level+1);
    }
    return ;
};

fn(tree, 'Глава', 1);
fs.writeFileSync("test.json", JSON.stringify(tree));
console.log(count);