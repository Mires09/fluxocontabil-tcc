# FluxoContábil PWA V5 — Acesso inicial e instalação

## Novidades
- Tela inicial com Visitante, Entrar e Cadastrar-se. Os perfis são locais e demonstrativos; não há senha, autenticação real, contas online ou isolamento de dados por usuário. Não informe dados pessoais reais.
- Botão Instalar aplicativo quando o navegador emite `beforeinstallprompt`. Em iPhone, instruções para instalar pelo Safari. Não é possível instalar automaticamente sem consentimento.
- Botão Sair para voltar à tela inicial. Os dados do cenário ainda são compartilhados no mesmo navegador; o perfil da tela inicial é uma simulação de entrada, não o usuário fictício de Gestor/Contador.

## GitHub Pages
Extraia e envie **todos os arquivos**, incluindo os novos `access.js` e `access.css`, à raiz do repositório, substituindo os existentes. Mantenha `.nojekyll`. Aguarde a publicação e atualize/reabra a PWA. Caso persista versão anterior, feche e reabra o app e atualize a página online para renovar o cache.

## Limitações
- O botão Instalar depende da compatibilidade e disponibilidade do evento de instalação. O usuário sempre confirma a instalação.
- Cadastro e login são demonstração **local sem senha**: não servem para acesso real nem para controle de permissões.
- Backend Django V3 e coleta remota de avaliações não estão integrados.
