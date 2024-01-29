import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import zlib from 'zlib';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const decompress = async () => {
    const readStream = fs.createReadStream(path.join(__dirname, "files", "archive.gz"))
    const writeStream = fs.createWriteStream(path.join(__dirname, "files", "fileToCompress.txt"))
    const gunzip = zlib.createGunzip()
    readStream.pipe(gunzip).pipe(writeStream)
};

await decompress();