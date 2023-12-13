/** @param {NS} ns */
export async function main(ns) {
    const home = "home";
    const script = "deploy.js";
    const threads = 1;
    const sleepTime = 10000;

    ns.exec("hacknet.js", home);

    const servers0Port = ["n00dles", "foodnstuff", "sigma-cosmetics", "joesguns", "nectar-net", "hong-fang-tea", "harakiri-sushi"];
    const servers1Port = ["neo-net", "zer0", "max-hardware", "iron-gym"];
    const servers2Port = ["phantasy", "omega-net", "silver-helix", "johnson-ortho", "the-hub", "crush-fitness"];
    const servers3Port = ["computek", "netlink", "rothman-uni", "catalyst", "summit-uni"];
    const servers4Port = ["syscore"];
    const servers5Port = ["zb-institute"];

    const doNotTarget = ["darkweb", "CSEC", "avmnite-02h", "I.I.I.I", "run4theh111z", "w0r1d_d43m0n"];

    var i = 0;
    while (i < servers0Port.length) {
        let target = servers0Port[i];
        if (!doNotTarget.includes(target)) {
            ns.exec(script, home, threads, target);
        }
        i = i + 1;
    }

    while (!ns.fileExists("BruteSSH.exe", "home")) {
        await ns.sleep(sleepTime);
        ns.print("Waiting until BruteSSH.exe is available");
    }

    var i = 0;
    while (i < servers1Port.length) {
        let target = servers1Port[i];
        if (!doNotTarget.includes(target)) {
            ns.exec(script, home, threads, target);
        }
        i = i + 1;
    }

    while (!ns.fileExists("FTPCrack.exe", "home")) {
        await ns.sleep(sleepTime);
        ns.print("Waiting until FTPCrack.exe is available");
    }

    var i = 0;
    while (i < servers2Port.length) {
        let target = servers2Port[i];
        if (!doNotTarget.includes(target)) {
            ns.exec(script, home, threads, target);
        }
        i = i + 1;
    }

    while (!ns.fileExists("relaySMTP.exe", "home")) {
        await ns.sleep(sleepTime);
        ns.print("Waiting until relaySMTP.exe is available");
    }

    var i = 0;
    while (i < servers3Port.length) {
        let target = servers3Port[i];
        if (!doNotTarget.includes(target)) {
            ns.exec(script, home, threads, target);
        }
        i = i + 1;
    }

    ns.exec("tix.js", home)

    while (!ns.fileExists("HTTPWorm.exe", "home")) {
        await ns.sleep(sleepTime);
        ns.print("Waiting until HTTPWorm.exe is available");
    }

    var i = 0;
    while (i < servers4Port.length) {
        let target = servers4Port[i];
        if (!doNotTarget.includes(target)) {
            ns.exec(script, home, threads, target);
        }
        i = i + 1;
    }

    while (!ns.fileExists("SQLInject.exe", "home")) {
        await ns.sleep(sleepTime);
        ns.print("Waiting until SQLInject.exe is available");
    }

    var i = 0;
    while (i < servers5Port.length) {
        let target = servers5Port[i];
        if (!doNotTarget.includes(target)) {
            ns.exec(script, home, threads, target);
        }
        i = i + 1;
    }
}