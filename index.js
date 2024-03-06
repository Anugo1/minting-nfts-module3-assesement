import { clusterApiUrl, Connection, Keypair, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { createMint, getOrCreateAssociatedTokenAccount, mintTo, transfer } from '@solana/spl-token';

(async () => {
    // Step 1: Connect to cluster and generate two new Keypairs
const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');

const fromsecretKeyut8 = new Uint8Array([150,83,197,228,187,187,24,47,200,189,253,250,245,188,126,109,250,0,191,42,163,226,105,226,226,83,11,220,165,0,55,75,213,221,163,7,154,34,32,82,116,164,154,179,113,222,180,230,151,130,53,22,129,253,54,205,187,67,7,251,3,43,168,22])

//create a keypair object from the secret key of the from wallet
const fromWalletkeypair = Keypair.fromSecretKey(fromsecretKeyut8)


const toSecretkeyut8 = new Uint8Array([213,249,152,62,218,39,115,121,102,25,105,218,247,55,118,187,251,225,91,106,166,244,204,203,21,86,95,236,104,210,82,168,250,250,113,108,76,28,68,144,217,247,174,81,55,177,129,74,59,117,107,0,232,221,55,78,19,248,105,70,232,241,139,94])
  //create a keypair object from the secret key of the from wallet
const toWalletkeypair = Keypair.fromSecretKey(toSecretkeyut8)

 // Step 2: Airdrop SOL into your from wallet
const fromAirdropSignature = await connection.requestAirdrop(fromWalletkeypair.publicKey, LAMPORTS_PER_SOL);
// Wait for airdrop confirmation
await connection.confirmTransaction(fromAirdropSignature, { commitment: "confirmed" });

    
    // Step 3: Create new token mint and get the token account of the fromWallet address
//If the token account does not exist, create it
const mint = await createMint(connection, fromWalletkeypair, fromWalletkeypair.publicKey, null, 9);
const fromTokenAccount = await getOrCreateAssociatedTokenAccount(
        connection,
        fromWalletkeypair,
        mint,
        fromWalletkeypair.publicKey
)
 
    //Step 4: Mint a new token to the from account
let signature = await mintTo(
	connection,
	fromWalletkeypair,
	mint,
	fromTokenAccount.address,
	fromWalletkeypair.publicKey,
	1000000000,
	[]
);
console.log('mint tx:', signature);

    

    //Step 5: Get the token account of the to-wallet address and if it does not exist, create it
const toTokenAccount = await getOrCreateAssociatedTokenAccount(
	connection,
	fromWalletkeypair,
	mint,
	toWalletkeypair.publicKey
);

    

    ///Step 6: Transfer the new token to the to-wallet's token account that was just created
// Transfer the new token to the "toTokenAccount" we just created
signature = await mintTo(
	connection,
	fromWalletkeypair,
	mint,
	toTokenAccount.address,
	fromWalletkeypair.publicKey,
	1000000000,
	[]
);
console.log('transfer tx:', signature);

 
})();
