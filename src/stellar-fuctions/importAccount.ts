import StellarSdk from 'stellar-sdk'

export function importAccount(privateKey: string){
    try {
      const keypair = StellarSdk.Keypair.fromSecret(privateKey);
      if (keypair.publicKey()) {
        console.log('Sign in successful');
        return {
          publicKey: keypair.publicKey(),
          secretKey: keypair.secret()
        };
      } else {
        console.log('Invalid private key');
        return null;
      }
    } catch (error) {
      console.error('Error importing account:', error);
      return null;
    }
  }