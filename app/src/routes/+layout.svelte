<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton-svelte';
	import ArrowLeft from 'lucide-svelte/icons/arrow-left';
	import Paperclip from 'lucide-svelte/icons/paperclip';
	import Calendar from 'lucide-svelte/icons/calendar';
	import CircleUser from 'lucide-svelte/icons/circle-user';
	import Menu from 'lucide-svelte/icons/menu';

	import '../app.css';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import Header from '$lib/components/common/AppHeader/AppHeader.svelte';
	import Footer from '$lib/components/common/AppFooter/AppFooter.svelte';

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

<!-- Layout structure -->
<div class="grid h-screen grid-rows-[auto_1fr_auto]">
	<!-- Header -->
	<header class="">
		<Header/>
	</header>
	  <!-- Main -->
	  <main class="">
		<slot/>
	  </main>
	  <!-- Footer -->
	  <footer class="">
		<Footer/>
	  </footer>
  </div>
  