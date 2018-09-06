const chai = require('chai');
const expect = chai.expect;
const links = require('../index');

/* TESTES:
- Quando nao houver parametro deve lançar um erro.
- Quando o texto for um numero deve lançar um erro.
- Quando o texto for uma string e nao houver url deve retornar um array vazio.
- Quando o texto for uma string e houver uma url deve retornar um array com o objeto com a url e o link do markdown.
- Quando o texto for uma string e houver tres urls diferentes deve retornar o objeto dentro do array.

Exemplo:
- Entrada: "Oi você quer entrar no site [google](www.google.com)?"
- Saída:[{href: "www.google.com", text: "google"}]
*/

describe('links', () => {

	describe('#getLinksFromMd', () => {

		describe('Quando não houver parâmetro', () => {
			it('Deve retornar um erro', () => {
				var badFn = () => { links.getLinksFromMd() };
        expect(badFn).to.throw('O parâmetro não pode estar vazio');
        expect(badFn).to.equal(false);
			});
		});

		describe('Quando o for um número', () => {
			it('Deve retornar um erro', () => {
				var badFn = () => { links.getLinksFromMd('123') };
				expect(badFn).to.throw('Não pode conter números');
				expect(badFn).to.equal(false);
			});
		});

		describe('Quando não houver URL', () => {
      it('Deve retornar um array vazio', () => {
        expect(links.getLinksFromMd('Oi, você quer entrar no site...')).to.be.empty; // to.not.be.empty
      });
    });

    describe('Quando houver URL', () => {
      it('Deve retornar um array com objeto e dentro a URL e link da string', () => {     
        expect(links.getLinksFromMd('Oi, você quer entrar no site [google](www.google.com)?')).to.deep.equal([
          { href: 'www.google.com', text: 'google'} 
        ]);
      });
    });

    describe('Quando houver mais de uma URL', () => {
      it('Deve retornar um array com objetos e dentro as urls e links da string', () => {     
        const string = `# Lorem ipsum
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut [labore](https://en.wiktionary.org/wiki/labore) et [dolore](https://en.wiktionary.org/wiki/dolore) magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

          [foo](http://foo.com)

          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

        expect(links.getLinksFromMd(string)).to.deep.equal([
          { href: 'https://en.wiktionary.org/wiki/labore', text: 'labore' },
          { href: 'https://en.wiktionary.org/wiki/dolore', text: 'dolore' },
          { href: 'http://foo.com', text: 'foo' }
        ]);
      });
    });

	});

});