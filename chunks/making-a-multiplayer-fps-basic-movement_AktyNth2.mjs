import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, s as spreadAttributes } from './astro_JQFs6gbx.mjs';
import { g as getImage } from './prerender_JWpf4pTo.mjs';
import 'clsx';

const Astro__8377T = new Proxy({"src":"/_astro/banner.ytRF3OYr.jpg","width":5472,"height":3648,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/david/Desktop/portfolio/src/assets/blog/Making_a_multiplayer_fps/2/banner.jpg";
							}
							globalThis.astroAsset.referencedImages.add("C:/Users/david/Desktop/portfolio/src/assets/blog/Making_a_multiplayer_fps/2/banner.jpg");
							return target[name];
						}
					});

const Astro__zVOAA = new Proxy({"src":"/_astro/NetDiagram.A4ckSjZZ.png","width":666,"height":399,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/david/Desktop/portfolio/src/assets/blog/Making_a_multiplayer_fps/2/NetDiagram.png";
							}
							globalThis.astroAsset.referencedImages.add("C:/Users/david/Desktop/portfolio/src/assets/blog/Making_a_multiplayer_fps/2/NetDiagram.png");
							return target[name];
						}
					});

const Astro__Z1UxByM = new Proxy({"src":"/_astro/interpolation.RJF9iyou.webp","width":3000,"height":1554,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/david/Desktop/portfolio/src/assets/blog/Making_a_multiplayer_fps/2/interpolation.webp";
							}
							globalThis.astroAsset.referencedImages.add("C:/Users/david/Desktop/portfolio/src/assets/blog/Making_a_multiplayer_fps/2/interpolation.webp");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\.\\./\\.\\./assets/blog/Making_a_multiplayer_fps/2/banner\\.jpg" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/blog/Making_a_multiplayer_fps/2/banner.jpg" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__8377T, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\.\\./\\.\\./assets/blog/Making_a_multiplayer_fps/2/NetDiagram\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/blog/Making_a_multiplayer_fps/2/NetDiagram.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__zVOAA, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\.\\./\\.\\./assets/blog/Making_a_multiplayer_fps/2/interpolation\\.webp" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/blog/Making_a_multiplayer_fps/2/interpolation.webp" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__Z1UxByM, ...props});
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
			const html = await updateImageReferences("<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/blog/Making_a_multiplayer_fps/2/banner.jpg&#x22;,&#x22;alt&#x22;:&#x22;Banner&#x22;,&#x22;index&#x22;:0}\"></p>\n<h2 id=\"introduction\"><a aria-hidden=\"true\" tabindex=\"-1\" href=\"#introduction\"><span class=\"icon icon-link\"></span></a>Introduction:</h2>\n<p>Welcome back to the second installment of my blog series. In this post, I’ll be discussing the implementation of basic player movement, a crucial aspect of every game. We will see the problems encountered as well as some possible solutions. Let’s dive in!</p>\n<h2 id=\"implementing-basic-movement\"><a aria-hidden=\"true\" tabindex=\"-1\" href=\"#implementing-basic-movement\"><span class=\"icon icon-link\"></span></a>Implementing Basic Movement:</h2>\n<p>Basic player movement is now fully functional in the game. Players can move, jump, and look around. I first did it without the networking to test that everything works and then proceeded to implement the multiplayer part of it. It was quite straightforward, as you simply send the input data to the server, then the server moves the player in its instance and sends the new location to all the clients.</p>\n<p>And why can’t we just move the player on the client and send the result to the server, wouldn’t that be faster and more responsive? You may be asking, well, even though it would be a lot faster and responsive, we would have massive problems with cheating, as any player could send the position they want their player to be at. In multiplayer games, <code>we don't trust the clients at all</code>, so we do all the calculations on the server.</p>\n<p>One exception to the rule is the <code>movement of the camera</code>, as we don’t want to override the rotation of the player’s camera with information from the server. That would cause conflicts with the rotation that the client calculated while the server was still processing previous input. And jittering when simply moving your mouse around is something we really want to avoid. Unfortunately, that means that we’re trusting players to calculate their own rotation, making the server calculate it simply causes too many problems, and even if that’s the case, it wouldn’t be too difficult to make the client calculate what kind of mouse movement would rotate them to be aiming right at someone, and then sending that to the server.</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/blog/Making_a_multiplayer_fps/2/NetDiagram.png&#x22;,&#x22;alt&#x22;:&#x22;Net Diagram&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>This is a diagram that simplifies the architecture of a multiplayer game. In this case, there are multiple servers, each one in charge of a specific region, but they all do the same.</p>\n<h2 id=\"testing-and-tweaking-the-movement\"><a aria-hidden=\"true\" tabindex=\"-1\" href=\"#testing-and-tweaking-the-movement\"><span class=\"icon icon-link\"></span></a>Testing and Tweaking the Movement:</h2>\n<p>To ensure that player movement feels just right, I created another test project to rapidly test new movement values without having to connect to a server or anything. By fine-tuning these movement settings in the test project, I can easily apply the optimized movement to the main project; this process is faster than having to have the server open each time you tweak a parameter to test it.</p>\n<h2 id=\"jittering-movement-issue\"><a aria-hidden=\"true\" tabindex=\"-1\" href=\"#jittering-movement-issue\"><span class=\"icon icon-link\"></span></a>Jittering Movement Issue:</h2>\n<p>While the basic movement mechanics are in place, I’ve noticed a slight problem with the movement. And that is that the movement is jittery; this occurs because the server cannot send information every nanosecond, so it sends packets of information at a fixed number of times per second; this is known as <code>ticks</code>. In my case, the server runs at 32 ticks, so it sends information to clients 32 times per second; this is what makes the jittering problem.</p>\n<p>To address this issue, there is a “simple” solution. In the future, I plan to implement interpolation, a technique that will smooth out movement by predicting a more fluid path between received positions. What basically does is that given 2 positions calculated by the server, the client will smoothly transition the player between those 2 positions.</p>\n<p>This is a very simple example of how interpolation works:</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/blog/Making_a_multiplayer_fps/2/interpolation.webp&#x22;,&#x22;alt&#x22;:&#x22;Interpolation image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p><strong>It is important to know that the interpolation is <code>only used by the clients</code>, as seen in the image above, so the server will send the information as normal.</strong></p>");
	

				const frontmatter = {"title":"Making a Multiplayer FPS: Basic Movement","date":"2023-07-30","tags":["Multiplayer","Unity"],"draft":false,"summary":"In this post, I've successfully implemented basic player movement. Players can move, jump, and look around. Jittering is the next problem to be solved.","customLayout":"PostLayout"};
				const file = "C:/Users/david/Desktop/portfolio/src/content/blog/making-a-multiplayer-fps-basic-movement.md";
				const url = undefined;
				function rawContent() {
					return "\n![Banner](../../assets/blog/Making_a_multiplayer_fps/2/banner.jpg)\n\n## Introduction:\n\nWelcome back to the second installment of my blog series. In this post, I'll be discussing the implementation of basic player movement, a crucial aspect of every game. We will see the problems encountered as well as some possible solutions. Let's dive in!\n\n## Implementing Basic Movement:\n\nBasic player movement is now fully functional in the game. Players can move, jump, and look around. I first did it without the networking to test that everything works and then proceeded to implement the multiplayer part of it. It was quite straightforward, as you simply send the input data to the server, then the server moves the player in its instance and sends the new location to all the clients.\n\nAnd why can't we just move the player on the client and send the result to the server, wouldn't that be faster and more responsive? You may be asking, well, even though it would be a lot faster and responsive, we would have massive problems with cheating, as any player could send the position they want their player to be at. In multiplayer games, `we don't trust the clients at all`, so we do all the calculations on the server.\n\nOne exception to the rule is the `movement of the camera`, as we don't want to override the rotation of the player's camera with information from the server. That would cause conflicts with the rotation that the client calculated while the server was still processing previous input. And jittering when simply moving your mouse around is something we really want to avoid. Unfortunately, that means that we're trusting players to calculate their own rotation, making the server calculate it simply causes too many problems, and even if that's the case, it wouldn't be too difficult to make the client calculate what kind of mouse movement would rotate them to be aiming right at someone, and then sending that to the server.\n\n![Net Diagram](../../assets/blog/Making_a_multiplayer_fps/2/NetDiagram.png)\n\nThis is a diagram that simplifies the architecture of a multiplayer game. In this case, there are multiple servers, each one in charge of a specific region, but they all do the same.\n\n## Testing and Tweaking the Movement:\n\nTo ensure that player movement feels just right, I created another test project to rapidly test new movement values without having to connect to a server or anything. By fine-tuning these movement settings in the test project, I can easily apply the optimized movement to the main project; this process is faster than having to have the server open each time you tweak a parameter to test it.\n\n## Jittering Movement Issue:\n\nWhile the basic movement mechanics are in place, I've noticed a slight problem with the movement. And that is that the movement is jittery; this occurs because the server cannot send information every nanosecond, so it sends packets of information at a fixed number of times per second; this is known as `ticks`. In my case, the server runs at 32 ticks, so it sends information to clients 32 times per second; this is what makes the jittering problem.\n\nTo address this issue, there is a \"simple\" solution. In the future, I plan to implement interpolation, a technique that will smooth out movement by predicting a more fluid path between received positions. What basically does is that given 2 positions calculated by the server, the client will smoothly transition the player between those 2 positions.\n\nThis is a very simple example of how interpolation works:\n\n![Interpolation image](../../assets/blog/Making_a_multiplayer_fps/2/interpolation.webp)\n\n**It is important to know that the interpolation is `only used by the clients`, as seen in the image above, so the server will send the information as normal.**";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"introduction","text":"Introduction:"},{"depth":2,"slug":"implementing-basic-movement","text":"Implementing Basic Movement:"},{"depth":2,"slug":"testing-and-tweaking-the-movement","text":"Testing and Tweaking the Movement:"},{"depth":2,"slug":"jittering-movement-issue","text":"Jittering Movement Issue:"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
