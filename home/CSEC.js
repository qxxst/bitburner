/** @param {NS} ns */
export async function main(ns) {
	while(true) {
		await ns.hack('CSEC');
    await ns.grow('CSEC');
    await ns.weaken('CSEC');
	}
}
