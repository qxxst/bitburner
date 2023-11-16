/** @param {NS} ns */
export async function main(ns) {
	const target = ns.args[0];
	const securityLevel = await ns.getServerSecurityLevel(target);
	const minSecurityLevel = await ns.getServerSecurityLevel(target);
	while (true) {
		await ns.hack(target);
    	await ns.grow(target);
		// Checks if the security level is greater than the minimum before running weaken
		if (securityLevel > minSecurityLevel) {
			await ns.weaken(target);
		}
	}
}