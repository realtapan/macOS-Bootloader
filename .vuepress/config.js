module.exports = {
    title: 'macOS Bootloader',
    description: 'EFI to run macOS on un-supported hardware',
    base: '/macOS-Bootloader/',
    head: [
        ['link', { rel: 'icon', href: '/fav.png' }]
      ],

        watch: {
            $page(newPage, oldPage) {
            if (newPage.key !== oldPage.key) {
                requestAnimationFrame(() => {
                if (this.$route.hash) {
                    const element = document.getElementById(this.$route.hash.slice(1));

                    if (element && element.scrollIntoView) {
                    element.scrollIntoView();
                    }
                }
                });
            }
            }
        },
    theme: 'vuepress-theme-succinct',
    globalUIComponents: [
        'ThemeManager'
    ],

    themeConfig: {
        logo: '/logo.png',
        lastUpdated: true,
        displayAllHeaders: true,
        smoothScroll: true,
        sidebar: 'auto',
        sidebarDepth: '0',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Profile', link: '/' },
            { text: 'Shop Now', link: 'https://google.com' }
          ],

        sidebar: [
            'intro.md',
            {
                title: 'USB Creation',
                collapsable: false,
                path: '/usb-creation/usb-creation',
                sidebarDepth: 1,
                children: [
                    '/usb-creation/mac-usb',
                    '/usb-creation/windows-usb'
                ]

            },
            {
                title: 'Bootloader',
                collapsable: false,
                children: [{
                    title: 'Desktop Bootloader',
                    collapsable: true,
                    sidebarDepth: 1,
                    children: [
                        ['/desktop-efi/Asus-H81-M-CS/asush81m-cs.md', 'Asus H81M-CS'], 
                    ],
                }],
            },
        ]
      },

    plugins: [
        '@vuepress/plugin-back-to-top',
        'vuepress-plugin-smooth-scroll',
        '@xiaopanda/vuepress-plugin-code-copy',
        ['@vuepress/active-header-links', {
            sidebarLinkSelector: '.sidebar-link',
            headerAnchorSelector: '.header-anchor'
            }],
        ['@vuepress/medium-zoom',
        {
            selector: "img",
            options: {
                background: 'var(--bodyBgColor)'
            }
        }],
        [
            '@vuepress/google-analytics',
            {
              'ga': 'G-N3GX978E29'
            }
          ],
    ]
  }