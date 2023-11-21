/** @param {NS} ns */
export async function main(ns) {
	const target = ns.args[0];
	const minSecurityLevel = await ns.getServerMinSecurityLevel(target);
	while (true) {
		// Checks if the security level is greater than the minimum before running weaken
		var securityLevel = await ns.getServerSecurityLevel(target);
		if (securityLevel > minSecurityLevel) {
			await ns.weaken(target);
		}
		await ns.hack(target);
    	await ns.grow(target);
	}
}