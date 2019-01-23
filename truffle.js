module.exports = {
    networks: {
        development: {
            host: "localhost",
            port: 8545,
            network_id: "*" // Match any network id
        },
        rinkeby: {
            host: "localhost", // Connect to geth on the specified
            port: 8545,
            from: "0xeDC273F839e1042a08cB703B8AD752A7051403AB", // default address to use for any transaction Truffle makes during migrations
            network_id: 4,
            gas: 10002586120000 // Gas limit used for deploys
        }
    }
};