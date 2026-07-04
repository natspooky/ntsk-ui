import { defineConfig } from 'rollup';
import terser from '@rollup/plugin-terser';

export default defineConfig({
	input: 'src/core/ntsk-ui.js',
	output: [
		{
			file: 'dist/ntsk-ui.esm.js',
			format: 'esm',
		},
		{
			file: 'dist/ntsk-ui.cjs.js',
			format: 'cjs',
		},
		{
			file: 'dist/ntsk-ui.js',
			format: 'umd',
			name: 'ntsk-ui',
		},
		{
			file: 'dist/ntsk-ui.min.js',
			format: 'umd',
			name: 'ntsk-ui',
			plugins: [terser()],
		},
	],
});
