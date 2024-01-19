<script lang="ts">
	import { onMount } from 'svelte';

	export let artist: string;
	export let album: string;
	export let songName: string;

	onMount(async () => {
		const css = await import('aplayer/dist/APlayer.min.css');
		const Aplayer = (await import('aplayer')).default;

		const ap = new Aplayer({
			container: document.getElementById('player'),
			audio: [
				{
					name: songName,
					artist: artist,
					url: 'http://localhost:3000/tracks/5612ae46-ac16-4c7a-a38e-762b62fa66d8.mp3',
					cover: 'http://localhost:3000/covers/default.jpg'
				}
			]
		});
	});
</script>

<div id="player" />
