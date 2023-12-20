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
Used to automatically purchase and upgrade hacknet nodes until a given threshold of nodes (20 by default) have been fully upgraded. Does nothing if these conditions have already been met. Also automatically run as part of `startup.js`.

The node threshold can be changed from its default value by editing the constant `nodeThreshold` on line 8.

### Usage
`run hacknet.js`
## nuke.js
Attempts to nuke a given target server, opening any ports when possible.
### Usage
`run nuke.js target`

Example:

`run nuke.js CSEC`
## startup.js
Runs a series of checks on most* hackable servers to determine a "best" possible target, then automatically runs `deploy.js` on each of them to gain access and start hacking the optimized target. Repeats this process a few times as more ports become available. Also automatically runs other useful home scripts.

*Will not target servers that cannot currently be hacked (whether that be due to an insufficient hacking level, not enough available ports, or both) or servers with no usable RAM. If no other servers can be targeted, the default target is temporarily set to n00dles.

### Usage
`run startup.js`
## tix.js
Used to automatically buy and purchase stocks. Requires TIX API access. Also benefits from having 4S Market Data TIX API access. Run automatically as part of `startup.js`.
### Usage
`run tix.js`
## combatgang.js
Used to automatically manage a combat gang. Requires SF2. Run automatically as part of `startup.js`.
### Usage
`run combatgang.js`
