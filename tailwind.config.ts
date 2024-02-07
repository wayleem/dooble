import { join } from 'path'
import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin'
import { doobleTheme } from './myTheme';

export default {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
  theme: {
    extend: {
      fontFamily: {
        'header': ['Quicksand', 'sans-serif'],
        'body': ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [
    forms,
    typography,
    skeleton({
      themes: {
        custom: [
          doobleTheme
        ],
        preset: [
          {
            name: 'seafoam',
            enhancements: true,
          },
        ],
      },
    }),
  ],
} satisfies Config;
