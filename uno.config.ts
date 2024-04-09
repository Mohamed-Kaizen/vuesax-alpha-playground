// uno.config.ts
import {
	defineConfig,
	transformerCompileClass,
	presetIcons,
	presetUno,
	transformerVariantGroup,
} from "unocss"

export default defineConfig({
	// shortcuts: {
	// 	scalable:
	// 		"transition-all ease duration-200 active:scale-90 motion-reduce:(transition-none active:scale-100)",
	// },

	presets: [presetUno(), presetIcons()],
	transformers: [transformerVariantGroup(), transformerCompileClass()],
})
