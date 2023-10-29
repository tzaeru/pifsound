<script lang="ts">
	import type { PageData, ActionData } from './$types';
	import Player from './Player.svelte';

	export let data: PageData;

	export let form: ActionData;

	console.log(data);
	console.log(form);
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			PiFSound
		</span>
	</h1>

	<h2>
		try editing <strong>src/routes/+page.svelte</strong>
	</h2>

	{data.music[0].artists?.name}<br/>
	{data.music[0].albums?.name}<br/>
	{data.music[0].tracks?.name}
</section>

<form
	method="POST"
	action="?/login"
>

<input name="name" value="Sirpa"/>
<input name="password" value="pifsound" type="password"/>

<button>login</button>
</form>

<Player/>

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
