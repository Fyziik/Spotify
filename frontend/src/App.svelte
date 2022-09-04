<script lang="ts">
	export let name: string;

	const fetchSongs = (async () => {
		const response = await fetch('http://localhost:3000/songs')
    return await response.json()
	})()

</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>

	{#await fetchSongs}
		<p>Waiting for data...</p>
	{:then data}
		<ul>
			{#each data as song}
				<li>{song.author} - {song.title}</li>
			{/each}
		</ul>
	{:catch error}
	<p>An error occured</p>
	{/await}

</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>