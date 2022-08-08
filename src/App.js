import CodeBlock from './Components/CodeBlock'; 

const JSXCODE = `import React from 'react';
import './App.css';

function App(props) {
  const a = 0;

  return (
    <div className="App">
      <header className="App-header">
        Code Block
      </header>
      <CodeBlock />
      <CodeBlock showLineNumbers={true} />
      <header className="App-header">
        More Coming
      </header>
    </div>
  );
}

export default App;`;


const CCODE = `#include <stdio.h>;

int main() {
	int counter = 0;

	// printf() displays the string inside quotation
	printf("Hello World!");

	return 0;
}`;

const HTMLCODE = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="My Custom React Components"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the \`public\` folder during the build.
      Only files inside the \`public\` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running \`npm run build\`.
    -->
    <title>Flatter</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run \`npm start\` or \`yarn start\`.
      To create a production bundle, use \`npm run build\` or \`yarn build\`.
    -->
  </body>
</html>
`;

const PYCODE = `def lev(s1, s2):
  m = len(s1)
  n = len(s2)

  opt = [[-1 for _ in range(m + 1)] for _ in range(n + 1)]

  #initialize base cases
  for i in range(m + 1):
      opt[0][i] = i
  for j in range(n + 1):
      opt[j][0] = j
      
  # fill in table with recursive case
  for i in range(1,n+1):
      for j in range(1,m+1):
          # offset the index for 1-indexness of the table iteration
          if s1[j-1] == s2[i-1]:
              opt[i][j] = opt[i-1][j-1]
          else:
              minimum = min(opt[i-1][j], opt[i][j-1], opt[i-1][j-1])
              opt[i][j] = minimum + 1
          
  return opt[n][m]`;

const JAVACODE = `import java.util.Scanner;

class MyClass {
  public static void main(String[] args) {
    Scanner myObj = new Scanner(System.in);
    System.out.println("Enter username");

    String userName = myObj.nextLine();
    System.out.println("Username is: " + userName);
  }
}`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Code Block
      </header>
      <CodeBlock content={CCODE} language="c" title="HelloWorld.c"/>
      <CodeBlock content={CCODE} language="c" title="With Line Numbers" showLineNumbers={true}/>
      <CodeBlock content={JSXCODE} language="jsx" title="App.jsx"/>
      <CodeBlock content={HTMLCODE} language="html" title="index.html"/>
      <CodeBlock content={PYCODE} language="python" title="Levenshtein.py"/>
      <CodeBlock content={JAVACODE} language="java" title="Scanner.java" showLineNumbers={true}/>
      <header className="App-header">
        More Coming
      </header>
    </div>
  );
}

export default App;
