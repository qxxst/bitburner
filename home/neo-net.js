/** @param {NS} ns */
export async function main(ns) {
	while(true) {
		await ns.hack('neo-net');
    await ns.grow('neo-net');
    await ns.weaken('neo-net');
	}
}