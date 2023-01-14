require ('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli : {
      url: 'https://eth-goerli.g.alchemy.com/v2/O3jd2iYm-aRdv5fEWa4VvmEwA6M9zqDq',
      accounts: ['4af7858c791491b4c665209dc3611a491acd8d318d316c74cfdc1dbabff9ec78']
    }
  }
}