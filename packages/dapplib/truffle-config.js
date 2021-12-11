require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half arena october traffic walnut raw remember universe hunt forget frame gather'; 
let testAccounts = [
"0xdf1a5ac0f8ba34a1c30b1e42213e103b3a020b348aafaf0745402d39e4c4eeb6",
"0x6c0fbd61b0045790ab6fc55f110278381431f18c54bcd28c39d39605056d8ca9",
"0x4bf3f716f0e5e7fc0f8e6a6c7ec715d17b53d30b06785289566db811bf97d2e3",
"0x916c654f216f630d98c343217217815160d9db1730e05041be5eb3d4df37eaf8",
"0xe42ffa680bd54ad97afa67f117161cfacfad7fa662775794a979bf5557bd8972",
"0x1e7fc2f6debb965a4dbf4ff93fe96dc8c4eed1014f3bf3d186836d231b11ce9e",
"0xf600846bfa7ab0d07120c5c2f1469a1c43b82d55ef2a2b5b47445463417c1a88",
"0x23265c27c24df584250853a28758b7e9c60e762a224a624d8aad6a3e9ac393d7",
"0x8e5b4b6cbe8d5147050dd92d75073d24f4c88965cd35a55755b450e3578754aa",
"0x3f86758c3de9f60708132df109c0e1480b34324f6f41b6c0f5e1488f4af744db"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

