<script>
  import { signIn, keyPair } from "../utils/store";
  import { handleCopyKey, showCopiedMessage } from '../utils/copy';
  import { getAccountBalances } from "../stellar-fuctions/getAccountBalances";
  import { onMount } from 'svelte';

  let publicKey = '';
  let balances = [];

  keyPair.subscribe(value => {
    publicKey = value.publicKey;
  });

  let showCopied = false;

  function handleCopyPublicKey() {
    handleCopyKey(publicKey, { set: setShowCopied });
  }

  function setShowCopied(value) {
    showCopied = value;
  }

  async function getBalances() {
    balances = await getAccountBalances(publicKey);
  }

  onMount(() => {
    getBalances();
  });

</script>

<main class="d-flex flex-column align-items-center justify-content-center">
  <div class="title setup text-center">
    <h1 class="mb-2">Welcome to your Stellar Wallet</h1>
    <p>Public Key</p>
  </div>
  <div class="public-key">
    <div class="input-group mb-3">
      <input class="form-control" value={publicKey} />
      <button class="btn btn-secondary" on:click={handleCopyPublicKey}>
        {#if showCopied}
          Copied
        {:else}
          Copy
        {/if}
      </button>
    </div>
  </div>

  {#if balances.length > 0}
    <div class="balance-account">
      {#each balances as balance, index}
        <div class="input-group mb-3">
          <span class="input-group-text">Numero: {index + 1}</span>
          <input type="text" class="form-control" value={balance.balance} />
          <span class="input-group-text">$ {balance.asset_type}</span>
        </div>
      {/each}
    </div>
  {:else}
    <p>No balances found</p>
  {/if}
</main>