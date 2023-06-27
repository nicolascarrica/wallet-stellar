<script>
  import Alert from '../elements/Alert.svelte';
  import { showAccount, signIn } from '../utils/store';
  import { keyPair } from '../utils/store'
  import { handleCopyKey, showCopiedMessage } from '../utils/copy';
  import {addFunds} from '../stellar-fuctions/addFunds';
  import { toasts, ToastContainer, FlatToast } from 'svelte-toasts';
	import { hash } from 'stellar-sdk';
  
  let secretKey = '';
  let publicKey = '';

  keyPair.subscribe(value => {
    secretKey = value.secretKey;
    publicKey = value.publicKey;
  });	

  function handleGoBack() {
    signIn.set(false);
    keyPair.set({ publicKey: '', secretKey: '' })
  }

  function showToast(type, message) {
    toasts.add({
      title: type === 'success' ? 'Success' : 'Error',
      description: message,
      duration: 3000,
      placement: 'bottom-right',
      type: type,
      theme: 'dark',
    });
  };
  
  async function handleGoNext() {
    try {
      await addFunds(publicKey);
      showToast('success', 'Funds added successfully!');
      signIn.set(false); 
    } catch (error) {
      showToast('error', 'Failed to add funds in Stellar account');
      signIn.set(true);
    }
  }
  
  console.log(addFunds)

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
  <ToastContainer let:data={data}>
		<FlatToast {data}  />
	</ToastContainer>
	
  <div class="d-flex justify-content-between">
    <button class="btn btn-primary" on:click={handleGoBack}>Go Back</button>
    <button class="btn btn-success" on:click={handleGoNext}>Go Next</button>
  </div>

  
  
  
</main>
