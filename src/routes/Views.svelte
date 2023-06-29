<script>
	import { keyPair, showAccount, signIn } from "../utils/store";
	import Main from "./Main.svelte";
	import Setup from "./Setup.svelte";
	import Warning from "./Warning.svelte";

</script>

<main> 
	
	{#if $keyPair.publicKey === '' && $keyPair.secretKey === ''}
    <Setup />
	{:else if $signIn}
    <Warning />
	{:else}
		<Main />
	{/if}
	
</main>

<style>

main {
  display: flex;
  padding: 20px;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 500px; 
  margin: 20px auto; 
}


</style>
