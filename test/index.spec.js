const chai = require('chai');
const expect = chai.expect;
const getLinksFromMd = require('../index');

describe('getLinksFromMd()', () => {

	describe('Quando não houver parâmetro', () => {
		it('Deve retornar um erro', () => {
      let badFn = function () { getLinksFromMd(); };
      expect(badFn).to.throw('Texto inválido'); // 'O parâmetro não pode estar vazio'
		});
	});

	describe('Quando o parâmetro for um número', () => {
		it('Deve retornar um erro', () => {
      let badFn = function () { getLinksFromMd(123); };
      expect(badFn).to.throw('Texto inválido'); // 'Não pode conter números'
		});
	});

	describe('Quando não houver URL', () => {
    it('Deve retornar um array vazio', () => {
      expect(getLinksFromMd('Oi, você quer entrar no site...')).to.deep.equal([]);
    });
  });

  describe('Quando houver URL', () => {
    it('Deve retornar um array com objeto', () => {     
      expect(getLinksFromMd('Oi, você quer entrar no site [google](www.google.com)?')).to.deep.equal([
        { href: 'www.google.com', text: 'google'} 
      ]);
    });
  });

  describe('Quando houver mais de uma URL', () => {
    it('Deve retornar um array com objetos', () => {     
      const string = `# Lorem ipsum
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut [labore](https://en.wiktionary.org/wiki/labore) et [dolore](https://en.wiktionary.org/wiki/dolore) magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

        [foo](http://foo.com)

        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

      expect(getLinksFromMd(string)).to.deep.equal([
        { href: 'https://en.wiktionary.org/wiki/labore', text: 'labore' },
        { href: 'https://en.wiktionary.org/wiki/dolore', text: 'dolore' },
        { href: 'http://foo.com', text: 'foo' }
      ]);
    });
  });

});