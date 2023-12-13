/** @param {NS} ns */
export async function main(ns) {
    const home = "home";
    const script = "deploy.js";
    const threads = 1;

    ns.exec("hacknet.js", home);

    const servers0Port = ["n00dles", "foodnstuff", "sigma-cosmetics", "joesguns", "nectar-net", "hong-fang-tea", "harakiri-sushi"];
    const servers1Port = ["neo-net", "zer0", "max-hardware", "iron-gym", "CSEC"];
    const servers2Port = ["phantasy", "omega-net", "silver-helix", "johnson-ortho", "the-hub", "crush-fitness", "avmnite-02h"];
    const servers3Port = ["computek", "netlink", "rothman-uni", "catalyst", "summit-uni", "I.I.I.I"];
    const servers4Port = ["syscore"];
    const servers5Port = ["zb-institute"];

    var i = 0;
    while (i < servers0Port.length) {
        let target = servers0Port[i];
        ns.exec(script, home, threads, target);
        i = i + 1;
    }

    while (!ns.fileExists("BruteSSH.exe", "home")) {
        await ns.sleep(1);
        ns.print("Waiting until BruteSSH.exe is available");
    }

    var i = 0;
    while (i < servers1Port.length) {
        let target = servers1Port[i];
        ns.exec(script, home, threads, target);
        i = i + 1;
    }

    while (!ns.fileExists("FTPCrack.exe", "home")) {
        await ns.sleep(1);
        ns.print("Waiting until FTPCrack.exe is available");
    }

    var i = 0;
    while (i < servers2Port.length) {
        let target = servers2Port[i];
        ns.exec(script, home, threads, target);
        i = i + 1;
    }

    while (!ns.fileExists("relaySMTP.exe", "home")) {
        await ns.sleep(1);
        ns.print("Waiting until relaySMTP.exe is available");
    }

    var i = 0;
    while (i < servers3Port.length) {
        let target = servers3Port[i];
        ns.exec(script, home, threads, target);
        i = i + 1;
    }

    while (!ns.fileExists("HTTPWorm.exe", "home")) {
        await ns.sleep(1);
        ns.print("Waiting until HTTPWorm.exe is available");
    }

    var i = 0;
    while (i < servers4Port.length) {
        let target = servers4Port[i];
        ns.exec(script, home, threads, target);
        i = i + 1;
    }

    ns.exec("tix.js", home)

    while (!ns.fileExists("SQLInject.exe", "home")) {
        await ns.sleep(1);
        ns.print("Waiting until SQLInject.exe is available");
    }

    var i = 0;
    while (i < servers5Port.length) {
        let target = servers5Port[i];
        ns.exec(script, home, threads, target);
        i = i + 1;
    }
}