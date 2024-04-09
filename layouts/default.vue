<script setup lang="ts">
// import "@unocss/reset/tailwind.css"

function toggle(theme: string) {
	if (document.documentElement.classList.contains(theme)) return

	document.documentElement.classList.remove("dark", "light")

	document.documentElement.classList.add(theme)
}
</script>

<template>
	<nav class="flex items-center justify-between bg-white dark:(bg-black text-white)">
		<ul>
			<li>
				<nuxt-link to="/">Home</nuxt-link>
			</li>
		</ul>
		<div class="flex items-center space-x-3">
			<button @click="toggle('dark')">Dark</button>

			<button @click="toggle('light')">Light</button>
		</div>
	</nav>

	<main class="w-full h-full bg-white dark:(bg-black text-white)">
		<slot />
	</main>
</template>

<style>
body {
	padding: 0;
	margin: 0;
}
html {
	padding: 0;
	margin: 0;
}
</style>
