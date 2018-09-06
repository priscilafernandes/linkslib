# Extrair links de arquivo Markdown  v.1.0.0

**Esta biblioteca extrai todos os links encontrados em um arquivo Markdown.**
Recebe uma string (em formato Markdown) e extrai as URLs.


## Os métodos utilizados na biblioteca são:

#### **getLinksFromMd(str);**


Exemplo de uso:

```
$node
> let links = require('links-lib');
> let str = `# Lorem ipsum

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut [labore](https://en.wiktionary.org/wiki/labore) et [dolore](https://en.wiktionary.org/wiki/dolore) magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

[foo](http://foo.com)

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

> links(str); 
// [
//   { href: 'https://en.wiktionary.org/wiki/labore', text: 'labore' },
//   { href: 'https://en.wiktionary.org/wiki/dolore', text: 'dolore' },
//   { href: 'http://foo.com', text: 'foo' },
// ]
```


## Versão 1.0.0

- funcionalidade: verifica se há links no arquivo Markdown e retorna um array de objetos  

## Instalação

- você deve ter o node + npm instalados. Para guia de instalação, visite [o site oficial](https://www.npmjs.com/get-npm);
- proceda com a instalação com `$npm install links-lib`


## Roadmap oficial do projeto

<!-- #### versão 2.0.0 (sem previsão)
-  -->

#### versão 1.0.0 (released)
- funcionalidade: verifica se há links no arquivo Markdown e retorna um array de objetos