<script setup lang="ts">
const selected = ref("fish")
</script>

<template>
	<div class="p-4 h-full">
		<a
			href="https://lightningcss.dev/playground/index.html#%7B%22minify%22%3Afalse%2C%22customMedia%22%3Atrue%2C%22cssModules%22%3Afalse%2C%22analyzeDependencies%22%3Afalse%2C%22targets%22%3A%7B%22chrome%22%3A6225920%7D%2C%22include%22%3A0%2C%22exclude%22%3A0%2C%22source%22%3A%22.label%20%7B%5Cn%5Ctcursor%3A%20pointer%3B%5Cn%5Ctcolor%3A%20var(--vs--radio-label-color%2C%20black)%3B%5Cn%7D%5Cn%5Cn.disable%20%7B%5Cn%5Ctcursor%3A%20not-allowed%20!important%3B%5Cn%5Cn%5Ctopacity%3A%20var(--radio-disabled-opacity%2C%200.5)%3B%5Cn%5Cn%5Ct.label%20%7B%5Cn%5Ct%5Ctcursor%3A%20not-allowed%20!important%3B%5Cn%5Ct%7D%5Cn%5Cn%5Ctinput%20%7B%5Cn%5Ct%5Ctcursor%3A%20not-allowed%20!important%3B%5Cn%5Ct%7D%5Cn%7D%5Cn%5Cn.wrapper%20%7B%5Cn%5Ctbackground%3A%20transparent%3B%5Cn%5Cn%5Ctdisplay%3A%20flex%3B%5Cn%5Cn%5Ctalign-items%3A%20center%3B%5Cn%5Cn%5Ctposition%3A%20relative%3B%5Cn%5Cn%5Ctgap%3A%20var(--vs--radio-gap%2C%200.5rem)%3B%5Cn%5Cn%5Ctborder%3A%200%3B%5Cn%5Cn%5Ct%26%3Afocus-visible%20%7B%5Cn%5Ct%5Ctoutline%3A%20var(--vs--radio-outline-width%2C%204px)%20var(--vs--radio-outline-style%2C%20solid)%5Cn%5Ct%5Ct%5Ctvar(--vs--radio-outline-color%2C%20var(--vs--radio-color%2C%20rgba(25%2C%2091%2C%20255%2C%200.5)))%3B%5Cn%5Cn%5Ct%5Ctoutline-offset%3A%20var(--vs--radio-outline-offset%2C%202px)%3B%5Cn%5Cn%5Ct%5Ctborder-radius%3A%20var(--vs--radio-outline-radius%2C%200.5rem)%3B%5Cn%5Ct%7D%5Cn%5Cn%5Ct%26%3Anot(%5Bdisabled%5D).scalable%3Aactive%20.radio%20input%20~%20.box%3Aafter%20%7B%5Cn%5Ct%5Cttransform%3A%20scale(0.8)%3B%5Cn%5Ct%7D%5Cn%7D%5Cn%5Cn.radio%20%7B%5Cn%5Ctwidth%3A%20var(--vs--radio-width%2C%2020px)%3B%5Cn%5Cn%5Ctheight%3A%20var(--vs--radio-height%2C%2020px)%3B%5Cn%5Cn%5Ctborder-radius%3A%20var(--vs--radio-radius%2C%2050%25)%3B%5Cn%5Cn%5Ctposition%3A%20relative%3B%5Cn%5Cn%5Ctz-index%3A%2010%3B%5Cn%5Cn%5Ctinput%20%7B%5Cn%5Ct%5Ctmargin%3A%200%3B%5Cn%5Cn%5Ct%5Ctpadding%3A%200%3B%5Cn%5Cn%5Ct%5Ctwidth%3A%20100%25%3B%5Cn%5Cn%5Ct%5Ctheight%3A%20100%25%3B%5Cn%5Cn%5Ct%5Ctposition%3A%20relative%3B%5Cn%5Cn%5Ct%5Ctz-index%3A%20100%3B%5Cn%5Cn%5Ct%5Ctopacity%3A%200%3B%5Cn%5Cn%5Ct%5Ctcursor%3A%20pointer%3B%5Cn%5Cn%5Ct%5Ct%26%3Achecked%20~%20.box%3Aafter%20%7B%5Cn%5Ct%5Ct%5Ctborder%3A%20var(--vs--radio-border-width%2C%207px)%20solid%20var(--vs--radio-color%2C%20%23195bff)%3B%5Cn%5Cn%5Ct%5Ct%5Ctbox-shadow%3A%200%203px%2010px%200%20var(--vs--radio-show-shadow%2C%20var(--vs--radio-color%2C%20%23195bff))%3B%5Cn%5Ct%5Ct%7D%5Cn%5Ct%7D%5Cn%7D%5Cn%5Cn.box%20%7B%5Cn%5Ctposition%3A%20absolute%3B%5Cn%5Cn%5Ctwidth%3A%20100%25%3B%5Cn%5Cn%5Ctheight%3A%20100%25%3B%5Cn%5Cn%5Ctborder-radius%3A%20inherit%3B%5Cn%5Cn%5Ctleft%3A%200%3B%5Cn%5Cn%5Cttop%3A%200%3B%5Cn%5Cn%5Cttransition%3A%20all%200.15s%20ease%3B%5Cn%5Cn%5Ctz-index%3A%2010%3B%5Cn%5Cn%5Ct%26%3Aafter%20%7B%5Cn%5Ct%5Ctcontent%3A%20%5C%22%5C%22%3B%5Cn%5Cn%5Ct%5Ctheight%3A%20inherit%3B%5Cn%5Cn%5Ct%5Ctborder-radius%3A%20inherit%3B%5Cn%5Cn%5Ct%5Ctborder%3A%202px%20solid%20var(--vs--radio-border-color%2C%20rgba(44%2C%2062%2C%2080%2C%200.5))%3B%5Cn%5Cn%5Ct%5Ctbox-sizing%3A%20border-box%3B%5Cn%5Cn%5Ct%5Cttransition%3A%20all%200.15s%20ease%3B%5Cn%5Cn%5Ct%5Ctdisplay%3A%20block%3B%5Cn%5Ct%7D%5Cn%7D%22%2C%22visitorEnabled%22%3Afalse%2C%22visitor%22%3A%22%7B%5Cn%20%20Color(color)%20%7B%5Cn%20%20%20%20if%20(color.type%20%3D%3D%3D%20'rgb')%20%7B%5Cn%20%20%20%20%20%20color.g%20%3D%200%3B%5Cn%20%20%20%20%20%20return%20color%3B%5Cn%20%20%20%20%7D%5Cn%20%20%7D%5Cn%7D%22%2C%22unusedSymbols%22%3A%5B%5D%2C%22version%22%3A%22local%22%7D"
			target="_blank">
			Lightning CSS Playground
		</a>
		<br />

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
