/** @param {NS} ns */
export async function main(ns) {
	const target = ns.args[0];
	const minSecurityLevel = await ns.getServerMinSecurityLevel(target);
	const moneyThreshold = await ns.getServerMaxMoney(target);

	while (true) {
		// Checks if the security level is greater than the minimum before running weaken
		var securityLevel = await ns.getServerSecurityLevel(target);
		if (securityLevel > minSecurityLevel) {
			await ns.weaken(target);
		} else if (moneyThreshold > ns.getServerMoneyAvailable(target)) {
    		await ns.grow(target);
		} else {
			await ns.hack(target);
		}
	}
}