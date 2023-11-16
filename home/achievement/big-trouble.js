/** @param {NS} ns */
/* Used for the "Big trouble" achievement */
/* Run after installing augmentations */
export async function main(ns) {
	while (true) {
		await ns.hack('n00dles');
		// Checks if the security level is greater than the minimum before running weaken
		const securityLevel = await ns.getServerSecurityLevel('n00dles')
		if (securityLevel > 1) {
			await ns.weaken('n00dles');
		}
	}
}