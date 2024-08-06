import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, s as spreadAttributes } from './astro_JQFs6gbx.mjs';
import { g as getImage } from './prerender_JWpf4pTo.mjs';
import 'clsx';

const Astro__18hNM2 = new Proxy({"src":"/_astro/InterpolationGraph.VohD84Nb.jpg","width":617,"height":512,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/david/Desktop/portfolio/src/assets/blog/Making_a_multiplayer_fps/3/InterpolationGraph.jpg";
							}
							globalThis.astroAsset.referencedImages.add("C:/Users/david/Desktop/portfolio/src/assets/blog/Making_a_multiplayer_fps/3/InterpolationGraph.jpg");
							return target[name];
						}
					});

const Astro__Z1RG3r1 = new Proxy({"src":"/_astro/WeaponInheritance.uWsAoY4Y.png","width":770,"height":564,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/david/Desktop/portfolio/src/assets/blog/Making_a_multiplayer_fps/3/WeaponInheritance.png";
							}
							globalThis.astroAsset.referencedImages.add("C:/Users/david/Desktop/portfolio/src/assets/blog/Making_a_multiplayer_fps/3/WeaponInheritance.png");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\.\\./\\.\\./assets/blog/Making_a_multiplayer_fps/3/InterpolationGraph\\.jpg" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/blog/Making_a_multiplayer_fps/3/InterpolationGraph.jpg" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__18hNM2, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\.\\./\\.\\./assets/blog/Making_a_multiplayer_fps/3/WeaponInheritance\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/blog/Making_a_multiplayer_fps/3/WeaponInheritance.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__Z1RG3r1, ...props});
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
			const html = await updateImageReferences("<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/blog/Making_a_multiplayer_fps/3/InterpolationGraph.jpg&#x22;,&#x22;alt&#x22;:&#x22;banner&#x22;,&#x22;index&#x22;:0}\"></p>\n<h2 id=\"introduction\"><a aria-hidden=\"true\" tabindex=\"-1\" href=\"#introduction\"><span class=\"icon icon-link\"></span></a>Introduction:</h2>\n<p>Hi, and welcome back to the third part of this series. In this part, we will be seeing how I implemented interpolation and also started to develop the weapon system.</p>\n<p>Firstly, I know that it has been months since the last post, but as I mentioned in a previous post, this September I started my baccalaureate, and I haven’t had much time since then. I’m mainly making progress now that it’s Christmas and on weekends if I don’t have any exams.</p>\n<p>Now let’s see the progress made in this installment!</p>\n<h2 id=\"implementation-of-interpolation\"><a aria-hidden=\"true\" tabindex=\"-1\" href=\"#implementation-of-interpolation\"><span class=\"icon icon-link\"></span></a>Implementation of Interpolation:</h2>\n<p>As mentioned in the previous post, interpolation is the solution for the jittery movement seen as a result of not being able to send data every nanosecond. If you want more details, check out the previous post.</p>\n<p>The process of implementing this technique wasn’t that complicated; the most apt word is tedious. I had to read some articles to understand how this works and how to implement it, especially from <a href=\"https://developer.valvesoftware.com/wiki/Source_Multiplayer_Networking\" target=\"_blank\">Valve</a> on how they made multiplayer for <code>Source</code>. You should take a look at it as it was really helpful for me to understand interpolation as well as other things like <code>client-side prediction</code>, <code>lag compensation</code>, and more. Which are not implemented yet, but at least now I know what they are all about.</p>\n<p>This article was also a lot of help: <a href=\"https://www.gabrielgambetta.com/entity-interpolation.html\" target=\"_blank\">entity-interpolation</a></p>\n<p>Now that it is implemented, the movement is smooth, and it doesn’t seem anymore that you are running at 30 fps. However, I still need to optimize it a bit for certan cases where there are strage movememts.</p>\n<h2 id=\"starting-the-weapon-system\"><a aria-hidden=\"true\" tabindex=\"-1\" href=\"#starting-the-weapon-system\"><span class=\"icon icon-link\"></span></a>Starting the Weapon System:</h2>\n<p>I also started to create the weapon system, I haven’t finished it, and that’s because I want to make it as easy to use and convenient as possible. This includes adding <code>inheritance</code>, <code>scriptable objects</code>, <code>custom editor windows</code> for better management, and some little things more.</p>\n<p>I think I will talk about this in the next post, as I don’t want to make this one too long, and it is also not the main topic of this part.</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/blog/Making_a_multiplayer_fps/3/WeaponInheritance.png&#x22;,&#x22;alt&#x22;:&#x22;Inheritance&#x22;,&#x22;index&#x22;:0}\"></p>\n<p><em>Example of how inheritance works</em></p>\n<h2 id=\"conclusions\"><a aria-hidden=\"true\" tabindex=\"-1\" href=\"#conclusions\"><span class=\"icon icon-link\"></span></a>Conclusions:</h2>\n<p>With interpolation finally done, I have implemented one of the new things every multiplayer game has. The next important implementations are the ones already mentioned before, client-side prediction, lag compensation… Which from what I saw and read is not as <code>“easy”</code> to implement as interpolation. But we will see that in another installment.</p>");
	

				const frontmatter = {"title":"Making a Multiplayer FPS: Interpolation","date":"2024-01-27","tags":["Multiplayer","Unity"],"draft":false,"summary":"In this post we will see the implementation of interpolation as well as starting the weapon system.","author":"david","customLayout":"PostLayout"};
				const file = "C:/Users/david/Desktop/portfolio/src/content/blog/making-a-multiplayer-fps-interpolation.md";
				const url = undefined;
				function rawContent() {
					return "\n![banner](../../assets/blog/Making_a_multiplayer_fps/3/InterpolationGraph.jpg)\n\n## Introduction:\n\nHi, and welcome back to the third part of this series. In this part, we will be seeing how I implemented interpolation and also started to develop the weapon system.\n\nFirstly, I know that it has been months since the last post, but as I mentioned in a previous post, this September I started my baccalaureate, and I haven’t had much time since then. I’m mainly making progress now that it’s Christmas and on weekends if I don’t have any exams.\n\nNow let’s see the progress made in this installment!\n\n## Implementation of Interpolation:\n\nAs mentioned in the previous post, interpolation is the solution for the jittery movement seen as a result of not being able to send data every nanosecond. If you want more details, check out the previous post.\n\nThe process of implementing this technique wasn’t that complicated; the most apt word is tedious. I had to read some articles to understand how this works and how to implement it, especially from <a href=\"https://developer.valvesoftware.com/wiki/Source_Multiplayer_Networking\" target=\"_blank\">Valve</a> on how they made multiplayer for `Source`. You should take a look at it as it was really helpful for me to understand interpolation as well as other things like `client-side prediction`, `lag compensation`, and more. Which are not implemented yet, but at least now I know what they are all about.\n\nThis article was also a lot of help: <a href=\"https://www.gabrielgambetta.com/entity-interpolation.html\" target=\"_blank\">entity-interpolation</a>\n\nNow that it is implemented, the movement is smooth, and it doesn’t seem anymore that you are running at 30 fps. However, I still need to optimize it a bit for certan cases where there are strage movememts.\n\n## Starting the Weapon System:\n\nI also started to create the weapon system, I haven’t finished it, and that’s because I want to make it as easy to use and convenient as possible. This includes adding `inheritance`, `scriptable objects`, `custom editor windows` for better management, and some little things more.\n\nI think I will talk about this in the next post, as I don’t want to make this one too long, and it is also not the main topic of this part.\n\n![Inheritance](../../assets/blog/Making_a_multiplayer_fps/3/WeaponInheritance.png)\n\n_Example of how inheritance works_\n\n## Conclusions:\n\nWith interpolation finally done, I have implemented one of the new things every multiplayer game has. The next important implementations are the ones already mentioned before, client-side prediction, lag compensation… Which from what I saw and read is not as `“easy”` to implement as interpolation. But we will see that in another installment.";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"introduction","text":"Introduction:"},{"depth":2,"slug":"implementation-of-interpolation","text":"Implementation of Interpolation:"},{"depth":2,"slug":"starting-the-weapon-system","text":"Starting the Weapon System:"},{"depth":2,"slug":"conclusions","text":"Conclusions:"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
