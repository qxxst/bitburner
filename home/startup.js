// startup.js by qxxst
/** @param {NS} ns */
export async function main(ns) {
    // SETTINGS
    // Set this to your current BitNode. If you don't know what that is, set it to 1.
    const currentBitNode = 8;
    // Add all of your SourceFiles to this array. If you don't know what that means, set it to 1.
    const ownedSourceFiles = [1, 2, 8];
    // Declare and initialize constants
    const home = "home";
    const script = "deploy.js";
    const deployScript = "scp/drain.js";
    const threads = 1;
    const sleepTime = 1000;
    const stayOn = 0;
    var optimizedTarget = "n00dles";
    var targetThreshold = ns.getServerMaxMoney(optimizedTarget);
    var execTixLater = true;
    ns.disableLog("sleep");

    function resetTarget() {
        optimizedTarget = "n00dles";
        targetThreshold = ns.getServerMaxMoney(optimizedTarget);
    }

    resetTarget();
    ns.print("Starting target threshold is " + targetThreshold + ".");

    // Kills any previously running instances of hacknet.js, tix.js, and combatgang.js
    ns.scriptKill("hacknet.js", home);
    ns.scriptKill("tix.js", home);
    ns.scriptKill("combatgang.js", home);

    // BITNODE-SPECIFIC TASKS
    if (currentBitNode == 2) {
        ns.exec("combatgang.js", home);
    }

    // Run hacknet.js if the current BitNode isn't 8. Hacknet nodes do not work in BitNode 8.
    if (!currentBitNode == 8) {
        ns.exec("hacknet.js", home);
    }

    if (currentBitNode == 8 || ownedSourceFiles.includes(8)) {
        ns.exec("tix.js", home);
        var execTixLater = false;
    }

    // GENERAL STARTUP TASKS
    const servers0Port = ["n00dles", "foodnstuff", "sigma-cosmetics", "joesguns", "nectar-net", "hong-fang-tea", "harakiri-sushi"];
    const servers1Port = ["neo-net", "zer0", "max-hardware", "iron-gym", "CSEC"];
    const servers2Port = ["phantasy", "omega-net", "silver-helix", "the-hub", "crush-fitness", "avmnite-02h"];
    const servers3Port = ["computek", "netlink", "rothman-uni", "catalyst", "summit-uni", "rho-construction", "millenium-fitness", "I.I.I.I"];
    const servers4Port = ["syscore", "alpha-ent", "global-pharm", "lexo-corp", "snap-fitness", "univ-energy", "nova-med", "unitalife", "zb-def", "aevum-police", ".", "run4theh111z"];
    const servers5Port = ["zb-institute", "galactic-cyber", "deltaone", "taiyang-digital", "aerocorp", "omnia", "icarus", "infocomm", "defcomm", "solaris", "zeus-med", "helios", "omnitek", "powerhouse-fitness", "vitalife", "titan-labs", "microdyne", "blade", "fulcrumtech"];

    // Checks for duplicate values in all arrays before doing anything else
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

    function getPorts() {
        let ports = 0;
        if (ns.fileExists("BruteSSH.exe", "home")) {
            ports = ports + 1;
        }
        if (ns.fileExists("FTPCrack.exe", "home")) {
            ports = ports + 1;
        }
        if (ns.fileExists("relaySMTP.exe", "home")) {
            ports = ports + 1;
        }
        if (ns.fileExists("HTTPWorm.exe", "home")) {
            ports = ports + 1;
        }
        if (ns.fileExists("SQLInject.exe", "home")) {
            ports = ports + 1;
        }
        return ports
    }

    function cancel(array, script) {
        var i = 0;
        while (i < array.length) {
            ns.scriptKill(script, array[i]);
            ns.rm(script, array[i]);
            i = i + 1;
        }
    }

    function cancelAll() {
        cancel(servers0Port, deployScript);
        cancel(servers1Port, deployScript);
        cancel(servers2Port, deployScript);
        cancel(servers3Port, deployScript);
        cancel(servers4Port, deployScript);
        cancel(servers5Port, deployScript);
    }

    function getTarget() {
        resetTarget();
        var i = 0;
        while (i < servers0Port.length) {
            let target = servers0Port[i];
            if (ns.getServerMaxRam(target) > 0 && ns.getServerRequiredHackingLevel(target) <= ns.getHackingLevel()) {
                if (targetThreshold < ns.getServerMaxMoney(target)) {
                    optimizedTarget = target;
                    targetThreshold = ns.getServerMaxMoney(target);
                    ns.print("New target threshold is " + targetThreshold + " on " + optimizedTarget + ".");
                }
                else {
                    ns.print(target + " does not have more money available than the current threshold. Moving on.");
                }
            }
            else {
                if (ns.getServerRequiredHackingLevel(target) > ns.getHackingLevel()) {
                    ns.print("Skipping " + target + " because it requires hacking level " + ns.getServerRequiredHackingLevel(target) + ".");
                }
            }
            i = i + 1;
        }

        var i = 0;
        while (i < servers1Port.length) {
            let target = servers1Port[i];
            if (ns.getServerMaxRam(target) > 0 && ns.getServerRequiredHackingLevel(target) <= ns.getHackingLevel() && ns.fileExists("BruteSSH.exe", "home")) {
                if (targetThreshold < ns.getServerMaxMoney(target)) {
                    optimizedTarget = target;
                    targetThreshold = ns.getServerMaxMoney(target);
                    ns.print("New target threshold is " + targetThreshold + " on " + optimizedTarget + ".");
                }
                else {
                    ns.print(target + " does not have more money available than the current threshold. Moving on.");
                }
            }
            else {
                if (ns.getServerRequiredHackingLevel(target) > ns.getHackingLevel()) {
                    ns.print("Skipping " + target + " because it requires hacking level " + ns.getServerRequiredHackingLevel(target) + ".");
                }
            }
            i = i + 1;
        }

        var i = 0;
        while (i < servers2Port.length) {
            let target = servers2Port[i];
            if (ns.getServerMaxRam(target) > 0 && ns.getServerRequiredHackingLevel(target) <= ns.getHackingLevel() && ns.fileExists("FTPCrack.exe", "home")) {
                if (targetThreshold < ns.getServerMaxMoney(target)) {
                    optimizedTarget = target;
                    targetThreshold = ns.getServerMaxMoney(target);
                    ns.print("New target threshold is " + targetThreshold + " on " + optimizedTarget + ".");
                }
                else {
                    ns.print(target + " does not have more money available than the current threshold. Moving on.");
                }
            }
            else {
                if (ns.getServerRequiredHackingLevel(target) > ns.getHackingLevel()) {
                    ns.print("Skipping " + target + " because it requires hacking level " + ns.getServerRequiredHackingLevel(target) + ".");
                }
            }
            i = i + 1;
        }

        var i = 0;
        while (i < servers3Port.length) {
            let target = servers3Port[i];
            if (ns.getServerMaxRam(target) > 0 && ns.getServerRequiredHackingLevel(target) <= ns.getHackingLevel() && ns.fileExists("relaySMTP.exe", "home")) {
                if (targetThreshold < ns.getServerMaxMoney(target)) {
                    optimizedTarget = target;
                    targetThreshold = ns.getServerMaxMoney(target);
                    ns.print("New target threshold is " + targetThreshold + " on " + optimizedTarget + ".");
                }
                else {
                    ns.print(target + " does not have more money available than the current threshold. Moving on.");
                }
            }
            else {
                if (ns.getServerRequiredHackingLevel(target) > ns.getHackingLevel()) {
                    ns.print("Skipping " + target + " because it requires hacking level " + ns.getServerRequiredHackingLevel(target) + ".");
                }
            }
            i = i + 1;
        }

        var i = 0;
        while (i < servers4Port.length) {
            let target = servers4Port[i];
            if (ns.getServerMaxRam(target) > 0 && ns.getServerRequiredHackingLevel(target) <= ns.getHackingLevel() && ns.fileExists("HTTPWorm.exe", "home")) {
                if (targetThreshold < ns.getServerMaxMoney(target)) {
                    optimizedTarget = target;
                    targetThreshold = ns.getServerMaxMoney(target);
                    ns.print("New target threshold is " + targetThreshold + " on " + optimizedTarget + ".");
                }
                else {
                    ns.print(target + " does not have more money available than the current threshold. Moving on.");
                }
            }
            else {
                if (ns.getServerRequiredHackingLevel(target) > ns.getHackingLevel()) {
                    ns.print("Skipping " + target + " because it requires hacking level " + ns.getServerRequiredHackingLevel(target) + ".");
                }
            }
            i = i + 1;
        }

        var i = 0;
        while (i < servers5Port.length) {
            let target = servers5Port[i];
            if (ns.getServerMaxRam(target) > 0 && ns.getServerRequiredHackingLevel(target) <= ns.getHackingLevel() && ns.fileExists("SQLInject.exe", "home")) {
                if (targetThreshold < ns.getServerMaxMoney(target)) {
                    optimizedTarget = target;
                    targetThreshold = ns.getServerMaxMoney(target);
                    ns.print("New target threshold is " + targetThreshold + " on " + optimizedTarget + ".");
                }
                else {
                    ns.print(target + " does not have more money available than the current threshold. Moving on.");
                }
            }
            else {
                if (ns.getServerRequiredHackingLevel(target) > ns.getHackingLevel()) {
                    ns.print("Skipping " + target + " because it requires hacking level " + ns.getServerRequiredHackingLevel(target) + ".");
                }
            }
            i = i + 1;
        }
    }

    getTarget();
    cancelAll();

    var i = 0;
    while (i < servers0Port.length) {
        let target = servers0Port[i];
        if (ns.getServerMaxRam(target) > 0 && ns.getServerRequiredHackingLevel(target) <= ns.getHackingLevel()) {
            ns.exec(script, home, threads, target, optimizedTarget);
        }
        else {
            if (ns.getServerRequiredHackingLevel(target) > ns.getHackingLevel()) {
                ns.print("Skipping " + target + " because it requires hacking level " + ns.getServerRequiredHackingLevel(target) + ".");
            }
        }
        i = i + 1;
    }

    while (getPorts() < 1) {
        await ns.sleep(sleepTime);
        ns.print("Waiting until 1 port is available");
    }

    await ns.sleep(sleepTime);

    getTarget();
    cancelAll();

    var i = 0;
    while (i < servers0Port.length) {
        let target = servers0Port[i];
        if (ns.getServerMaxRam(target) > 0 && ns.getServerRequiredHackingLevel(target) <= ns.getHackingLevel()) {
            ns.exec(script, home, threads, target, optimizedTarget);
        }
        else {
            if (ns.getServerRequiredHackingLevel(target) > ns.getHackingLevel()) {
                ns.print("Skipping " + target + " because it requires hacking level " + ns.getServerRequiredHackingLevel(target) + ".");
            }
        }
        i = i + 1;
    }

    var i = 0;
    while (i < servers1Port.length) {
        let target = servers1Port[i];
        if (ns.getServerMaxRam(target) > 0 && ns.getServerRequiredHackingLevel(target) <= ns.getHackingLevel()) {
            ns.exec(script, home, threads, target, optimizedTarget);
        }
        else {
            if (ns.getServerRequiredHackingLevel(target) > ns.getHackingLevel()) {
                ns.print("Skipping " + target + " because it requires hacking level " + ns.getServerRequiredHackingLevel(target) + ".");
            }
        }
        i = i + 1;
    }

    while (getPorts() < 2) {
        await ns.sleep(sleepTime);
        ns.print("Waiting until 2 ports are available");
    }

    await ns.sleep(sleepTime);

    getTarget();
    cancelAll();

    var i = 0;
    while (i < servers0Port.length) {
        let target = servers0Port[i];
        if (ns.getServerMaxRam(target) > 0 && ns.getServerRequiredHackingLevel(target) <= ns.getHackingLevel()) {
            ns.exec(script, home, threads, target, optimizedTarget);
        }
        else {
            if (ns.getServerRequiredHackingLevel(target) > ns.getHackingLevel()) {
                ns.print("Skipping " + target + " because it requires hacking level " + ns.getServerRequiredHackingLevel(target) + ".");
            }
        }
        i = i + 1;
    }

    var i = 0;
    while (i < servers1Port.length) {
        let target = servers1Port[i];
        if (ns.getServerMaxRam(target) > 0 && ns.getServerRequiredHackingLevel(target) <= ns.getHackingLevel()) {
            ns.exec(script, home, threads, target, optimizedTarget);
        }
        else {
            if (ns.getServerRequiredHackingLevel(target) > ns.getHackingLevel()) {
                ns.print("Skipping " + target + " because it requires hacking level " + ns.getServerRequiredHackingLevel(target) + ".");
            }
        }
        i = i + 1;
    }

    var i = 0;
    while (i < servers2Port.length) {
        let target = servers2Port[i];
        if (ns.getServerMaxRam(target) > 0 && ns.getServerRequiredHackingLevel(target) <= ns.getHackingLevel()) {
            ns.exec(script, home, threads, target, optimizedTarget);
        }
        else {
            if (ns.getServerRequiredHackingLevel(target) > ns.getHackingLevel()) {
                ns.print("Skipping " + target + " because it requires hacking level " + ns.getServerRequiredHackingLevel(target) + ".");
            }
        }
        i = i + 1;
    }

    while (getPorts() < 3) {
        await ns.sleep(sleepTime);
        ns.print("Waiting until 3 ports are available");
    }

    await ns.sleep(sleepTime);

    getTarget();
    cancelAll();

    var i = 0;
    while (i < servers0Port.length) {
        let target = servers0Port[i];
        if (ns.getServerMaxRam(target) > 0 && ns.getServerRequiredHackingLevel(target) <= ns.getHackingLevel()) {
            ns.exec(script, home, threads, target, optimizedTarget);
        }
        else {
            if (ns.getServerRequiredHackingLevel(target) > ns.getHackingLevel()) {
                ns.print("Skipping " + target + " because it requires hacking level " + ns.getServerRequiredHackingLevel(target) + ".");
            }
        }
        i = i + 1;
    }

    var i = 0;
    while (i < servers1Port.length) {
        let target = servers1Port[i];
        if (ns.getServerMaxRam(target) > 0 && ns.getServerRequiredHackingLevel(target) <= ns.getHackingLevel()) {
            ns.exec(script, home, threads, target, optimizedTarget);
        }
        else {
            if (ns.getServerRequiredHackingLevel(target) > ns.getHackingLevel()) {
                ns.print("Skipping " + target + " because it requires hacking level " + ns.getServerRequiredHackingLevel(target) + ".");
            }
        }
        i = i + 1;
    }

    var i = 0;
    while (i < servers2Port.length) {
        let target = servers2Port[i];
        if (ns.getServerMaxRam(target) > 0 && ns.getServerRequiredHackingLevel(target) <= ns.getHackingLevel()) {
            ns.exec(script, home, threads, target, optimizedTarget);
        }
        else {
            if (ns.getServerRequiredHackingLevel(target) > ns.getHackingLevel()) {
                ns.print("Skipping " + target + " because it requires hacking level " + ns.getServerRequiredHackingLevel(target) + ".");
            }
        }
        i = i + 1;
    }

    var i = 0;
    while (i < servers3Port.length) {
        let target = servers3Port[i];
        if (ns.getServerMaxRam(target) > 0 && ns.getServerRequiredHackingLevel(target) <= ns.getHackingLevel()) {
            ns.exec(script, home, threads, target, optimizedTarget);
        }
        else {
            if (ns.getServerRequiredHackingLevel(target) > ns.getHackingLevel()) {
                ns.print("Skipping " + target + " because it requires hacking level " + ns.getServerRequiredHackingLevel(target) + ".");
            }
        }
        i = i + 1;
    }

    await ns.sleep(sleepTime);
    if (execTixLater == true) {
        ns.exec("tix.js", home);
    }

    while (getPorts() < 4) {
        await ns.sleep(sleepTime);
        ns.print("Waiting until 4 ports are available");
    }

    await ns.sleep(sleepTime);

    getTarget();
    cancelAll();

    var i = 0;
    while (i < servers0Port.length) {
        let target = servers0Port[i];
        if (ns.getServerMaxRam(target) > 0 && ns.getServerRequiredHackingLevel(target) <= ns.getHackingLevel()) {
            ns.exec(script, home, threads, target, optimizedTarget);
        }
        else {
            if (ns.getServerRequiredHackingLevel(target) > ns.getHackingLevel()) {
                ns.print("Skipping " + target + " because it requires hacking level " + ns.getServerRequiredHackingLevel(target) + ".");
            }
        }
        i = i + 1;
    }

    var i = 0;
    while (i < servers1Port.length) {
        let target = servers1Port[i];
        if (ns.getServerMaxRam(target) > 0 && ns.getServerRequiredHackingLevel(target) <= ns.getHackingLevel()) {
            ns.exec(script, home, threads, target, optimizedTarget);
        }
        else {
            if (ns.getServerRequiredHackingLevel(target) > ns.getHackingLevel()) {
                ns.print("Skipping " + target + " because it requires hacking level " + ns.getServerRequiredHackingLevel(target) + ".");
            }
        }
        i = i + 1;
    }

    var i = 0;
    while (i < servers2Port.length) {
        let target = servers2Port[i];
        if (ns.getServerMaxRam(target) > 0 && ns.getServerRequiredHackingLevel(target) <= ns.getHackingLevel()) {
            ns.exec(script, home, threads, target, optimizedTarget);
        }
        else {
            if (ns.getServerRequiredHackingLevel(target) > ns.getHackingLevel()) {
                ns.print("Skipping " + target + " because it requires hacking level " + ns.getServerRequiredHackingLevel(target) + ".");
            }
        }
        i = i + 1;
    }

    var i = 0;
    while (i < servers3Port.length) {
        let target = servers3Port[i];
        if (ns.getServerMaxRam(target) > 0 && ns.getServerRequiredHackingLevel(target) <= ns.getHackingLevel()) {
            ns.exec(script, home, threads, target, optimizedTarget);
        }
        else {
            if (ns.getServerRequiredHackingLevel(target) > ns.getHackingLevel()) {
                ns.print("Skipping " + target + " because it requires hacking level " + ns.getServerRequiredHackingLevel(target) + ".");
            }
        }
        i = i + 1;
    }

    var i = 0;
    while (i < servers4Port.length) {
        let target = servers4Port[i];
        if (ns.getServerMaxRam(target) > 0 && ns.getServerRequiredHackingLevel(target) <= ns.getHackingLevel()) {
            ns.exec(script, home, threads, target, optimizedTarget);
        }
        else {
            if (ns.getServerRequiredHackingLevel(target) > ns.getHackingLevel()) {
                ns.print("Skipping " + target + " because it requires hacking level " + ns.getServerRequiredHackingLevel(target) + ".");
            }
        }
        i = i + 1;
    }

    while (getPorts() < 5) {
        await ns.sleep(sleepTime);
        ns.print("Waiting until 5 ports are available");
    }

    await ns.sleep(sleepTime);

    getTarget();
    cancelAll();

    var i = 0;
    while (i < servers0Port.length) {
        let target = servers0Port[i];
        if (ns.getServerMaxRam(target) > 0 && ns.getServerRequiredHackingLevel(target) <= ns.getHackingLevel()) {
            ns.exec(script, home, threads, target, optimizedTarget);
        }
        else {
            if (ns.getServerRequiredHackingLevel(target) > ns.getHackingLevel()) {
                ns.print("Skipping " + target + " because it requires hacking level " + ns.getServerRequiredHackingLevel(target) + ".");
            }
        }
        i = i + 1;
    }

    var i = 0;
    while (i < servers1Port.length) {
        let target = servers1Port[i];
        if (ns.getServerMaxRam(target) > 0 && ns.getServerRequiredHackingLevel(target) <= ns.getHackingLevel()) {
            ns.exec(script, home, threads, target, optimizedTarget);
        }
        else {
            if (ns.getServerRequiredHackingLevel(target) > ns.getHackingLevel()) {
                ns.print("Skipping " + target + " because it requires hacking level " + ns.getServerRequiredHackingLevel(target) + ".");
            }
        }
        i = i + 1;
    }

    var i = 0;
    while (i < servers2Port.length) {
        let target = servers2Port[i];
        if (ns.getServerMaxRam(target) > 0 && ns.getServerRequiredHackingLevel(target) <= ns.getHackingLevel()) {
            ns.exec(script, home, threads, target, optimizedTarget);
        }
        else {
            if (ns.getServerRequiredHackingLevel(target) > ns.getHackingLevel()) {
                ns.print("Skipping " + target + " because it requires hacking level " + ns.getServerRequiredHackingLevel(target) + ".");
            }
        }
        i = i + 1;
    }

    var i = 0;
    while (i < servers3Port.length) {
        let target = servers3Port[i];
        if (ns.getServerMaxRam(target) > 0 && ns.getServerRequiredHackingLevel(target) <= ns.getHackingLevel()) {
            ns.exec(script, home, threads, target, optimizedTarget);
        }
        else {
            if (ns.getServerRequiredHackingLevel(target) > ns.getHackingLevel()) {
                ns.print("Skipping " + target + " because it requires hacking level " + ns.getServerRequiredHackingLevel(target) + ".");
            }
        }
        i = i + 1;
    }

    var i = 0;
    while (i < servers4Port.length) {
        let target = servers4Port[i];
        if (ns.getServerMaxRam(target) > 0 && ns.getServerRequiredHackingLevel(target) <= ns.getHackingLevel()) {
            ns.exec(script, home, threads, target, optimizedTarget);
        }
        else {
            if (ns.getServerRequiredHackingLevel(target) > ns.getHackingLevel()) {
                ns.print("Skipping " + target + " because it requires hacking level " + ns.getServerRequiredHackingLevel(target) + ".");
            }
        }
        i = i + 1;
    }

    var i = 0;
    while (i < servers5Port.length) {
        let target = servers5Port[i];
        if (ns.getServerMaxRam(target) > 0 && ns.getServerRequiredHackingLevel(target) <= ns.getHackingLevel()) {
            ns.exec(script, home, threads, target, optimizedTarget);
        }
        else {
            if (ns.getServerRequiredHackingLevel(target) > ns.getHackingLevel()) {
                ns.print("Skipping " + target + " because it requires hacking level " + ns.getServerRequiredHackingLevel(target) + ".");
            }
        }
        i = i + 1;
    }

    if (stayOn == 1) {
        while (true) {
            await ns.sleep(sleepTime);
        }
    }
}