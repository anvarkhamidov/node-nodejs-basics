import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const calculateHash = async () => {
    let hash = crypto.createHash('sha256');
    hash.setEncoding('hex');
    let stream = fs.createReadStream(path.join(__dirname, "files", "fileToCalculateHashFor.txt"));
    stream.pipe(hash);
    hash.on('data', function (data) {
        console.log(data);
    });
};

await calculateHash();