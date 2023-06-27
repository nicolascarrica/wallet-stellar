import StellarSdk from "stellar-sdk";

type CustomBalance = {
  asset_type: string;
  balance: string;
};

const server = new StellarSdk.Server("https://horizon-testnet.stellar.org");

export const getAccountBalances = async (publicKey: string) => {
  const pair = StellarSdk.Keypair.fromPublicKey(publicKey);

  try {
    const account = await server.loadAccount(pair.publicKey());
    console.log("Balances for account: " + pair.publicKey());

    const balances: CustomBalance[] = [];

    account.balances.forEach(function (balance: CustomBalance) {
      console.log("Type:", balance.asset_type, ", Balance:", balance.balance);
      balances.push(balance);
    });
   

    return balances;
  } catch (error) {
    console.error("Error loading account:", error);
    return [];
  }
};
