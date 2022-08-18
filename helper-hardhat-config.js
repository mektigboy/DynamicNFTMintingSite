const developmentChains = ["hardhat", "localhost"];

const DECIMALS = "18";
const INITIAL_PRICE = "200000000000000000000"; // 2e20

const networkConfig = {
    4: {
        ethUsdPriceFeed: "0x8A753747A1Fa494EC906cE90E9f37563A8AF630e",
        mintFee: "10000000000000000", // 0.01 ETH
        name: "rinkeby",
    },
    31337: {
        ethUsdPriceFeed: "0x9326BFA02ADD2366b30bacB125260Af641031331",
        mintFee: "10000000000000000", // 0.01 ETH
        name: "localhost",
    },
};

module.exports = {
    developmentChains,
    DECIMALS,
    INITIAL_PRICE,
    networkConfig,
};
