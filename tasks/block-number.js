const { task } = require('hardhat/config');

task('block-number', 'Prints the current block number').setAction(
  //hre = Hardhat runtime environment
  async (taskArgs, hre) => {
    const blocknumber = await hre.ethers.provider.getBlockNumber();
    console.log(`Block number is ${blocknumber}`);
  }
);

module.exports = {};
