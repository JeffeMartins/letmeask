# Contexto da modernização

Repositório: `letmeask`. Revisão em 28/10/2026. O objetivo é tornar o clone reproduzível e o comportamento compreensível em uma entrevista técnica, preservando o contexto histórico de exercício/protótipo.

## Decisões e validação

- React atual, Vite e Sass substituem Create React App e node-sass.
- Correção do AuthContextProvider: os filhos são renderizados, e a interface não fica vazia.
- Firebase modular e ciclo de autenticação com limpeza da inscrição e estado correto após logout.
- React Router atualizado; erros de login exibidos ao usuário.
- Sem configuração Firebase, a página ainda abre e informa a configuração faltante ao tentar entrar.
- Teste de regressão do conteúdo dentro do provider; build de produção validado.


Consulte os scripts reais em `package.json` (ou nos módulos do monorepo). Build, teste unitário e teste com serviços externos são evidências diferentes. A CI não valida credenciais de terceiros nem garante comportamento em produção. O README informa dependências externas e funcionalidades ainda não implementadas.

## Segurança de configurações antigas

Configurações locais e segredos foram retirados da versão atual quando presentes. Isso não remove conteúdo de commits antigos. Se algum segredo histórico ainda estiver ativo, revogue-o no provedor e gere outro; não reutilize credenciais publicadas. A revisão preserva o histórico Git e não faz force push.
