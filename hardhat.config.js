require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    'linea': {
      url: `https://rpc.goerli.linea.build`,
      accounts: [process.env.DEPLOYER],
    },
    'sepolia': {
      url: `https://sepolia.infura.io/v3/${process.env.INFURA_KEY}`,
      accounts: [process.env.DEPLOYER],
    },
    'goerli': {
      url: `https://goerli.infura.io/v3/${process.env.INFURA_KEY}`,
      accounts: [process.env.DEPLOYER],
    },
    'zkEVM': {
      url: "https://rpc.public.zkevm-test.net",
      accounts: [process.env.DEPLOYER],
    },
    'mode-sepolia': {
      url: "https://sepolia.mode.network/",
      accounts: [process.env.DEPLOYER],
      gasPrice: 35000000000,
      saveDeployments: true,
    },
    'zora-goerli': {
      url: 'https://testnet.rpc.zora.energy/',
      accounts: [process.env.DEPLOYER],
      gasPrice: 1000000000,
    },
    'zora-mainnet': {
      url: 'https://mainnet.rpc.zora.energy/',
      accounts: [process.env.DEPLOYER],
    },
    'base-mainnet': {
      url: 'https://mainnet.base.org',
      accounts: [process.env.DEPLOYER],
      gasPrice: 1000000000,
    },
    'base-goerli': {
      url: 'https://goerli.base.org',
      accounts: [process.env.DEPLOYER],
      gasPrice: 1000000000,
    },
    'base-local': {
      url: 'http://localhost:8545',
      accounts: [process.env.DEPLOYER],
      gasPrice: 1000000000,
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_KEY,
  },
};
