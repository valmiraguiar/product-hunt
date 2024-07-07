import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  mode: 'jit',
  theme: {
    extend: {
      backgroundSize: {
        'size-200': '100% 100%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
      opacity: {
        'opac-0': '0',
        'opac-1': '1',
      },
    },
  },
  plugins: [],
};

export default config;
