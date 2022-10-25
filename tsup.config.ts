import {defineConfig} from 'tsup'


export default defineConfig({
    target: "node8",
    entry: ['src/index.ts'],
    splitting: true,
    sourcemap: true,
    clean: true,
    dts: true
})
