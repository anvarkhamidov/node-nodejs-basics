import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const copy = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const srcFolderPath = path.join(__dirname, "files")
    const destFolderPath = path.join(__dirname, "files_copy")

    fs.access(srcFolderPath, fs.constants.F_OK, (err) => {
        if (err) throw new Error(`FS operation failed: ${err.message}`)
    })
    fs.access(destFolderPath, fs.constants.F_OK, (err) => {
        if (!err) throw new Error(`FS operation failed: folder already exists`)
    })

    fs.cp(srcFolderPath, destFolderPath, { recursive: true }, (err) => {
        if (err) {
            console.log(err.message)
        }
    })
};

await copy();
