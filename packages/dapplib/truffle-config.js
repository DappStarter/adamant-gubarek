require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture cart forget security trap birth oven proof gesture nasty food genuine'; 
let testAccounts = [
"0xc5bf410699d2ce26d967f0916e3d4c2b7382739aa11b58c93dc70682b31b9779",
"0x3fe069fe235c42ae3c1263d3c2df3f6f43d76df0a6880cd4dc832f2ddb227019",
"0x6b9d7988d2bb420baefde921af93d28feff84ae343346ad843dd0576a892302b",
"0x7a530d8eeae74703c42be54b1a0e5b66690cd7003d6c7de1671a9002903f654b",
"0x51fb07f4d9b051f251e28759c2a75509f48504bdcd459640447f00aed8186a86",
"0x72c420433afe459817e7604e60080944ea8d8267e27b1a6c1cc583c7edee21a4",
"0x7d8affcdf4a73a59f0d615b7a18318e65c9dd72d5b7a7d102d8282378b9f3be4",
"0x8ab2961552879cdf81a8e13fe5dc9aedd438831ff46608d3b63c2d2257daae20",
"0xec055b295df31976669dfdfab18a0555da554193e8186936383095793d4a6b2b",
"0x7910ed8b7225d06344ca7da0e6d34773c5ea08d8b03b149ffed277ecf0b21147"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

