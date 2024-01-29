const parseArgs = () => {
    const args = process.argv.slice(2)
    let filteredArgs = []
    args.forEach(arg => {
        if (arg.startsWith("--")) {
            const keyIdx = args.indexOf(arg)
            filteredArgs.push(`${arg.slice(2)} is ${args[keyIdx + 1]}`)
        }
    })
    console.log(filteredArgs.join(", "))
};

parseArgs();