"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCluster = exports.DEFAULT_CLUSTER = exports.CLUSTERS = void 0;
exports.CLUSTERS = [
    {
        name: "mainnet-beta",
        url: "https://api.metaplex.solana.com/",
    },
    {
        name: "devnet",
        url: "https://solana--devnet.datahub.figment.io/apikey/fff8d9138bc9e233a2c1a5d4f777e6ad",
    },
];
exports.DEFAULT_CLUSTER = exports.CLUSTERS[2];
function getCluster(name) {
    for (const cluster of exports.CLUSTERS) {
        if (cluster.name === name) {
            return cluster.url;
        }
    }
    return exports.DEFAULT_CLUSTER.url;
}
exports.getCluster = getCluster;
