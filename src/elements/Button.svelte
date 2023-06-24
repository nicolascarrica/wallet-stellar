<script>
	export let onclick = () => {};
	export let textButton;
    export let color = "#04aa6d"; // Color predeterminado


    const buttonStyle = `
        background-color: ${color};
        padding: 10px;
        color: bisque;
        border-radius: 8px;
        margin: 5px;
        cursor: pointer;
    `;
</script>

<button on:click={onclick} style={buttonStyle}>{textButton}</button>