<script setup lang="ts">
const progress = ref(0)

useIntervalFn(() => {
	if (progress.value === 100) progress.value = 0
	else progress.value += 10
}, 1000)

const formatter = new Intl.NumberFormat("ar-eg", { style: "percent" })
</script>

<template>
	<div class="p-8 h-full">
		<h4>Default</h4>
		<Progressbar :progress />

		<br />
		<br />
		<hr />

		<h4>Infinite</h4>
		<Progressbar infinite />

		<br />
		<br />
		<hr />

		<h4>With color</h4>
		<Progressbar
			:progress
			:style="{
				'--vs--progress-bg': '#ece0ff',
				'--vs--progress-color': '#7d33ff',
			}" />
		<Progressbar
			:progress="progress"
			:style="{
				'--vs--progress-bg': '#e3f7e1',
				'--vs--progress-color': '#46c93a',
			}" />
		<Progressbar
			:progress="progress"
			:style="{
				'--vs--progress-bg': '#d9f3fd',
				'--vs--progress-color': '#00aff0',
			}" />
		<Progressbar
			:progress="progress"
			:style="{
				'--vs--progress-bg': '#fff5d9',
				'--vs--progress-color': '#ffba00',
			}" />
		<Progressbar
			:progress="progress"
			:style="{
				'--vs--progress-bg': '#ffe3e6',
				'--vs--progress-color': '#ff4757',
			}" />
		<Progressbar
			:progress="progress"
			:style="{
				'--vs--progress-bg': '#d9d9d9',
				'--vs--progress-color': 'black',
			}" />

		<br />
		<br />
		<hr />
		<h4>Pass Passthrough</h4>
		<Progressbar :progress="progress" :pt="{ root: '!bg-purple', bar: '!bg-blue-500' }" />
		<Progressbar
			:style="{ '--vs--progress-height': '1em' }"
			:progress="progress"
			text="Download"
			:pt="{ bar: 'text-white' }" />
		<br />
		<br />
		<hr />

		<h4>With Label and custom height</h4>
		<Progressbar
			:progress="progress"
			:text="progress + '%'"
			:style="{ '--vs--progress-height': '1em' }" />
		<Progressbar
			:progress="progress"
			text="Download"
			:style="{ '--vs--progress-height': '1.5em' }" />
		<br />
		<br />
		<hr />

		<div class="h-screen" dir="rtl">
			<h4>RTL</h4>
			<Progressbar :progress />
			<Progressbar infinite />
			<Progressbar
				:progress
				:style="{
					'--vs--progress-bg': '#ece0ff',
					'--vs--progress-color': '#7d33ff',
				}" />
			<Progressbar
				:progress="progress"
				:style="{
					'--vs--progress-bg': '#e3f7e1',
					'--vs--progress-color': '#46c93a',
				}" />
			<Progressbar
				:progress="progress"
				:style="{
					'--vs--progress-bg': '#d9f3fd',
					'--vs--progress-color': '#00aff0',
				}" />
			<Progressbar
				:progress="progress"
				:style="{
					'--vs--progress-bg': '#fff5d9',
					'--vs--progress-color': '#ffba00',
				}" />
			<Progressbar
				:progress="progress"
				:style="{
					'--vs--progress-bg': '#ffe3e6',
					'--vs--progress-color': '#ff4757',
				}" />
			<Progressbar
				:progress="progress"
				:style="{
					'--vs--progress-bg': '#d9d9d9',
					'--vs--progress-color': 'black',
				}" />

			<Progressbar
				:style="{ '--vs--progress-height': '1em' }"
				:progress="progress"
				:pt="{ bar: 'text-white' }"
				:text="formatter.format(progress / 100)" />
			<Progressbar
				:style="{ '--vs--progress-height': '1.5em' }"
				:progress="progress"
				:pt="{ bar: 'text-white' }"
				text="تحميل" />
		</div>
	</div>
</template>
