import * as pack from "./package.json"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { nodePolyfills } from "vite-plugin-node-polyfills"
import tsconfigPaths from "vite-tsconfig-paths"

const renderChunks = (deps: object) => {
	const chunks = {}
	for (const key of Object.keys(deps)) {
		if (["react", "react-router-dom", "react-dom"].includes(key)) {
			continue
		}

		// @ts-expect-error typescript >:(
		chunks[key] = [key]
	}

	return chunks
}

export default defineConfig(() => {
	return {
		build: {
			commonjsOptions: {
				transformMixedEsModules: true
			},
			rollupOptions: {
				output: {
					manualChunks: {
						vendor: ["react", "react-router-dom", "react-dom"],
						...renderChunks(pack.dependencies)
					}
				}
			},
			sourcemap: true
		},
		optimizeDeps: {
			esbuildOptions: {
				define: {
					global: "globalThis"
				},
				minifyIdentifiers: true,
				target: "esnext"
			}
		},
		plugins: [
			react({
				include: ["**/*.tsx", "**/*.ts"]
			}),
			tsconfigPaths(),
			nodePolyfills({
				globals: {
					Buffer: true,
					global: true,
					process: true
				},
				// include: [
				// 	"crypto",
				// 	"stream",
				// 	"util",
				// ],
				protocolImports: true
			})
		],
		server: {
			hmr: true
		}
	}
})
