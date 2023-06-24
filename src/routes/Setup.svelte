<script>
  import {fade} from 'svelte/transition'
  import Button from '../elements/Button.svelte';
  import { createAccount } from '../stellar-fuctions/createAccount';
  import { importAccount }  from '../stellar-fuctions/importAccount';
  import { keyPair, showAccount, signIn } from '../elements/store';

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
      const secretKey = importAccount(inputValue);
      keyPair.set(secretKey);
      signIn.set(true);

    } else {
      showError = true; 

      setTimeout(() => {
        showError = false;
      }, 3000);
    }
  } 


</script>
  
  
<main>

  <div out:fade class="setup">

    <h1>Welcome to your Stellar Wallet</h1>
    <p>Is this your first time here? You'll need a KeyPair so we can get started</p>
    <Button textButton="Create Account" color= "#040ea1" onclick={handleNewKeyPair} />
    <p>If you already have an account, you can import it.</p>
    {#if showError}
      <div class="error-message">Invalid number of characters</div>
    {/if}
    <input class='input-style' placeholder="Enter your private key" on:input={handleInputChange} value={inputValue} />
    <Button textButton="Import Account" color="#008d23" onclick={handleImportAccount} />
    
  </div>
    
</main>
  

<style>
  .setup {
	  padding: 2em;
    border-radius: 10px;
    max-width: 600px;
    margin: 10px 50px;
    padding-bottom: 50px;
  }
  h1{
    color: #000000;
    font-size: 2em;
    font-weight: 100;
  }
  .error-message {
    color: red;
    margin-top: 8px;
  }
  .input-style {
    padding: 8px;
    font-size: 16px;
    border: 2px solid #ccc;
    border-radius: 4px;
    outline: none;
    width: 100%;
  }
</style>