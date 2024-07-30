//
const fs = require('fs').promises;
const path = require('path');

/*
fs.readdir(path.resolve(__dirname))
    .then(files => console.log(files))
    .catch(e => console.log(e));
*/

async function readdir(rootDir){
    rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    Walk(files, rootDir);
}

async function Walk(files, rootDir){
    for(let file of files){
        const fileFullPath = path.resolve(rootDir, file);
        const stats = await fs.stat(fileFullPath);

        if(/\.git/g.test(fileFullPath)) continue;
        if(/\.node_modules/g.test(fileFullPath)) continue;

        if(stats.isDirectory()){
            readdir(fileFullPath);
            continue;
        }
        if(!/\.css$/g.test(fileFullPath)) continue;
        console.log(file, stats.isDirectory());
    }
}

readdir('/MeusProjetos/CursoJS');