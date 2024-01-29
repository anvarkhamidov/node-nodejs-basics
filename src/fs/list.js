import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const list = async () => {
    const folderPath = path.join(__dirname, "files")
    fs.readdir(folderPath, { recursive: true }, (err, files) => {
        if (err) {
            throw new Error("FS operation failed")
        }
        files.forEach((file) => console.log(file))
    })
};

await list();