
pragma solidity ^0.4.25;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Election.sol";

contract TestElection{
    Election election;
    function beforeAll() public{
        election = Election(DeployedAddresses.Election());
    }
    function testVoteElena() public {

        string memory fullName;
        string  memory description;
        uint256 voteCounter;


        (fullName, description, voteCounter)=  election.getWinner();

        string memory expectedStr = "Alex";
        uint256  expectedUint = 1;
        Assert.equal(fullName, expectedStr, "not equal");

        (fullName, voteCounter) = election.vote("Lena");

        expectedStr = "Lena";

        Assert.equal(fullName, expectedStr, "not equal");

        Assert.equal(voteCounter, expectedUint, "not equal");

        (fullName, description, voteCounter)=  election.getWinner();

        Assert.equal(fullName, expectedStr, "not equal");
    }

}