# Minting of NFTs and spl tokens module3 assesement

This projects aims to create and mint spl tokens and also mint NFTs using the candy machine ui
The minted tokens are paid for by the created spl tokens

## Description
1. **First create an SPL Token**: Utilize lessons learned or use a previously created SPL token.
2. **Then uou make sure to update the Config file**
3. **Last you create Candy Machine UI**: this can be done by following the steps here : [Quick Node: Setting up candy machine ui](https://www.quicknode.com/guides/solana-development/nfts/how-to-deploy-an-nft-collection-on-solana-using-sugar-candy-machine)

## Steps to run the app

### 1. Create an SPL Token

Create a new SPL token or use an existing one , navigate to `index.js` to see the code

In `config.json`, modify the `splTokenAddress` to reflect the address of the SPL token created in Step 1.

### 2. Update Config.json file
Input your `splTokenAddress` , `spltokenaccout` and the creator's `publickey`

### 3. Create Candy Machine UI
Clone the candy machine ui
Follow the tutorial [here](https://www.quicknode.com/guides/solana-development/nfts/how-to-deploy-an-nft-collection-on-solana-using-sugar-candy-machine) to create a UI for the Candy Machine. Note the adjustment required for the start script.


### 4. Fix Start Script

Change the start script in `package.json` as mentioned above to avoid `ERR_OSSL_EVP_UNSUPPORTED` error during UI startup.

### 5. Run the UI
Run by entering the command `yarn start`

Ensure the Candy Machine UI is running smoothly, and users can mint NFTs by paying with the custom SPL token.





