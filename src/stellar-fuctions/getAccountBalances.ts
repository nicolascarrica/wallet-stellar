import StellarSdk from 'stellar-sdk';

const server = new StellarSdk.Server("https://horizon-testnet.stellar.org");

export const getAccountBalances = async (publicKey: string) => {
  try {
    if (!publicKey) {
      // Si la publicKey está vacía o no existe, retornar un arreglo vacío. Me daba error al hacer logOut
      return [];
    }

    const account = await server.loadAccount(publicKey);
    console.log(account)
    const balances = account.balances;
    console.log(balances)
    return balances;
    
  } catch (e) {
    return [];
  }
};



