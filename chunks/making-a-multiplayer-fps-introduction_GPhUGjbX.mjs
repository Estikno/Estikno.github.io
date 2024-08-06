import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, s as spreadAttributes } from './astro_JQFs6gbx.mjs';
import { g as getImage } from './prerender_JWpf4pTo.mjs';
import 'clsx';

const Astro__Z15AaxJ = new Proxy({"src":"/_astro/layout.KrM6mc9L.webp","width":1536,"height":864,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/david/Desktop/portfolio/src/assets/blog/Making_a_multiplayer_fps/1/layout.webp";
							}
							globalThis.astroAsset.referencedImages.add("C:/Users/david/Desktop/portfolio/src/assets/blog/Making_a_multiplayer_fps/1/layout.webp");
							return target[name];
						}
					});

const Astro__Z2wlegt = new Proxy({"src":"/_astro/connection.EyrorcXq.webp","width":1920,"height":977,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/david/Desktop/portfolio/src/assets/blog/Making_a_multiplayer_fps/1/connection.webp";
							}
							globalThis.astroAsset.referencedImages.add("C:/Users/david/Desktop/portfolio/src/assets/blog/Making_a_multiplayer_fps/1/connection.webp");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\.\\./\\.\\./assets/blog/Making_a_multiplayer_fps/1/layout\\.webp" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/blog/Making_a_multiplayer_fps/1/layout.webp" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__Z15AaxJ, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\.\\./\\.\\./assets/blog/Making_a_multiplayer_fps/1/connection\\.webp" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/blog/Making_a_multiplayer_fps/1/connection.webp" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__Z2wlegt, ...props});
													occurrenceCounter++;
											}
									}
					return imageSources;
			};

			async function updateImageReferences(html) {
				return images(html).then((imageSources) => {
						return html.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm, (full, imagePath) => {
								const decodedImagePath = JSON.parse(imagePath.replace(/&#x22;/g, '"'));
		
								// Use the 'index' property for each image occurrence
								const srcKey = decodedImagePath.src + '_' + decodedImagePath.index;
		
								if (imageSources[srcKey].srcSet && imageSources[srcKey].srcSet.values.length > 0) {
										imageSources[srcKey].attributes.srcset = imageSources[srcKey].srcSet.attribute;
								}
		
								const { index, ...attributesWithoutIndex } = imageSources[srcKey].attributes;
		
								return spreadAttributes({
										src: imageSources[srcKey].src,
										...attributesWithoutIndex,
								});
						});
				});
		}
		

		// NOTE: This causes a top-level await to appear in the user's code, which can break very easily due to a Rollup
	  // bug and certain adapters not supporting it correctly. See: https://github.com/rollup/rollup/issues/4708
	  // Tread carefully!
			const html = await updateImageReferences("<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/blog/Making_a_multiplayer_fps/1/layout.webp&#x22;,&#x22;alt&#x22;:&#x22;banner&#x22;,&#x22;index&#x22;:0}\"></p>\n<h2 id=\"introduction\"><a aria-hidden=\"true\" tabindex=\"-1\" href=\"#introduction\"><span class=\"icon icon-link\"></span></a>Introduction</h2>\n<p>Welcome to the first installment of this blog series, where I’ll take you through the journey of creating my very own online first-person shooter (FPS) game!</p>\n<p>I’ve always liked FPS games since I was a kid, games such as CSGO, Valorant, Call of Duty, etc. So I thought that it would be a fun idea to make my own online FPS game in order to understand how it’s done and to see the full process of creating such a game.</p>\n<h2 id=\"unity-as-the-game-engine\"><a aria-hidden=\"true\" tabindex=\"-1\" href=\"#unity-as-the-game-engine\"><span class=\"icon icon-link\"></span></a>Unity as the Game Engine:</h2>\n<p>I’ve decided to use <a href=\"https://unity.com\" target=\"_blank\">Unity</a> as the game engine of the project. This is because it is the game engine I know the most, and even though it would be beneficial to try other ones, I think that I would have a difficult time developing the game than additionally having to learn a new engine like Unreal Engine or Godot.</p>\n<p>It’s also important to consider that Unity is the most popular one, so there is a lot of documentation which will be helpful in my journey as I never developed a multiplayer game before.</p>\n<h2 id=\"riptide-as-the-networking-library\"><a aria-hidden=\"true\" tabindex=\"-1\" href=\"#riptide-as-the-networking-library\"><span class=\"icon icon-link\"></span></a>Riptide as the networking library:</h2>\n<p>For the multiplayer aspect of my FPS game, I’ll be utilizing a new library called <a href=\"https://riptide.tomweiland.net\" target=\"_blank\">Riptide</a>, developed by the talented <a href=\"https://tomweiland.net\" target=\"_blank\">Tom Weilland</a>.</p>\n<p>This lightweight library is designed to be used in networking in Unity as well as in all over <code>.NET</code>. The library gives you low-level control of the networking stuff which is excellent, but everything has a catch; in this case, you are responsible for organizing the messages IDs, protocol methods, and everything else needed. This may seem tedious and confusing, but the amount of power you have means that you can implement basically anything you need.</p>\n<p>On the other hand, a library like <a href=\"https://mirror-networking.com\" target=\"_blank\">Mirror</a> is a lot easier and intuitive to use; however, it is very difficult to add new things that the library doesn’t have. So you have to evaluate which one suits better your needs.</p>\n<h2 id=\"connection-between-server-and-clients\"><a aria-hidden=\"true\" tabindex=\"-1\" href=\"#connection-between-server-and-clients\"><span class=\"icon icon-link\"></span></a>Connection Between Server and Clients:</h2>\n<p>One of the core elements that I’ve already set up is the connection between the server and clients. As I didn’t know basically anything about networking, I followed Tom Weiland’s <a href=\"https://youtube.com/playlist?list=PLXkn83W0Qkfn3qF7NU4OEtVwOD6U2wphJ&#x26;si=eoihff4o-7MEDrZv\" target=\"_blank\">tutorial series</a> on how to set up basic networking stuff needed for the game. You should check it out as well; it’s very well explained and easy to understand.</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/blog/Making_a_multiplayer_fps/1/connection.webp&#x22;,&#x22;alt&#x22;:&#x22;connection&#x22;,&#x22;index&#x22;:0}\"></p>\n<h2 id=\"what-to-expect\"><a aria-hidden=\"true\" tabindex=\"-1\" href=\"#what-to-expect\"><span class=\"icon icon-link\"></span></a>What to Expect:</h2>\n<p>Throughout this blog series, I’ll be sharing every step of my game development process. From the initial concept and design phase to coding, artwork, level creation, playtesting, and debugging, you’ll witness the challenges and triumphs of my journey. I’ll also document the lessons I learn, the valuable resources I find, and any tips and tricks that could be useful for fellow aspiring game developers.</p>\n<p>It is important to understand that this series is <code>not a tutorial one</code>. However, you will see how it is to work behind a project like this one.</p>\n<h2 id=\"conclusion\"><a aria-hidden=\"true\" tabindex=\"-1\" href=\"#conclusion\"><span class=\"icon icon-link\"></span></a>Conclusion:</h2>\n<p>I intend to share updates on this project approximately every two weeks, but don’t expect too much as in September I start my baccalaureate, and I don’t think I will have a lot of free time. I will continue to post at least on some weekends though.</p>\n<p>Thank you for joining me on this adventure, and I look forward to your support and feedback throughout this exciting process!</p>");
	

				const frontmatter = {"title":"Making a Multiplayer FPS: Introduction","date":"2023-07-23","tags":["Multiplayer","Unity"],"draft":false,"summary":"In this blog series, I'll be taking you through the process of creating my own online first-person shooter (FPS) game.","customLayout":"PostLayout"};
				const file = "C:/Users/david/Desktop/portfolio/src/content/blog/making-a-multiplayer-fps-introduction.md";
				const url = undefined;
				function rawContent() {
					return "\n![banner](../../assets/blog/Making_a_multiplayer_fps/1/layout.webp)\n\n## Introduction\n\nWelcome to the first installment of this blog series, where I'll take you through the journey of creating my very own online first-person shooter (FPS) game!\n\nI've always liked FPS games since I was a kid, games such as CSGO, Valorant, Call of Duty, etc. So I thought that it would be a fun idea to make my own online FPS game in order to understand how it's done and to see the full process of creating such a game.\n\n## Unity as the Game Engine:\n\nI've decided to use <a href=\"https://unity.com\" target=\"_blank\">Unity</a> as the game engine of the project. This is because it is the game engine I know the most, and even though it would be beneficial to try other ones, I think that I would have a difficult time developing the game than additionally having to learn a new engine like Unreal Engine or Godot.\n\nIt's also important to consider that Unity is the most popular one, so there is a lot of documentation which will be helpful in my journey as I never developed a multiplayer game before.\n\n## Riptide as the networking library:\n\nFor the multiplayer aspect of my FPS game, I'll be utilizing a new library called <a href=\"https://riptide.tomweiland.net\" target=\"_blank\">Riptide</a>, developed by the talented <a href=\"https://tomweiland.net\" target=\"_blank\">Tom Weilland</a>.\n\nThis lightweight library is designed to be used in networking in Unity as well as in all over `.NET`. The library gives you low-level control of the networking stuff which is excellent, but everything has a catch; in this case, you are responsible for organizing the messages IDs, protocol methods, and everything else needed. This may seem tedious and confusing, but the amount of power you have means that you can implement basically anything you need.\n\nOn the other hand, a library like <a href=\"https://mirror-networking.com\" target=\"_blank\">Mirror</a> is a lot easier and intuitive to use; however, it is very difficult to add new things that the library doesn't have. So you have to evaluate which one suits better your needs.\n\n## Connection Between Server and Clients:\n\nOne of the core elements that I've already set up is the connection between the server and clients. As I didn't know basically anything about networking, I followed Tom Weiland's <a href=\"https://youtube.com/playlist?list=PLXkn83W0Qkfn3qF7NU4OEtVwOD6U2wphJ&si=eoihff4o-7MEDrZv\" target=\"_blank\">tutorial series</a> on how to set up basic networking stuff needed for the game. You should check it out as well; it's very well explained and easy to understand.\n\n![connection](../../assets/blog/Making_a_multiplayer_fps/1/connection.webp)\n\n## What to Expect:\n\nThroughout this blog series, I'll be sharing every step of my game development process. From the initial concept and design phase to coding, artwork, level creation, playtesting, and debugging, you'll witness the challenges and triumphs of my journey. I'll also document the lessons I learn, the valuable resources I find, and any tips and tricks that could be useful for fellow aspiring game developers.\n\nIt is important to understand that this series is `not a tutorial one`. However, you will see how it is to work behind a project like this one.\n\n## Conclusion:\n\nI intend to share updates on this project approximately every two weeks, but don't expect too much as in September I start my baccalaureate, and I don't think I will have a lot of free time. I will continue to post at least on some weekends though.\n\nThank you for joining me on this adventure, and I look forward to your support and feedback throughout this exciting process!";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"introduction","text":"Introduction"},{"depth":2,"slug":"unity-as-the-game-engine","text":"Unity as the Game Engine:"},{"depth":2,"slug":"riptide-as-the-networking-library","text":"Riptide as the networking library:"},{"depth":2,"slug":"connection-between-server-and-clients","text":"Connection Between Server and Clients:"},{"depth":2,"slug":"what-to-expect","text":"What to Expect:"},{"depth":2,"slug":"conclusion","text":"Conclusion:"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
