# Home Scripts
## deploy.js
Used by `startup.js` to easily open a target server's ports, nuke it, and run `scp/drain.js` on it.
### Usage
This script should not be run on its own. It is automatically run when necessary by `startup.js`.
## find-server.js
Used to locate any server on the network.
### Usage
`run find-server.js SERVER`

Example:

`run find-server.js CSEC`

Returns:

```Running script with 1 thread(s), pid 25 and args: ["CSEC"].
find-server.js: home
find-server.js:  └ sigma-cosmetics
find-server.js:   └ CSEC
```

If there is no server with the given name, no value will be returned.
## hacknet.js
Used to automatically purchase and upgrade hacknet nodes until a given threshold of nodes have been fully upgraded. Also automatically run as part of `startup.js`.
### Usage
`run hacknet.js`
## nuke.js
Attempts to nuke a given target server, opening any ports when possible.
### Usage
`run nuke.js target`

Example:

`run nuke.js CSEC`
## startup.js
Runs a series of checks on most* hackable servers to determine a "best" possible target, then automatically runs `deploy.js` on each of them to gain access and start hacking the optimized target. Also automatically runs `hacknet.js` immediately (will do nothing if the hacknet node threshold has already been reached) and `tix.js` after `BruteSSH.exe`, `FTPCrack.exe`, and `relaySMTP.exe` all become available.

*Will not target servers that cannot currently be hacked (whether that be due to an insufficient hacking level, not enough available ports, or both), servers with no usable RAM, or story-related servers like CSEC. If no other servers can be targeted, the default target is set to n00dles.

It is recommended to periodically kill all running scripts and re-run `startup.js` in order to target servers with more money.

### Usage
`run startup.js`
## tix.js
Used to automatically buy and purchase stocks. Requires TIX API access to function properly. Also benefits from having 4S Market Data TIX API access. Run automatically as part of `startup.js`.
### Usage
`run tix.js`
