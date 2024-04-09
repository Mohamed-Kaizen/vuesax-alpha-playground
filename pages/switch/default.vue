<script setup lang="ts">
const checked = ref(false)
</script>

<template>
	<div class="p-4">
		<a
			href="https://lightningcss.dev/playground/index.html#%7B%22minify%22%3Afalse%2C%22customMedia%22%3Atrue%2C%22cssModules%22%3Afalse%2C%22analyzeDependencies%22%3Afalse%2C%22targets%22%3A%7B%22chrome%22%3A6225920%7D%2C%22include%22%3A0%2C%22exclude%22%3A0%2C%22source%22%3A%22.disable%20%7B%5Cn%5Ctcursor%3A%20not-allowed%20!important%3B%5Cn%5Cn%5Ctopacity%3A%20var(--switch-disabled-opacity%2C%200.5)%3B%5Cn%7D%5Cn%5Cn.scalable%20%7B%5Cn%5Ct%26%3Aactive%20%7B%5Cn%5Ct%5Ctscale%3A%200.9%3B%5Cn%5Ct%7D%5Cn%5Cn%5Ct%26%3Afocus-visible%20%7B%5Cn%5Ct%5Ctscale%3A%200.9%3B%5Cn%5Ct%7D%5Cn%7D%5Cn%5Cn.switch%20%7B%5Cn%5Ctbackground%3A%20var(--vs--switch-bg-off%2C%20%236b7280)%3B%5Cn%5Cn%5Ctdisplay%3A%20flex%3B%5Cn%5Cn%5Ctuser-select%3A%20none%3B%5Cn%5Cn%5Ctoverflow%3A%20hidden%3B%5Cn%5Cn%5Ctposition%3A%20relative%3B%5Cn%5Cn%5Ctalign-items%3A%20center%3B%5Cn%5Cn%5Ctpadding%3A%200.3125rem%3B%5Cn%5Cn%5Ctborder-radius%3A%201.5rem%3B%5Cn%5Cn%5Ctcursor%3A%20pointer%3B%5Cn%5Cn%5Ctheight%3A%201.75rem%3B%5Cn%5Cn%5Ctmin-width%3A%20var(--vs--switch-min-width%2C%203rem)%3B%5Cn%5Cn%5Ctborder%3A%200%3B%5Cn%5Cn%5Cttransition%3A%20all%200.25s%20ease%3B%5Cn%5Cn%5Ct%26%3Afocus-visible%20%7B%5Cn%5Ct%5Ctoutline%3A%20var(--vs--switch-outline-width%2C%204px)%20var(--vs--switch-outline-style%2C%20solid)%5Cn%5Ct%5Ct%5Ctvar(--vs--switch-outline-color%2C%20var(--vs--switch-bg-on%2C%20rgba(25%2C%2091%2C%20255%2C%200.5)))%3B%5Cn%5Cn%5Ct%5Ctoutline-offset%3A%20var(--vs--switch-outline-offset%2C%202px)%3B%5Cn%5Cn%5Ct%5Ctborder-radius%3A%20var(--vs--switch-outline-radius%2C%200.5rem)%3B%5Cn%5Ct%7D%5Cn%5Cn%5Ct%26.square%20%7B%5Cn%5Ct%5Ctborder-radius%3A%200.375rem%3B%5Cn%5Ct%7D%5Cn%5Cn%5Ct%26.square%20.background%20%7B%5Cn%5Ct%5Ctborder-radius%3A%200.375rem%20!important%3B%5Cn%5Ct%7D%5Cn%5Cn%5Ct%26.square%20.circle%20%7B%5Cn%5Ct%5Ctborder-radius%3A%200.375rem%20!important%3B%5Cn%5Ct%7D%5Cn%7D%5Cn%5Cn.background%20%7B%5Cn%5Ctbackground-color%3A%20var(--vs--switch-bg-on%2C%20%23195bff)%3B%5Cn%5Cn%5Ctheight%3A%20auto%3B%5Cn%5Cn%5Ctposition%3A%20absolute%3B%5Cn%5Cn%5Ctwidth%3A%20100%25%3B%5Cn%5Cn%5Ctpadding-bottom%3A%20100%25%3B%5Cn%5Cn%5Cttransition%3A%20all%200.85s%20ease-out%3B%5Cn%5Cn%5Ctleft%3A%20-100%25%3B%5Cn%7D%5Cn%5Cn.text_area%20%7B%5Cn%5Ctpadding-top%3A%200.3125rem%3B%5Cn%5Cn%5Ctpadding-bottom%3A%200.3125rem%3B%5Cn%5Cn%5Ctpadding-right%3A%200.3125rem%3B%5Cn%5Cn%5Ctpadding-left%3A%201.5625rem%3B%5Cn%5Cn%5Cttransition%3A%20all%200.65s%20ease%2050ms%3B%5Cn%5Cn%5Ctfont-size%3A%200.7rem%3B%5Cn%5Cn%5Ctz-index%3A%209%3B%5Cn%5Cn%5Ctwhite-space%3A%20nowrap%3B%5Cn%5Cn%5Ct%26.on%20%7B%5Cn%5Ct%5Cttransform%3A%20translate(-100%25)%3B%5Cn%5Cn%5Ct%5Ctposition%3A%20absolute%20!important%3B%5Cn%5Ct%7D%5Cn%7D%5Cn%5Cn.circle%20%7B%5Cn%5Ctbackground%3A%20var(--vs-switch-circle-bg%2C%20white)%3B%5Cn%5Cn%5Ctborder-radius%3A%200.75rem%3B%5Cn%5Cn%5Ctposition%3A%20absolute%3B%5Cn%5Cn%5Ctdisplay%3A%20flex%3B%5Cn%5Cn%5Ctheight%3A%201.25rem%3B%5Cn%5Cn%5Ctleft%3A%200.25rem%3B%5Cn%5Cn%5Ctwidth%3A%201.25rem%3B%5Cn%5Cn%5Ctz-index%3A%2010%3B%5Cn%5Cn%5Ctalign-items%3A%20center%3B%5Cn%5Cn%5Ctjustify-content%3A%20center%3B%5Cn%5Cn%5Cttransition%3A%20all%200.85s%20ease%3B%5Cn%7D%5Cn%5Cninput%20%7B%5Cn%5Ct%26%3Achecked%20~%20.background%20%7B%5Cn%5Ct%5Cttransform%3A%20scale(1)%3B%5Cn%5Cn%5Ct%5Ctscale%3A%201%3B%5Cn%5Cn%5Ct%5Ctleft%3A%200%3B%5Cn%5Ct%7D%5Cn%5Cn%5Ct%26%3Achecked%20~%20.circle%20%7B%5Cn%5Ct%5Ctleft%3A%20calc(100%25%20-%2024px)%3B%5Cn%5Cn%5Ct%5Ctbox-shadow%3A%20-5px%200%2025px%200%20var(--vs-switch-circle-shadow-bg%2C%20rgba(255%2C%20255%2C%20255%2C%200.6))%3B%5Cn%5Ct%7D%5Cn%5Cn%5Ct%26%3Achecked%20~%20.text_area%20%7B%5Cn%5Ct%5Ctpadding-left%3A%200.3125rem%20!important%3B%5Cn%5Cn%5Ct%5Ctpadding-right%3A%201.5625rem%20!important%3B%5Cn%5Cn%5Ct%5Ct%26.on%20%7B%5Cn%5Ct%5Ct%5Ctposition%3A%20relative%20!important%3B%5Cn%5Cn%5Ct%5Ct%5Cttransform%3A%20translate(0)%20!important%3B%5Cn%5Ct%5Ct%7D%5Cn%5Cn%5Ct%5Ct%26.off%20%7B%5Cn%5Ct%5Ct%5Ctposition%3A%20absolute%20!important%3B%5Cn%5Cn%5Ct%5Ct%5Cttransform%3A%20translate(100%25)%3B%5Cn%5Ct%5Ct%7D%5Cn%5Ct%7D%5Cn%7D%5Cn%5Cn%2F*%20RTL%20*%2F%5Cn%3Adir(rtl)%20%7B%5Cn%5Ctinput%20%7B%5Cn%5Ct%5Ct%26%3Achecked%20~%20.text_area%20%7B%5Cn%5Ct%5Ct%5Ct%26.on%20%7B%5Cn%5Ct%5Ct%5Ct%5Cttransform%3A%20translate(32%25)%20!important%3B%5Cn%5Ct%5Ct%5Ct%7D%5Cn%5Cn%5Ct%5Ct%5Ct%26.off%20%7B%5Cn%5Ct%5Ct%5Ct%5Cttransform%3A%20translate(-100%25)%20!important%3B%5Cn%5Ct%5Ct%5Ct%7D%5Cn%5Ct%5Ct%7D%5Cn%5Cn%5Ct%5Ct%26%3Achecked%20~%20.circle%20%7B%5Cn%5Ct%5Ct%5Ctright%3A%20calc(100%25%20-%2024px)%3B%5Cn%5Ct%5Ct%7D%5Cn%5Cn%5Ct%5Ct%26%3Achecked%20~%20.background%20%7B%5Cn%5Ct%5Ct%5Ctright%3A%200%3B%5Cn%5Ct%5Ct%7D%5Cn%5Ct%7D%5Cn%5Cn%5Ct.text_area%20%7B%5Cn%5Ct%5Ct%26.on%20%7B%5Cn%5Ct%5Ct%5Cttransform%3A%20translate(100%25)%3B%5Cn%5Ct%5Ct%7D%5Cn%5Cn%5Ct%5Ct%26.off%20%7B%5Cn%5Ct%5Ct%5Cttransform%3A%20translate(-32%25)%3B%5Cn%5Ct%5Ct%7D%5Cn%5Ct%7D%5Cn%5Cn%5Ct.background%20%7B%5Cn%5Ct%5Ctright%3A%20-100%25%3B%5Cn%5Ct%7D%5Cn%5Cn%5Ct.circle%20%7B%5Cn%5Ct%5Ctright%3A%204px%3B%5Cn%5Ct%7D%5Cn%7D%22%2C%22visitorEnabled%22%3Afalse%2C%22visitor%22%3A%22%7B%5Cn%20%20Color(color)%20%7B%5Cn%20%20%20%20if%20(color.type%20%3D%3D%3D%20'rgb')%20%7B%5Cn%20%20%20%20%20%20color.g%20%3D%200%3B%5Cn%20%20%20%20%20%20return%20color%3B%5Cn%20%20%20%20%7D%5Cn%20%20%7D%5Cn%7D%22%2C%22unusedSymbols%22%3A%5B%5D%2C%22version%22%3A%22local%22%7D"
			target="_blank">
			Lightning CSS Playground
		</a>
		<br />
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
