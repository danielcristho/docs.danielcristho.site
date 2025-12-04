// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react'; // Import React
import starlightThemeFlexoki from 'starlight-theme-flexoki'


// https://astro.build/config
export default defineConfig({
    integrations: [
        starlightThemeFlexoki({
            accentColor: "magenta",
        }),

        starlight({
            title: "danielcristho's docs",
            social: {
                github: 'https://github.com/danielcristho',
            },
            sidebar: [
                { label: 'Intro', slug: 'index' },
                {
                    label: 'Docker',
                    autogenerate: { directory: 'docker' },
                },
                {
                    label: 'Kubernetes',
                    autogenerate: { directory: 'kubernetes' },
                },
                {
                    label: 'DevOps & Automation',
                    autogenerate: { directory: 'devops-and-automation' },
                },
                {
                    label: 'Linux',
                    autogenerate: { directory: 'linux' },
                },
                {
                    label: 'Tools',
                    autogenerate: { directory: 'tools' },
                },
                {
                    label: 'Terminal',
                    autogenerate: { directory: 'terminal' },
                }
            ],
            customCss: [
                "./src/styles/custom.css",
                "./src/styles/gruvbox.css"
            ]
        }), 
        
        react()
    ],
});