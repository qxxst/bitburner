export async function main(ns) {
	while(true) {
		await ns.hack('nectar-net');
    await ns.grow('nectar-net');
    await ns.weaken('nectar-net');
	}
}
