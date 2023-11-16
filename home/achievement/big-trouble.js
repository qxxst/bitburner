/** @param {NS} ns */
/* Used for the "Big trouble" achievement */
/* Run after installing augmentations */
export async function main(ns) {
	const securityLevel = await ns.getServerSecurityLevel('n00dles')
	const minSecurityLevel = await ns.getServerSecurityLevel('n00dles');
	while (true) {
		await ns.hack('n00dles');
		// Checks if the security level is greater than the minimum before running weaken
		if (securityLevel > minSecurityLevel) {
			await ns.weaken('n00dles');
		}
	}
}