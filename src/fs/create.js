import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const create = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const fp = path.join(__dirname, "files", "fresh.txt");
    const content = 'I am fresh and young'

    fs.access(fp, fs.constants.F_OK, (err) => {
        if (err)
            fs.writeFile(fp, content, (err) => {
                if (err)
                    console.log(err)

            });
        else
            throw new Error("FS operation failed")
    })
};

await create();