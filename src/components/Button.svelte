<script>
	export let text;
</script>

<style>
	/* cssnano will pack the below three in one selector */

	/* autoprefix */
	button {
		display: flex;
	}

	/* color mod func */
	button {
		background: color-mod(yellow blend(red 50%));
	}

	/* overwrite theme */
	
	:root {
		--some-var: blue;
	}


	button {
		color: white;
		padding: 10px;
		border-radius: 10px;
		//background: var(--some-var);
		background: var(--other-var);
	}
</style>

<button>{text}</button>