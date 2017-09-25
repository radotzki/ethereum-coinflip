const Web3 = require('web3');
const contract = require('truffle-contract');
const FlipCoinContract = require('./build/contracts/FlipCoin.json');

window.addEventListener('load', () => {
    const web3 = new Web3(window.web3.currentProvider);
    const flipCoin = contract(FlipCoinContract);
    flipCoin.setProvider(web3.currentProvider);
    const accounts = new Promise((res, rej) => web3.eth.getAccounts((e, a) => e ? rej(e) : res(a[0])));

    Promise
        .all([accounts, flipCoin.deployed()])
        .then(resp => main(web3, resp[0], resp[1]));
});


function main(web3, account, flipCoinInstance) {
    document.getElementById('tails').onclick = () =>
        flipCoinInstance.betTails({
            from: account,
            value: web3.toWei(10, 'ether')
        });

    document.getElementById('heads').onclick = () =>
        flipCoinInstance.betHeads({
            from: account,
            value: web3.toWei(10, 'ether')
        });

    document.getElementById('flip').onclick = () =>
        flipCoinInstance.flip({
            from: account
        });
}