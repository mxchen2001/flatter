# Flatter

<p align="center">
  <a href="https://www.flatter.page"><img src="./public/logo512.png" alt="Logo" width=320></a>
  <br />
</p>


A React component library for building [Flatter](https://www.flatter.page) components.

## Usage

```jsx
const C_CODE = `#include <stdio.h>;

int main() {
  printf("Hello, world!\\n");
  return 0;
}`;

function App() {
  return <CodeBlock content={C_CODE} language="c" title="helloworld.c" showLineNumbers={true}/>;
}
```

## Supported Languages
We are using [Prism.js](https://prismjs.com/) to tokenize the code and generating custom elements. We currently support the following language:
- python
- clike
- c
- cpp
- csharp
- javascript
- jsx
- java
