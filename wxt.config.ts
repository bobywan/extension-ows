import { defineConfig } from 'wxt';
import crypto from 'node:crypto';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

const md5 = (string: string) => crypto.createHash('md5').update(string).digest('hex');

// See https://wxt.dev/api/config.html
export default defineConfig({
    srcDir: 'src',
    webExt: {
        startUrls: [
            // 'https://www.capital.fr',
            // Vous pouvez ajouter d'autres URLs si besoin :
            // 'https://www.femmeactuelle.fr',
            // 'https://www.geo.fr'
        ]
    },
    manifest: {
        name: 'OWS Tools',
        description: 'Extension privée Prisma Media - Visualiseur pour les templates OWS destiné aux développeurs et équipes techniques de l\'entreprise',
        homepage_url: 'https://gitlab.prismamedia.com/prismamediadigital/transverse/ows-tools',
        permissions: ['activeTab', 'scripting', 'tabs'],
        host_permissions: ['<all_urls>'],
        web_accessible_resources: [
            {
                resources: ['images/kaamelott/*'],
                matches: ['<all_urls>']
            }
        ],
        action: {
            default_title: 'OWS Tools',
            default_icon: {
                '16': 'favicon-16x16.png',
                '32': 'favicon-32x32.png',
            }
        },
        icons: {
            '16': 'favicon-16x16.png',
            '32': 'favicon-32x32.png',
            '48': 'favicon-32x32.png', // Utiliser 32x32 pour 48x48
            '128': 'android-chrome-192x192.png',
            '192': 'android-chrome-192x192.png',
            '512': 'android-chrome-512x512.png'
        }
    },
    vite: () => ({
        plugins: [vue()],
        resolve: {
            alias: {
                '@': resolve(__dirname, './src'),
                '@assets': resolve(__dirname, './src/entrypoints/popup/assets'),
                '@components': resolve(__dirname, './src/entrypoints/popup/components')
            }
        },
        css: {
            postcss: {
                plugins: [
                    require('postcss-import'),
                    require('postcss-url'),
                    require('postcss-custom-properties-transformer')({
                        transformer: ({ property }: { property: string }) => {
                            // CSS custom properties with the "_" prefix are exempted of transformation
                            // to enable dark mode override on SVG fill properties.
                            // The prefix is automatically removed in CSS files. Read access to the property must be without the prefix
                            if (property.startsWith('_')) {
                                return property.slice(1)
                            }
                            if (process.env.NODE_ENV === 'production') {
                                return md5(property).slice(0, 5)
                            }
                            return property
                        }
                    }),
                    require('postcss-preset-env')({
                        browsers: [
                            'chrome > 80',
                            'firefox > 70',
                            'safari > 11',
                            'defaults',
                            'not dead'
                        ].join(','),
                        stage: 2,
                        features: {
                            'custom-properties': {
                                warnings: true,
                                preserve: true
                            },

                            // postcss-preset-env@7.8.0 enables native "postcss-nesting"
                            // which should be disabled to avoid invalid CSS with "postcss-nested"
                            'nesting-rules': false
                        }
                    }),
                    require('postcss-nested'),
                    require('postcss-custom-media')({
                        preserve: false
                    })
                ]
            },
            plugins: [vue()]
        }
    })
});
