/*
*/
const fs = require('fs');

const readFile = file => new Promise((resolve, reject) => {
    fs.readFile(file, (err, contents) => {
        if(err){
            reject(err);
        } else{
            resolve(contents);
        }
    })
 })
readFile("./in1.txt").then( contents =>{
   console.log(String(contents));
   })

console.log(2)