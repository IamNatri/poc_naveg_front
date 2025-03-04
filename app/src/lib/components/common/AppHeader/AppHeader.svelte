<script lang="ts">
	import Logo from '$lib/components/common/Logo/Logo.svelte';
	// Components (common)
	import Lightswitch from '$lib/components/common/Lightswitch/Lightswitch.svelte';
	
	//icons	
	import { CircleHelp } from 'lucide-svelte';
	
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	function circleUserClick() {
		if($page.data.user){
			// redirect to user profile
			goto('/profile');
		} else {
			// redirect to login
			goto('/login');
		}
	}
</script>

<header class="sticky top-0 z-10 border-b-[1px] border-surface-500/20 bg-surface-50-950 w-full p-4 py-3 xl:px-10">
	<div class="flex justify-between gap-4">
		<div class="flex items-center justify-start gap-6">
			<!-- //TODO REPLACE WITH OUR URL -->
			<a href="https://next.skeleton.dev/docs/design/themes" title="Skeleton" class="flex items-center gap-4">
				<Logo />
			</a>
			<nav class="flex gap-6 opacity-60">
				<!-- <a href="/" class="hover:underline">Browse</a> -->
				
				<a href="/themes/create" class="hover:underline">Viagens</a>
				
				<a href="/themes/import" class="hover:underline"> <CircleHelp size={5} /> Ajuda</a>
				<a href="/themes/import" class="hover:underline">Explorar</a>
			</nav>
		</div>
		<nav class="flex items-center gap-4">
			<Lightswitch />
			<button class="btn preset-filled">Login</button>
		</nav>
	</div>
</header>