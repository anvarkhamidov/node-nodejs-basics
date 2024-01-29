const parseEnv = () => {
    const envVars = process.env
    let filteredVars = []
    Object.keys(envVars).forEach(key => {
        if (key.startsWith("RSS_")) {
            filteredVars.push(`${key}=${envVars[key]}`)
        }
    })
    console.log(filteredVars.join("; "))
};

parseEnv();