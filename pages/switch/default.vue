<script setup lang="ts">
const checked = ref(false)
</script>

<template>
	<div class="p-4">
		<h4>Default</h4>
		<Switch v-model:checked="checked"></Switch>

		<hr />

		<!--  -->
		<h4>With on/off slot</h4>
		<Switch v-model:checked="checked">
			<template #on>
				<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24">
					<path
						fill="currentColor"
						d="M16 21c3.527-1.547 5.999-4.909 5.999-9S19.527 4.547 16 3v2c2.387 1.386 3.999 4.047 3.999 7S18.387 17.614 16 19v2z" />
					<path
						fill="currentColor"
						d="M16 7v10c1.225-1.1 2-3.229 2-5s-.775-3.9-2-5zM4 17h2.697L14 21.868V2.132L6.697 7H4c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2z" />
				</svg>
			</template>

			<template #off>
				<svg
					style="color: white"
					xmlns="http://www.w3.org/2000/svg"
					width="14"
					height="14"
					viewBox="0 0 24 24">
					<path
						fill="currentColor"
						d="m7.727 6.313l-4.02-4.02l-1.414 1.414l18 18l1.414-1.414l-2.02-2.02A9.578 9.578 0 0 0 21.999 12c0-4.091-2.472-7.453-5.999-9v2c2.387 1.386 3.999 4.047 3.999 7a8.13 8.13 0 0 1-1.671 4.914l-1.286-1.286C17.644 14.536 18 13.19 18 12c0-1.771-.775-3.9-2-5v7.586l-2-2V2.132L7.727 6.313zM4 17h2.697L14 21.868v-3.747L3.102 7.223A1.995 1.995 0 0 0 2 9v6c0 1.103.897 2 2 2z" />
				</svg>
			</template>
		</Switch>

		<hr />

		<!--  -->
		<h4>Square</h4>
		<Switch v-model:checked="checked" square>
			<template #on> تشغيل </template>
			<template #off> تعطيل </template>
		</Switch>

		<hr />

		<!--  -->
		<h4>Disabled</h4>
		<Switch v-model:checked="checked" disabled>
			<template #on> on </template>
			<template #off> off </template>
		</Switch>

		<hr />

		<!--  -->
		<h4>With icon slot</h4>
		<Switch v-model:checked="checked">
			<template #icon>
				<svg
					v-if="checked"
					xmlns="http://www.w3.org/2000/svg"
					width="14"
					height="14"
					viewBox="0 0 24 24">
					<path
						fill="currentColor"
						d="M16 21c3.527-1.547 5.999-4.909 5.999-9S19.527 4.547 16 3v2c2.387 1.386 3.999 4.047 3.999 7S18.387 17.614 16 19v2z" />
					<path
						fill="currentColor"
						d="M16 7v10c1.225-1.1 2-3.229 2-5s-.775-3.9-2-5zM4 17h2.697L14 21.868V2.132L6.697 7H4c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2z" />
				</svg>
				<svg
					v-else
					xmlns="http://www.w3.org/2000/svg"
					width="14"
					height="14"
					viewBox="0 0 24 24">
					<path
						fill="currentColor"
						d="m7.727 6.313l-4.02-4.02l-1.414 1.414l18 18l1.414-1.414l-2.02-2.02A9.578 9.578 0 0 0 21.999 12c0-4.091-2.472-7.453-5.999-9v2c2.387 1.386 3.999 4.047 3.999 7a8.13 8.13 0 0 1-1.671 4.914l-1.286-1.286C17.644 14.536 18 13.19 18 12c0-1.771-.775-3.9-2-5v7.586l-2-2V2.132L7.727 6.313zM4 17h2.697L14 21.868v-3.747L3.102 7.223A1.995 1.995 0 0 0 2 9v6c0 1.103.897 2 2 2z" />
				</svg>
			</template>
		</Switch>

		<hr />

		<h4>With icon and on/off slot</h4>
		<Switch v-model:checked="checked" square>
			<template #on> Turn on </template>
			<template #off> Turn off </template>

			<template #icon>
				<svg
					v-if="checked"
					xmlns="http://www.w3.org/2000/svg"
					width="14"
					height="14"
					viewBox="0 0 24 24">
					<path
						fill="currentColor"
						d="M16 21c3.527-1.547 5.999-4.909 5.999-9S19.527 4.547 16 3v2c2.387 1.386 3.999 4.047 3.999 7S18.387 17.614 16 19v2z" />
					<path
						fill="currentColor"
						d="M16 7v10c1.225-1.1 2-3.229 2-5s-.775-3.9-2-5zM4 17h2.697L14 21.868V2.132L6.697 7H4c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2z" />
				</svg>
				<svg
					v-else
					xmlns="http://www.w3.org/2000/svg"
					width="14"
					height="14"
					viewBox="0 0 24 24">
					<path
						fill="currentColor"
						d="m7.727 6.313l-4.02-4.02l-1.414 1.414l18 18l1.414-1.414l-2.02-2.02A9.578 9.578 0 0 0 21.999 12c0-4.091-2.472-7.453-5.999-9v2c2.387 1.386 3.999 4.047 3.999 7a8.13 8.13 0 0 1-1.671 4.914l-1.286-1.286C17.644 14.536 18 13.19 18 12c0-1.771-.775-3.9-2-5v7.586l-2-2V2.132L7.727 6.313zM4 17h2.697L14 21.868v-3.747L3.102 7.223A1.995 1.995 0 0 0 2 9v6c0 1.103.897 2 2 2z" />
				</svg>
			</template>
		</Switch>

		<hr />

		<div dir="rtl">
			<h4>Right to left</h4>
			<Switch v-model:checked="checked" square>
				<template #on> Turn on </template>
				<template #off> Turn off </template>
				<template #icon>
					<svg
						v-if="checked"
						xmlns="http://www.w3.org/2000/svg"
						width="14"
						height="14"
						viewBox="0 0 24 24">
						<path
							fill="currentColor"
							d="M16 21c3.527-1.547 5.999-4.909 5.999-9S19.527 4.547 16 3v2c2.387 1.386 3.999 4.047 3.999 7S18.387 17.614 16 19v2z" />
						<path
							fill="currentColor"
							d="M16 7v10c1.225-1.1 2-3.229 2-5s-.775-3.9-2-5zM4 17h2.697L14 21.868V2.132L6.697 7H4c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2z" />
					</svg>
					<svg
						v-else
						xmlns="http://www.w3.org/2000/svg"
						width="14"
						height="14"
						viewBox="0 0 24 24">
						<path
							fill="currentColor"
							d="m7.727 6.313l-4.02-4.02l-1.414 1.414l18 18l1.414-1.414l-2.02-2.02A9.578 9.578 0 0 0 21.999 12c0-4.091-2.472-7.453-5.999-9v2c2.387 1.386 3.999 4.047 3.999 7a8.13 8.13 0 0 1-1.671 4.914l-1.286-1.286C17.644 14.536 18 13.19 18 12c0-1.771-.775-3.9-2-5v7.586l-2-2V2.132L7.727 6.313zM4 17h2.697L14 21.868v-3.747L3.102 7.223A1.995 1.995 0 0 0 2 9v6c0 1.103.897 2 2 2z" />
					</svg>
				</template>
			</Switch>
			<br />

			<Switch v-model:checked="checked">
				<template #on> تشغيل </template>
				<template #off> تعطيل </template>
			</Switch>
		</div>

		<br />
	</div>
</template>
