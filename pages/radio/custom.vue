<script setup lang="ts">
const selected = ref("")
</script>

<template>
	<div class="p-4 h-screen">
		<h4>With Color</h4>
		<Radio
			v-model:group="selected"
			:style="{
				'--vs--radio-border-color': 'red',
				'--vs--radio-label-color': 'blue',
				'--vs--radio-color': 'green',
			}"
			value="cat"
			>Cat</Radio
		>
		<br />
		<Radio
			v-model:group="selected"
			:style="{
				'--vs--radio-border-color': 'red',
				'--vs--radio-label-color': 'blue',
				'--vs--radio-color': 'purple',
			}"
			value="dog"
			>Dog</Radio
		>
		<br />

		<Radio
			v-model:group="selected"
			:style="{
				'--vs--radio-border-color': 'red',
				'--vs--radio-label-color': 'blue',
				'--vs--radio-color': 'rgb(255, 91, 255)',
			}"
			value="bird"
			>Bird</Radio
		>
		<hr />

		<h4>Passthrough</h4>
		<Radio
			v-model:group="selected"
			:pt="{
				box: '!rounded-sm',
			}"
			value="cat"
			>Cat</Radio
		>
		<br />
		<Radio
			v-model:group="selected"
			:pt="{
				box: '!rounded-md',
				root: '!p-4',
			}"
			value="dog"
			>Dog</Radio
		>
		<br />

		<Radio
			v-model:group="selected"
			:pt="{
				box: '!rounded-lg',
				root: '!p-8',
			}"
			value="bird"
			>Bird</Radio
		>
	</div>
</template>
