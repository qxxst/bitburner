/** @param {NS} ns */
export async function main(ns) {
    var possiblePorts = 0
    if (ns.fileExists("BruteSSH.exe", "home")) {
        var possiblePorts = possiblePorts + 1;
    }
    if (ns.fileExists("FTPCrack.exe", "home")) {
        var possiblePorts = possiblePorts + 1;
    }
    if (ns.fileExists("relaySMTP.exe", "home")) {
        var possiblePorts = possiblePorts + 1;
    }
    if (ns.fileExists("HTTPWorm.exe", "home")) {
        var possiblePorts = possiblePorts + 1;
    }
    if (ns.fileExists("SQLInject.exe", "home")) {
        var possiblePorts = possiblePorts + 1;
    }

    const servers0Port = ["n00dles", "sigma-cosmetics", "joesguns", "nectar-net", "hong-fang-tea", "harakiri-sushi"];
    const servers1Port = ["neo-net", "zer0", "max-hardware", "iron-gym", "CSEC"];
    const servers2Port = ["phantasy", "omega-net", "silver-helix", "johnson-ortho", "the-hub", "crush-fitness", "avmnite-02h"];
    const servers3Port = ["computek", "netlink", "rothman-uni", "catalyst", "summit-uni", "I.I.I.I"];
    const servers4Port = ["syscore"];
    const servers5Port = ["zb-institute", "darkweb"];
    var serverArray = servers0Port.concat(servers1Port, servers2Port, servers3Port, servers4Port, servers5Port);
    
    var bestTarget = "";
    var bestTargetRatio = 0;
    for (var i = 0; i < serverArray.length; i++) {
        var server = serverArray[i];
        var serverSecurity = ns.getServerMinSecurityLevel(server);
        var serverMoney = ns.getServerMaxMoney(server);
        var serverRatio = serverMoney / serverSecurity;
        if (serverRatio > bestTargetRatio) {
            var bestTarget = server;
            var bestTargetRatio = serverRatio;
        }
    }
    
    /* get the security level of the best target */
    var bestTargetSecurity = ns.getServerSecurityLevel(bestTarget);
    /* get the hacking level needed to hack the best target */
    var bestTargetHacking = ns.getServerRequiredHackingLevel(bestTarget);
    /* get the number of ports needed to hack the best target */
    var bestTargetPorts = ns.getServerNumPortsRequired(bestTarget);
    /* get the max number of ports available */
    var maxPorts = ns.getHackingLevel() / 5;
    /* get the number of ports available */
    var availablePorts = maxPorts - possiblePorts;
    /* get the number of ports needed to hack the best target */
    var bestTargetPorts = ns.getServerNumPortsRequired(bestTarget);
    /* get the number of ports you need to buy */
    var portsToBuy = bestTargetPorts - availablePorts;
    /* if you need to buy ports, buy them */
    if (portsToBuy > 0) {
        ns.purchaseProgram("BruteSSH.exe");
        ns.purchaseProgram("FTPCrack.exe");
        ns.purchaseProgram("relaySMTP.exe");
        ns.purchaseProgram("HTTPWorm.exe");
        ns.purchaseProgram("SQLInject.exe");
    }
    /* if you don't have enough hacking level, upgrade it */
    if (ns.getHackingLevel() < bestTargetHacking) {
        ns.print("Upgrading hacking level to " + bestTargetHacking);
        while (ns.getHackingLevel() < bestTargetHacking) {
            ns.print("Current hacking level: " + ns.getHackingLevel());
            ns.print("Upgrading hacking");
        }
    }
}