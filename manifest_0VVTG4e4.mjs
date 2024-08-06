import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import './chunks/astro_JQFs6gbx.mjs';
import 'clsx';
import 'cssesc';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    })
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"","routes":[{"file":"file:///C:/Users/david/Desktop/portfolio/dist/404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/david/Desktop/portfolio/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/david/Desktop/portfolio/dist/blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/david/Desktop/portfolio/dist/projects/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/projects","isIndex":false,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects.astro","pathname":"/projects","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/david/Desktop/portfolio/dist/rss","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\/?$","segments":[[{"content":"rss","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.ts","pathname":"/rss","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/david/Desktop/portfolio/dist/tags/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/tags","isIndex":true,"type":"page","pattern":"^\\/tags\\/?$","segments":[[{"content":"tags","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tags/index.astro","pathname":"/tags","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://estikno.github.io","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/david/Desktop/portfolio/src/pages/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/david/Desktop/portfolio/src/pages/blog/page/[page].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/david/Desktop/portfolio/src/pages/tags/[tag].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/david/Desktop/portfolio/src/pages/blog/[slug].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/david/Desktop/portfolio/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/Users/david/Desktop/portfolio/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/david/Desktop/portfolio/src/pages/projects.astro",{"propagation":"none","containsHead":true}],["C:/Users/david/Desktop/portfolio/src/pages/tags/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/Users/david/Desktop/portfolio/src/layouts/PostLayout.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/page/[page]@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/david/Desktop/portfolio/src/pages/rss.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss@_@ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/tags/[tag]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/tags/index@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/blog/page/[page]@_@astro":"pages/blog/page/_page_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/blog/[slug]@_@astro":"pages/blog/_slug_.astro.mjs","\u0000@astro-page:src/pages/projects@_@astro":"pages/projects.astro.mjs","\u0000@astro-page:src/pages/rss@_@ts":"pages/rss.astro.mjs","\u0000@astro-page:src/pages/tags/index@_@astro":"pages/tags.astro.mjs","\u0000@astro-page:src/pages/tags/[tag]@_@astro":"pages/tags/_tag_.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_0VVTG4e4.mjs","C:/Users/david/Desktop/portfolio/src/content/author/david.md?astroContentCollectionEntry=true":"chunks/david_vtj1yBXf.mjs","C:/Users/david/Desktop/portfolio/src/content/blog/building-a-unixshell-in-rust-part-1.md?astroContentCollectionEntry=true":"chunks/building-a-unixshell-in-rust-part-1_0Hyl6VSt.mjs","C:/Users/david/Desktop/portfolio/src/content/blog/building-a-unixshell-in-rust-part-2.md?astroContentCollectionEntry=true":"chunks/building-a-unixshell-in-rust-part-2_x2vhC-qV.mjs","C:/Users/david/Desktop/portfolio/src/content/blog/building-a-unixshell-in-rust-part-3.md?astroContentCollectionEntry=true":"chunks/building-a-unixshell-in-rust-part-3_j1yGhQdB.mjs","C:/Users/david/Desktop/portfolio/src/content/blog/building-a-unixshell-in-rust-part-4.md?astroContentCollectionEntry=true":"chunks/building-a-unixshell-in-rust-part-4_ab26EFQl.mjs","C:/Users/david/Desktop/portfolio/src/content/blog/making-a-multiplayer-fps-basic-movement.md?astroContentCollectionEntry=true":"chunks/making-a-multiplayer-fps-basic-movement_qsy4iH4x.mjs","C:/Users/david/Desktop/portfolio/src/content/blog/making-a-multiplayer-fps-interpolation.md?astroContentCollectionEntry=true":"chunks/making-a-multiplayer-fps-interpolation_jGcYNf8L.mjs","C:/Users/david/Desktop/portfolio/src/content/blog/making-a-multiplayer-fps-introduction.md?astroContentCollectionEntry=true":"chunks/making-a-multiplayer-fps-introduction_7rDyx6X8.mjs","C:/Users/david/Desktop/portfolio/src/content/blog/migrating-my-portfolio-to-astro.md?astroContentCollectionEntry=true":"chunks/migrating-my-portfolio-to-astro_qkSeWPAM.mjs","C:/Users/david/Desktop/portfolio/src/content/author/david.md?astroPropagatedAssets":"chunks/david_zBMl8ROJ.mjs","C:/Users/david/Desktop/portfolio/src/content/blog/building-a-unixshell-in-rust-part-1.md?astroPropagatedAssets":"chunks/building-a-unixshell-in-rust-part-1_KXf3TyRE.mjs","C:/Users/david/Desktop/portfolio/src/content/blog/building-a-unixshell-in-rust-part-2.md?astroPropagatedAssets":"chunks/building-a-unixshell-in-rust-part-2_n5f7kr-9.mjs","C:/Users/david/Desktop/portfolio/src/content/blog/building-a-unixshell-in-rust-part-3.md?astroPropagatedAssets":"chunks/building-a-unixshell-in-rust-part-3_f749-qri.mjs","C:/Users/david/Desktop/portfolio/src/content/blog/building-a-unixshell-in-rust-part-4.md?astroPropagatedAssets":"chunks/building-a-unixshell-in-rust-part-4_uFUem8ti.mjs","C:/Users/david/Desktop/portfolio/src/content/blog/making-a-multiplayer-fps-basic-movement.md?astroPropagatedAssets":"chunks/making-a-multiplayer-fps-basic-movement_LOKJt7KG.mjs","C:/Users/david/Desktop/portfolio/src/content/blog/making-a-multiplayer-fps-interpolation.md?astroPropagatedAssets":"chunks/making-a-multiplayer-fps-interpolation_sdryPGEQ.mjs","C:/Users/david/Desktop/portfolio/src/content/blog/making-a-multiplayer-fps-introduction.md?astroPropagatedAssets":"chunks/making-a-multiplayer-fps-introduction_BTHA5QW1.mjs","C:/Users/david/Desktop/portfolio/src/content/blog/migrating-my-portfolio-to-astro.md?astroPropagatedAssets":"chunks/migrating-my-portfolio-to-astro_6y1FaYQv.mjs","C:/Users/david/Desktop/portfolio/src/content/author/david.md":"chunks/david_TKFfJVNx.mjs","C:/Users/david/Desktop/portfolio/src/content/blog/building-a-unixshell-in-rust-part-1.md":"chunks/building-a-unixshell-in-rust-part-1_fBr00G1O.mjs","C:/Users/david/Desktop/portfolio/src/content/blog/building-a-unixshell-in-rust-part-2.md":"chunks/building-a-unixshell-in-rust-part-2_E-agtZxD.mjs","C:/Users/david/Desktop/portfolio/src/content/blog/building-a-unixshell-in-rust-part-3.md":"chunks/building-a-unixshell-in-rust-part-3_mKACOsxG.mjs","C:/Users/david/Desktop/portfolio/src/content/blog/building-a-unixshell-in-rust-part-4.md":"chunks/building-a-unixshell-in-rust-part-4_ShZRmvZ4.mjs","C:/Users/david/Desktop/portfolio/src/content/blog/making-a-multiplayer-fps-basic-movement.md":"chunks/making-a-multiplayer-fps-basic-movement_AktyNth2.mjs","C:/Users/david/Desktop/portfolio/src/content/blog/making-a-multiplayer-fps-interpolation.md":"chunks/making-a-multiplayer-fps-interpolation_OeLiuoN9.mjs","C:/Users/david/Desktop/portfolio/src/content/blog/making-a-multiplayer-fps-introduction.md":"chunks/making-a-multiplayer-fps-introduction_GPhUGjbX.mjs","C:/Users/david/Desktop/portfolio/src/content/blog/migrating-my-portfolio-to-astro.md":"chunks/migrating-my-portfolio-to-astro_-HBxnrZI.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.mTmvxNpi.js","/astro/hoisted.js?q=1":"_astro/hoisted.oWag_usr.js","/astro/hoisted.js?q=2":"_astro/hoisted.Jdc8DU9O.js","astro:scripts/before-hydration.js":""},"assets":["/file:///C:/Users/david/Desktop/portfolio/dist/404.html","/file:///C:/Users/david/Desktop/portfolio/dist/index.html","/file:///C:/Users/david/Desktop/portfolio/dist/blog/index.html","/file:///C:/Users/david/Desktop/portfolio/dist/projects/index.html","/file:///C:/Users/david/Desktop/portfolio/dist/rss","/file:///C:/Users/david/Desktop/portfolio/dist/tags/index.html"],"buildFormat":"directory"});

export { manifest };
