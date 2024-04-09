<script setup lang="ts">
const items = [
	{
		name: "switch",
		sub: ["default", "custom"],
	},
	{
		name: "progressbar",
		sub: ["default", "custom"],
	},
]
</script>

<template>
	<ul>
		<li v-for="(item, index) in items" :key="index">
			<span>{{ item.name }}</span>
			<ul v-if="item.sub">
				<li v-for="(subItem, subIndex) in item.sub" :key="`sub-${subIndex}`">
					<NuxtLink :to="'/' + item.name + '/' + subItem">
						{{ subItem }}
					</NuxtLink>
				</li>
			</ul>
		</li>
	</ul>
</template>
