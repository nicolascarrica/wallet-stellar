<script>
  import Alert from '../elements/Alert.svelte';
  import Toast from '../elements/Toast.svelte';
  import { showAccount, signIn, funding } from '../utils/store';
  import { keyPair } from '../utils/store';
  import { handleCopyKey, showCopiedMessage } from '../utils/copy';
  import { addFunds } from '../stellar-fuctions/addFunds';

  let secretKey = '';
  let publicKey = '';

  keyPair.subscribe(value => {
    if (value) {
      secretKey = value.secretKey;
      publicKey = value.publicKey;
    }
  });

  let showErrorToast = false;
  let showSuccessToast = false;

  function handleGoBack() {
    signIn.set(false);
    keyPair.set({ publicKey: '', secretKey: '' });
  }

  async function handleGoNext() {
    try {
      funding.set(true);
      await addFunds(publicKey);
      signIn.set(false); 
    } catch (error) {
      showErrorToast = true;
      signIn.set(true);
    } finally {
      funding.set(false); 
    }
  }
  

  function handleCopyPrivateKey() {
    handleCopyKey(secretKey, { set: setShowCopied });
  }

  let showCopied = false;
  function setShowCopied(value) {
    showCopied = value;
  }
</script>

<main>
  <Alert type="warning" message="Warning: Make sure to securely store your secret key" />
  
  <div class="input-group mb-3">
    <input class="form-control" value={secretKey} />
    <button class="btn btn-secondary me-2" on:click={handleCopyPrivateKey}>
      {#if showCopied}
        Copied
      {:else}
        Copy
      {/if}
    </button>
  </div>
  

  {#if showErrorToast}
    <Toast type="error" message="Failed to add funds in Stellar account" show={showErrorToast}/>
  {/if}


  {#if showSuccessToast}
    <Toast type="success" message="Funds added successfully!" show={showSuccessToast} />
  {/if}

  {#if $funding === true}
    <p class="text-center">Funding in progress...</p>
  {/if}

  <div class="d-flex justify-content-between">
    <button class="btn btn-primary" on:click={handleGoBack}>Go Back</button>
    <button class="btn btn-success" on:click={handleGoNext}>Go Next</button>
  </div>
</main>

<style>
  .text-center {
    text-align: center;
    color:indigo
  }
</style>