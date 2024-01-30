import { cpus } from 'os';
import path from 'path';
import { fileURLToPath } from 'url';
import { Worker } from 'worker_threads';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const workerFilePath = path.join(__dirname, "worker.js");
const cpuCount = cpus().length;

const performCalculations = async () => {
    let workers = [];

    for (let i = 0; i < cpuCount; i++) {
        const worker = new Worker(workerFilePath, { workerData: i + 10 });
        let promise = new Promise((resolve, reject) => {
            worker.on("message", value => {
                resolve({ status: "resolved", data: value });
            }),
                worker.on("error", () => {
                    reject({ status: "error", data: null });
                });
        });
        workers.push(promise)
    }

    const result = await Promise.allSettled(workers);
    console.log(result.map((key) => key["value"] || key["reason"]));
};

await performCalculations();