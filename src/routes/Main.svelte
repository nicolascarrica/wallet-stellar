<script>
  import AccountData from '../components/AccountData.svelte';

  function handleLogout() {
    signIn.set(false);
    keyPair.set({ publicKey: '', secretKey: '' });
  }

</script>
  <AccountData />


  <button type="button" class="btn btn-outline-danger" on:click={handleLogout}>Logout</button>
