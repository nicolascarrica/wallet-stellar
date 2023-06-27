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
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	height: 500vh;
	margin-top: 40px; 
	}
</style>
