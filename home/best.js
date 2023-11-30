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
}