const fs = require('fs')
const path = require('path')

export default class Directory {
    constructor() { };

    getSubDirectories(parentDirectoryPath: string) {
        return this.getDirectoryContent(parentDirectoryPath).filter(file => file.isDirectory)
    }

    getDirectoryContent(parentDirectoryPath: string) {
        parentDirectoryPath = (["null", "undefined"].includes(parentDirectoryPath)) ? "/" : Buffer.from(parentDirectoryPath, 'base64').toString('ascii')
        return fs.readdirSync(parentDirectoryPath).map(f => {
            let fullPath = path.join(parentDirectoryPath, f);
            let fileInfo = fs.lstatSync(fullPath);

            fileInfo = Object.assign({
                fullPath: fullPath,
                encodedPath: Buffer.from(fullPath).toString('base64'),
                isDirectory: fileInfo.isDirectory(),
                name: path.basename(fullPath),
                ext: path.extname(fullPath)
            }, fileInfo)

            return fileInfo;
        });
                
    }
}