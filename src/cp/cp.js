import { fork } from "child_process";
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const scriptPath = path.join(__dirname, "files", "script.js");

const spawnChildProcess = async (args) => {
    const childProcess = fork(scriptPath, args);
    childProcess.send(process.stdin);
    childProcess.on("message", msg => {
        process.stdout.write(msg);
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess([]);
