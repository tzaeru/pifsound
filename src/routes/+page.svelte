<script lang="ts">
	import type { PageData, ActionData } from './$types';
	import Player from './Player.svelte';

	export let data: PageData;

	export let form: ActionData;

	let loggedIn = data.loggedIn;

	console.log(data);
	console.log(form);
</script>

<svelte:head>
	<title>Pifsound</title>
	<meta name="description" content="Pifsound PoC" />
</svelte:head>

{#if !loggedIn}
	<form method="POST" action="?/login">
		<input name="name" value="Sirpa" />
		<input name="password" value="pifsound" type="password" />

		<button>login</button>
	</form>
{:else}
	<form method="POST" action="?/logout">
		<button>logout</button>
	</form>
{/if}

<section>
	<h1>
		<span class="welcome"> PiFSound </span>
	</h1>

	<h2>
		artist: <b>{data.music[0].artists?.name}</b><br/>
		album: <b>{data.music[0].albums?.name}</b><br/>
		songs:
		<ul>
			{#each data.music as entry}
				<li>{entry.tracks.name}</li>
				<Player artist={data.music[0].artists?.name} album={data.music[0].albums?.name} songName  = {entry.tracks.name}/>
			{/each}
		</ul>
	</h2>
	
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 50px 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
