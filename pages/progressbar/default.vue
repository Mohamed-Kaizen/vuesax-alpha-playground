<script setup lang="ts">
const progress = ref(0)

useIntervalFn(() => {
	if (progress.value === 100) progress.value = 0
	else progress.value += 10
}, 1000)

const formatter = new Intl.NumberFormat("ar-eg", { style: "percent" })
</script>

<template>
	<div class="p-8 h-screen">
		<a
			href="https://lightningcss.dev/playground/index.html#%7B%22minify%22%3Afalse%2C%22customMedia%22%3Atrue%2C%22cssModules%22%3Afalse%2C%22analyzeDependencies%22%3Afalse%2C%22targets%22%3A%7B%22chrome%22%3A6225920%7D%2C%22include%22%3A0%2C%22exclude%22%3A0%2C%22source%22%3A%22.progress%20%7B%5Cn%5Ctwidth%3A%20100%25%3B%5Cn%5Cn%5Ctheight%3A%20var(--vs--progress-height%2C%200.5em)%3B%5Cn%5Cn%5Ctborder-radius%3A%20var(--vs--progress-radius%2C%200.25em)%3B%5Cn%5Cn%5Ctposition%3A%20relative%3B%5Cn%5Cn%5Ctdisplay%3A%20inline-block%3B%5Cn%5Cn%5Ctoverflow%3A%20hidden%3B%5Cn%5Cn%5Ctbackground-color%3A%20var(--vs--progress-bg%2C%20%23dde7ff)%3B%5Cn%5Cn%5Ct.bar%20%7B%5Cn%5Ct%5Ctheight%3A%20100%25%3B%5Cn%5Cn%5Ct%5Ctbackground-color%3A%20var(--vs--progress-color%2C%20%23195bff)%3B%5Cn%5Cn%5Ct%5Cttext-align%3A%20center%3B%5Cn%5Cn%5Ct%5Ctdisplay%3A%20flex%3B%5Cn%5Cn%5Ct%5Ctalign-items%3A%20center%3B%5Cn%5Cn%5Ct%5Ctjustify-content%3A%20center%3B%5Cn%5Cn%5Ct%5Cttransition%3A%20all%200.5s%3B%5Cn%5Ct%7D%5Cn%5Cn%5Ct%26.infinite%20.bar%20%7B%5Cn%5Ct%5Ctposition%3A%20absolute%3B%5Cn%5Ct%5Cttop%3A%200%3B%5Cn%5Ct%5Ctleft%3A%200%3B%5Cn%5Ct%5Ctright%3A%200%3B%5Cn%5Ct%5Ctbottom%3A%200%3B%5Cn%5Ct%5Ctanimation%3A%20infinite-progress%20var(--vs--progress-duration%2C%201.5s)%5Cn%5Ct%5Ct%5Ctvar(--vs--progress-animation%2C%20linear%20infinite)%3B%5Cn%5Cn%5Ct%5Ct%26%3Adir(rtl)%20%7B%5Cn%5Ct%5Ct%5Ctanimation%3A%20rtl-infinite-progress%20var(--vs--progress-duration%2C%201.5s)%5Cn%5Ct%5Ct%5Ct%5Ctvar(--vs--progress-animation%2C%20linear%20infinite)%3B%5Cn%5Ct%5Ct%7D%5Cn%5Ct%7D%5Cn%7D%5Cn%5Cn%40keyframes%20infinite-progress%20%7B%5Cn%5Ct0%25%20%7B%5Cn%5Ct%5Ctleft%3A%200%25%3B%5Cn%5Ct%5Ctright%3A%20100%25%3B%5Cn%5Ct%5Ctwidth%3A%200%25%3B%5Cn%5Ct%7D%5Cn%5Ct10%25%20%7B%5Cn%5Ct%5Ctleft%3A%200%25%3B%5Cn%5Ct%5Ctright%3A%2075%25%3B%5Cn%5Ct%5Ctwidth%3A%2035%25%3B%5Cn%5Ct%7D%5Cn%5Ct90%25%20%7B%5Cn%5Ct%5Ctleft%3A%2075%25%3B%5Cn%5Ct%5Ctright%3A%200%25%3B%5Cn%5Ct%5Ctwidth%3A%2035%25%3B%5Cn%5Ct%7D%5Cn%5Ct100%25%20%7B%5Cn%5Ct%5Ctleft%3A%20100%25%3B%5Cn%5Ct%5Ctright%3A%200%25%3B%5Cn%5Ct%5Ctwidth%3A%200%25%3B%5Cn%5Ct%7D%5Cn%7D%5Cn%5Cn%40keyframes%20rtl-infinite-progress%20%7B%5Cn%5Ct0%25%20%7B%5Cn%5Ct%5Ctleft%3A%20100%25%3B%5Cn%5Ct%5Ctright%3A%200%25%3B%5Cn%5Ct%5Ctwidth%3A%200%25%3B%5Cn%5Ct%7D%5Cn%5Ct10%25%20%7B%5Cn%5Ct%5Ctleft%3A%2075%25%3B%5Cn%5Ct%5Ctright%3A%200%25%3B%5Cn%5Ct%5Ctwidth%3A%2035%25%3B%5Cn%5Ct%7D%5Cn%5Ct90%25%20%7B%5Cn%5Ct%5Ctleft%3A%200%25%3B%5Cn%5Ct%5Ctright%3A%2075%25%3B%5Cn%5Ct%5Ctwidth%3A%2035%25%3B%5Cn%5Ct%7D%5Cn%5Ct100%25%20%7B%5Cn%5Ct%5Ctleft%3A%200%25%3B%5Cn%5Ct%5Ctright%3A%20100%25%3B%5Cn%5Ct%5Ctwidth%3A%200%25%3B%5Cn%5Ct%7D%5Cn%7D%22%2C%22visitorEnabled%22%3Afalse%2C%22visitor%22%3A%22%7B%5Cn%20%20Color(color)%20%7B%5Cn%20%20%20%20if%20(color.type%20%3D%3D%3D%20'rgb')%20%7B%5Cn%20%20%20%20%20%20color.g%20%3D%200%3B%5Cn%20%20%20%20%20%20return%20color%3B%5Cn%20%20%20%20%7D%5Cn%20%20%7D%5Cn%7D%22%2C%22unusedSymbols%22%3A%5B%5D%2C%22version%22%3A%22local%22%7D"
			target="_blank">
			Lightning CSS Playground
		</a>

		<br />

		<h4>Default</h4>
		<Progressbar :progress />

		<h4>Infinite</h4>
		<Progressbar infinite />

		<h4>With Label</h4>
		<Progressbar :progress="progress" :text="progress + '%'" />
		<Progressbar :progress="progress" text="Download" />

		<div dir="rtl">
			<h4>RTL</h4>
			<Progressbar :progress />
			<Progressbar infinite />
			<Progressbar :progress="progress" :text="formatter.format(progress / 100)" />
			<Progressbar :progress="progress" text="تحميل" />
		</div>
	</div>
</template>
