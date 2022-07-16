require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();
//Etherscan Plugin
require('@nomiclabs/hardhat-etherscan');
require('./tasks/block-number');
require('hardhat-gas-reporter');

/** @type import('hardhat/config').HardhatUserConfig */

const RINKEBY_RPC_URL =
  process.env.RINKEBY_RPC_URL || 'https://eth-rinkeby/example';
const PRIVATE_KEY = process.env.PRIVATE_KEY || '0xkey';
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || 'key';
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || 'key';

module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    rinkeby: {
      url: RINKEBY_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 4,
    },
    localhost: {
      url: 'http://127.0.0.1:8545/',
      //accounts: hardhat already placed
      chainId: 31337,
    },
  },
  solidity: '0.8.9',
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  gasReporter: {
    enabled: true,
    outputFile: 'gas-report.txt',
    noColors: true,
    currency: 'INR',
    coinmarketcap: COINMARKETCAP_API_KEY,
  },
};
