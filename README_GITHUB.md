# FluxoContábil — Protótipo PWA V7

Protótipo acadêmico para avaliação de uma proposta de apoio ao fechamento contábil mensal, com dados inteiramente fictícios.

## Publicação

Coloque todos os arquivos desta pasta na raiz do repositório público GitHub Pages. Mantenha o `.nojekyll`. O arquivo inicial é `index.html`; dependências: `styles.css`, `app.js`, `access.css`, `access.js`, `manifest.webmanifest`, `sw.js` e os ícones PNG.

## O que testar

- Tela de visitante, cadastro e entrada demonstrativos; identificação da sessão no cabeçalho.
- Alternância entre dois escritórios fictícios pelo perfil Gestor; cenários locais separados.
- Gestão da equipe, retirada de membros com confirmação e proteção para integrantes responsáveis por empresas/tarefas.
- Reatribuição de contador responsável por empresa; atribuição, edição e prazo de tarefas.
- Lançamentos, conferências, alertas, justificativas, histórico local e bloqueios de fechamento.

## Limitações

A troca de perfis e escritórios é uma simulação local: **não representa autorização ou autenticação reais**. O GitHub Pages não executa backend. Nunca insira senhas reais nem dados de clientes. A PWA não executa os modelos de IA Z-score/Isolation Forest. A auditoria local não é inviolável; avaliação não é enviada a servidor automaticamente.

Para detalhes e testes veja `LEIA_PRIMEIRO_V7.md`.
