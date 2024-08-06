import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, s as spreadAttributes } from './astro_JQFs6gbx.mjs';
import { g as getImage } from './prerender_JWpf4pTo.mjs';
import 'clsx';

const Astro__Z15xCei = new Proxy({"src":"/_astro/ShellPhoto.ILMqpJh0.png","width":2174,"height":1302,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/david/Desktop/portfolio/src/assets/blog/Shell/1/ShellPhoto.png";
							}
							globalThis.astroAsset.referencedImages.add("C:/Users/david/Desktop/portfolio/src/assets/blog/Shell/1/ShellPhoto.png");
							return target[name];
						}
					});

const Astro__cLSLQ = new Proxy({"src":"/_astro/shell_diagram.erT6bRPk.webp","width":800,"height":1098,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/david/Desktop/portfolio/src/assets/blog/Shell/1/shell_diagram.webp";
							}
							globalThis.astroAsset.referencedImages.add("C:/Users/david/Desktop/portfolio/src/assets/blog/Shell/1/shell_diagram.webp");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\.\\./\\.\\./assets/blog/Shell/1/ShellPhoto\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/blog/Shell/1/ShellPhoto.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__Z15xCei, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\.\\./\\.\\./assets/blog/Shell/1/shell_diagram\\.webp" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/blog/Shell/1/shell_diagram.webp" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__cLSLQ, ...props});
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
			const html = await updateImageReferences("<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/blog/Shell/1/ShellPhoto.png&#x22;,&#x22;alt&#x22;:&#x22;banner&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>Throughout this year and last one, I haven’t stopped hearing how amazing Rust is and how awesome its developer experience is. In addition, Rust was ranked as one of the most loved programming languages in 2023. So, it was time to learn it and see why people praise it so much.</p>\n<p>To do that, I decided to build a Unix shell in Rust. It seems like a good starter project, and I use the terminal and shell commands a lot in my day-to-day tasks. It seemed like the perfect idea—not only to learn the language but also to understand how a shell works and what makes them so useful.</p>\n<h2 id=\"whats-a-shell\"><a aria-hidden=\"true\" tabindex=\"-1\" href=\"#whats-a-shell\"><span class=\"icon icon-link\"></span></a>What’s a Shell?</h2>\n<p>Before we dive into development, it’s important to know what a shell is. There’s often confusion among people when differentiating between a Shell, Terminal, and Prompt.</p>\n<p>Here’s a brief explanation of each concept:</p>\n<ul>\n<li><strong>Terminal:</strong> The terminal emulator (often just called terminal) is “the window” that displays the characters you type and sends them to the shell. It also shows the shell’s output in the window.</li>\n<li><strong>Shell:</strong> A shell is a program that allows you to control your computer more easily than manually doing it. It’s responsible for executing the commands you type.</li>\n<li><strong>Prompt:</strong> The prompt is just the line where you write the instructions for the shell. It’s what you can mainly customize to your liking via third-party scripts, such as oh-my-posh, oh-my-zsh, etc.</li>\n</ul>\n<p>Some examples of Unix shells, like the kind we’re making, are:</p>\n<ul>\n<li>Bourne-shell (sh)</li>\n<li>bash</li>\n<li>zsh</li>\n<li>fish</li>\n</ul>\n<p>Or the Windows-specific shells, which are confusingly both the shell and terminal emulator:</p>\n<ul>\n<li>Command Prompt (cmd)</li>\n<li>PowerShell</li>\n</ul>\n<p>Examples of terminal emulators:</p>\n<ul>\n<li>xterm</li>\n<li>rxvt</li>\n<li>Alacritty (which is also written in Rust)</li>\n<li>iTerm</li>\n<li>Terminal.app</li>\n<li>Command Prompt (cmd)</li>\n<li>PowerShell</li>\n</ul>\n<p>The goal is to write a shell similar to bash, as it’s the one I’ve used the most. I’ve also used zsh, but not as extensively as bash.</p>\n<h2 id=\"how-does-a-shell-work\"><a aria-hidden=\"true\" tabindex=\"-1\" href=\"#how-does-a-shell-work\"><span class=\"icon icon-link\"></span></a>How Does a Shell Work?</h2>\n<p>So now that we know what a shell is, how does it work? Well, a shell uses what is called a <strong>REPL (Read-Eval-Print-Loop)</strong>. This means you first type a command in the prompt, which is usually just a dollar sign (<code>$</code>). Then you hit enter to translate the command into an action. The shell executes it, and the output prints to the screen. This loop repeats forever, or until the user closes the terminal.</p>\n<p>Here is a diagram that explains more extensively what happens in the shell.\r\n<img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/blog/Shell/1/shell_diagram.webp&#x22;,&#x22;alt&#x22;:&#x22;Diagram_shell&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>Lets see this in action with an example using <code>ls</code>:</p>\n<ol>\n<li>\n<p>First, we type the command we want to execute, in this case, <code>ls</code>:</p>\n<pre class=\"language-bash\"><code is:raw=\"\" class=\"language-bash\">/ ❯ <span class=\"token function\">ls</span> </code></pre>\n</li>\n<li>\n<p>We hit enter, and the shell executes the command and its output is displayed:</p>\n<pre class=\"language-bash\"><code is:raw=\"\" class=\"language-bash\">/ ❯ <span class=\"token function\">ls</span> \nbin   dev  home  lib    lib64   lost+found  mnt  proc  run   snap  sys  usr\nboot  etc  init  lib32  libx32  media       opt  root  sbin  srv   tmp  var</code></pre>\n</li>\n<li>\n<p>At the end of the output, the loop repeats by letting you type another command:</p>\n<pre class=\"language-bash\"><code is:raw=\"\" class=\"language-bash\">/ ❯ <span class=\"token function\">ls</span> \nbin   dev  home  lib    lib64   lost+found  mnt  proc  run   snap  sys  usr\nboot  etc  init  lib32  libx32  media       opt  root  sbin  srv   tmp  var\n/ ❯  </code></pre>\n</li>\n</ol>\n<h2 id=\"architecture-of-our-shell\"><a aria-hidden=\"true\" tabindex=\"-1\" href=\"#architecture-of-our-shell\"><span class=\"icon icon-link\"></span></a>Architecture of Our Shell</h2>\n<p>Before starting to write code, it’s necessary to have everything well organized to be as efficient as possible when programming and to have a general view of the product and how it will be done.</p>\n<h3 id=\"execute-initial-scripts-and-shell-configurations\"><a aria-hidden=\"true\" tabindex=\"-1\" href=\"#execute-initial-scripts-and-shell-configurations\"><span class=\"icon icon-link\"></span></a>Execute Initial Scripts and Shell Configurations</h3>\n<p>Before starting to read user input, the shell has to read the configuration file. This is done to customize the shell to each user’s preferences.</p>\n<p>Although this step will be done later in the series, once all the base of the shell has been established, it is important to keep in mind that customization is crucial.</p>\n<h3 id=\"read-user-input\"><a aria-hidden=\"true\" tabindex=\"-1\" href=\"#read-user-input\"><span class=\"icon icon-link\"></span></a>Read User Input</h3>\n<p>After the initial configuration, we start the general loop by reading the user input. Most shells print a symbol to signal to the user that they can input a command.</p>\n<p>Next, we need to analyze the user input to determine if it is a built-in command or an external one.</p>\n<p>The difference between them is simple: a built-in command is directly handled by the shell itself, instead of executing an external process. In other words, it’s a function call within the shell’s code. An external command is either a binary in one of the directories in your PATH or located in a filesystem path (relative or absolute).</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th align=\"center\"><strong>Some Built-in Commands</strong></th><th align=\"center\"><strong>Some External Commands</strong></th></tr></thead><tbody><tr><td align=\"center\"><code>cd</code>, <code>help</code>, <code>echo</code></td><td align=\"center\"><code>grep</code>, <code>wget</code>, <code>curl</code></td></tr></tbody></table>\n<p>The most popular example of a built-in command is <code>cd</code>. The reason it must be built-in is that an external program can’t change the environment of the current working directory, so it must be changed by the shell itself. A more in-depth explanation can be found in <a href=\"https://unix.stackexchange.com/a/38809\">this link</a>.</p>\n<h3 id=\"then-we-execute\"><a aria-hidden=\"true\" tabindex=\"-1\" href=\"#then-we-execute\"><span class=\"icon icon-link\"></span></a>Then We Execute</h3>\n<p>When we use a command that calls a built-in, we simply pass the arguments to the function and return to the start of the loop when it completes.</p>\n<h4 id=\"and-when-we-call-an-executable\"><a aria-hidden=\"true\" tabindex=\"-1\" href=\"#and-when-we-call-an-executable\"><span class=\"icon icon-link\"></span></a>And When We Call an Executable?</h4>\n<p>We need to make a fork syscall, that is, create a new process for the executable to run in, so it can have its own memory space and manage its interactions with the operating system (The shell is still the parent process).</p>\n<h3 id=\"then-we-process\"><a aria-hidden=\"true\" tabindex=\"-1\" href=\"#then-we-process\"><span class=\"icon icon-link\"></span></a>Then We Process</h3>\n<p>This is when we cause side effects to the system.</p>\n<p>We want to provide feedback to the user to let them know the results of this process. To keep this simple, we will only consider returning text to the user, as we are providing commands as text.</p>\n<p>Our shell process has at least 3 file descriptors for passing input or receiving output: Stdin, Stdout, and Stderr.</p>\n<p>After the process is complete, any output should be printed to the screen, via stdout or stderr.</p>\n<h3 id=\"lastly-we-loop\"><a aria-hidden=\"true\" tabindex=\"-1\" href=\"#lastly-we-loop\"><span class=\"icon icon-link\"></span></a>Lastly, We Loop</h3>\n<p>Control returns to the user. The default user prompt prints as a visual cue (along with the typical blinking cursor), and we should be able to enter another command.</p>\n<h2 id=\"time-to-code\"><a aria-hidden=\"true\" tabindex=\"-1\" href=\"#time-to-code\"><span class=\"icon icon-link\"></span></a>Time to Code</h2>\n<p>Now that we have set the record straight on how the shell is going to work, we can start coding the basics. But that will be explained in the next post. See you next time!</p>");
	

				const frontmatter = {"title":"Building a Unix-shell in Rust - Part 1","date":"2024-07-22","tags":["rust"],"draft":false,"summary":"This is the first part of a series were I'll build a Unix shell in rust.","author":"david","customLayout":"PostLayout","customSlug":"building-a-unixshell-in-rust-part-1"};
				const file = "C:/Users/david/Desktop/portfolio/src/content/blog/building-a-unixshell-in-rust-part-1.md";
				const url = undefined;
				function rawContent() {
					return "\r\n![banner](../../assets/blog/Shell/1/ShellPhoto.png)\r\n\r\nThroughout this year and last one, I haven't stopped hearing how amazing Rust is and how awesome its developer experience is. In addition, Rust was ranked as one of the most loved programming languages in 2023. So, it was time to learn it and see why people praise it so much.\r\n\r\nTo do that, I decided to build a Unix shell in Rust. It seems like a good starter project, and I use the terminal and shell commands a lot in my day-to-day tasks. It seemed like the perfect idea—not only to learn the language but also to understand how a shell works and what makes them so useful.\r\n\r\n## What's a Shell?\r\n\r\nBefore we dive into development, it's important to know what a shell is. There's often confusion among people when differentiating between a Shell, Terminal, and Prompt.\r\n\r\nHere's a brief explanation of each concept:\r\n\r\n- **Terminal:** The terminal emulator (often just called terminal) is \"the window\" that displays the characters you type and sends them to the shell. It also shows the shell's output in the window.\r\n- **Shell:** A shell is a program that allows you to control your computer more easily than manually doing it. It's responsible for executing the commands you type.\r\n- **Prompt:** The prompt is just the line where you write the instructions for the shell. It's what you can mainly customize to your liking via third-party scripts, such as oh-my-posh, oh-my-zsh, etc.\r\n\r\nSome examples of Unix shells, like the kind we're making, are:\r\n\r\n- Bourne-shell (sh)\r\n- bash\r\n- zsh\r\n- fish\r\n\r\nOr the Windows-specific shells, which are confusingly both the shell and terminal emulator:\r\n\r\n- Command Prompt (cmd)\r\n- PowerShell\r\n\r\nExamples of terminal emulators:\r\n\r\n- xterm\r\n- rxvt\r\n- Alacritty (which is also written in Rust)\r\n- iTerm\r\n- Terminal.app\r\n- Command Prompt (cmd)\r\n- PowerShell\r\n\r\nThe goal is to write a shell similar to bash, as it's the one I've used the most. I've also used zsh, but not as extensively as bash.\r\n\r\n## How Does a Shell Work?\r\n\r\nSo now that we know what a shell is, how does it work? Well, a shell uses what is called a **REPL (Read-Eval-Print-Loop)**. This means you first type a command in the prompt, which is usually just a dollar sign (`$`). Then you hit enter to translate the command into an action. The shell executes it, and the output prints to the screen. This loop repeats forever, or until the user closes the terminal.\r\n\r\nHere is a diagram that explains more extensively what happens in the shell.\r\n![Diagram_shell](../../assets/blog/Shell/1/shell_diagram.webp)\r\n\r\nLets see this in action with an example using `ls`:\r\n\r\n1. First, we type the command we want to execute, in this case, `ls`:\r\n\r\n    ```bash\r\n    / ❯ ls \r\n    ```\r\n\r\n2. We hit enter, and the shell executes the command and its output is displayed:\r\n\r\n    ```bash\r\n    / ❯ ls \r\n    bin   dev  home  lib    lib64   lost+found  mnt  proc  run   snap  sys  usr\r\n    boot  etc  init  lib32  libx32  media       opt  root  sbin  srv   tmp  var\r\n    ```\r\n\r\n3. At the end of the output, the loop repeats by letting you type another command:\r\n\r\n    ```bash\r\n    / ❯ ls \r\n    bin   dev  home  lib    lib64   lost+found  mnt  proc  run   snap  sys  usr\r\n    boot  etc  init  lib32  libx32  media       opt  root  sbin  srv   tmp  var\r\n    / ❯  \r\n    ```\r\n\r\n## Architecture of Our Shell\r\n\r\nBefore starting to write code, it's necessary to have everything well organized to be as efficient as possible when programming and to have a general view of the product and how it will be done.\r\n\r\n### Execute Initial Scripts and Shell Configurations\r\n\r\nBefore starting to read user input, the shell has to read the configuration file. This is done to customize the shell to each user's preferences. \r\n\r\nAlthough this step will be done later in the series, once all the base of the shell has been established, it is important to keep in mind that customization is crucial.\r\n\r\n### Read User Input\r\n\r\nAfter the initial configuration, we start the general loop by reading the user input. Most shells print a symbol to signal to the user that they can input a command.\r\n\r\nNext, we need to analyze the user input to determine if it is a built-in command or an external one.\r\n\r\nThe difference between them is simple: a built-in command is directly handled by the shell itself, instead of executing an external process. In other words, it's a function call within the shell's code. An external command is either a binary in one of the directories in your PATH or located in a filesystem path (relative or absolute).\r\n\r\n| **Some Built-in Commands** | **Some External Commands** |\r\n|:--------------------------:|:--------------------------:|\r\n| `cd`, `help`, `echo`       | `grep`, `wget`, `curl`     |\r\n\r\nThe most popular example of a built-in command is `cd`. The reason it must be built-in is that an external program can't change the environment of the current working directory, so it must be changed by the shell itself. A more in-depth explanation can be found in [this link](https://unix.stackexchange.com/a/38809).\r\n\r\n### Then We Execute\r\n\r\nWhen we use a command that calls a built-in, we simply pass the arguments to the function and return to the start of the loop when it completes.\r\n\r\n#### And When We Call an Executable?\r\n\r\nWe need to make a fork syscall, that is, create a new process for the executable to run in, so it can have its own memory space and manage its interactions with the operating system (The shell is still the parent process).\r\n\r\n### Then We Process\r\n\r\nThis is when we cause side effects to the system.\r\n\r\nWe want to provide feedback to the user to let them know the results of this process. To keep this simple, we will only consider returning text to the user, as we are providing commands as text.\r\n\r\nOur shell process has at least 3 file descriptors for passing input or receiving output: Stdin, Stdout, and Stderr.\r\n\r\nAfter the process is complete, any output should be printed to the screen, via stdout or stderr.\r\n\r\n### Lastly, We Loop\r\n\r\nControl returns to the user. The default user prompt prints as a visual cue (along with the typical blinking cursor), and we should be able to enter another command.\r\n\r\n## Time to Code\r\n\r\nNow that we have set the record straight on how the shell is going to work, we can start coding the basics. But that will be explained in the next post. See you next time!";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"whats-a-shell","text":"What’s a Shell?"},{"depth":2,"slug":"how-does-a-shell-work","text":"How Does a Shell Work?"},{"depth":2,"slug":"architecture-of-our-shell","text":"Architecture of Our Shell"},{"depth":3,"slug":"execute-initial-scripts-and-shell-configurations","text":"Execute Initial Scripts and Shell Configurations"},{"depth":3,"slug":"read-user-input","text":"Read User Input"},{"depth":3,"slug":"then-we-execute","text":"Then We Execute"},{"depth":4,"slug":"and-when-we-call-an-executable","text":"And When We Call an Executable?"},{"depth":3,"slug":"then-we-process","text":"Then We Process"},{"depth":3,"slug":"lastly-we-loop","text":"Lastly, We Loop"},{"depth":2,"slug":"time-to-code","text":"Time to Code"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
