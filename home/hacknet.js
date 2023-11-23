/** @param {NS} ns */
export async function main(ns) {
    while (true) {
        var maxNodes = ns.maxNumNodes();
        var nodes = ns.numNodes();
        var remainingNodes = maxNodes - nodes;
        remainingNodes = Math.max(remainingNodes, 0);
    }
}