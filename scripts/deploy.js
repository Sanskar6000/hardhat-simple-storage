const { ethers, run } = require('hardhat');
//run allows us to run any hardhat task

async function main() {
  const SimpleStorageFactory = await ethers.getContractFactory('SimpleStorage');
  console.log('Deploying Contract...');

  const SimpleStorage = await SimpleStorageFactory.deploy();
  await SimpleStorage.deployed();

  //Hardhat Networks
  if (network.config.chainId === 4 && process.env.ETHERSCAN_API_KEY) {
    await SimpleStorage.deployTransaction.wait(6);
    // wait six blocks then verify
    await verify(SimpleStorage.address, []);
  }

  //Interacting with Contract
}

//For Publishing and verifying contract (Contract verification allows smart contract developers to prove and publish the source code of the contracts deployed on-chain)
//We will use Hardhat etherscan plugin
async function verify(contractAddress, args) {
  console.log('Verifying contract...');
  try {
    await run('verify:verify', {
      address: contractAddress,
      constructorArguments: args,
    });
  } catch (error) {
    if (e.message.toLowerCase().includes('already verified')) {
      console.log('Already Verified');
    } else {
      console.log(error);
    }
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
