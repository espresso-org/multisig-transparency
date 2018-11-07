var txDefaultOrig =
{
  gasLimit: 3141592,
  gasPrice: 18000000000,
  ethereumNode: "https://mainnet.infura.io:443",
  alertsNode: 'https://alerts.gnosis.pm',
  connectionChecker:{
    method : "OPTIONS",
    url : "https://www.google.com",
    checkInterval: 5000
  },
  wallet: "injected",
  // Testrpc
  // walletFactoryAddress: "0xd79426bcee5b46fde413ededeb38364b3e666097"
  // Ropsten
  // walletFactoryAddress: "0xa6d9c5f7d4de3cef51ad3b7235d79ccc95114de5"
  // Mainnet
  //walletFactoryAddress: "0xA0dbdaDcbCC540be9bF4e9A812035EB1289DaD73"
  walletFactoryAddress: "0x13ca9b0019edc8e2886e658e467e76223d90bcb7"
};

var config = {
  pageTitle: 'Espresso Multisig Wallet',
  titleBar: 'Multisig Wallet',
  wallets: {
    "0x13ca9b0019edc8e2886e658e467e76223d90bcb7": {
      "address":"0x13ca9b0019edc8e2886e658e467e76223d90bcb7",
      "name":"Espresso Wallet",
      "owners": {
        "0x00ecfab1e5840f673825982b80252054365c08f3": {
          "name": "Mathew Cormier",
          "address":"0x00ecfab1e5840f673825982b80252054365c08f3"
        },
        "0xf8a3b50d2c5ce855e47b52a1c843b5d9d5b53e40": {
          "name":"Justin Laroche",
          "address":"0xf8a3b50d2c5ce855e47b52a1c843b5d9d5b53e40"
        },
        "0xdcc4501d9e6bdad1f730ffb1140cf808faed8d6f": {
          "name": "Max",
          "address":"0xdcc4501d9e6bdad1f730ffb1140cf808faed8d6f"
        }
      },
      "tokens":{
        "0x960b236A07cf122663c4303350609A66A7B288C0": {
          "name":"Aragon Network Token",
          "symbol":"ANT",  
          "decimals":18,
          "address":"0x9612403591a7676df0628e3e886975631cd6ad43"
        }
      }
    }
  }
};

var txDefault = {};

/**
* Reload configuration
*/
function loadConfiguration () {
  var userConfig = JSON.parse(localStorage.getItem("userConfig"));
  Object.assign(txDefault, txDefaultOrig, userConfig);
}

loadConfiguration();
