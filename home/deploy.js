/** @param {NS} ns **/
export async function main(ns) {
	const host = ns.args[0];
	const script = "scp/drain.js"
    const home = "home"

	if (!ns.serverExists(host)) {
		ns.tprint(`Server '${host}' does not exist. Aborting.`);
		return;
	}
	if (!ns.ls(ns.getHostname()).find(f => f === script)) {
		ns.tprint(`Script '${script}' does not exist. Aborting.`);
		return;
	}

	const threads = Math.floor((ns.getServerMaxRam(host) - ns.getServerUsedRam(host)) / ns.getScriptRam(script));
	await ns.scp(script, host, home);
	ns.exec(script, host, threads);
}