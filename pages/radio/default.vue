<script setup lang="ts">
const selected = ref("fish")
</script>

<template>
	<div class="p-4 h-full">
		<h4>Default</h4>
		<Radio></Radio>

		<hr />

		<h4>With Label</h4>
		<Radio>Label</Radio>

		<hr />

		<h4>Without scale</h4>
		<Radio :scale="false">No Scale here</Radio>

		<hr />

		<h4>Disabled</h4>
		<Radio disabled>Disabled</Radio>

		<br />

		<Radio checked disabled>Active Disabled</Radio>

		<hr />

		<h4>With Group</h4>
		<Radio v-model:group="selected" value="cat">Cat</Radio>
		<br />
		<Radio v-model:group="selected" value="dog">Dog</Radio>
		<br />

		<Radio v-model:group="selected" value="bird">Bird</Radio>
		<br />

		<div dir="rtl">
			<h4>RTL</h4>
			<Radio>RTL</Radio>
			<Radio>عربي</Radio>
		</div>
	</div>
</template>

<style>
:root.dark {
	--vs--radio-border-color: rgb(255, 255, 255);
	--vs--radio-label-color: white;
}
</style>
