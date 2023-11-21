/** @param {NS} ns */
export async function main(ns) {
    // Array of all servers that don't need any ports opened to gain root access. These have 16 GB of RAM
    const servers0Port = ["sigma-cosmetics", "joesguns", "nectar-net", "hong-fang-tea", "harakiri-sushi"];

    // Array of all servers that only need 1 port opened to gain root access. These have 32 GB of RAM
    const servers1Port = ["neo-net", "zer0", "max-hardware", "iron-gym", "CSEC"];

    const servers2Port = ["phantasy", "omega-net", "silver-helix"];

    // Copy our scripts onto each server that requires 0 ports to gain root access. Then use nuke() to gain admin access and run the scripts.
    for (let i = 0; i < servers0Port.length; ++i) {
        const serv = servers0Port[i];
        ns.exec("nuke.js", serv);
    }

    // Wait until we acquire the "BruteSSH.exe" program
    while (!ns.fileExists("BruteSSH.exe")) {
        await ns.sleep(60000);
    }

    for (let i = 0; i < servers1Port.length; ++i) {
        const serv = servers1Port[i];
        ns.exec("nuke.js", serv);
    }

    while (!ns.fileExists("FTPCrack.exe")) {
        await ns.sleep(60000);
    }

    for (let i = 0; i < servers1Port.length; ++i) {
        const serv = servers2Port[i];
        ns.exec("nuke.js", serv);
    }
}