import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const write = async () => {
    let stream = process.stdin;
    const fp = path.join(__dirname, "files", "fileToWrite.txt");
    const writeableStream = fs.createWriteStream(fp);
    stream.pipe(writeableStream);
};

await write();