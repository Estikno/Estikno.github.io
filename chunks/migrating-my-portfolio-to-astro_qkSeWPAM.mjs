const id = "migrating-my-portfolio-to-astro.md";
						const collection = "blog";
						const slug = "migrating-my-portfolio-to-astro";
						const body = "\r\n![banner](../../assets/blog/Migrating_my_portfolio/layout.webp)\r\n\r\n## Introduction:\r\n\r\nSo I recently finished upgrading my portfolio to Next.js 13 and its new `app` directory. However, after finishing the upgrade I decided to migrate everything to <a href=\"https://astro.build\" target=\"_blank\">Astro</a>, as it is way better than Next.js in this case. So I basically had to go through the pain of redoing my portfolio twice, however, in the end it was totally worth it.\r\n\r\n## Why I Chose Astro:\r\n\r\nThe decision to migrate to Astro came to me after carefully evaluating various options. Astro's reputation for blazingly fast performance, ease of use, and alignment with my project's specific requirements were the key factors that convinced me to make the switch, as Astro's main focus is on `static sites`, like in this case, even though you can create dinamic ones if you want.\r\n\r\n![astro](../../assets/blog/Migrating_my_portfolio/astroWebsite.webp)\r\n\r\n## The Upgrade Process:\r\n\r\nI'm not going to lie and pretend that the upgrade process was a walk in the park, because it wasn't. It was extremely tedious to to migrate to the new `.astro` file that Astro mainly uses, and I know that you can use `React` as well, but I wanted to learn something new as I had already done a full project with react - <a href=\"/projects\" target=\"_blank\">Kyodo</a> - which you can check out on the projects page by the way.\r\n\r\nSo yeah, It was pretty tedious, even more if you take into account that just about some days ago I had just finished migrating from Next.js 12 to next.js 13, having to rewrite most of the project for it to work with the new `app` directory.\r\n\r\nJust to see the difference between React and Astro, this is an example of a script of my portfolio written in React and the same script written in Astro.\r\n\r\n### React\r\n\r\n```ts:layout.tsx\r\nexport default function RootLayout({ children }: { children: React.ReactNode }) {\r\n  return (\r\n    <html\r\n      lang={siteMetadata.language}\r\n      className={`${space_grotesk.variable} scroll-smooth`}\r\n      suppressHydrationWarning\r\n    >\r\n      <link rel=\"apple-touch-icon\" sizes=\"76x76\" href=\"/static/favicons/apple-touch-icon.png\" />\r\n      <link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"/static/favicons/favicon-32x32.png\" />\r\n      <link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"/static/favicons/favicon-16x16.png\" />\r\n      <link rel=\"manifest\" href=\"/static/favicons/site.webmanifest\" />\r\n      <link rel=\"mask-icon\" href=\"/static/favicons/safari-pinned-tab.svg\" color=\"#5bbad5\" />\r\n      <meta name=\"msapplication-TileColor\" content=\"#000000\" />\r\n      <meta name=\"theme-color\" media=\"(prefers-color-scheme: light)\" content=\"#fff\" />\r\n      <meta name=\"theme-color\" media=\"(prefers-color-scheme: dark)\" content=\"#000\" />\r\n      <link rel=\"alternate\" type=\"application/rss+xml\" href=\"/feed.xml\" />\r\n      <body className=\"bg-white text-black antialiased dark:bg-gray-950 dark:text-white\">\r\n        <ThemeProviders>\r\n          <Analytics analyticsConfig={siteMetadata.analytics as AnalyticsConfig} />\r\n          <SectionContainer>\r\n            <div className=\"flex h-screen flex-col justify-between font-sans\">\r\n              <SearchProvider searchConfig={siteMetadata.search as SearchConfig}>\r\n                <Header />\r\n                <main className=\"mb-auto\">{children}</main>\r\n              </SearchProvider>\r\n              <Footer />\r\n            </div>\r\n          </SectionContainer>\r\n        </ThemeProviders>\r\n      </body>\r\n    </html>\r\n  )\r\n}\r\n```\r\n\r\n### Astro\r\n\r\n```astro:MainLayout.astro\r\n---\r\nimport SectionContainer from \"@/components/SectionContainer.astro\";\r\nimport siteMetadata from \"@/data/siteMetadata\";\r\nimport Link from \"@/components/Link.astro\";\r\nimport Header from '@/components/Header.astro';\r\nimport Footer from \"@/components/Footer.astro\";\r\n\r\n//css\r\nimport \"@/styles/prism.css\";\r\nimport \"@/styles/tailwind.css\";\r\nimport \"@fontsource-variable/inter\";\r\nimport \"katex/dist/katex.css\";\r\nimport \"@/styles/global.css\";\r\n\r\ninterface Props {\r\n    title?: string;\r\n    author?: string;\r\n    description?: string;\r\n    ogImage?: string;\r\n    canonicalURL?: string;\r\n}\r\n\r\nconst {\r\n    title = siteMetadata.title,\r\n    description = siteMetadata.description,\r\n    author = siteMetadata.author,\r\n    ogImage = siteMetadata.socialBanner,\r\n    canonicalURL = new URL(Astro.url.pathname, Astro.site).href,\r\n} = Astro.props as Props;\r\n\r\nconst socialImageURL = new URL(\r\n    ogImage ? ogImage : siteMetadata.socialBanner,\r\n    Astro.url.origin\r\n).href;\r\n---\r\n\r\n<!DOCTYPE html>\r\n<html lang=\"en\">\r\n    <head>\r\n        <meta charset=\"utf-8\" />\r\n        <meta name=\"viewport\" content=\"width=device-width\" />\r\n        <link rel=\"icon\" type=\"image/svg+xml\" href=\"/favicon.svg\" />\r\n        <link rel=\"canonical\" href={canonicalURL} />\r\n        <meta name=\"generator\" content={Astro.generator} />\r\n\r\n        <!-- General Meta Tags -->\r\n        <title>{title}</title>\r\n        <meta name=\"title\" content={title} />\r\n        <meta name=\"description\" content={description} />\r\n        <meta name=\"author\" content={author} />\r\n        <link rel=\"sitemap\" href=\"/sitemap-index.xml\" />\r\n\r\n        <!-- Open Graph / Facebook -->\r\n        <meta property=\"og:title\" content={title} />\r\n        <meta property=\"og:description\" content={description} />\r\n        <meta property=\"og:url\" content={canonicalURL} />\r\n        <meta property=\"og:image\" content={socialImageURL} />\r\n\r\n        <!-- Twitter -->\r\n        <meta property=\"twitter:card\" content=\"summary_large_image\" />\r\n        <meta property=\"twitter:url\" content={canonicalURL} />\r\n        <meta property=\"twitter:title\" content={title} />\r\n        <meta property=\"twitter:description\" content={description} />\r\n        <meta property=\"twitter:image\" content={socialImageURL} />\r\n\r\n        <!--Theme -->\r\n        <meta name=\"msapplication-TileColor\" content=\"#000000\" />\r\n        <meta name=\"theme-color\" content=\"#000000\" />\r\n    </head>\r\n    <body class=\"dark:bg-neutral-900\">\r\n        <SectionContainer>\r\n            <div class=\"flex h-screen flex-col justify-between\">\r\n                <Header />\r\n                <main class=\"mb-auto\"><slot /></main>\r\n                <Footer />\r\n            </div>\r\n        </SectionContainer>\r\n    </body>\r\n</html>\r\n```\r\n\r\nI think that the Astro language is easier to work with and understand, as well as being much more simpler than `React`. It's like plain HTML but with steroids. And you can bring your favorite UI framework if you want to, <a href=\"https://vuejs.org\" target=\"_blank\">Vue</a>, <a href=\"https://svelte.dev\" target=\"_blank\">Svelte</a>, <a href=\"https://react.dev\" target=\"_blank\">React</A>, etc. All of them are compatible in Astro.\r\n\r\n## Performance Gains:\r\n\r\nOne of the most rewarding aspects of this transition has been the remarkable boost in performance. By switching to Astro, the load times of the whole blog have been significantly reduced, enhancing the overall user experience. The instant rendering capabilities of Astro ensures that visitors can access content exceptionally quickly.\r\n\r\nHere are some reports of Lighthouse of some routes, keep in mind that the page is not completely optimized and the results of the final page will be greatly improved.\r\n\r\n### 1. Main page\r\n![ligthhousereport](../../assets/blog/Migrating_my_portfolio/reportRouteHome.webp)\r\n\r\n### 2. A blog post page\r\n![ligthhousereport](../../assets/blog/Migrating_my_portfolio/reportRoutePost.webp)\r\n\r\n### 3. The blogs page\r\n![ligthhousereport](../../assets/blog/Migrating_my_portfolio/reportRoutePosts.webp)\r\n\r\n### 4. The tags page\r\n![ligthhousereport](../../assets/blog/Migrating_my_portfolio/reportRouteTag.webp)\r\n\r\nSo Astro's claims of having a blazingly fast performance are true and here is the proof of it.\r\n\r\n## Conclusion:\r\n\r\nLooking back on this journey, the decision to transition from Next.js to Astro feels incredibly rewarding. The benefits I currenly have in terms of speed, ease of use, and of course having learned something have been fulfilled beyond my expectations. My portfolio and blog now stand as a testament to the power of trying new technologies and methodologies, even if they are not the most popular ones.\r\n\r\nSomething which I haven't mentioned is that Astro has native support for `markdown` files, so you can basically customize the styles of them and create entire pages with it. In my case I use them to create the blog posts, I have a Layout that renders everything (navbar, styling...) and the actual content is written in a markdown file. This is also very convenient because you don't have to mess with code when creating a new post or modifying one.\r\n\r\nSo for anyone who is in the same spot as me at the beginning of the post, or simply wants to creates its own portfolio or blog, Astro is one of the, if not the best option out there. There are many other benefits in Astro, such as image optimization out of the box, amazing content system... But you will discover them by yourself when creating your own site.";
						const data = {title:"Migrating my Portfolio to Astro",date:new Date(1692316800000),tags:["Astro","Portfolio"],draft:false,summary:"In this post I detail my shift from Next.js to Astro for my portfolio and blog. I explore Astro's benefits, migration challenges, and improved user experience. Astro's native file compatibility and the new content collection system are highlighted, enabling seamless integration without third-party dependencies.",author:{slug:"david",collection:"author"},customLayout:"PostLayout"};
						const _internal = {
							type: 'content',
							filePath: "C:/Users/david/Desktop/portfolio/src/content/blog/migrating-my-portfolio-to-astro.md",
							rawData: "\r\ntitle: Migrating my Portfolio to Astro\r\ndate: \"2023-08-18\"\r\ntags: [\"Astro\", \"Portfolio\"]\r\ndraft: false\r\nsummary: In this post I detail my shift from Next.js to Astro for my portfolio and blog. I explore Astro's benefits, migration challenges, and improved user experience. Astro's native file compatibility and the new content collection system are highlighted, enabling seamless integration without third-party dependencies.\r\ncustomLayout: PostLayout\r",
						};

export { _internal, body, collection, data, id, slug };