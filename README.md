# Turma

Este repositório é usado para gerar a página principal da Turma

## Boilerplate

Para o desenvolvimento do protótipo inicial foi utilizado o [React application boilerplate](https://github.com/christianalfoni/react-app-boilerplate) versão 2.2.2

### Como utilizar

* Clone este repositório `git clone https://github.com/turma/portal`
* Instale as dependências `npm install`
* Instale o Gulp `sudo npm install -g gulp`

### Desenvolvimento

* Execute `gulp` na raiz do projeto
* Inicie um servidor web na pasta `build`, pode-se utilizar o `python -m SimpleHTTPServer 3000`
* Acesse `localhost:3000` no navegador para exibir a aplicação
* Acesse `localhost:3000/testrunner.html` no navegador para exibir os casos de teste
* Todas as mudanças nas pastas `app` ou `styles` vão automáticamente recompilar os arquivos da pasta `build`
* Os testes e as aplicações vão automáticamente serem atualizadas no navegador
* Execute `gulp test` para rodar todos os testes com phantomJS e produzir relatórios XML

### Produção

* Execute `NODE_ENV=production gulp deploy` para salvar códigos reduzidos prontos para produção

### Pastas
* `build/`: Onde são salvos os arquivos compilados automaticamente em *Desenvolvimento*
* `dist/`: Onde é salvo o código pronto para produção
* `styles/`: Onde são inseridos os arquivos CSS
* `specs/`: Onde são inseridos os arquivos de teste
* `gulpfile.js`: O arquivo de configuração do gulp

### Observações

* O arquivo `dist/index.html` é a única página da sua apicação utilizada em produção
* Gulp executa o LiveReload em desenvolvimento, então as mudanças feitas atualizarão automáticamente as páginas abertas
