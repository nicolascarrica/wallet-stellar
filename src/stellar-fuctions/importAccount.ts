import StellarSdk from 'stellar-sdk'

export function importAccount(privateKey: string){
    try {
      const keypair = StellarSdk.Keypair.fromSecret(privateKey);
      if (keypair.publicKey()) {
        console.log('Sign in successful');
      } else {
        console.log('Invalid private key');
      }
    } catch (error) {
      console.error('Error importing account:', error);
    }
  }