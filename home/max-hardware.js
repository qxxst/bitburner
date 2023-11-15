/** @param {NS} ns */
export async function main(ns) {
	while(true) {
		await ns.hack('max-hardware');
    await ns.grow('max-hardware');
    await ns.weaken('max-hardware');
	}
}