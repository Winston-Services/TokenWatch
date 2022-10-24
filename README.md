# TokenWatch
Winston your personal assistant to all things blockchain wants to help you watch your crypto! You can use this tool to watch you favorite tokens liquidity and price.


## File structure
This is the basic file structure used for this application. 
```
 |->assets
 |-->contracts
 |--->abi
 |---->Binance
 |->configs
 |-->networks
 |-->tokens
 |--->ETH
 |---->RKL.json
 |--->BNB
 |---->WIN.json
 |---->RKL.json
 |---->WBNB.json
 |---->USDC.json
 |--->MATIC
 |---->RKL.json
 |--->GNOSIS
 |---->RKL.json
 |-->pricingConfig.js
 |->data
 |-->maps
 |--->networks.js
 |--->routers.js
 |--->tokens.js 
 |->dist
 |-->bin
 |--->winston-token-watch-linux
 |--->winston-token-watch-macos
 |--->winston-token-watch-win.exe
 |->utils
 |-->AbiDownloadHandler.js
 |-->DexRouterMap.js
 |-->DexRouterRecord.js
 |-->NetworkMap.js
 |-->NetworkRecord.js
 |-->TokenMap.js
 |-->TokenRecord.js
 base.js
 index.js
 README.md
```

Use this application to help you watch your tokens liquidity.
## Setting up network connections.
Inside the `config/networks` folder is the BNB.json file, you can use this as an example of how to add other networks to the application. 

Inside the file you will find the information used by the application to connect to two different api's that aid us in getting the price and liquidity of our tokens.

Each network has its own data, and we need to make sure we are collecting the right information from the right place.

## Setting up tokens.
Inside the `config/tokens` folder is a few folders for our networks we want to use. Let's take a look in the BNB folder.
Inside the `config/tokens/BNB` folder we will find a few more JSON files. We will use this information to aquire the information we need to calculate the price of our tokens.
I have included `RKL.json`, `USDC.json`, `WBNB.json`, and `WIN.json`. `RKL.json`, and `WIN.json` are our project tokens so we want to watch those. The other two `USDC.json`, and `WBNB.json` are so we can get the price based off of the pool. Since the pool is in *WBNB*, we have to convert that to *USDC* to get our dollar value.

## Setting up Exchange Routers
In this basic version we have included only the Pancake Router. You can add more yourself manually, or check out the pro version.


## Run as a nodejs application
Create the binary build files.

`npm i`
Install the node modules.
`node ./index.js`
Run the application.

## Manually compile the application.
`npm i`
Install the node modules.
`npm run build`

For Linux Run 
`./dist/bin/winston-token-watch-linux`

For Macos Run 
`./dist/bin/winston-token-watch-macos`

For Windows Run 
`./dist/bin/winston-token-watch-win.exe`
