<script>
  import Alert from '../elements/Alert.svelte';
  import Button from '../elements/Button.svelte';
  import { showAccount, signIn } from '../elements/store';
  import { keyPair } from '../elements/store'

  let publicKey = '';
  let secretKey = '';

  keyPair.subscribe(value => {
    publicKey = value.publicKey;
    secretKey = value.secretKey;
  });	

  function handleGoBack() {
    signIn.set(false);
    keyPair.set({ publicKey: '', secretKey: '' })
  }

  function handleGoNext() {
    signIn.set(false);
  }

  function handleCopySecretKey() {
    navigator.clipboard.writeText(secretKey)
      .then(() => {
        // Se ha copiado correctamente
        showCopiedMessage();
      })
      .catch(err => {
        console.error('Error al copiar al portapapeles:', err);
      });
  }

  let showCopied = false;

  function showCopiedMessage() {
    showCopied = true;
    setTimeout(() => {
      showCopied = false;
    }, 2000);
  }

  

</script>

<main>
  
  <Alert type="warning" message="Warning: Make sure to securely store your secret key" />
  <div class="input-container">
    <input class="input-style" value={publicKey} />
    <input class="input-style" value={secretKey} />
    <Button textButton="Copy Secret Key" color="#008d23" onclick={handleCopySecretKey} />
  </div>

  {#if showCopied}
    <div class="copy-message">Secret key copied to clipboard!</div>
  {/if}

  <div class="button-container">
    <Button textButton="Go Back" color="red" onclick={handleGoBack}/>
    <Button textButton="Next" color="blue" onclick={handleGoNext}/>
  </div>
  
</main>

<style>
  .button-container {
    display: flex;
    justify-content: space-between;
  
  }

  .input-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: 12px;
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
