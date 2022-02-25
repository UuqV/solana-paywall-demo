import * as web3 from '@solana/web3.js';

var airdrop = (userKey) => {
  // Connect to cluster
  var connection = new web3.Connection(web3.clusterApiUrl('devnet'), 'confirmed');

  var web3userKey = new web3.PublicKey(userKey.publicKey);
  var web3reciever = new web3.PublicKey('GAuynWz67hbYowUwuXT4AyTDXNbjGktgivZoHpdYcb2H');

  // Add transfer instruction to transaction
  connection.getLatestBlockhash().then((blockhashObj) => {
    var transaction = new web3.Transaction({
      recentBlockhash: blockhashObj.blockhash,
      feePayer: web3userKey,
    }).add(
      web3.SystemProgram.transfer({
        fromPubkey: web3userKey,
        toPubkey: web3reciever,
        lamports: web3.LAMPORTS_PER_SOL / 100,
      }),
    );

    // Sign transaction, broadcast, and confirm
    window.solana.signAndSendTransaction(transaction).then((res) => {
      connection.confirmTransaction(res.signature).then(console.log);
    });
  });
};

export default airdrop;