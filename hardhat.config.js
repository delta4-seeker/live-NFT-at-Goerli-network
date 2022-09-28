
require("@nomicfoundation/hardhat-toolbox");
/**
 * @type import('hardhat/config').HardhatUserConfig
 */

 require("dotenv").config();
 require("@nomiclabs/hardhat-ethers");
 const { API_URL, PRIVATE_KEY } = process.env;
 console.log(API_URL)
 module.exports = {
   solidity: "0.8.7",
   defaultNetwork: "goerli",
   paths : {
    sources: "./contracts",
   },
   networks: {
     hardhat: {},
     goerli: {
       url: API_URL,
       accounts: [`0x${PRIVATE_KEY}`],
     },
    
   },
 };