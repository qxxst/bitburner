// startup.js by qxxst
/** @param {NS} ns */
export async function main(ns) {
    const home = "home";
    const script = "deploy.js";
    const threads = 1;
    const sleepTime = 10000;
    var optimizedTarget = "n00dles";
    var targetThreshold = await ns.getServerMaxMoney(optimizedTarget);
    ns.print("Starting target threshold is " + targetThreshold + ".");

    ns.exec("hacknet.js", home);

    const servers0Port = ["n00dles", "foodnstuff", "sigma-cosmetics", "joesguns", "nectar-net", "hong-fang-tea", "harakiri-sushi"];
    const servers1Port = ["neo-net", "zer0", "max-hardware", "iron-gym"];
    const servers2Port = ["phantasy", "omega-net", "silver-helix", "the-hub", "crush-fitness"];
    const servers3Port = ["computek", "netlink", "rothman-uni", "catalyst", "summit-uni", "rho-construction", "millenium-fitness"];
    const servers4Port = ["syscore", "alpha-ent", "global-pharm", "lexo-corp", "snap-fitness", "univ-energy", "nova-med", "unitalife", "zb-def", "aevum-police", "."];
    const servers5Port = ["zb-institute", "galactic-cyber", "deltaone", "taiyang-digital", "aerocorp", "omnia", "icarus", "infocomm", "defcomm", "solaris", "zeus-med", "helios", "omnitek", "powerhouse-fitness"];

    const doNotTarget = ["darkweb", "CSEC", "avmnite-02h", "I.I.I.I", "run4theh111z", "w0r1d_d43m0n", "fulcrumassets", "nwo", "clarkinc"];

    function hasDuplicates(array) {
        return new Set(array).size !== array.length;
    }
    if (hasDuplicates(servers0Port)) {
        ns.print("Array servers0Port has duplicate values. Please fix this before running this script again.");
        return
    }
    if (hasDuplicates(servers1Port)) {
        ns.print("Array servers1Port has duplicate values. Please fix this before running this script again.");
        return
    }
    if (hasDuplicates(servers2Port)) {
        ns.print("Array servers2Port has duplicate values. Please fix this before running this script again.");
        return
    }
    if (hasDuplicates(servers3Port)) {
        ns.print("Array servers3Port has duplicate values. Please fix this before running this script again.");
        return
    }
    if (hasDuplicates(servers4Port)) {
        ns.print("Array servers4Port has duplicate values. Please fix this before running this script again.");
        return
    }
    if (hasDuplicates(servers5Port)) {
        ns.print("Array servers5Port has duplicate values. Please fix this before running this script again.");
        return
    }
    if (hasDuplicates(doNotTarget)) {
        ns.print("Array doNotTarget has duplicate values. Please fix this before running this script again.");
        return
    }

    var i = 0;
    while (i < servers0Port.length) {
        let target = servers0Port[i];
        if (!doNotTarget.includes(target) && ns.getServerRequiredHackingLevel(target) <= ns.getHackingLevel()) {
            if (targetThreshold < await ns.getServerMaxMoney(target)) {
                optimizedTarget = target;
                targetThreshold = await ns.getServerMaxMoney(target);
                ns.print("New target threshold is " + targetThreshold + " on " + optimizedTarget + ".");
            }
            else {
                ns.print(target + " does not have more money available than the current threshold. Moving on.");
            }
        }
        else {
            if (doNotTarget.includes(target)) {
                ns.print("Skipping " + target + " because it is in the doNotTarget array. Please remove it from the array if you want to target it.");
            }
            if (ns.getServerRequiredHackingLevel(target) > ns.getHackingLevel()) {
                ns.print("Skipping " + target + " because it requires hacking level " + ns.getServerRequiredHackingLevel(target) + ".");
            }
        }
        i = i + 1;
    }

    while (i < servers1Port.length) {
        let target = servers1Port[i];
        if (!doNotTarget.includes(target) && ns.getServerRequiredHackingLevel(target) <= ns.getHackingLevel() && ns.fileExists("BruteSSH.exe", "home")) {
            if (targetThreshold < await ns.getServerMaxMoney(target)) {
                optimizedTarget = target;
                targetThreshold = await ns.getServerMaxMoney(target);
                ns.print("New target threshold is " + targetThreshold + " on " + optimizedTarget + ".");
            }
            else {
                ns.print(target + " does not have more money available than the current threshold. Moving on.");
            }
        }
        else {
            if (doNotTarget.includes(target)) {
                ns.print("Skipping " + target + " because it is in the doNotTarget array. Please remove it from the array if you want to target it.");
            }
            if (ns.getServerRequiredHackingLevel(target) > ns.getHackingLevel()) {
                ns.print("Skipping " + target + " because it requires hacking level " + ns.getServerRequiredHackingLevel(target) + ".");
            }
        }
        i = i + 1;
    }

    var i = 0;
    while (i < servers2Port.length) {
        let target = servers2Port[i];
        if (!doNotTarget.includes(target) && ns.getServerRequiredHackingLevel(target) <= ns.getHackingLevel() && ns.fileExists("FTPCrack.exe", "home")) {
            if (targetThreshold < await ns.getServerMaxMoney(target)) {
                optimizedTarget = target;
                targetThreshold = await ns.getServerMaxMoney(target);
                ns.print("New target threshold is " + targetThreshold + " on " + optimizedTarget + ".");
            }
            else {
                ns.print(target + " does not have more money available than the current threshold. Moving on.");
            }
        }
        else {
            if (doNotTarget.includes(target)) {
                ns.print("Skipping " + target + " because it is in the doNotTarget array. Please remove it from the array if you want to target it.");
            }
            if (ns.getServerRequiredHackingLevel(target) > ns.getHackingLevel()) {
                ns.print("Skipping " + target + " because it requires hacking level " + ns.getServerRequiredHackingLevel(target) + ".");
            }
        }
        i = i + 1;
    }

    var i = 0;
    while (i < servers3Port.length) {
        let target = servers3Port[i];
        if (!doNotTarget.includes(target) && ns.getServerRequiredHackingLevel(target) <= ns.getHackingLevel() && ns.fileExists("relaySMTP.exe", "home")) {
            if (targetThreshold < await ns.getServerMaxMoney(target)) {
                optimizedTarget = target;
                targetThreshold = await ns.getServerMaxMoney(target);
                ns.print("New target threshold is " + targetThreshold + " on " + optimizedTarget + ".");
            }
            else {
                ns.print(target + " does not have more money available than the current threshold. Moving on.");
            }
        }
        else {
            if (doNotTarget.includes(target)) {
                ns.print("Skipping " + target + " because it is in the doNotTarget array. Please remove it from the array if you want to target it.");
            }
            if (ns.getServerRequiredHackingLevel(target) > ns.getHackingLevel()) {
                ns.print("Skipping " + target + " because it requires hacking level " + ns.getServerRequiredHackingLevel(target) + ".");
            }
        }
        i = i + 1;
    }

    var i = 0;
    while (i < servers4Port.length) {
        let target = servers4Port[i];
        if (!doNotTarget.includes(target) && ns.getServerRequiredHackingLevel(target) <= ns.getHackingLevel() && ns.fileExists("HTTPWorm.exe", "home")) {
            if (targetThreshold < await ns.getServerMaxMoney(target)) {
                optimizedTarget = target;
                targetThreshold = await ns.getServerMaxMoney(target);
                ns.print("New target threshold is " + targetThreshold + " on " + optimizedTarget + ".");
            }
            else {
                ns.print(target + " does not have more money available than the current threshold. Moving on.");
            }
        }
        else {
            if (doNotTarget.includes(target)) {
                ns.print("Skipping " + target + " because it is in the doNotTarget array. Please remove it from the array if you want to target it.");
            }
            if (ns.getServerRequiredHackingLevel(target) > ns.getHackingLevel()) {
                ns.print("Skipping " + target + " because it requires hacking level " + ns.getServerRequiredHackingLevel(target) + ".");
            }
        }
        i = i + 1;
    }

    var i = 0;
    while (i < servers5Port.length) {
        let target = servers5Port[i];
        if (!doNotTarget.includes(target) && ns.getServerRequiredHackingLevel(target) <= ns.getHackingLevel() && ns.fileExists("SQLInject.exe", "home")) {
            if (targetThreshold < await ns.getServerMaxMoney(target)) {
                optimizedTarget = target;
                targetThreshold = await ns.getServerMaxMoney(target);
                ns.print("New target threshold is " + targetThreshold + " on " + optimizedTarget + ".");
            }
            else {
                ns.print(target + " does not have more money available than the current threshold. Moving on.");
            }
        }
        else {
            if (doNotTarget.includes(target)) {
                ns.print("Skipping " + target + " because it is in the doNotTarget array. Please remove it from the array if you want to target it.");
            }
            if (ns.getServerRequiredHackingLevel(target) > ns.getHackingLevel()) {
                ns.print("Skipping " + target + " because it requires hacking level " + ns.getServerRequiredHackingLevel(target) + ".");
            }
        }
        i = i + 1;
    }

    var i = 0;
    while (i < servers0Port.length) {
        let target = servers0Port[i];
        if (!doNotTarget.includes(target) && ns.getServerRequiredHackingLevel(target) <= ns.getHackingLevel()) {
            ns.exec(script, home, threads, target, optimizedTarget);
        }
        else {
            if (doNotTarget.includes(target)) {
                ns.print("Skipping " + target + " because it is in the doNotTarget array. Please remove it from the array if you want to target it.");
            }
            if (ns.getServerRequiredHackingLevel(target) > ns.getHackingLevel()) {
                ns.print("Skipping " + target + " because it requires hacking level " + ns.getServerRequiredHackingLevel(target) + ".");
            }
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
        if (!doNotTarget.includes(target) && ns.getServerRequiredHackingLevel(target) <= ns.getHackingLevel()) {
            ns.exec(script, home, threads, target, optimizedTarget);
        }
        else {
            if (doNotTarget.includes(target)) {
                ns.print("Skipping " + target + " because it is in the doNotTarget array. Please remove it from the array if you want to target it.");
            }
            if (ns.getServerRequiredHackingLevel(target) > ns.getHackingLevel()) {
                ns.print("Skipping " + target + " because it requires hacking level " + ns.getServerRequiredHackingLevel(target) + ".");
            }
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
        if (!doNotTarget.includes(target) && ns.getServerRequiredHackingLevel(target) <= ns.getHackingLevel()) {
            ns.exec(script, home, threads, target, optimizedTarget);
        }
        else {
            if (doNotTarget.includes(target)) {
                ns.print("Skipping " + target + " because it is in the doNotTarget array. Please remove it from the array if you want to target it.");
            }
            if (ns.getServerRequiredHackingLevel(target) > ns.getHackingLevel()) {
                ns.print("Skipping " + target + " because it requires hacking level " + ns.getServerRequiredHackingLevel(target) + ".");
            }
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
        if (!doNotTarget.includes(target) && ns.getServerRequiredHackingLevel(target) <= ns.getHackingLevel()) {
            ns.exec(script, home, threads, target, optimizedTarget);
        }
        else {
            if (doNotTarget.includes(target)) {
                ns.print("Skipping " + target + " because it is in the doNotTarget array. Please remove it from the array if you want to target it.");
            }
            if (ns.getServerRequiredHackingLevel(target) > ns.getHackingLevel()) {
                ns.print("Skipping " + target + " because it requires hacking level " + ns.getServerRequiredHackingLevel(target) + ".");
            }
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
        if (!doNotTarget.includes(target) && ns.getServerRequiredHackingLevel(target) <= ns.getHackingLevel()) {
            ns.exec(script, home, threads, target, optimizedTarget);
        }
        else {
            if (doNotTarget.includes(target)) {
                ns.print("Skipping " + target + " because it is in the doNotTarget array. Please remove it from the array if you want to target it.");
            }
            if (ns.getServerRequiredHackingLevel(target) > ns.getHackingLevel()) {
                ns.print("Skipping " + target + " because it requires hacking level " + ns.getServerRequiredHackingLevel(target) + ".");
            }
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
        if (!doNotTarget.includes(target) && ns.getServerRequiredHackingLevel(target) <= ns.getHackingLevel()) {
            ns.exec(script, home, threads, target, optimizedTarget);
        }
        else {
            if (doNotTarget.includes(target)) {
                ns.print("Skipping " + target + " because it is in the doNotTarget array. Please remove it from the array if you want to target it.");
            }
            if (ns.getServerRequiredHackingLevel(target) > ns.getHackingLevel()) {
                ns.print("Skipping " + target + " because it requires hacking level " + ns.getServerRequiredHackingLevel(target) + ".");
            }
        }
        i = i + 1;
    }
}