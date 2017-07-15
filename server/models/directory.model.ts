const fs = require('fs')
const path = require('path')

export default class Directory {
    constructor() { };
    
    getSubDirectories(parentDirectoryPath: string) {
        return fs.readdirSync(parentDirectoryPath).filter(file => fs.lstatSync(path.join(parentDirectoryPath, file)).isDirectory())
    }
}