import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const read = async () => {
    const fp = path.join(__dirname, "files", "fileToRead.txt")
    let stream = fs.createReadStream(fp);
    stream.on("data", chunk => {
        process.stdout.write(chunk);
    })
};

await read();