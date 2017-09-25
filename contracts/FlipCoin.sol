pragma solidity ^0.4.4;

contract FlipCoin {
    address tailsAddress;
    address headsAddress;

    function betTails() payable {
        tailsAddress = msg.sender;
    }

    function betHeads() payable {
        headsAddress = msg.sender;
    }

    function flip() {
        bool tailsWin = block.timestamp % 2 == 0;

        if (tailsWin) {
            tailsAddress.transfer(2 ether);
        } else {
            headsAddress.transfer(2 ether);
        }
    }
}