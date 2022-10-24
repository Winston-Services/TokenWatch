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

## Run as a nodejs application
`npm i`
Install the node modules.
`node ./index.js`
Run the application.

## Manually compile the application.
`npm i`
Install the node modules.
`npm run build`

Create the binary build files.

For Linux Run 
`./dist/bin/winston-token-watch-linux`

For Macos Run 
`./dist/bin/winston-token-watch-macos`

For Windows Run 
`./dist/bin/winston-token-watch-win.exe`
