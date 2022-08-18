const { ethers, network } = require("hardhat");

module.exports = async function ({ getNamedAccounts }) {
    const { deployer } = await getNamedAccounts();
    const chainId = network.config.chainId;

    const highValue = ethers.utils.parseEther("4000");
    const dynamicNFT = await ethers.getContract("DynamicNFT", deployer);
    const dynamicMintTransaction = await dynamicNFT.mintNFT(highValue);

    await dynamicMintTransaction.wait(1);

    console.log(
        `Dynamic NFT index 0 has token URI: ${await dynamicNFT.tokenURI(0)}`
    );
};

module.exports.tags = ["all", "mint"];
