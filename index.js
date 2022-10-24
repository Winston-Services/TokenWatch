/**
 * Winston Price Watch
 * Watch your favorite token pools with this console application.
 * @author M.A.D Computer Consulting LLC
 * @license MIT
 * @created 10/2022 By @dreamingrainbow
 */
const { Server } = require("socket.io");

const ms = require("ms");
const readline = require("readline");

require("./base");

const { pricingConfig } = require("./configs/pricingConfig");
const { networks } = require("./data/maps/networks");
const { tokens } = require("./data/maps/tokens");
const { routers } = require("./data/maps/routers");

/**
 * NOT all features have been implemented in this version. 
 * If you like this application or would like to help just create a pull request, or email me!
 */

const io = new Server();

let tokenTimeout = ms("15 minutes");
let watcherInterval = ms("5 seconds");

let registeredUsersMap = new Map(); // We can turn this in to our own class later.

function authenticate(client) {
  //Let's do some testing
  console.log(this); //we can check our scope by console logging the "this" global variable.
}

function renewAuthToken(client) {}

/**
 * addNetwork
 */
function addNetwork() {}
/**
 * updateNetwork
 */
function updateNetwork() {}
/**
 * removeNetwork
 */
function removeNetwork() {}
/**
 * addToken
 */
function addToken() {}
/**
 * updateToken
 */
function updateToken() {}
/**
 * removeToken
 */
function removeToken() {}
/**
 * addDex
 */
function addDex() {}
/**
 * updateDex
 */
function updateDex() {}
/**
 * removeDex
 */
function removeDex() {}
/**
 * pooledTokenPrice
 */
function pooledTokenPrice() {}
/**
 * totalTokenMarket
 */
function totalTokenMarket() {}
/**
 * setScreenUpdateInterval
 */
function setScreenUpdateInterval() {}
/**
 * enableDebugging
 */
function enableDebugging() {}
/**
 * disableDebugging
 */
function disableDebugging() {}
/**
 * balance
 */
function balance() {}
/**
 * tokenBalance
 */
function tokenBalance() {}
/**
 * totalSupply
 */
function totalSupply() {}
/**
 * circulatingSupply
 */
function circulatingSupply() {}
/**
 * totalPools
 */
function totalPools() {}
/**
 * sendTokens
 */
function sendTokens() {}
/**
 * send
 */
function send() {}
/**
 * swapAmountForToken
 */
function swapAmountForToken() {}
/**
 * swapTokenForAmount
 */
function swapTokenForAmount() {}
/**
 * swapAmountForTaxToken
 */
function swapAmountForTaxToken() {}
/**
 * swapTaxTokenForAmount
 */
function swapTaxTokenForAmount() {}
/**
 * swapTokenForTaxToken
 */
function swapTokenForTaxToken() {}
/**
 * swapTaxTokenForToken
 */
function swapTaxTokenForToken() {}
/**
 * swapTaxTokenForToken
 */
function swapTaxTokenForToken() {}
/**
 * swapTokenForToken
 */
function swapTokenForToken() {}

/**
 * getTokenPrice
 * Get the price of the tokens registered in the configuration file.
 */
function getTokenPrice() {

  console.clear();

  const requestedNetworkConnections = Object.keys(pricingConfig);
  requestedNetworkConnections.forEach(networkConnection => {
    const requestedDexConnections = Object.keys(
      pricingConfig[networkConnection]
    );
    requestedDexConnections.forEach(async dexConnection => {
      const myDexRouter = routers[networkConnection].get(dexConnection);
      myDexRouter.network = networks.getNetwork(networkConnection);
      const router = await myDexRouter.router();
      const pairs = [
        [...Object.keys(pricingConfig[networkConnection][dexConnection])],
        [...Object.values(pricingConfig[networkConnection][dexConnection])]
      ];

      for (let n = 0; n <= pairs[0].length - 1; n++) {
        const reserves = await router.getTokenPrice(
          tokens[networkConnection].getToken(pairs[0][n]).contractAddress,
          tokens[networkConnection].getToken(pairs[1][n]).contractAddress
        );
        console.log(
          "RKL/WBNB Price : ",
          reserves[0] / 1e18,
          reserves[1] / 1e18
        );
      }
    });
    console.log("\n");
  });
  console.log("\n");
}
// setup connection with the primary process

io.on("connection", socket => {
  //Emit to the Network the new connection so everyone knows.
  io.emit("connected", socket.id);

  // Add A Network
  io.on("add_network", authenticate, addNetwork);

  // Update A Network
  io.on("update_network", authenticate, updateNetwork);

  // Remove A Network
  io.on("remove_network", authenticate, removeNetwork);

  // Add A Token
  io.on("add_token", authenticate, addToken);

  // Update A Token
  io.on("update_token", authenticate, updateToken);

  // Remove A Token
  io.on("remove_token", authenticate, removeToken);

  // Add A Dex
  io.on("add_dex", authenticate, addDex);

  // Update A Dex
  io.on("update_dex", authenticate, updateDex);

  // Remove A Dex
  io.on("remove_dex", authenticate, removeDex);

  // Get A Token Pool Price
  io.on("pooled_token_price", authenticate, pooledTokenPrice);

  // Get A Tokens Total Market
  io.on("total_token_market", authenticate, totalTokenMarket);

  // Get an ABI
  io.on("get_abi", authenticate, getABI);

  // setup screen update interval
  io.on("set_screen_update_interval", authenticate, setScreenUpdateInterval);

  // enable debugging messages
  io.on("enable_debugging", authenticate, enableDebugging);

  // disable debugging messages
  io.on("disable_debugging", authenticate, disableDebugging);

  // verify a wallet balance
  io.on("balance", authenticate, balance);

  // verify a wallet token balance
  io.on("token_balance", authenticate, tokenBalance);

  // get a tokens total supply
  io.on("total_supply", authenticate, totalSupply);

  // get a tokens circulating supply
  io.on("circulating_supply", authenticate, circulatingSupply);

  // get the total pool count for a token
  io.on("total_pools", authenticate, totalPools);

  // send tokens
  io.on("send_token", authenticate, sendTokens);

  // send amounts
  io.on("send", authenticate, send);

  // trade amountForToken
  io.on("swap_amount_for_token", authenticate, swapAmountForToken);

  // trade token For Amount
  io.on("swap_token_for_amount", authenticate, swapTokenForAmount);

  // trade amountForTaxToken
  io.on("swap_amount_for_tax_token", authenticate, swapAmountForTaxToken);

  // trade amountForTaxToken
  io.on("swap_tax_token_for_amount", authenticate, swapTaxTokenForAmount);

  // trade token for tax token
  io.on("swap_token_for_tax_token", authenticate, swapTokenForTaxToken);

  // trade tax token for token
  io.on("swap_tax_token_for_token", authenticate, swapTaxTokenForToken);

  // trade tax token for token
  io.on("swap_tax_token_for_tax_token", authenticate, swapTaxTokenForToken);

  // trade token for token
  io.on("swap_token_for_token", authenticate, swapTokenForToken);
});

let question = `** Enter a command to execute **\n
(L)isten\t (W)atch\t (P)rice\n
(N)etworks\t(T)okens\t(D)exs\n
(S)ettings\n
(Q)uit\n
 Usage : \`[command] "PARAM" ...\`\n
You can either type the letter in parenthese or type the word. 
It's not case sensitive. \nCommand : `;

let serverListening = false;
function listen() {
  try {
    io.listen(3000);
    serverListening = true;
  } catch (error) {
    console.error(error);
    process.exit();
  }
}

let watching = false;
let watcher; //this will hold our timer event for the watcher.

function watch() {
  const dexName = "PancakeSwap";
  const routerContractAddress = "0x10ED43C718714eb63d5aA57B78B54704E256024E";

  const rl = readline.createInterface(process.stdin, process.stdout);

  const watchUpdateEvent = async () => {
    const myTestDexRouter = routers["BNB"].get("PancakeSwap");
    myTestDexRouter.network = networks.getNetwork("BNB");
    const router = await myTestDexRouter.router();
    const rklWBNBReserves = await router.getTokenPrice(
      tokens["BNB"].getToken("RKL").contractAddress,
      tokens["BNB"].getToken("WBNB").contractAddress
    );

    const winWBNBReserves = await router.getTokenPrice(
      tokens["BNB"].getToken("WIN").contractAddress,
      tokens["BNB"].getToken("WBNB").contractAddress
    );

    const wbnbUSDCReserves = await router.getTokenPrice(
      tokens["BNB"].getToken("WBNB").contractAddress,
      tokens["BNB"].getToken("USDC").contractAddress
    );

    const costOfRickleInWBNB = rklWBNBReserves[1] / 1e18;
    const costOfWinstonInWBNB = winWBNBReserves[1] / 1e18;
    const costOfWBNBInUSDC = wbnbUSDCReserves[1].toString() / 1e18;

    const info = `|------------------------------------------------------------|
  |  {DEX}   |  {TOKEN0}  | {RESERVE_0} |  {RESERVE_1}  |
  |------------------------------------------------------------|
  `;
    let formattedInfo = [
      info
        .replace("{DEX}", dexName)
        .replace("{TOKEN0}", "RKL")
        .replace("{RESERVE_0}", costOfRickleInWBNB)
        .replace(
          "{RESERVE_1}",
          costOfWBNBInUSDC.toFixed(2) * costOfRickleInWBNB
        ),

      info
        .replace("{DEX}", dexName)
        .replace("{TOKEN0}", "WIN")
        .replace("{RESERVE_0}", costOfWinstonInWBNB)
        .replace(
          "{RESERVE_1}",
          costOfWBNBInUSDC.toFixed(2) * costOfWinstonInWBNB
        ),
      info
        .replace("{DEX}", dexName)
        .replace("{TOKEN0}", "WBNB")
        .replace("{RESERVE_0}", 1)
        .replace("{RESERVE_1}", costOfWBNBInUSDC.toFixed(2) * 1)
    ].join("");

    let question = `** Token Watch **
Contract : {ADDRESS}\nTotal Supply: {SUPPLY}\nCirculating: {CIRCULATING}
|   Dex      | Token | Token1 |   Amount   |    Price in USDC    |
${formattedInfo}
Type (M)enu and enter for the Menu or Type (Q)uit and enter to exit.
--)`
      .replace("{ADDRESS}", routerContractAddress)
      .replace("{SUPPLY}", "NNN")
      .replace("{CIRCULATING}", "NNN")
      .replace("{RKL_RESERVE_0}", 0)
      .replace("{RKL_RESERVE_1}", 0)
      .replace("{WIN_RESERVE_0}", 0)
      .replace("{WIN_RESERVE_1}", 0);
    console.clear();

    rl.setPrompt(question);
    rl.prompt();
    if (
      watching //we do this so it only runs once.
    ) {
      clearTimeout(watcher);
      watcher = setTimeout(watchUpdateEvent, watcherInterval);
    }
  };
  watchUpdateEvent();
  rl.on("line", userResponse => {
    if (userResponse.toLowerCase().match(/^m(enu)?$/i)) {
      // (m)enu
      watching = false;
      rl.close();
      return menu();
    } else if (userResponse.toLowerCase().match(/^q(uit)?$/i)) {
      // (q)uit
      rl.close();
      console.info("Now Exiting.");
      return process.exit();
    }
  });
}

function networksMenu() {
  let networkquestion = `** Network Management **\n This feature is a pro feature and can be purchased through Winston Services. Or create your own!`;
  console.clear();
  const rl = readline.createInterface(process.stdin, process.stdout);
  rl.setPrompt(networkquestion);
  rl.prompt();
  rl.on("line", userResponse => {});
}

function tokensMenu() {
  let tokenQuestion = `** Token Management **\n This feature is a pro feature and can be purchased through Winston Services. Or create your own!`;
  console.clear();
  const rl = readline.createInterface(process.stdin, process.stdout);
  rl.setPrompt(tokenQuestion);
  rl.prompt();
  rl.on("line", userResponse => {});
}

function dexsMenu() {
  let dexQuestion = `** Dex Management **\n This feature is a pro feature and can be purchased through Winston Services. Or create your own!`;
  console.clear();
  const rl = readline.createInterface(process.stdin, process.stdout);
  rl.setPrompt(dexQuestion);
  rl.prompt();
  rl.on("line", userResponse => {});
}

function settingsMenu() {
  let settingsQuestion = `** Settings **\n This feature is a pro feature and can be purchased through Winston Services. Or create your own!`;
  console.clear();
  const rl = readline.createInterface(process.stdin, process.stdout);
  rl.setPrompt(settingsQuestion);
  rl.prompt();
  rl.on("line", userResponse => {});
}

function menu() {
  console.clear();
  const rl = readline.createInterface(process.stdin, process.stdout);
  rl.setPrompt(question);
  rl.prompt();
  rl.on("line", userResponse => {
    //probably should change the way this handles cases if it get much bigger.
    if (userResponse.toLowerCase().match(/^l(isten)?$/i)) {
      rl.close();
      if (!serverListening) {
        listen();
        console.info("Socket Server running");
        setTimeout(() => {
          menu();
        }, 5000);
        return;
      } else {
        console.info("Socket Server is already running");
        setTimeout(() => {
          menu();
        }, 5000);
        return;
      }
    } else if (userResponse.toLowerCase().match(/^w(atch)?$/i)) {
      // (w)atch
      watching = true;
      rl.close();
      return watch();
    } else if (userResponse.toLowerCase().match(/^n(etworks)?$/i)) {
      // (n)etworks
      rl.close();
      return networksMenu();
    } else if (userResponse.toLowerCase().match(/^t(okens)?$/i)) {
      // (t)okens
      rl.close();
      return tokensMenu();
    } else if (userResponse.toLowerCase().match(/^d(exs)?$/i)) {
      // (d)exs
      rl.close();
      return dexsMenu();
    } else if (userResponse.toLowerCase().match(/^s(ettings)?$/i)) {
      // (s)ettins
      rl.close();
      return settingsMenu();
    } else if (userResponse.toLowerCase().match(/^p(rice)?$/i)) {
      // (p)rice
      rl.close();
      return getTokenPrice();
    } else if (userResponse.toLowerCase().match(/^m(enu)?$/i)) {
      // (m)enu
      rl.close();
      return menu();
    } else if (userResponse.toLowerCase().match(/^q(uit)?$/i)) {
      // (q)uit
      rl.close();
      console.info("Now Exiting.");
      return process.exit();
    } else console.log(question + userResponse);
  });
  rl.on("SIGINT", () => {
    rl.question("Exit (y or n)? ", input => {
      if (input.match(/^y(es)?$/i)) {
        rl.close();
        process.exit();
      }
    });
  });
}
menu();