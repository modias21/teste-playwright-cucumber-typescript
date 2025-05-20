# Test Automation Project Template

Este projeto é um template para automação de testes de aplicações web utilizando **Cucumber**, **Playwright** e **TypeScript**.

## Tecnologias Utilizadas

- [Cucumber](https://cucumber.io/) — BDD e escrita de cenários em Gherkin
- [Playwright](https://playwright.dev/) — Automação de browsers moderna e robusta
- [TypeScript](https://www.typescriptlang.org/) — Tipagem estática para JavaScript

## Estrutura do Projeto

```text

├── src/
│   ├── features/        # Arquivos .feature (cenários em Gherkin)
│   ├── steps/           # Definições dos steps (Given, When, Then)
│   ├── page/            # Ações e validações da página que está realizando testes
│   ├── objetos/         # objetos da tela do teste (botão, label e etc)
│   └── configs/         # Hooks e configurações de ambiente
├── reports/             # Relatórios gerados (json, html)
├── cucumber.cjs         # Configuração do Cucumber
├── [package.json](http://_vscodecontentref_/0)
├── [tsconfig.json](http://_vscodecontentref_/1)
└── [README.md](http://_vscodecontentref_/2)
```

## Como usar
### 1. Instale as dependências

```sh
npm install
```

### 2. Estruture seus cenários
- Escreva seus cenários em arquivos .feature dentro de tests/features/.
Implemente os steps em arquivos .ts dentro de tests/steps/.

### 3. Execute os testes

```sh
npm test
```
ou 
```sh
npx cucumber-js
```

### 4. Geração de relatórios
- Os relatórios são gerados na pasta reports/ nos formatos json e html.

## Observações

- Certifique-se de que o Node.js está instalado.
- Ajuste os caminhos dos arquivos de steps e features conforme a estrutura do seu projeto.
- Consulte a documentação oficial das ferramentas para customizações avançadas.
Projeto mantido por [Seu Nome].