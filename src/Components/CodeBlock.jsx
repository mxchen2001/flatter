import React from "react";
import Prism from "prismjs";
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';


function getTokens({ code, language }) {
	const syntaxTree = Prism.tokenize(code + '\n\n', Prism.languages[language]);

	// flatten the syntax tree into a single array of lines
	const tokens = [];
	let currentLine = [];

	const recurse = (array, parentClass) => {
		for (let i = 0; i < array.length; i++) {
			const token = array[i];
			if (Array.isArray(token.content)) {
				const currentClass = parentClass.concat(token.type);
				recurse(token.content, currentClass);
			} else if (token.constructor.name === 'Token') {
				token.type = parentClass.concat(token.type).join(' ')
				currentLine.push(token);
			} else {
				// let parsedWhiteSpace = token.replace(/\t/g, '\u00A0\u00A0\u00A0\u00A0');
				// parsedWhiteSpace = parsedWhiteSpace.replace(/ /g, "\u00A0");
				let parsedWhiteSpace = token;

				console.log(parsedWhiteSpace.split("\n"));
				
				const type = parentClass.length > 0 ? parentClass.join(' ') : '';
				if (!parsedWhiteSpace.includes("\n")) {
					
					currentLine.push(new Prism.Token(type, parsedWhiteSpace, undefined));
				} else {
					parsedWhiteSpace.split(/\r?\n/).forEach((el, index) => {
						// newline
						currentLine.push(new Prism.Token(type, el, undefined));

						// last split element is not a newline
						if (index < parsedWhiteSpace.split(/\r?\n/).length - 1) {
							tokens.push(currentLine);
							currentLine = [];
						}
					});

				}
			}
		}
	}

	recurse(syntaxTree, []);
	console.log(tokens);

	return tokens;
}

function Code({ tokens }) {
	const renderSyntaxTreeEl = (el) => {
		// if (el.content === '') {
		// 	return <span>{"\u00A0"}</span>;
		// }
		return (
			<span className={el.type}>
				{el.content}
			</span>
		)
	}

	return (
		<>
			{
				tokens.map((line, i) => {
					return (
						<pre className="code-line" role="presentation">
							{
							line.length === 1 && line[0].content === '' ? 
								(<span>{"\n"}</span>) :
								line.map((el, index) => renderSyntaxTreeEl(el))
							}
						</pre>
					);
				})
			}
		</>
	);
}

function CodeBlock(props) {
	const showLineNumbers = props.showLineNumbers || false;
	const content = props.content || '';
	const language = props.language || 'c';
	const title = props.title || '';

	console.log(content);
	console.log(language);

	const tokens = getTokens({ code: content, language: language });

	return (
		<div className="code-block-root">
			<div className="code-block-wrapper">
				<div className="code-block-top-bar">
					<div className="circle-container">
						<circle className="red" />
						<circle className="yellow" />
						<circle className="green" />
					</div>
					<title>{title}</title>
				</div>
				<div className="code-block-body-container">
					<code className="line-numbers">
						{showLineNumbers &&
							<>
								{tokens.map((line, i) =>	 (<span>{i+1}</span>))}
							</>
						}
					</code>
					<code className="code-block-body">
						<Code tokens={tokens} />
					</code>
					<code className="right-border" />
				</div>
			</div>
		</div>
	);
}

export default CodeBlock;