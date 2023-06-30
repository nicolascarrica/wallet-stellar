<script>
  import { createAccount } from '../stellar-fuctions/createAccount';
  import { importAccount }  from '../stellar-fuctions/importAccount';
  import { keyPair, showAccount, signIn } from '../utils/store';

  async function handleNewKeyPair() {
    try {
      const newKeyPair = await createAccount();
      keyPair.set(newKeyPair);
      signIn.set(true);
      console.log('Public Key:', newKeyPair.publicKey);
      console.log('Secret Key:', newKeyPair.secretKey)
    } catch (error) {
      console.error(error);
    }
  }
  
  let inputValue = '';
  function handleInputChange(event) {
    inputValue = event.target.value; 
  } 

  let showError = false;

  function handleImportAccount() {
    if (inputValue.length === 56) {
      console.log('Valor ingresado:', inputValue);
      const keyPairResult = importAccount(inputValue);
      if (keyPairResult !== null) {
        keyPair.set(keyPairResult);
        signIn.set(false);
      } else {
        console.log('Invalid private key');
      }
    } else {
      showError = true;

      setTimeout(() => {
        showError = false;
      }, 3000);
    }
  } 


</script>
  
  
<main class="d-flex justify-content-center align-items-center">
  <div class="setup text-center">
    <h1 class="mb-2">Welcome to your Stellar Wallet</h1>
    <p>Is this your first time here? You'll need a KeyPair so we can get started</p>
    <button class="btn btn-primary" on:click={handleNewKeyPair}>Create Account</button>
    <p>If you already have an account, you can import it.</p>
    {#if showError}
      <div class="error-message">Invalid number of characters</div>
    {/if}
    <div class="mb-2">
      <input type="text" class="form-control" placeholder="Enter your private key" value={inputValue} on:input={handleInputChange} />
    </div>
    <button class="btn btn-success" on:click={handleImportAccount}>Import Account</button>
  </div>
</main>
  

<style>

  .error-message {
    color: red;
    margin-top: 8px;
  }

</style>