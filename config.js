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

var txDefault = {};

/**
* Reload configuration
*/
function loadConfiguration () {
  var userConfig = JSON.parse(localStorage.getItem("userConfig"));
  Object.assign(txDefault, txDefaultOrig, userConfig);
}

loadConfiguration();
