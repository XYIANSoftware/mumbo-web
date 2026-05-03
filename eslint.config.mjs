import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'

/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = [
	...nextCoreWebVitals,
	{
		rules: {
			// Fires on normal async fetch + setState in useEffect; keep fetch-on-mount.
			'react-hooks/set-state-in-effect': 'off',
		},
	},
]

export default eslintConfig
