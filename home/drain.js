/** @param {NS} ns */
export async function main(ns) {
	const target = ns.args[0];
	const minSecurityLevel = await ns.getServerMinSecurityLevel(target);
	const maxMoney = await ns.getServerMaxMoney(target);
	const moneyThreshold = maxMoney * 0.01;

	while (true) {
		var securityLevel = await ns.getServerSecurityLevel(target);
		var moneyAvailable = await ns.getServerMoneyAvailable(target)
		if (securityLevel > minSecurityLevel) {
			await ns.weaken(target);
		} else if (moneyThreshold > moneyAvailable) {
    		await ns.grow(target);
		} else {
			await ns.hack(target);
		}
	}
}