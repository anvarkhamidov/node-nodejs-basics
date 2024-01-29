import { Transform } from 'stream';
const transform = async () => {
    const reverseTransform = new Transform({
        transform(chunk, encoding, cb) {
            const reversedChunk = chunk.toString().split('').reverse().join('');
            cb(null, reversedChunk);
        }
    });

    process.stdin.pipe(reverseTransform).pipe(process.stdout);
};

await transform();