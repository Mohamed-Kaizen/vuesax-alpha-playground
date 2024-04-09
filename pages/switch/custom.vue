<script lang="ts" setup>
const checked = ref(false)
</script>

<template>
	<div class="p-4">
		<h4>Default</h4>
		<Switch></Switch>

		<hr />

		<h4>Without scale</h4>
		<Switch :scale="false"></Switch>

		<hr />

		<h4>With on/off slot</h4>
		<Switch>
			<template #on>
				<div class="h-3.5 text-white w-3.5 i-mingcute:volume-fill"></div>
			</template>

			<template #off>
				<div class="h-3.5 text-white w-3.5 i-icon-park-solid:volume-up"></div>
			</template>
		</Switch>

		<hr />

		<h4>Square</h4>
		<Switch square>
			<template #on> تشغيل </template>
			<template #off> تعطيل </template>
		</Switch>

		<hr />

		<h4>Disabled</h4>

		<Switch disabled>
			<template #on> on </template>
			<template #off> off </template>
		</Switch>

		<br />

		<Switch disabled checked>
			<template #on> on </template>
			<template #off> off </template>
		</Switch>

		<hr />

		<h4>With icon slot</h4>
		<Switch v-model:checked="checked">
			<template #icon>
				<div v-if="checked" class="h-4 pb-50 w-4 i-mingcute:volume-fill"></div>

				<div v-else class="h-4 pb-50 w-4 i-icon-park-solid:volume-up"></div>
			</template>
		</Switch>

		<hr />

		<h4>With icon and on/off slot and custom color</h4>
		<Switch
			v-model:checked="checked"
			:style="{
				'--vs--switch-bg-on': '#000000',
			}"
			square>
			<template #on>
				<span class="text-white">Turn on</span>
			</template>

			<template #off> Turn off </template>

			<template #icon>
				<div v-if="checked" class="h-4 pb-50 w-4 i-iconamoon:mode-dark-bold"></div>
				<div v-else class="h-4 pb-50 w-4 i-tabler:sun"></div>
			</template>
		</Switch>

		<hr />

		<div dir="rtl">
			<h4>Right to left</h4>
			<Switch
				v-model:checked="checked"
				:style="{
					'--vs--switch-bg-on': '#a64ef2',
				}"
				square>
				<template #on> Turn on </template>
				<template #off> Turn off </template>
				<template #icon>
					<svg
						v-if="checked"
						xmlns="http://www.w3.org/2000/svg"
						width="16px"
						height="16px"
						viewBox="0 0 24 24">
						<g transform="rotate(180 12 12)">
							<g fill="none">
								<path
									d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"></path>
								<path
									fill="currentColor"
									d="M13.26 3.3a1.1 1.1 0 0 1 1.734.78l.006.114v15.612a1.1 1.1 0 0 1-1.643.957l-.096-.062L6.68 16H4a2 2 0 0 1-1.995-1.85L2 14v-4a2 2 0 0 1 1.85-1.995L4 8h2.68l6.58-4.7Zm6.407 3.483A6.985 6.985 0 0 1 22 12a6.985 6.985 0 0 1-2.333 5.217a1 1 0 1 1-1.334-1.49A4.985 4.985 0 0 0 20 12c0-1.48-.642-2.81-1.667-3.727a1 1 0 1 1 1.334-1.49Zm-2 2.236A3.992 3.992 0 0 1 19 11.999a3.991 3.991 0 0 1-1.333 2.982a1 1 0 0 1-1.422-1.4l.088-.09c.41-.368.667-.899.667-1.491a1.99 1.99 0 0 0-.548-1.376l-.119-.115a1 1 0 1 1 1.334-1.49Z"></path>
							</g>
						</g>
					</svg>
					<svg
						v-else
						xmlns="http://www.w3.org/2000/svg"
						width="16px"
						height="16px"
						viewBox="0 0 48 48">
						<g transform="rotate(180 24 24)">
							<mask id="ipSVolumeUp0">
								<g
									fill="none"
									stroke="#fff"
									stroke-linejoin="round"
									stroke-width="4">
									<path
										fill="#fff"
										d="M24 6v36c-7 0-12.201-9.16-12.201-9.16H6a2 2 0 0 1-2-2V17.01a2 2 0 0 1 2-2h5.799S17 6 24 6Z"></path>
									<path stroke-linecap="round" d="M32 24h12m-6-6v12"></path>
								</g>
							</mask>
							<path
								fill="currentColor"
								d="M0 0h48v48H0z"
								mask="url(#ipSVolumeUp0)"></path>
						</g>
					</svg>
				</template>
			</Switch>
			<br />

			<Switch
				v-model:checked="checked"
				:style="{
					'--vs--switch-bg-on': '#64c832',
					'--vs--switch-bg-off': '#c80000',
				}">
				<template #on>
					<span class="text-white"> تشغيل </span>
				</template>
				<template #off>
					<span class="text-white"> تعطيل </span>
				</template>
			</Switch>
		</div>
		<hr />

		<h4>Pass Passthrough</h4>
		<Switch
			:pt="{
				background: 'dark:!bg-white !bg-green',
				circle: 'dark:!bg-black',
			}"></Switch>
		<br />
		<Switch
			square
			:pt="{
				background: 'dark:!bg-white !bg-purple',
				circle: 'dark:!bg-black',
			}"></Switch>
	</div>
</template>

<style>
:root {
	--vs--switch-bg-on: rgb(255, 91, 255);
}
:root.dark {
	--vs--switch-bg-off: #1f2937;
}
</style>
