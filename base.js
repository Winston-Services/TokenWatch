const fs = require("fs");
const path = require("path");

const { NetworkRecord } = require("./utils/NetworkRecord");
const { TokenRecord } = require("./utils/TokenRecord");
const { DexRouterRecord } = require("./utils/DexRouterRecord");
const { networks } = require("./data/maps/networks");
const { tokens } = require("./data/maps/tokens");
const { routers } = require("./data/maps/routers");
const networkConfigPath = path.resolve("./config/networks");
const networkConfigFiles = fs
  .readdirSync(networkConfigPath)
  .filter(file => file.endsWith(".json"));

for (const file of networkConfigFiles) {
  const filePath = path.join(networkConfigPath, file);
  const fileContentBuffer = fs.readFileSync(filePath);
  const config = fileContentBuffer.toJSON();
  const myTestNetwork = new NetworkRecord(config);
  //GNOSIS https://gnosisscan.io/
  //MATIC https://polygonscan.com/
  //BNB https://bscscan.com
  //ETH https://etherscan.io/
  //ONE https://explorer.harmony.one/
  //add it to our records.
  networks.set(config.symbol, myTestNetwork);
  const networkTokenConfigPath = path.resolve(
    "./config/tokens/" + config.symbol
  );
  const networkTokenConfigFiles = fs
    .readdirSync(networkTokenConfigPath)
    .filter(file => file.endsWith(".json"));
  for (const tokenConfigFile of networkTokenConfigFiles) {
    const filePath = path.join(networkConfigPath, tokenConfigFile);
    const fileContentBuffer = fs.readFileSync(filePath);
    let tokenConfig = fileContentBuffer.toJSON();
    tokenConfig.network = myTestNetwork;
    const token = new TokenRecord(tokenConfig);
    tokens[config.symbol].set(token.symbol, token);
    tokens[config.symbol].getToken(token.symbol).contract();
  }

  //ToDo :: Add a config file loader for Dexs
  const myTestDexRouter = new DexRouterRecord({
    network: myTestNetwork,
    name: "PancakeSwap",
    factory: "0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73",
    router: "0x10ED43C718714eb63d5aA57B78B54704E256024E",
    version: "V2"
  });
  
  routers["BNB"].set("PancakeSwap", myTestDexRouter);
}

