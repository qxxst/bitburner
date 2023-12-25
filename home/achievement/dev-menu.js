// achievement/dev-menu.js by yichizhng
/** @param {NS} ns */
// Used for the "Exploit: You're not meant to access this." achievement
export async function main(ns) {
    globalThis.webpack_require ?? webpackChunkbitburner.push([[-1], {}, w => globalThis.webpack_require = w]);
    Object.keys(webpack_require.m).forEach(k => Object.values(webpack_require(k)).forEach(p => p?.toPage?.('Dev')));
  }