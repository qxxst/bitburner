/** @param {NS} ns */
export async function main(ns) {
	const target = ns.args[0];
	const minSecurityLevel = await ns.getServerMinSecurityLevel(target);
	while (true) {
		await ns.hack(target);
    	await ns.grow(target);
		// Checks if the security level is greater than the minimum before running weaken
		const securityLevel = await ns.getServerSecurityLevel(target);
		if (securityLevel > minSecurityLevel) {
			await ns.weaken(target);
		}
	}
}