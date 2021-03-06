import { Meteor } from 'meteor/meteor';
import Web3 from 'web3';

// Set web3 provider
let web3;
const provider = Meteor.settings.public.web3.network.testnet;

console.log(typeof web3);
if (typeof web3 !== 'undefined') {
  console.log('web3 not undefined')
  web3 = new Web3(web3.currentProvider);
} else {
  console.log('web3 defined')
  web3 = new Web3(new Web3.providers.HttpProvider(provider));
  console.log(web3);
}


/**
* @summary gets eth balance from given public address
* @param {string} publicAddress
* @return {object} bigNumber eth balance
*/
const _getEthBalance = (publicAddress) => {
  const balance = web3.eth.getBalance(publicAddress);
  const ethBalance = web3.fromWei(balance, 'ether');
  return ethBalance;
};

/**
* @summary gets wei balance from given public address
* @param {string} publicAddress
* @return {object} bigNumber wei balance
*/
const _getWeiBalance = (publicAddress) => {
  const balance = web3.eth.getBalance(publicAddress);
  return balance;
};

/**
* @summary converts wei to eth
* @param {number} value in wei
* @return {number} equivalent in eth
*/
const _wei2eth = (value) => {
  return web3.fromWei(value, 'ether');
};

export const wei2eth = _wei2eth;
export const getEthBalance = _getEthBalance;
export const getWeiBalance = _getWeiBalance;
