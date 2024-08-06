import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_JQFs6gbx.mjs';
import 'kleur/colors';
import 'clsx';
import 'cssesc';

const html = "<p>As a full-stack developer, I strive to stay on the cutting edge of\nweb development to develop the most up-to-date and innovative solutions.</p>\n<p>While my main expertise lies in web development, I also have some\nexperience in game development. I’ve had the opportunity to work on\na few projects where I was able to utilize my skills in game design\nand development. I have created games for various platforms such as\nPC and mobile.</p>";

				const frontmatter = {"name":"David","avatar":"/src/assets/avatar.webp","occupation":"Software Developer","company":"Stanford University","email":"daviddidenco84@gmail.com","twitter":"https://twitter.com/Twitter","linkedin":"https://www.linkedin.com","github":"https://github.com/Estikno"};
				const file = "C:/Users/david/Desktop/portfolio/src/content/author/david.md";
				const url = undefined;
				function rawContent() {
					return "\nAs a full-stack developer, I strive to stay on the cutting edge of\nweb development to develop the most up-to-date and innovative solutions.\n\nWhile my main expertise lies in web development, I also have some\nexperience in game development. I've had the opportunity to work on\na few projects where I was able to utilize my skills in game design\nand development. I have created games for various platforms such as\nPC and mobile.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
