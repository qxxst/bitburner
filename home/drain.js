/** @param {NS} ns */
export async function main(ns) {
	const target = ns.args[0];
	while (true) {
		await ns.hack(target);
    	await ns.grow(target);
    	await ns.weaken(target);
	}
}