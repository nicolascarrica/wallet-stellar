<script>
  import { sendPayment } from '../stellar-fuctions/sendPayment';
  import { keyPair } from '../utils/store';
  import Toast from '../elements/Toast.svelte';



  let amount = 0;
  let destinationId = '';
  let secretKey = '';
  let publicKey = '';

  let showErrorToast = false;
  let showSuccessToast = false;

  keyPair.subscribe(value => {
    secretKey = value.secretKey;
    publicKey = value.publicKey;
  });

  const sendXLM = async () => {
    try {
      if(destinationId.length === 56 && amount > 0.00) {
      }
      await sendPayment(secretKey, amount.toString(), destinationId);
      showSuccessToast = true;
      setTimeout(() => {
        showSuccessToast = false;
      }, 3000);
    } catch (error) {
      showErrorToast = true;
      setTimeout(() => {
        showErrorToast = false;
      }, 3000);
    }
  };

  function handleAmountInput(event) {
    const inputValue = event.target.value;
    const parsedAmount = parseFloat(inputValue);
    if (!isNaN(parsedAmount)) {
      amount = parsedAmount;
    }
  }

</script>

<main class="d-flex flex-column align-items-center justify-content-center">

  <div class="title setup text-center">
    <p>Send XLM</p>
  </div>
  
  <div class="balance-account">
    <div class="input-group mb-3">
      <input type="number" class="form-control" placeholder="Amount" step="0.01" bind:value={amount} on:input={handleAmountInput} />
      <span class="input-group-text">XLM</span>
    </div>
  </div>

  <div class="input-group mb-3">
    <input type="text" class="form-control" style="width: 100%" placeholder="Recipient" bind:value={destinationId}/>
  </div>

   
  {#if showErrorToast}
  <div class="error-toast">
    <Toast type="error" message="Error sending, please verify the entered data." show={showErrorToast} />
  </div>
   
  {/if}

 
 {#if showSuccessToast}
  <div class="success-toast">
    <Toast type="success" message={`You successfully sent ${amount} XLM to ${destinationId}`} show={showSuccessToast} />
  </div>
  {/if}
  
  <div class="success-toast" >
    <button class="btn btn-success mb-3" on:click={sendXLM}>Send</button>
  </div>
</main>