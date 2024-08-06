import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, s as spreadAttributes } from './astro_JQFs6gbx.mjs';
import { g as getImage } from './prerender_JWpf4pTo.mjs';
import 'clsx';

const Astro__1pwVyC = new Proxy({"src":"/_astro/banner_2.R-Vuuew_.png","width":2560,"height":1440,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/david/Desktop/portfolio/src/assets/blog/Shell/2/banner_2.png";
							}
							globalThis.astroAsset.referencedImages.add("C:/Users/david/Desktop/portfolio/src/assets/blog/Shell/2/banner_2.png");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\.\\./\\.\\./assets/blog/Shell/2/banner_2\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/blog/Shell/2/banner_2.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__1pwVyC, ...props});
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
			const html = await updateImageReferences("<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/blog/Shell/2/banner_2.png&#x22;,&#x22;alt&#x22;:&#x22;banner&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>In the first post of this series, we laid the groundwork by discussing what a shell is and how it works. If you missed it, I suggest starting from there to get the full picture. Now, let’s dive into the next steps: reading user input, parsing that input into commands, and classifying those commands to execute the appropriate actions.</p>\n<h2 id=\"reading-user-input\"><a aria-hidden=\"true\" tabindex=\"-1\" href=\"#reading-user-input\"><span class=\"icon icon-link\"></span></a>Reading User Input</h2>\n<p>To start, we need our shell to read user input. This is the first step in our REPL (Read-Eval-Print-Loop) process. Here’s how we can achieve this in Rust:</p>\n<pre class=\"language-rust\"><code is:raw=\"\" class=\"language-rust\"><span class=\"token keyword\">use</span> <span class=\"token namespace\">std<span class=\"token punctuation\">::</span>io<span class=\"token punctuation\">::</span></span><span class=\"token punctuation\">{</span>stdin<span class=\"token punctuation\">,</span> stdout<span class=\"token punctuation\">,</span> <span class=\"token class-name\">Write</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">use</span> <span class=\"token namespace\">anyhow<span class=\"token punctuation\">::</span></span><span class=\"token class-name\">Result</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">fn</span> <span class=\"token function-definition function\">main</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">-></span> <span class=\"token class-name\">Result</span><span class=\"token operator\">&#x3C;</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">loop</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token comment\">// use the `>` character as the prompt</span>\n        <span class=\"token comment\">// need to explicitly flush this to ensure it prints before read_line</span>\n        <span class=\"token macro property\">print!</span><span class=\"token punctuation\">(</span><span class=\"token string\">\"> \"</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        <span class=\"token function\">stdout</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">flush</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token operator\">?</span><span class=\"token punctuation\">;</span>\n\n        <span class=\"token keyword\">let</span> <span class=\"token keyword\">mut</span> input <span class=\"token operator\">=</span> <span class=\"token class-name\">String</span><span class=\"token punctuation\">::</span><span class=\"token function\">new</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        <span class=\"token function\">stdin</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">read_line</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&#x26;</span><span class=\"token keyword\">mut</span> input<span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">unwrap</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n\n    <span class=\"token class-name\">Ok</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span>\n<span class=\"token punctuation\">}</span></code></pre>\n<h3 id=\"breaking-it-down\"><a aria-hidden=\"true\" tabindex=\"-1\" href=\"#breaking-it-down\"><span class=\"icon icon-link\"></span></a>Breaking It Down</h3>\n<ol>\n<li>\n<p><strong>Prompting the User:</strong> We use the <code>></code> character as the prompt. This signals to the user that the shell is ready for input.</p>\n</li>\n<li>\n<p><strong>Flushing stdout:</strong> <code>stdout().flush()?;</code> ensures that the prompt is printed immediately, not buffered. This is crucial for a good user experience.</p>\n</li>\n<li>\n<p><strong>Reading Input:</strong> We read the user input into a mutable <code>String</code> variable called <code>input</code> using <code>stdin().read_line(&#x26;mut input).unwrap();</code>. Even though this aproach of reading the user input is very bare bones, as the user cannot edit it while typing, not having the command history, etc. It is sufficient for now and it will be expanded in the future.</p>\n</li>\n</ol>\n<p>By this point, we can display a prompt and capture user input. Let’s move on to parsing this input.</p>\n<h2 id=\"parsing-the-input-into-commands\"><a aria-hidden=\"true\" tabindex=\"-1\" href=\"#parsing-the-input-into-commands\"><span class=\"icon icon-link\"></span></a>Parsing the Input into Commands</h2>\n<p>Once we have the user input, we need to parse it into a command and its arguments. This helps us determine what action to take.</p>\n<p>First, we trim the input using <code>input.trim()</code>, which removes any leading or trailing whitespace from the input string. Next, we split the input using <code>split_ascii_whitespace()</code>, which splits the input into an iterator of substrings separated by ASCII whitespace. To extract the command, we use <code>parts.next()</code>, which retrieves the first substring. If there’s no command (empty input), the loop continues. Finally, we extract the arguments by capturing the remaining substrings as the command’s arguments with <code>let args = parts;</code>.</p>\n<p>Here is the code that does this process:</p>\n<pre class=\"language-rust\"><code is:raw=\"\" class=\"language-rust\"><span class=\"token keyword\">let</span> <span class=\"token keyword\">mut</span> parts <span class=\"token operator\">=</span> input<span class=\"token punctuation\">.</span><span class=\"token function\">trim</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">split_ascii_whitespace</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">let</span> command<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">match</span> parts<span class=\"token punctuation\">.</span><span class=\"token function\">next</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token class-name\">Some</span><span class=\"token punctuation\">(</span>com<span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> command <span class=\"token operator\">=</span> com<span class=\"token punctuation\">,</span>\n    <span class=\"token class-name\">None</span> <span class=\"token operator\">=></span> <span class=\"token keyword\">continue</span><span class=\"token punctuation\">,</span>  <span class=\"token comment\">// continue if no command provided</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">let</span> args <span class=\"token operator\">=</span> parts<span class=\"token punctuation\">;</span></code></pre>\n<h2 id=\"classifying-commands\"><a aria-hidden=\"true\" tabindex=\"-1\" href=\"#classifying-commands\"><span class=\"icon icon-link\"></span></a>Classifying Commands</h2>\n<p>With the command and arguments parsed, we need to classify and handle them appropriately.</p>\n<p>To do this, we pass the command into a match block and check if it matches a built-in command. If it doesn’t, we assume the command is external and execute it. If it turns out not to be a correct command, we display an error message and restart the loop.</p>\n<pre class=\"language-rust\"><code is:raw=\"\" class=\"language-rust\"><span class=\"token keyword\">match</span> command <span class=\"token punctuation\">{</span>\n    <span class=\"token string\">\"cd\"</span> <span class=\"token operator\">=></span> <span class=\"token function\">cd</span><span class=\"token punctuation\">(</span>args<span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n    <span class=\"token string\">\"exit\"</span> <span class=\"token operator\">=></span> <span class=\"token keyword\">break</span><span class=\"token punctuation\">,</span>\n    command <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">let</span> child <span class=\"token operator\">=</span> <span class=\"token class-name\">Command</span><span class=\"token punctuation\">::</span><span class=\"token function\">new</span><span class=\"token punctuation\">(</span>command<span class=\"token punctuation\">)</span>\n            <span class=\"token punctuation\">.</span><span class=\"token function\">args</span><span class=\"token punctuation\">(</span>args<span class=\"token punctuation\">)</span>\n            <span class=\"token punctuation\">.</span><span class=\"token function\">spawn</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n        <span class=\"token keyword\">match</span> child <span class=\"token punctuation\">{</span>\n            <span class=\"token class-name\">Ok</span><span class=\"token punctuation\">(</span><span class=\"token keyword\">mut</span> child<span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span> child<span class=\"token punctuation\">.</span><span class=\"token function\">wait</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token operator\">?</span><span class=\"token punctuation\">;</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n            <span class=\"token class-name\">Err</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token macro property\">eprintln!</span><span class=\"token punctuation\">(</span><span class=\"token string\">\"{}\"</span><span class=\"token punctuation\">,</span> e<span class=\"token punctuation\">)</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span></code></pre>\n<p>For external commands, <code>Command::new(command).args(args).spawn()</code> tries to execute them. If the command executes successfully, <code>child.wait()?</code> waits for it to finish.</p>\n<p>If the command is a built-in one, it is necessary to create a function that implements its functionality and call it with the arguments as parameters, like the <code>cd</code> function in the code above.</p>\n<h2 id=\"conclusion\"><a aria-hidden=\"true\" tabindex=\"-1\" href=\"#conclusion\"><span class=\"icon icon-link\"></span></a>Conclusion</h2>\n<p>We’ve covered a lot in this post, from reading user input to parsing it into commands and arguments, and finally classifying and executing those commands. Our shell is taking shape, and we now have a basic REPL loop that can handle both built-in and external commands.</p>\n<p>In the next post, we’ll dive deeper into implementing more built-in commands and improving the user experience. Stay tuned, and happy coding!</p>\n<h2 id=\"next-steps\"><a aria-hidden=\"true\" tabindex=\"-1\" href=\"#next-steps\"><span class=\"icon icon-link\"></span></a>Next Steps</h2>\n<p>In the next post, we’ll focus on refactoring the code to improve readability, maintainability, and extend functionality. Stay tuned!</p>");
	

				const frontmatter = {"title":"Building a Unix-shell in Rust - Part 2","date":"2024-07-27","tags":["rust"],"draft":false,"summary":"In this second part of the series on building a Unix shell in Rust, we dive into the essential steps of reading user input, parsing it into commands, and classifying those commands for execution.","author":"david","customLayout":"PostLayout","customSlug":"building-a-unixshell-in-rust-part-2"};
				const file = "C:/Users/david/Desktop/portfolio/src/content/blog/building-a-unixshell-in-rust-part-2.md";
				const url = undefined;
				function rawContent() {
					return "\r\n![banner](../../assets/blog/Shell/2/banner_2.png)\r\n\r\nIn the first post of this series, we laid the groundwork by discussing what a shell is and how it works. If you missed it, I suggest starting from there to get the full picture. Now, let's dive into the next steps: reading user input, parsing that input into commands, and classifying those commands to execute the appropriate actions.\r\n\r\n## Reading User Input\r\n\r\nTo start, we need our shell to read user input. This is the first step in our REPL (Read-Eval-Print-Loop) process. Here's how we can achieve this in Rust:\r\n\r\n```rust\r\nuse std::io::{stdin, stdout, Write};\r\n\r\nuse anyhow::Result;\r\n\r\nfn main() -> Result<()> {\r\n    loop {\r\n        // use the `>` character as the prompt\r\n        // need to explicitly flush this to ensure it prints before read_line\r\n        print!(\"> \");\r\n        stdout().flush()?;\r\n\r\n        let mut input = String::new();\r\n        stdin().read_line(&mut input).unwrap();\r\n    }\r\n\r\n    Ok(())\r\n}\r\n```\r\n\r\n### Breaking It Down\r\n\r\n1. **Prompting the User:** We use the `>` character as the prompt. This signals to the user that the shell is ready for input.\r\n\r\n2. **Flushing stdout:** `stdout().flush()?;` ensures that the prompt is printed immediately, not buffered. This is crucial for a good user experience.\r\n\r\n3. **Reading Input:** We read the user input into a mutable `String` variable called `input` using `stdin().read_line(&mut input).unwrap();`. Even though this aproach of reading the user input is very bare bones, as the user cannot edit it while typing, not having the command history, etc. It is sufficient for now and it will be expanded in the future.\r\n\r\nBy this point, we can display a prompt and capture user input. Let's move on to parsing this input.\r\n\r\n## Parsing the Input into Commands\r\n\r\nOnce we have the user input, we need to parse it into a command and its arguments. This helps us determine what action to take.\r\n\r\nFirst, we trim the input using `input.trim()`, which removes any leading or trailing whitespace from the input string. Next, we split the input using `split_ascii_whitespace()`, which splits the input into an iterator of substrings separated by ASCII whitespace. To extract the command, we use `parts.next()`, which retrieves the first substring. If there's no command (empty input), the loop continues. Finally, we extract the arguments by capturing the remaining substrings as the command's arguments with `let args = parts;`.\r\n\r\nHere is the code that does this process:\r\n\r\n```rust\r\nlet mut parts = input.trim().split_ascii_whitespace();\r\nlet command;\r\n\r\nmatch parts.next() {\r\n    Some(com) => command = com,\r\n    None => continue,  // continue if no command provided\r\n}\r\n\r\nlet args = parts;\r\n```\r\n\r\n## Classifying Commands\r\n\r\nWith the command and arguments parsed, we need to classify and handle them appropriately.\r\n\r\nTo do this, we pass the command into a match block and check if it matches a built-in command. If it doesn't, we assume the command is external and execute it. If it turns out not to be a correct command, we display an error message and restart the loop.\r\n\r\n```rust\r\nmatch command {\r\n    \"cd\" => cd(args),\r\n    \"exit\" => break,\r\n    command => {\r\n        let child = Command::new(command)\r\n            .args(args)\r\n            .spawn();\r\n\r\n        match child {\r\n            Ok(mut child) => { child.wait()?; },\r\n            Err(e) => eprintln!(\"{}\", e)\r\n        };\r\n    }\r\n}\r\n```\r\n\r\nFor external commands, `Command::new(command).args(args).spawn()` tries to execute them. If the command executes successfully, `child.wait()?` waits for it to finish.\r\n\r\nIf the command is a built-in one, it is necessary to create a function that implements its functionality and call it with the arguments as parameters, like the `cd` function in the code above.\r\n\r\n## Conclusion\r\n\r\nWe've covered a lot in this post, from reading user input to parsing it into commands and arguments, and finally classifying and executing those commands. Our shell is taking shape, and we now have a basic REPL loop that can handle both built-in and external commands.\r\n\r\nIn the next post, we'll dive deeper into implementing more built-in commands and improving the user experience. Stay tuned, and happy coding!\r\n\r\n## Next Steps\r\n\r\nIn the next post, we'll focus on refactoring the code to improve readability, maintainability, and extend functionality. Stay tuned!";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"reading-user-input","text":"Reading User Input"},{"depth":3,"slug":"breaking-it-down","text":"Breaking It Down"},{"depth":2,"slug":"parsing-the-input-into-commands","text":"Parsing the Input into Commands"},{"depth":2,"slug":"classifying-commands","text":"Classifying Commands"},{"depth":2,"slug":"conclusion","text":"Conclusion"},{"depth":2,"slug":"next-steps","text":"Next Steps"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
