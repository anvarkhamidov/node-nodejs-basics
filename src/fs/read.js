import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const read = async () => {
    const folderPath = path.join(__dirname, "files", "fileToRead.txt")
    fs.readFile(folderPath, { encoding: 'utf-8' }, (err, data) => {
        if (err) {
            throw new Error("FS operation failed")
        }
        console.log(data)
    })
};

await read();