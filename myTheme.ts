
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const doobleTheme: CustomThemeConfig = {
    name: 'dooble-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "0 0 0",
		// =~= Theme Colors  =~=
		// primary | #99c1f1 
		"--color-primary-50": "240 246 253", // #f0f6fd
		"--color-primary-100": "235 243 252", // #ebf3fc
		"--color-primary-200": "230 240 252", // #e6f0fc
		"--color-primary-300": "214 230 249", // #d6e6f9
		"--color-primary-400": "184 212 245", // #b8d4f5
		"--color-primary-500": "153 193 241", // #99c1f1
		"--color-primary-600": "138 174 217", // #8aaed9
		"--color-primary-700": "115 145 181", // #7391b5
		"--color-primary-800": "92 116 145", // #5c7491
		"--color-primary-900": "75 95 118", // #4b5f76
		// secondary | #c5ffc4 
		"--color-secondary-50": "246 255 246", // #f6fff6
		"--color-secondary-100": "243 255 243", // #f3fff3
		"--color-secondary-200": "241 255 240", // #f1fff0
		"--color-secondary-300": "232 255 231", // #e8ffe7
		"--color-secondary-400": "214 255 214", // #d6ffd6
		"--color-secondary-500": "197 255 196", // #c5ffc4
		"--color-secondary-600": "177 230 176", // #b1e6b0
		"--color-secondary-700": "148 191 147", // #94bf93
		"--color-secondary-800": "118 153 118", // #769976
		"--color-secondary-900": "97 125 96", // #617d60
		// tertiary | #fffa89 
		"--color-tertiary-50": "255 254 237", // #fffeed
		"--color-tertiary-100": "255 254 231", // #fffee7
		"--color-tertiary-200": "255 254 226", // #fffee2
		"--color-tertiary-300": "255 253 208", // #fffdd0
		"--color-tertiary-400": "255 252 172", // #fffcac
		"--color-tertiary-500": "255 250 137", // #fffa89
		"--color-tertiary-600": "230 225 123", // #e6e17b
		"--color-tertiary-700": "191 188 103", // #bfbc67
		"--color-tertiary-800": "153 150 82", // #999652
		"--color-tertiary-900": "125 123 67", // #7d7b43
		// success | #57e389 
		"--color-success-50": "230 251 237", // #e6fbed
		"--color-success-100": "221 249 231", // #ddf9e7
		"--color-success-200": "213 248 226", // #d5f8e2
		"--color-success-300": "188 244 208", // #bcf4d0
		"--color-success-400": "137 235 172", // #89ebac
		"--color-success-500": "87 227 137", // #57e389
		"--color-success-600": "78 204 123", // #4ecc7b
		"--color-success-700": "65 170 103", // #41aa67
		"--color-success-800": "52 136 82", // #348852
		"--color-success-900": "43 111 67", // #2b6f43
		// warning | #f8e45c 
		"--color-warning-50": "254 251 231", // #fefbe7
		"--color-warning-100": "254 250 222", // #fefade
		"--color-warning-200": "253 248 214", // #fdf8d6
		"--color-warning-300": "252 244 190", // #fcf4be
		"--color-warning-400": "250 236 141", // #faec8d
		"--color-warning-500": "248 228 92", // #f8e45c
		"--color-warning-600": "223 205 83", // #dfcd53
		"--color-warning-700": "186 171 69", // #baab45
		"--color-warning-800": "149 137 55", // #958937
		"--color-warning-900": "122 112 45", // #7a702d
		// error | #e01b24 
		"--color-error-50": "250 221 222", // #faddde
		"--color-error-100": "249 209 211", // #f9d1d3
		"--color-error-200": "247 198 200", // #f7c6c8
		"--color-error-300": "243 164 167", // #f3a4a7
		"--color-error-400": "233 95 102", // #e95f66
		"--color-error-500": "224 27 36", // #e01b24
		"--color-error-600": "202 24 32", // #ca1820
		"--color-error-700": "168 20 27", // #a8141b
		"--color-error-800": "134 16 22", // #861016
		"--color-error-900": "110 13 18", // #6e0d12
		// surface | #9a9996 
		"--color-surface-50": "240 240 239", // #f0f0ef
		"--color-surface-100": "235 235 234", // #ebebea
		"--color-surface-200": "230 230 229", // #e6e6e5
		"--color-surface-300": "215 214 213", // #d7d6d5
		"--color-surface-400": "184 184 182", // #b8b8b6
		"--color-surface-500": "154 153 150", // #9a9996
		"--color-surface-600": "139 138 135", // #8b8a87
		"--color-surface-700": "116 115 113", // #747371
		"--color-surface-800": "92 92 90", // #5c5c5a
		"--color-surface-900": "75 75 74", // #4b4b4a
		
	}
}
