<script>
  import Transfer from '../components/Transfer.svelte';
  import AccountData from '../components/AccountData.svelte';
  import { signIn, keyPair} from '../utils/store';

  function handleLogout() {
    signIn.set(false);
    keyPair.set({ publicKey: '', secretKey: '' });
  }

</script>

<main class="justify-content-center align-items-center">
  <AccountData />
  <hr class="my-2">
  <Transfer />
  <hr class="my-2">

  <button type="button" class="btn btn-outline-danger mb-3" on:click={handleLogout}>Logout</button>

</main>

  