import { Server, Keypair, NotFoundError, TransactionBuilder, BASE_FEE, Networks, Operation, Asset, Memo } from "stellar-sdk";
const server = new Server("https://horizon-testnet.stellar.org");

export const sendPayment = async (secretKey: string, amount: string, destinationId: string): Promise<any> => {
  const sourceKeys = Keypair.fromSecret(secretKey);

  try {
    await server.loadAccount(destinationId);
  } catch (e) {
    if (e instanceof NotFoundError) {
      throw new Error("Account not found");
    } else {
      throw e;
    }
  }

  let sourceAccount;

  try {
    sourceAccount = await server.loadAccount(sourceKeys.publicKey());
  } catch (e) {
    throw new Error("Error loading source account: " + e);
  }

  const transaction = new TransactionBuilder(sourceAccount, {
    fee: BASE_FEE,
    networkPassphrase: Networks.TESTNET,
  })
    .addOperation(
      Operation.payment({
        destination: destinationId,
        asset: Asset.native(),
        amount: amount,
      })
    )
    .addMemo(Memo.text("Test Transaction"))
    .setTimeout(180)
    .build();

  transaction.sign(sourceKeys);
  
  try {
    return await server.submitTransaction(transaction);
  } catch (e) {
    throw new Error("Something went wrong!" + e);
  }
}