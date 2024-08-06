/* empty css                          */
import { prependForwardSlash } from '@astrojs/internal-helpers/path';
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderSlot, f as addAttribute, g as renderComponent, A as AstroError, h as ExpectedImageOptions, E as ExpectedImage, i as InvalidImageService, j as ImageMissingAlt, s as spreadAttributes, u as unescapeHTML, k as renderHead, l as UnknownContentCollectionError, n as renderUniqueStylesheet, o as renderScriptElement, p as createHeadAndContent } from './astro_JQFs6gbx.mjs';
import 'kleur/colors';
import 'clsx';
import 'cssesc';
/* empty css                         */
import { slug } from 'github-slugger';
import rss$1 from '@astrojs/rss';
import { i as isESMImportedImage, a as isLocalService, b as isRemoteImage, D as DEFAULT_HASH_PROPS } from './astro/assets-service_uLmjDUtM.mjs';
import { getIconData, iconToSVG } from '@iconify/utils';
/* empty css                         */

const siteMetadata = {
  title: "David",
  author: "David",
  headerTitle: "David",
  description: "My personal portfolio and blog",
  language: "en-us",
  theme: "dark",
  // system, dark or light
  siteUrl: "https://estikno.github.io",
  //siteRepo: "https://github.com/timlrx/tailwind-nextjs-starter-blog",
  siteLogo: "/src/assets/logo.png",
  image: "/src/assets/avatar.jpg",
  socialBanner: "/src/assets/twitter-card.png",
  email: "daviddidenco84@gmail.com",
  github: "https://github.com/Estikno",
  twitter: "https://twitter.com/Twitter",
  facebook: "https://facebook.com",
  youtube: "https://youtube.com",
  linkedin: "https://www.linkedin.com",
  locale: "en-US",
  postsPerPage: 5,
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports plausible, simpleAnalytics, umami or googleAnalytics
    plausibleDataDomain: "",
    // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false,
    // true or false
    umamiWebsiteId: "",
    // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: ""
    // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue
    // Please add your .env file and modify it according to your selection
    provider: "buttondown"
  },
  comment: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: "giscus",
    // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: "pathname",
      // supported options: pathname, url, title
      reactions: "1",
      // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: "0",
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: "light",
      // theme when dark mode
      darkTheme: "transparent_dark",
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: ""
    },
    utterancesConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://utteranc.es/
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO,
      issueTerm: "",
      // supported options: pathname, url, title
      label: "",
      // label (optional): Comment 💬
      // theme example: github-light, github-dark, preferred-color-scheme
      // github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light
      theme: "",
      // theme when dark mode
      darkTheme: ""
    },
    disqusConfig: {
      // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
      shortname: process.env.NEXT_PUBLIC_DISQUS_SHORTNAME
    }
  }
};

const $$Astro$s = createAstro("https://estikno.github.io");
const $$SectionContainer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$s, $$props, $$slots);
  Astro2.self = $$SectionContainer;
  return renderTemplate`${maybeRenderHead()}<div class="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/Users/david/Desktop/portfolio/src/components/SectionContainer.astro", void 0);

const headerNavLinks = [
  { href: "/", title: "Home" },
  { href: "/blog", title: "Blog" },
  { href: "/tags", title: "Tags" },
  { href: "/projects", title: "Projects" }
  //{ href: '/about', title: 'About' },
];

const $$Astro$r = createAstro("https://estikno.github.io");
const $$Link = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$r, $$props, $$slots);
  Astro2.self = $$Link;
  const { href, aria_label, class_ } = Astro2.props;
  return renderTemplate`${href.startsWith("/") || href.startsWith("#") ? renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(aria_label, "aria-label")}${addAttribute(class_, "class")}>${renderSlot($$result, $$slots["default"])}</a>` : renderTemplate`<a target="_blank" rel="noopener noreferrer"${addAttribute(aria_label, "aria-label")}${addAttribute(href, "href")}${addAttribute(class_, "class")}>${renderSlot($$result, $$slots["default"])}</a>`}`;
}, "C:/Users/david/Desktop/portfolio/src/components/Link.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$q = createAstro("https://estikno.github.io");
const $$ThemeSwitch = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$q, $$props, $$slots);
  Astro2.self = $$ThemeSwitch;
  return renderTemplate(_a || (_a = __template(["<!--Theme's button -->", `<button aria-label="Toggle Dark Mode" type="button" class="ml-1 mr-1 h-8 w-8 rounded p-1 sm:ml-4" id="themeSwitch"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="text-gray-900 dark:text-gray-100"> <path id="sun" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"></path> <path id="moon" d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path> </svg> </button> <script>
    //Theme switch logic

    //Gets all elements
    const button = document.getElementById("themeSwitch");
    const sun = document.getElementById("sun");
    const moon = document.getElementById("moon");

    //A function that sets the icon's properties given the current theme theme (dark, light)
    const iconToggle = (dark) => {
        if(dark){
            sun.classList.add("hidden");
            moon.classList.remove("hidden");
            return;
        }

        moon.classList.add("hidden");
        sun.classList.remove("hidden");
    }

    //Sees if the theme has already been set
    const theme = (() => {
        //If the theme is the localstorage returns that
        if (localStorage.getItem("theme")) {
            return localStorage.getItem("theme");
        }

        //If not checks the css property related to the theme
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            return "dark";
        }

        //If there is nothing set returns light
        return "light";
    })();

    //Sets the current icon with the theme variable from before
    if (theme === "light") {
        document.documentElement.classList.remove("dark");
        iconToggle(false);
    } else {
        document.documentElement.classList.add("dark");
        iconToggle(true)
    }

    //Sets the current theme in the localstorage for later retrieving
    window.localStorage.setItem("theme", theme);

    //This function is in charge of changing the theme when the theme switch is pressed
    const themeSwitch = () => {
        if(document.documentElement.classList.contains("dark")){
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            iconToggle(false);
            return;
        }

        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        iconToggle(true);
    }

    //Sets the previos function to excecute when he switch is clicked
    button.addEventListener("click", () => {
        themeSwitch();
    })
<\/script>`])), maybeRenderHead());
}, "C:/Users/david/Desktop/portfolio/src/components/ThemeSwitch.astro", void 0);

const $$Astro$p = createAstro("https://estikno.github.io");
const $$MobileNav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$MobileNav;
  return renderTemplate`${maybeRenderHead()}<div> <!--Open button --> <button aria-label="Toggle Menu" class="sm:hidden hamburger-menu" aria-expanded="false"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="text-gray-900 dark:text-gray-100 h-8 w-8"> <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path> </svg> </button> <!--Displayable navbar --> <div class="fixed left-0 top-0 z-10 h-full w-full transform opacity-95 dark:opacity-[0.98] bg-white duration-300 ease-in-out dark:bg-gray-950 translate-x-full" id="menuNav"> <!--Close button --> <div class="flex justify-end"> <button class="mr-8 mt-11 h-8 w-8 hamburger-menu" aria-label="Toggle Menu"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="text-gray-900 dark:text-gray-100"> <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path> </svg> </button> </div> <!--All links --> <nav class="fixed mt-8 h-full"> ${headerNavLinks.map((link) => renderTemplate`<div class="px-12 py-4"> ${renderComponent($$result, "Link", $$Link, { "href": link.href, "class_": "text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100 hamburger-menu" }, { "default": ($$result2) => renderTemplate`${link.title}` })} </div>`)} </nav> </div> </div> `;
}, "C:/Users/david/Desktop/portfolio/src/components/MobileNav.astro", void 0);

async function getConfiguredImageService() {
  if (!globalThis?.astroAsset?.imageService) {
    const { default: service } = await import(
      // @ts-expect-error
      './astro/assets-service_uLmjDUtM.mjs'
    ).then(n => n.s).catch((e) => {
      const error = new AstroError(InvalidImageService);
      error.cause = e;
      throw error;
    });
    if (!globalThis.astroAsset)
      globalThis.astroAsset = {};
    globalThis.astroAsset.imageService = service;
    return service;
  }
  return globalThis.astroAsset.imageService;
}
async function getImage$1(options, imageConfig) {
  if (!options || typeof options !== "object") {
    throw new AstroError({
      ...ExpectedImageOptions,
      message: ExpectedImageOptions.message(JSON.stringify(options))
    });
  }
  if (typeof options.src === "undefined") {
    throw new AstroError({
      ...ExpectedImage,
      message: ExpectedImage.message(
        options.src,
        "undefined",
        JSON.stringify(options)
      )
    });
  }
  const service = await getConfiguredImageService();
  const resolvedOptions = {
    ...options,
    src: typeof options.src === "object" && "then" in options.src ? (await options.src).default ?? await options.src : options.src
  };
  const originalPath = isESMImportedImage(resolvedOptions.src) ? resolvedOptions.src.fsPath : resolvedOptions.src;
  const clonedSrc = isESMImportedImage(resolvedOptions.src) ? (
    // @ts-expect-error - clone is a private, hidden prop
    resolvedOptions.src.clone ?? resolvedOptions.src
  ) : resolvedOptions.src;
  resolvedOptions.src = clonedSrc;
  const validatedOptions = service.validateOptions ? await service.validateOptions(resolvedOptions, imageConfig) : resolvedOptions;
  const srcSetTransforms = service.getSrcSet ? await service.getSrcSet(validatedOptions, imageConfig) : [];
  let imageURL = await service.getURL(validatedOptions, imageConfig);
  let srcSets = await Promise.all(
    srcSetTransforms.map(async (srcSet) => ({
      transform: srcSet.transform,
      url: await service.getURL(srcSet.transform, imageConfig),
      descriptor: srcSet.descriptor,
      attributes: srcSet.attributes
    }))
  );
  if (isLocalService(service) && globalThis.astroAsset.addStaticImage && !(isRemoteImage(validatedOptions.src) && imageURL === validatedOptions.src)) {
    const propsToHash = service.propertiesToHash ?? DEFAULT_HASH_PROPS;
    imageURL = globalThis.astroAsset.addStaticImage(validatedOptions, propsToHash, originalPath);
    srcSets = srcSetTransforms.map((srcSet) => ({
      transform: srcSet.transform,
      url: globalThis.astroAsset.addStaticImage(srcSet.transform, propsToHash, originalPath),
      descriptor: srcSet.descriptor,
      attributes: srcSet.attributes
    }));
  }
  return {
    rawOptions: resolvedOptions,
    options: validatedOptions,
    src: imageURL,
    srcSet: {
      values: srcSets,
      attribute: srcSets.map((srcSet) => `${srcSet.url} ${srcSet.descriptor}`).join(", ")
    },
    attributes: service.getHTMLAttributes !== void 0 ? await service.getHTMLAttributes(validatedOptions, imageConfig) : {}
  };
}

const $$Astro$o = createAstro("https://estikno.github.io");
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage(props);
  const additionalAttributes = {};
  if (image.srcSet.values.length > 0) {
    additionalAttributes.srcset = image.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(image.attributes)}>`;
}, "C:/Users/david/Desktop/portfolio/node_modules/astro/components/Image.astro", void 0);

const $$Astro$n = createAstro("https://estikno.github.io");
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$Picture;
  const defaultFormats = ["webp"];
  const defaultFallbackFormat = "png";
  const specialFormatsFallback = ["gif", "svg", "jpg", "jpeg"];
  const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  const optimizedImages = await Promise.all(
    formats.map(
      async (format) => await getImage({ ...props, format, widths: props.widths, densities: props.densities })
    )
  );
  let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
  if (!fallbackFormat && isESMImportedImage(props.src) && specialFormatsFallback.includes(props.src.format)) {
    resultFallbackFormat = props.src.format;
  }
  const fallbackImage = await getImage({
    ...props,
    format: resultFallbackFormat,
    widths: props.widths,
    densities: props.densities
  });
  const imgAdditionalAttributes = {};
  const sourceAdditionaAttributes = {};
  if (props.sizes) {
    sourceAdditionaAttributes.sizes = props.sizes;
  }
  if (fallbackImage.srcSet.values.length > 0) {
    imgAdditionalAttributes.srcset = fallbackImage.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}> ${Object.entries(optimizedImages).map(([_, image]) => {
    const srcsetAttribute = props.densities || !props.densities && !props.widths ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
    return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute("image/" + image.options.format, "type")}${spreadAttributes(sourceAdditionaAttributes)}>`;
  })} <img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(imgAdditionalAttributes)}${spreadAttributes(fallbackImage.attributes)}> </picture>`;
}, "C:/Users/david/Desktop/portfolio/node_modules/astro/components/Picture.astro", void 0);

const imageConfig = {"service":{"entrypoint":"astro/assets/services/sharp","config":{}},"domains":[],"remotePatterns":[]};
					new URL("file:///C:/Users/david/Desktop/portfolio/dist/");
					const getImage = async (options) => await getImage$1(options, imageConfig);

const logo_small = new Proxy({"src":"/_astro/logo_small.CNWsemSi.png","width":200,"height":195,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/david/Desktop/portfolio/src/assets/logo_small.png";
							}
							globalThis.astroAsset.referencedImages.add("C:/Users/david/Desktop/portfolio/src/assets/logo_small.png");
							return target[name];
						}
					});

const $$Astro$m = createAstro("https://estikno.github.io");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="flex items-center justify-between py-10"> <!--Left part of the navbar (Icon and name) --> <div> ${renderComponent($$result, "Link", $$Link, { "href": "/", "aria-label": siteMetadata.headerTitle }, { "default": ($$result2) => renderTemplate` <div class="flex items-center justify-between"> <div class="mr-3"> ${renderComponent($$result2, "Image", $$Image, { "src": logo_small, "alt": "logo", "width": 69 })} </div> ${renderTemplate`<div class="hidden h-6 text-2xl font-semibold sm:block dark:text-gray-100"> ${siteMetadata.headerTitle} </div>` } </div> ` })} </div> <!--Right part of the navbar with all the links --> <div class="flex items-center text-base leading-5"> <div class="hidden sm:block"> ${headerNavLinks.map((link) => renderTemplate`${renderComponent($$result, "Link", $$Link, { "href": link.href, "class_": "p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4" }, { "default": ($$result2) => renderTemplate`${link.title}` })}`)} </div> <!--Some other options like the theme switch and the mobile navbar hidden --> ${renderComponent($$result, "ThemeSwitch", $$ThemeSwitch, {})} ${renderComponent($$result, "MobileNav", $$MobileNav, {})} </div> </header>`;
}, "C:/Users/david/Desktop/portfolio/src/components/Header.astro", void 0);

const icons = {"local":{"prefix":"local","lastModified":1722943964,"icons":{"social-icons/facebook":{"body":"<path fill=\"currentColor\" d=\"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z\"/>"},"social-icons/github":{"body":"<path fill=\"currentColor\" d=\"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12\"/>"},"social-icons/linkedin":{"body":"<path fill=\"currentColor\" d=\"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z\"/>"},"social-icons/mail":{"body":"<path fill=\"currentColor\" d=\"M2.003 5.884 10 9.882l7.997-3.998A2 2 0 0 0 16 4H4a2 2 0 0 0-1.997 1.884z\"/><path fill=\"currentColor\" d=\"m18 8.118-8 4-8-4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.118z\"/>","width":20,"height":20},"social-icons/twitter":{"body":"<path fill=\"currentColor\" d=\"M23.953 4.57a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.06a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.936 4.936 0 0 0 4.604 3.417 9.867 9.867 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0 0 24 4.59z\"/>"},"social-icons/youtube":{"body":"<path fill=\"currentColor\" d=\"M23.499 6.203a3.008 3.008 0 0 0-2.089-2.089c-1.87-.501-9.4-.501-9.4-.501s-7.509-.01-9.399.501a3.008 3.008 0 0 0-2.088 2.09A31.258 31.26 0 0 0 0 12.01a31.258 31.26 0 0 0 .523 5.785 3.008 3.008 0 0 0 2.088 2.089c1.869.502 9.4.502 9.4.502s7.508 0 9.399-.502a3.008 3.008 0 0 0 2.089-2.09 31.258 31.26 0 0 0 .5-5.784 31.258 31.26 0 0 0-.5-5.808zm-13.891 9.4V8.407l6.266 3.604z\"/>"}},"width":24,"height":24}};

const cache = /* @__PURE__ */ new WeakMap();

const $$Astro$l = createAstro("https://estikno.github.io");
const $$Icon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
    }
  }
  const req = Astro2.request;
  const { name = "", title, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData, { width: "auto", height: "auto" });
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}>${unescapeHTML(normalizedBody)}</symbol>`} <use ${addAttribute(`#${id}`, "xlink:href")}></use> </svg>`;
}, "C:/Users/david/Desktop/portfolio/node_modules/astro-icon/components/Icon.astro", void 0);

const $$Astro$k = createAstro("https://estikno.github.io");
const $$SocialIcons = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$SocialIcons;
  const components = {
    mail: "mail",
    github: "github",
    facebook: "facebook",
    youtube: "youtube",
    linkedin: "linkedin",
    twitter: "twitter",
    mastodon: "mastodon"
  };
  const { kind, href, size } = Astro2.props;
  const SocialSvg = components[kind];
  return renderTemplate`${!href || kind === "mail" && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(
    href
  ) ? null : renderTemplate`${maybeRenderHead()}<a class="text-sm text-gray-500 transition hover:text-gray-600" target="_blank" rel="noopener noreferrer"${addAttribute(href, "href")}><span class="sr-only">${kind}</span>${renderComponent($$result, "Icon", $$Icon, { "name": `social-icons/${SocialSvg}`, "class": `fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-primary-400 h-${size} w-${size}` })}</a>`}`;
}, "C:/Users/david/Desktop/portfolio/src/components/SocialIcons.astro", void 0);

const $$Astro$j = createAstro("https://estikno.github.io");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer> <div class="mt-16 flex flex-col items-center"> <!--Social icons --> <div class="mb-3 flex space-x-4">  ${renderComponent($$result, "SocialIcon", $$SocialIcons, { "kind": "github", "href": siteMetadata.github, "size": 6 })}  </div> <!--Little text at the bottom --> <div class="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400"> <div>${siteMetadata.author}</div> <div>${` \u2022 `}</div> <div>${`\xA9 ${(/* @__PURE__ */ new Date()).getFullYear()}`}</div> <div>${` \u2022 `}</div> ${renderComponent($$result, "Link", $$Link, { "href": "/" }, { "default": ($$result2) => renderTemplate`${siteMetadata.title}` })} </div> </div> </footer>`;
}, "C:/Users/david/Desktop/portfolio/src/components/Footer.astro", void 0);

const $$Astro$i = createAstro("https://estikno.github.io");
const $$MainLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const {
    title = siteMetadata.title,
    description = siteMetadata.description,
    author = siteMetadata.author,
    ogImage = siteMetadata.socialBanner,
    canonicalURL = new URL(Astro2.url.pathname, Astro2.site).href
  } = Astro2.props;
  const socialImageURL = new URL(
    ogImage ? ogImage : siteMetadata.socialBanner,
    Astro2.url.origin
  ).href;
  return renderTemplate`<html${addAttribute(siteMetadata.language, "lang")}> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><link rel="canonical"${addAttribute(canonicalURL, "href")}><meta name="generator"${addAttribute(Astro2.generator, "content")}><!--Icons --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="apple-touch-icon" type="image/png" href="/favicons/apple-touch-icon.png"><link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5"><!-- General Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><meta name="author"${addAttribute(author, "content")}><link rel="sitemap" href="/sitemap-index.xml"><!-- Open Graph / Facebook --><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:url"${addAttribute(canonicalURL, "content")}><meta property="og:image"${addAttribute(socialImageURL, "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(canonicalURL, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(socialImageURL, "content")}><!--Theme --><meta name="msapplication-TileColor" content="#000000"><meta name="theme-color" content="#000000">${renderHead()}</head> <body class="dark:bg-neutral-900"> ${renderComponent($$result, "SectionContainer", $$SectionContainer, {}, { "default": ($$result2) => renderTemplate` <div class="flex h-screen flex-col justify-between"> ${renderComponent($$result2, "Header", $$Header, {})} <main class="mb-auto">${renderSlot($$result2, $$slots["default"])}</main> ${renderComponent($$result2, "Footer", $$Footer, {})} </div> ` })} </body></html>`;
}, "C:/Users/david/Desktop/portfolio/src/layouts/MainLayout.astro", void 0);

const $$Astro$h = createAstro("https://estikno.github.io");
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Page not found - Dav1d" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6"> <div class="space-x-2 pt-6 pb-8 md:space-y-5"> <h1 class="text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:border-r-2 md:px-6 md:text-8xl md:leading-14">
404
</h1> </div> <div class="max-w-md"> <p class="mb-4 text-xl font-bold leading-normal md:text-2xl dark:text-gray-100">
Sorry we couldn&apos;t find this page.
</p> <p class="mb-8 dark:text-gray-100">
But dont worry, you can find plenty of other things on our
                homepage.
</p> ${renderComponent($$result2, "Link", $$Link, { "href": "/" }, { "default": ($$result3) => renderTemplate` <button class="focus:shadow-outline-blue inline rounded-lg border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium leading-5 text-white shadow transition-colors duration-150 hover:bg-blue-700 focus:outline-none dark:hover:bg-blue-500">
Back to homepage
</button> ` })} </div> </div> ` })}`;
}, "C:/Users/david/Desktop/portfolio/src/pages/404.astro", void 0);

const $$file$7 = "C:/Users/david/Desktop/portfolio/src/pages/404.astro";
const $$url$7 = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file$7,
    url: $$url$7
}, Symbol.toStringTag, { value: 'Module' }));

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection **${collection}** does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return;
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://estikno.github.io", "ASSETS_PREFIX": undefined}, { Path: process.env.Path })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      entries = await Promise.all(
        lazyImports.map(async (lazyImport) => {
          const entry = await lazyImport();
          return type === "content" ? {
            id: entry.id,
            slug: entry.slug,
            body: entry.body,
            collection: entry.collection,
            data: entry.data,
            async render() {
              return render({
                collection: entry.collection,
                id: entry.id,
                renderEntryImport: await getRenderEntryImport(collection, entry.slug)
              });
            }
          } : {
            id: entry.id,
            collection: entry.collection,
            data: entry.data
          };
        })
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/author/david.md": () => import('./david_vtj1yBXf.mjs'),"/src/content/blog/building-a-unixshell-in-rust-part-1.md": () => import('./building-a-unixshell-in-rust-part-1_0Hyl6VSt.mjs'),"/src/content/blog/building-a-unixshell-in-rust-part-2.md": () => import('./building-a-unixshell-in-rust-part-2_x2vhC-qV.mjs'),"/src/content/blog/building-a-unixshell-in-rust-part-3.md": () => import('./building-a-unixshell-in-rust-part-3_j1yGhQdB.mjs'),"/src/content/blog/building-a-unixshell-in-rust-part-4.md": () => import('./building-a-unixshell-in-rust-part-4_ab26EFQl.mjs'),"/src/content/blog/making-a-multiplayer-fps-basic-movement.md": () => import('./making-a-multiplayer-fps-basic-movement_qsy4iH4x.mjs'),"/src/content/blog/making-a-multiplayer-fps-interpolation.md": () => import('./making-a-multiplayer-fps-interpolation_jGcYNf8L.mjs'),"/src/content/blog/making-a-multiplayer-fps-introduction.md": () => import('./making-a-multiplayer-fps-introduction_7rDyx6X8.mjs'),"/src/content/blog/migrating-my-portfolio-to-astro.md": () => import('./migrating-my-portfolio-to-astro_qkSeWPAM.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"author":{"type":"content","entries":{"david":"/src/content/author/david.md"}},"blog":{"type":"content","entries":{"building-a-unixshell-in-rust-part-2":"/src/content/blog/building-a-unixshell-in-rust-part-2.md","building-a-unixshell-in-rust-part-1":"/src/content/blog/building-a-unixshell-in-rust-part-1.md","building-a-unixshell-in-rust-part-3":"/src/content/blog/building-a-unixshell-in-rust-part-3.md","building-a-unixshell-in-rust-part-4":"/src/content/blog/building-a-unixshell-in-rust-part-4.md","making-a-multiplayer-fps-basic-movement":"/src/content/blog/making-a-multiplayer-fps-basic-movement.md","making-a-multiplayer-fps-introduction":"/src/content/blog/making-a-multiplayer-fps-introduction.md","migrating-my-portfolio-to-astro":"/src/content/blog/migrating-my-portfolio-to-astro.md","making-a-multiplayer-fps-interpolation":"/src/content/blog/making-a-multiplayer-fps-interpolation.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/author/david.md": () => import('./david_zBMl8ROJ.mjs'),"/src/content/blog/building-a-unixshell-in-rust-part-1.md": () => import('./building-a-unixshell-in-rust-part-1_KXf3TyRE.mjs'),"/src/content/blog/building-a-unixshell-in-rust-part-2.md": () => import('./building-a-unixshell-in-rust-part-2_n5f7kr-9.mjs'),"/src/content/blog/building-a-unixshell-in-rust-part-3.md": () => import('./building-a-unixshell-in-rust-part-3_f749-qri.mjs'),"/src/content/blog/building-a-unixshell-in-rust-part-4.md": () => import('./building-a-unixshell-in-rust-part-4_uFUem8ti.mjs'),"/src/content/blog/making-a-multiplayer-fps-basic-movement.md": () => import('./making-a-multiplayer-fps-basic-movement_LOKJt7KG.mjs'),"/src/content/blog/making-a-multiplayer-fps-interpolation.md": () => import('./making-a-multiplayer-fps-interpolation_sdryPGEQ.mjs'),"/src/content/blog/making-a-multiplayer-fps-introduction.md": () => import('./making-a-multiplayer-fps-introduction_BTHA5QW1.mjs'),"/src/content/blog/migrating-my-portfolio-to-astro.md": () => import('./migrating-my-portfolio-to-astro_6y1FaYQv.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const getSortedPosts = (posts) => posts.filter(({ data }) => !data.draft).sort(
  (a, b) => Math.floor(new Date(b.data.date).getTime() / 1e3) - Math.floor(new Date(a.data.date).getTime() / 1e3)
);

const $$Astro$g = createAstro("https://estikno.github.io");
const $$HackedTextEffect = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$HackedTextEffect;
  const { text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(text, "data-value")} id="hackedEffect">${renderSlot($$result, $$slots["default"])}</div> `;
}, "C:/Users/david/Desktop/portfolio/src/components/HackedTextEffect.astro", void 0);

const $$Astro$f = createAstro("https://estikno.github.io");
const $$Tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Tag;
  const { text } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Link", $$Link, { "href": `/tags/${slug(text)}`, "class_": "mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" }, { "default": ($$result2) => renderTemplate`${text.split(" ").join("-")}` })}`;
}, "C:/Users/david/Desktop/portfolio/src/components/Blog/Tag.astro", void 0);

const formatDate = (date) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  const now = new Date(date).toLocaleDateString(siteMetadata.locale, options);
  return now;
};

const $$Astro$e = createAstro("https://estikno.github.io");
const $$Pagination = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { totalPages, currentPage } = Astro2.props;
  const prevPage = currentPage - 1 > 0;
  const nextPage = currentPage + 1 <= totalPages;
  return renderTemplate`${maybeRenderHead()}<div class="space-y-2 pb-8 pt-6 md:space-y-5"> <nav class="flex justify-between"> ${!prevPage && renderTemplate`<button class="cursor-auto disabled:opacity-50 dark:text-gray-300"${addAttribute(!prevPage, "disabled")}>
Previous
</button>`} ${prevPage && renderTemplate`${renderComponent($$result, "Link", $$Link, { "href": currentPage - 1 === 1 ? `/blog/` : `/blog/page/${currentPage - 1}` }, { "default": ($$result2) => renderTemplate` <button class="dark:text-white">Previous</button> ` })}`} <span class="dark:text-white"> ${currentPage} of ${totalPages} </span> ${!nextPage && renderTemplate`<button class="cursor-auto disabled:opacity-50 dark:text-gray-300"${addAttribute(!nextPage, "disabled")}>
Next
</button>`} ${nextPage && renderTemplate`${renderComponent($$result, "Link", $$Link, { "href": `/blog/page/${currentPage + 1}` }, { "default": ($$result2) => renderTemplate` <button class="dark:text-white">Next</button> ` })}`} </nav> </div>`;
}, "C:/Users/david/Desktop/portfolio/src/components/Blog/Pagination.astro", void 0);

const $$Astro$d = createAstro("https://estikno.github.io");
const $$ListLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$ListLayout;
  const { posts, initialDisplayPosts = [], pagination, title } = Astro2.props;
  const displayPosts = initialDisplayPosts.length > 0 ? initialDisplayPosts : posts;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "All Posts - Dav1d", "description": "These are all my posts" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="divide-y"> <div class="space-y-2 pt-6 pb-8 md:space-y-5"> <h1 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"> ${renderComponent($$result2, "HackedTextEffect", $$HackedTextEffect, { "text": title }, { "default": ($$result3) => renderTemplate`${title}` })} </h1> <div class="relative max-w-lg"> <input aria-label="Search articles" type="text" placeholder="Search articles" class="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"> <svg class="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path> </svg> </div> </div> <ul> ${displayPosts.map((post) => {
    const { slug } = post;
    const { date, title: title2, summary, tags } = post.data;
    return renderTemplate`<li class="py-4"> <article class="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0"> <dl> <dt class="sr-only">Published on</dt> <dd class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400"> <time${addAttribute(date.toDateString(), "datetime")}> ${formatDate(date.toDateString())} </time> </dd> </dl> <div class="space-y-3 xl:col-span-3"> <div> <h3 class="text-2xl font-bold leading-8 tracking-tight"> ${renderComponent($$result2, "Link", $$Link, { "href": `/blog/${slug}`, "class_": "text-gray-900 dark:text-gray-100" }, { "default": ($$result3) => renderTemplate`${title2}` })} </h3> <div class="flex flex-wrap"> ${tags?.map((tag) => renderTemplate`${renderComponent($$result2, "Tag", $$Tag, { "text": tag })}`)} </div> </div> <div class="prose max-w-none text-gray-500 dark:text-gray-400"> ${summary} </div> </div> </article> </li>`;
  })} </ul> </div> ${pagination && pagination.totalPages > 1 && renderTemplate`${renderComponent($$result2, "Pagination", $$Pagination, { "currentPage": pagination.currentPage, "totalPages": pagination.totalPages })}`}` })}`;
}, "C:/Users/david/Desktop/portfolio/src/layouts/ListLayout.astro", void 0);

const $$Astro$c = createAstro("https://estikno.github.io");
async function getStaticPaths$2() {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  const totalPages = Math.ceil(posts.length / siteMetadata.postsPerPage);
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    page: (i + 1).toString()
  }));
  return paths.map((path) => ({
    params: { page: path.page },
    props: { page: path.page }
  }));
}
const $$page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$page;
  const { page } = Astro2.props;
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  const sortedPosts = getSortedPosts(posts);
  const pageNumber = parseInt(page);
  const initialDisplayPosts = sortedPosts.slice(
    siteMetadata.postsPerPage * (pageNumber - 1),
    siteMetadata.postsPerPage * pageNumber
  );
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / siteMetadata.postsPerPage)
  };
  return renderTemplate`${renderComponent($$result, "ListLayout", $$ListLayout, { "posts": sortedPosts, "initialDisplayPosts": initialDisplayPosts, "pagination": pagination, "title": "All Posts" })}`;
}, "C:/Users/david/Desktop/portfolio/src/pages/blog/page/[page].astro", void 0);

const $$file$6 = "C:/Users/david/Desktop/portfolio/src/pages/blog/page/[page].astro";
const $$url$6 = "/blog/page/[page]";

const _page_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$page,
    file: $$file$6,
    getStaticPaths: getStaticPaths$2,
    url: $$url$6
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$b = createAstro("https://estikno.github.io");
const $$Skill = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Skill;
  const { skill } = Astro2.props;
  return renderTemplate`${skill.length > 11 ? renderTemplate`${maybeRenderHead()}<div class="dark:bg-gray-700 bg-gray-300 rounded-lg px-6 py-2.5 text-center col-span-2"><span class="text-gray-900 dark:text-gray-100 font-semibold text-base">${skill}</span></div>` : renderTemplate`<div class="dark:bg-gray-700 bg-gray-300 rounded-lg px-6 py-2.5 text-center"><span class="text-gray-900 dark:text-gray-100 font-semibold text-base">${skill}</span></div>`}`;
}, "C:/Users/david/Desktop/portfolio/src/components/Home/Skill.astro", void 0);

const $$Astro$a = createAstro("https://estikno.github.io");
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Index$2;
  const skills = [
    "Unity",
    "Multiplayer Development",
    "Github",
    "Backend Development",
    "Typescript",
    "React",
    "Astro",
    "Frontend Development",
    "C#",
    ".NET",
    "Blender",
    "Rust",
    "Low level"
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Home - Dav1d" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="flex flex-col"> <div class="flex flex-col gap-12 mt-10 h-[calc(100vh-11.71rem)] min-h-[600px]"> <h1 class="md:text-8xl text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-3">
Dedicated Back-End, Low-Level & Game Developer
</h1> <h3 class="text-xl font-normal leading-8 tracking-tight text-gray-900 dark:text-gray-100 mb-4">
I'm Full-Stack developer, committed to continuous improvement and
                growth, ensuring the delivery of top-notch digital solutions.
</h3> <hr class="h-1 border-t-0 opacity-100 dark:opacity-50 rounded-md w-1/6 bg-primary-500"> <div class="mouse_parent absolute bottom-[3%] left-1/2 -translate-x-1/2"> <div class="mouse_scroll"></div> </div> </div> <div class="flex flex-col gap-6 mt-16"> <h2 class="text-5xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 text-center">
About Me
</h2> <hr class="h-1 border-t-0 bg-primary-500 opacity-100 dark:opacity-50 rounded-md w-1/12 mx-auto"> <h3 class="text-xl font-normal leading-8 tracking-tight text-gray-900 dark:text-gray-100 mb-4 text-center">
Here you will find more information about me, what I do, and my
                current skills mostly in terms of programming and technology
</h3> <div class="flex md:flex-row flex-col gap-4"> <div class="basis-1/2 flex flex-col gap-6"> <h4 class="text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
Get to know me!
</h4> <div class="flex flex-col gap-3 font-normal leading-8 tracking-tight text-gray-900 dark:text-gray-100"> <span>I am a dedicated Dedicated Back-End, Low-Level & Game Developer,
                            passionate about creating immersive digital
                            experiences. Explore my ongoing and completed
                            projects in the Projects section, where I blend
                            creativity and technical prowess to bring ideas to
                            life.
</span> <span>
In addition to my development work, I maintain a
                            blog right here on the page, offering insights and
                            knowledge gained throughout my journey.
</span> <span>Currently, I am developing a simple 2D game engine in rust.
                            Explore the blog page for updates on its progress,
                            and visit the projects page for a brief overview.</span> </div> <a href="/blog" class="bg-primary-500 hover:bg-primary-600 text-gray-900 dark:text-gray-100 font-medium rounded-lg text-xl px-5 py-3 md:w-3/5 xl:w-2/5 text-center">BLOG POSTS</a> </div> <div class="basis-1/2 flex flex-col gap-6"> <h4 class="text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
My Skills
</h4> <div class="grid gap-3 xl:grid-cols-4 grid-cols-3"> ${skills.map((skill) => renderTemplate`${renderComponent($$result2, "Skill", $$Skill, { "skill": skill })}`)} </div> </div> </div> </div> </div> ` })}`;
}, "C:/Users/david/Desktop/portfolio/src/pages/index.astro", void 0);

const $$file$5 = "C:/Users/david/Desktop/portfolio/src/pages/index.astro";
const $$url$5 = "";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$2,
    file: $$file$5,
    url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$9 = createAstro("https://estikno.github.io");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Index$1;
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  const sortedPosts = getSortedPosts(posts);
  const initialDisplayPosts = sortedPosts.slice(0, siteMetadata.postsPerPage);
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / siteMetadata.postsPerPage)
  };
  return renderTemplate`${renderComponent($$result, "ListLayout", $$ListLayout, { "posts": sortedPosts, "initialDisplayPosts": initialDisplayPosts, "pagination": pagination, "title": "All Posts" })}`;
}, "C:/Users/david/Desktop/portfolio/src/pages/blog/index.astro", void 0);

const $$file$4 = "C:/Users/david/Desktop/portfolio/src/pages/blog/index.astro";
const $$url$4 = "/blog";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$1,
    file: $$file$4,
    url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const slugify = (post) => post.customSlug ? slug(post.customSlug) : slug(post.title);

const $$Astro$8 = createAstro("https://estikno.github.io");
const $$ScrollTopAndComment = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$ScrollTopAndComment;
  return renderTemplate`${maybeRenderHead()}<div class="fixed bottom-8 right-8 hidden flex-col gap-3 md:hidden" id="showScroll"> <button aria-label="Scroll To Top" type="button" id="scrollToTop" class="rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"> <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"> <path d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"></path> </svg> </button> </div> `;
}, "C:/Users/david/Desktop/portfolio/src/components/Blog/ScrollTopAndComment.astro", void 0);

const $$Astro$7 = createAstro("https://estikno.github.io");
const $$PageTitle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$PageTitle;
  return renderTemplate`${maybeRenderHead()}<h1 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14"> ${renderSlot($$result, $$slots["default"])} </h1>`;
}, "C:/Users/david/Desktop/portfolio/src/components/PageTitle.astro", void 0);

const avatar = new Proxy({"src":"/_astro/avatar.L70rEw0e.webp","width":460,"height":460,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/david/Desktop/portfolio/src/assets/avatar.webp";
							}
							globalThis.astroAsset.referencedImages.add("C:/Users/david/Desktop/portfolio/src/assets/avatar.webp");
							return target[name];
						}
					});

const $$Astro$6 = createAstro("https://estikno.github.io");
const $$PostLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$PostLayout;
  const postDateTemplate = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  const { post, next, prev } = Astro2.props;
  const { date, title, author, tags, summary, canonicalUrl } = post.data;
  const authorDetails = await getCollection(
    "author",
    ({ id }) => id.startsWith(author.slug)
  );
  const { Content } = await post.render();
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": title, "author": author.slug, "description": summary, "canonicalURL": canonicalUrl }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionContainer", $$SectionContainer, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "ScrollTopAndComment", $$ScrollTopAndComment, {})} ${maybeRenderHead()}<article> <div class="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700"> <header class="pt-6 xl:pb-6"> <div class="space-y-1 text-center"> <dl class="space-y-10"> <div> <dt class="sr-only">Published on</dt> <dd class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400"> <time${addAttribute(date.toDateString(), "datetime")}> ${new Date(date).toLocaleDateString(
    siteMetadata.locale,
    postDateTemplate
  )} </time> </dd> </div> </dl> <div> ${renderComponent($$result3, "PageTitle", $$PageTitle, {}, { "default": ($$result4) => renderTemplate`${title}` })} </div> </div> </header> <div class="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0"${addAttribute({ gridTemplateRows: "auto 1fr" }, "style")}> <dl class="pb-10 pt-6 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700"> <dt class="sr-only">Authors</dt> <dd> <ul class="flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8"> ${authorDetails.map((author2) => {
    const { name, github } = author2.data;
    return renderTemplate`<li class="flex items-center space-x-2"> ${avatar && renderTemplate`${renderComponent($$result3, "Image", $$Image, { "src": avatar, "width": 38, "height": 38, "alt": "avatar", "class": "h-10 w-10 rounded-full" })}`} <dl class="whitespace-nowrap text-sm font-medium leading-5"> <dt class="sr-only">
Name
</dt> <dd class="text-gray-900 dark:text-gray-100"> ${name} </dd> <dt class="sr-only">
Twitter
</dt> <dd> ${github && renderTemplate`${renderComponent($$result3, "Link", $$Link, { "href": github, "class_": "text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" }, { "default": ($$result4) => renderTemplate`${github.replace(
      "https://github.com/",
      "@"
    )}` })}`} </dd> </dl> </li>`;
  })} </ul> </dd> </dl> <div class="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0"> <div class="prose max-w-none pb-8 pt-10 dark:prose-dark"> ${renderComponent($$result3, "Content", Content, {})} </div> <div class="pb-6 pt-6 text-sm text-gray-700 dark:text-gray-300">  </div>  </div> <footer> <div class="divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y"> ${tags && renderTemplate`<div class="py-4 xl:py-8"> <h2 class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
Tags
</h2> <div class="flex flex-wrap"> ${tags.map((tag) => renderTemplate`${renderComponent($$result3, "Tag", $$Tag, { "text": tag })}`)} </div> </div>`} ${(next || prev) && renderTemplate`<div class="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8"> ${prev && renderTemplate`<div> <h2 class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
Previous Article
</h2> <div class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"> ${renderComponent($$result3, "Link", $$Link, { "href": `/blog/${prev.slug}` }, { "default": ($$result4) => renderTemplate`${prev.data.title}` })} </div> </div>`} ${next && renderTemplate`<div> <h2 class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
Next Article
</h2> <div class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"> ${renderComponent($$result3, "Link", $$Link, { "href": `/blog/${next.slug}` }, { "default": ($$result4) => renderTemplate`${next.data.title}` })} </div> </div>`} </div>`} </div> <div class="pt-4 xl:pt-8"> ${renderComponent($$result3, "Link", $$Link, { "href": "/blog", "class_": "text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" }, { "default": ($$result4) => renderTemplate`
&larr; Back to the blog
` })} </div> </footer> </div> </div> </article> ` })} ` })}`;
}, "C:/Users/david/Desktop/portfolio/src/layouts/PostLayout.astro", void 0);

const $$Astro$5 = createAstro("https://estikno.github.io");
const $$PostSimple = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$PostSimple;
  const postDateTemplate = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  const { post, next, prev } = Astro2.props;
  const { title, date } = post.data;
  const { Content } = await post.render();
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionContainer", $$SectionContainer, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "ScrollTopAndComment", $$ScrollTopAndComment, {})} ${maybeRenderHead()}<article> <div> <header> <div class="space-y-1 border-b border-gray-200 pb-10 text-center dark:border-gray-700"> <dl> <div> <dt class="sr-only">Published on</dt> <dd class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400"> <time${addAttribute(date.toDateString(), "datetime")}> ${new Date(date).toLocaleDateString(
    siteMetadata.locale,
    postDateTemplate
  )} </time> </dd> </div> </dl> <div> ${renderComponent($$result3, "PageTitle", $$PageTitle, {}, { "default": ($$result4) => renderTemplate`${title}` })} </div> </div> </header> <div class="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0"${addAttribute({ gridTemplateRows: "auto 1fr" }, "style")}> <div class="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0"> <div class="prose max-w-none pb-8 pt-10 dark:prose-dark"> ${renderComponent($$result3, "Content", Content, {})} </div> </div>  <footer> <div class="flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base"> ${prev && renderTemplate`<div class="pt-4 xl:pt-8"> ${renderComponent($$result3, "Link", $$Link, { "href": `/blog/${prev.slug}`, "class_": "text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" }, { "default": ($$result4) => renderTemplate`
&larr; ${prev.data.title}` })} </div>`} ${next && renderTemplate`<div class="pt-4 xl:pt-8"> ${renderComponent($$result3, "Link", $$Link, { "href": `/blog/${next.slug}`, "class_": "text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" }, { "default": ($$result4) => renderTemplate`${next.data.title} &rarr;
` })} </div>`} </div> </footer> </div> </div> </article> ` })} ` })}`;
}, "C:/Users/david/Desktop/portfolio/src/layouts/PostSimple.astro", void 0);

const $$Astro$4 = createAstro("https://estikno.github.io");
async function getStaticPaths$1() {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  return posts.map((post) => ({
    params: { slug: slugify(post.data) },
    props: { post }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const { post } = Astro2.props;
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  const sortedPosts = getSortedPosts(posts);
  const postIndex = sortedPosts.findIndex((p) => p.slug === slug);
  const prev = sortedPosts[postIndex + 1] || null;
  const next = sortedPosts[postIndex - 1] || null;
  return renderTemplate`${post.data.customLayout === "PostLayout" ? renderTemplate`${renderComponent($$result, "PostLayout", $$PostLayout, { "post": post, "next": next, "prev": prev })}` : renderTemplate`${renderComponent($$result, "PostSimple", $$PostSimple, { "post": post, "next": next, "prev": prev })}`}`;
}, "C:/Users/david/Desktop/portfolio/src/pages/blog/[slug].astro", void 0);

const $$file$3 = "C:/Users/david/Desktop/portfolio/src/pages/blog/[slug].astro";
const $$url$3 = "/blog/[slug]";

const _slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$slug,
    file: $$file$3,
    getStaticPaths: getStaticPaths$1,
    url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const kyodoFrontend = new Proxy({"src":"/_astro/kyodo-frontend.0GlgvLiC.png","width":1879,"height":931,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/david/Desktop/portfolio/src/assets/projects/kyodo-frontend.png";
							}
							globalThis.astroAsset.referencedImages.add("C:/Users/david/Desktop/portfolio/src/assets/projects/kyodo-frontend.png");
							return target[name];
						}
					});

const deadLock = new Proxy({"src":"/_astro/deadlock.mXTQZRVs.png","width":1920,"height":1032,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/david/Desktop/portfolio/src/assets/projects/deadlock.png";
							}
							globalThis.astroAsset.referencedImages.add("C:/Users/david/Desktop/portfolio/src/assets/projects/deadlock.png");
							return target[name];
						}
					});

const cosmos = new Proxy({"src":"/_astro/cosmos.HHgJnkBJ.png","width":1917,"height":1033,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/david/Desktop/portfolio/src/assets/projects/cosmos.png";
							}
							globalThis.astroAsset.referencedImages.add("C:/Users/david/Desktop/portfolio/src/assets/projects/cosmos.png");
							return target[name];
						}
					});

const oxsh = new Proxy({"src":"/_astro/oxsh.gX1C14I6.png","width":1611,"height":890,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/david/Desktop/portfolio/src/assets/projects/oxsh.png";
							}
							globalThis.astroAsset.referencedImages.add("C:/Users/david/Desktop/portfolio/src/assets/projects/oxsh.png");
							return target[name];
						}
					});

const projectsData = [
  {
    title: "oxsh",
    description: `oxsh is a lightweight and customizable shell written in Rust, designed to offer a modern and efficient command line experience. This project aims to combine the robustness and safety features of Rust with the flexibility needed for a powerful shell environment. Whether you're a developer looking for a more efficient workflow or a system administrator in need of a reliable shell, oxsh is built to meet your needs with speed and stability.
        This is the project I'm currently working in, so stay tuned for future blog posts detailling its developement!
        `,
    imgSrc: oxsh,
    href: "https://github.com/Estikno/oxsh"
  },
  {
    title: "Cosmos",
    description: `Cosmos is a simple chess engine designed to test test your chess skills. Developed with Unity, Cosmos allows you to automatically review your games and provides the option to challenge a small AI opponent.`,
    imgSrc: cosmos,
    href: "/projects"
  },
  {
    title: "Paintball Online",
    description: `PaintballOnline (previosly known as Deadlock) is a completed multiplayer game project that I developed for a school project to enhance my skills in multiplayer game development.

        The primary goal was to create a final product similar to CS, offering a simple yet engaging gameplay experience with exceptional mechanics. Despite its simplicity, the game features robust logging capabilities to analyze network details such as average ping, packet loss, and more.

        Instead of aiming for a massive MMO, which would require an extensive amount of time, I focused on crafting a game with impactful mechanics within a reasonable timeframe. The entire project, including both the client and server components, was developed in Unity.

        This project was built using the devlogs I released, ensuring they remain valid and useful.

        To follow the progress and explore the project, you can find the links below.`,
    imgSrc: deadLock,
    href: "https://github.com/Estikno/PaintballOnline"
  },
  {
    title: "Kyodo",
    description: `Kyodo is an instant chat application entirely built by me and it's open source, so you can modify it to your needs.
        It offers a comfortable chat experience with a straightforward backend powered by Express.js and GraphQL. 
        This ensures instant message delivery and secure authentication, allowing users to engage in private or group chats effortlessly. 
        The frontend, built with React.js and Mantine, features a simple design, real-time messaging, and responsive layouts for optimal user experience. 
        Kyodo aims to provide a down-to-earth and enjoyable chat platform, combining simplicity with functionality.`,
    imgSrc: kyodoFrontend,
    href: "https://github.com/Estiknok/KyodoFrontend"
  }
];

const $$Astro$3 = createAstro("https://estikno.github.io");
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Card;
  const { title, description, imgSrc, href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="md p-4 md:w-1/2"${addAttribute({ maxWidth: "544px" }, "style")}> <div${addAttribute(`${imgSrc && "h-full"}  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`, "class")}> ${imgSrc && (href ? renderTemplate`${renderComponent($$result, "Link", $$Link, { "href": href, "aria-label": `Link to ${title}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Image", $$Image, { "alt": title, "src": imgSrc, "class": "object-cover object-center md:h-36 lg:h-48", "width": 544, "height": 306, "quality": "mid" })} ` })}` : renderTemplate`${renderComponent($$result, "Image", $$Image, { "alt": title, "src": imgSrc, "class": "object-cover object-center md:h-36 lg:h-48", "width": 544, "height": 306, "quality": "mid" })}`)} <div class="p-6"> <h2 class="mb-3 text-2xl font-bold leading-8 tracking-tight dark:text-gray-100"> ${href ? renderTemplate`${renderComponent($$result, "Link", $$Link, { "href": href, "aria-label": `Link to ${title}` }, { "default": ($$result2) => renderTemplate`${title}` })}` : title} </h2> <p class="prose mb-3 max-w-none text-gray-500 dark:text-gray-400"> ${description} </p> ${href && renderTemplate`${renderComponent($$result, "Link", $$Link, { "href": href, "class_": "text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400", "aria-label": `Link to ${title}` }, { "default": ($$result2) => renderTemplate`
Learn more &rarr;
` })}`} </div> </div> </div>`;
}, "C:/Users/david/Desktop/portfolio/src/components/Projects/Card.astro", void 0);

const $$Astro$2 = createAstro("https://estikno.github.io");
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Projects;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Home - Dav1d" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="divide-y divide-gray-200 dark:divide-gray-700"> <div class="space-y-2 pt-6 pb-8 md:space-y-5"> <h1 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"> ${renderComponent($$result2, "HackedTextEffect", $$HackedTextEffect, { "text": "Projects" }, { "default": ($$result3) => renderTemplate`Projects` })} </h1>  </div> <div class="container py-12"> <div class="-m-4 flex flex-wrap"> ${projectsData.map((d) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "title": d.title, "description": d.description, "imgSrc": d.imgSrc, "href": d.href })}`)} </div> </div> </div> ` })}`;
}, "C:/Users/david/Desktop/portfolio/src/pages/projects.astro", void 0);

const $$file$2 = "C:/Users/david/Desktop/portfolio/src/pages/projects.astro";
const $$url$2 = "/projects";

const projects = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Projects,
    file: $$file$2,
    url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

async function GET() {
  const posts = await getCollection("blog");
  const sortedPosts = await getSortedPosts(posts);
  return rss$1({
    title: "My portfolio and personal blog",
    description: "This is my portfolio and personal blog",
    site: siteMetadata.siteUrl,
    stylesheet: "/rss/styles.xsl",
    items: sortedPosts.map(({ data, slug }) => ({
      title: data.title,
      pubDate: new Date(data.date),
      description: data.summary,
      customData: `
            <author>${data.author.slug}</author>
            `,
      // Compute RSS link from post `slug`
      // This example assumes all posts are rendered as `/blog/[slug]` routes
      link: `/blog/${slug}/`
    }))
  });
}

const rss = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET
}, Symbol.toStringTag, { value: 'Module' }));

function getAllTags(posts) {
  posts.filter(({ data }) => !data.draft);
  const tagCount = {};
  posts.forEach((post) => {
    const { tags } = post.data;
    if (tags) {
      tags.forEach((tag) => {
        const formattedTag = slug(tag);
        if (formattedTag in tagCount) {
          tagCount[formattedTag] += 1;
        } else {
          tagCount[formattedTag] = 1;
        }
      });
    }
  });
  return tagCount;
}

const $$Astro$1 = createAstro("https://estikno.github.io");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = await getCollection("blog");
  const tags = getAllTags(posts);
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a]);
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "All Tags - Dav1d" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0"> <div class="space-x-2 pt-6 pb-8 md:space-y-5"> <h1 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl md:leading-14"> ${renderComponent($$result2, "HackedTextEffect", $$HackedTextEffect, { "text": "Tags" }, { "default": ($$result3) => renderTemplate`Tags` })} </h1> </div> <div class="flex max-w-lg flex-wrap"> ${Object.keys(tags).length === 0 && "No tags found."} ${sortedTags.map((t) => {
    return renderTemplate`<div class="mt-2 mb-2 mr-5"> ${renderComponent($$result2, "Tag", $$Tag, { "text": t })} ${renderComponent($$result2, "Link", $$Link, { "href": `/tags/${slug(t)}`, "class_": "-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300" }, { "default": ($$result3) => renderTemplate`${` (${tags[t]})`}` })} </div>`;
  })} </div> </div> ` })}`;
}, "C:/Users/david/Desktop/portfolio/src/pages/tags/index.astro", void 0);

const $$file$1 = "C:/Users/david/Desktop/portfolio/src/pages/tags/index.astro";
const $$url$1 = "/tags";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file$1,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://estikno.github.io");
async function getStaticPaths() {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  const tagCounts = getAllTags(posts);
  const tagKeys = Object.keys(tagCounts);
  const paths = tagKeys.map((tag) => ({
    tag
  }));
  return paths.map(({ tag }) => ({
    params: { tag },
    props: { tag }
  }));
}
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$tag;
  const { tag } = Astro2.props;
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  const filteredPosts = posts.filter(
    ({ data }) => data.tags.map((t) => slug(t)).includes(tag)
  );
  const sortedPosts = getSortedPosts(filteredPosts);
  const title = tag[0].toUpperCase() + tag.split(" ").join("-").slice(1);
  return renderTemplate`${renderComponent($$result, "ListLayout", $$ListLayout, { "posts": sortedPosts, "title": title })}`;
}, "C:/Users/david/Desktop/portfolio/src/pages/tags/[tag].astro", void 0);

const $$file = "C:/Users/david/Desktop/portfolio/src/pages/tags/[tag].astro";
const $$url = "/tags/[tag]";

const _tag_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$tag,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _404 as _, _page_ as a, index$1 as b, _slug_ as c, index as d, _tag_ as e, getImage as g, index$2 as i, projects as p, rss as r };
