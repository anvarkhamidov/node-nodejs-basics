import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const remove = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const fp = path.join(__dirname, "files", "fileToRemove.txt")
    fs.rm(fp, (err) => {
        if (err) {
            throw new Error("FS operation failed")
        }
    })
};

await remove();