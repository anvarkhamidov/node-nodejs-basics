import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const create = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const fp = path.join(__dirname, "files", "fresh.txt");
    const content = 'I am fresh and young'

    fs.writeFile(fp, content, { flag: "wx" }, (err) => {
        if (err) {
            throw new Error("FS operation failed")
        }
    })
};

await create();