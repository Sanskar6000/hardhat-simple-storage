//Test Solidity code locally
//Hardhat testing is based on Mocha framework
const { ethers } = require('hardhat');
const { expect, assert } = require('chai');

describe('SimpleStorage', () => {
  //tell us what to do before its'

  let simpleStorageFactory, simpleStorage;

  beforeEach(async function () {
    simpleStorageFactory = await ethers.getContractFactory('SimpleStorage');
    simpleStorage = await simpleStorageFactory.deploy();
  });

  it('Should start with a favourite number of 0', async function () {
    console.log('A test');
    // assert.equal()
  });
});
