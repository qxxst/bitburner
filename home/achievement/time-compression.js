// achievement/time-compression.js by supercoke1000
/** @param {NS} ns */
export async function main(ns) {
	var RealTimeout = setTimeout

	setTimeout = (thing) => RealTimeout(thing,5)
}