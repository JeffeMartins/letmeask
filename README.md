# Letmeask — protótipo de autenticação e salas

Protótipo inspirado no exercício Letmeask: interface de entrada e criação de salas com login Google/Firebase. O estado de implementação é descrito explicitamente para não confundir um exercício com um produto completo.

[![CI](https://github.com/JeffeMartins/letmeask/actions/workflows/ci.yml/badge.svg)](https://github.com/JeffeMartins/letmeask/actions/workflows/ci.yml)

## Melhorias de engenharia

- React atual, Vite e Sass substituem Create React App e node-sass.
- Correção do AuthContextProvider: os filhos são renderizados, e a interface não fica vazia.
- Firebase modular e ciclo de autenticação com limpeza da inscrição e estado correto após logout.
- React Router atualizado; erros de login exibidos ao usuário.
- Sem configuração Firebase, a página ainda abre e informa a configuração faltante ao tentar entrar.
- Teste de regressão do conteúdo dentro do provider; build de produção validado.

## Executar localmente

Pré-requisitos: Node.js 24 LTS e npm; Docker Compose v2 para os serviços que usam banco.

```sh
npm ci
cp .env.example .env.local
npm run dev
```

No PowerShell: `Copy-Item .env.example .env.local`. A aplicação fica em `http://localhost:5173`.

Configure um projeto Firebase próprio nas variáveis `VITE_FIREBASE_*`, habilite o provedor Google e autorize o domínio local. Elas são configuração pública do cliente; segurança dos dados depende das regras Firebase e dos domínios autorizados, não de esconder a API key.

`npm test` verifica o provider; `npm run build` valida TypeScript e bundle. O popup real do Google precisa de configuração e teste manual em uma conta autorizada. Criação/persistência e entrada em salas ainda não foram implementadas; os formulários informam essa limitação, sem fingir sucesso. A refatoração corrige a base e preserva o escopo de protótipo.

## Qualidade e limites da evidência

As mudanças preservam a proposta do exercício e corrigem problemas observados no código. A CI usa Node 24 e `npm ci`, executa o build quando disponível e os testes existentes. O lockfile é versionado; dependências e pastas de build não são. Dependabot acompanha atualizações semanais. Não há promessa de cobertura total, auditoria completa de segurança ou capacidade de produção.

Não publique `.env`, cookies, tokens ou dados reais de clientes. Antes de expor a aplicação à internet, revise autenticação/autorização, TLS, limites de chamadas, logs e backups conforme o domínio. Os exemplos são para execução local. Use `docker compose down` para parar os containers; volumes persistem e `down -v` apaga seus dados.
