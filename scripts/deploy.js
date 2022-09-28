// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
 //0x2fa8Cee34Fe61186422bD040a3E972103De7D7d0
async function main() {

  const MyNFT = await ethers.getContractFactory("MyNFT");

  const myNFT  = await MyNFT.deploy();

  console.log(
    `Contract deployed to ${myNFT.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
