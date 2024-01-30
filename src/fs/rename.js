import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const rename = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const srcFilePath = path.join(__dirname, "files", "wrongFilename.txt")
    const destFilePath = path.join(__dirname, "files", "properFilename.md")
    fs.access(srcFilePath, (err) => {
        if (err)
            throw new Error(`FS operation failed: ${err.message}`)
    });
    fs.access(destFilePath, (err) => {
        if (!err) {
            throw new Error(`FS operation failed: folder already exists`)
        } else {
            fs.rename(srcFilePath, destFilePath, (err) => {
                if (err) {
                    console.log(err.code)
                    console.log(err.message)
                }
            });
        };
    });
}

await rename();