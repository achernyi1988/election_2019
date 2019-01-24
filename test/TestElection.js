const Election = artifacts.require("Election");


contract("Election test", async accounts => {
    it("vote for Lena", async () => {
        let instance = await Election.deployed();

        let result = await instance.getWinner();

        console.log(result);

        let fullName = result[0];

        let voteCounter = result[2];

        let expectedfullName = "Alex";
        let expectedVoteCounter = 0;

       // let balance = await instance.getBalance.call(accounts[0]);
        assert.equal(fullName, expectedfullName,"equal");
        assert.equal(voteCounter, expectedVoteCounter,"equal");

        await instance.vote("Lena", {from: accounts[0]});


        result = await instance.getWinner();

        console.log(result);

        fullName = result[0];

        voteCounter = result[2];

        expectedfullName = "Lena";
        expectedVoteCounter = 1;

        // let balance = await instance.getBalance.call(accounts[0]);
        assert.equal(fullName, expectedfullName,"equal");
        assert.equal(voteCounter, expectedVoteCounter,"equal");

    });

    it("vote for Alex", async () => {
        let instance = await Election.deployed();

        let result = await instance.getWinner();

        console.log(result);

        let fullName = result[0];

        let voteCounter = result[2];

        let expectedfullName = "Lena";
        let expectedVoteCounter = 1;

        // let balance = await instance.getBalance.call(accounts[0]);
        assert.equal(fullName, expectedfullName,"equal");
        assert.equal(voteCounter, expectedVoteCounter,"equal");

        await instance.vote("Alex", {from: accounts[2]});


        result = await instance.getWinner();

        console.log(result);

        fullName = result[0];

        voteCounter = result[2];

        expectedfullName = "Alex";
        expectedVoteCounter = 1;

        // let balance = await instance.getBalance.call(accounts[0]);
        assert.equal(fullName, expectedfullName,"equal");
        assert.equal(voteCounter, expectedVoteCounter,"equal");

    });

    it("vote for Alex 2", async () => {
        let instance = await Election.deployed();

        let result = await instance.getWinner();

        console.log(result);

        let fullName = result[0];

        let voteCounter = result[2];

        let expectedfullName = "Alex";
        let expectedVoteCounter = 1;

        // let balance = await instance.getBalance.call(accounts[0]);
        assert.equal(fullName, expectedfullName,"equal");
        assert.equal(voteCounter, expectedVoteCounter,"equal");

        await instance.vote("Alex", {from: accounts[5]});


        result = await instance.getWinner();

        console.log(result);

        fullName = result[0];

        voteCounter = result[2];

        expectedfullName = "Alex";
        expectedVoteCounter = 2;

        // let balance = await instance.getBalance.call(accounts[0]);
        assert.equal(fullName, expectedfullName,"equal");
        assert.equal(voteCounter, expectedVoteCounter,"equal");

    });

});