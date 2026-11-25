# FluxoContábil — PWA V9 (protótipo acadêmico)

## Novidades
- Seletor de competência no cabeçalho: 09/2026, 10/2026 e 11/2026 (atual no cenário de novembro de 2026).
- Dados de empresas, checklists, lançamentos, saldos e alertas separados por competência e por escritório. O cenário original de 10/2026 é preservado. Meses novos começam com valores de exemplo zerados e tarefas pendentes; **não são históricos contábeis reais**.
- Bate-papo com visual de aplicativo: contatos, pesquisa local, grupos criados por qualquer integrante, seleção/inclusão de membros, mensagens locais e emojis.
- Botões de chamadas de voz e vídeo, com tela e histórico **somente ilustrativos**. Nenhuma ligação real é iniciada, e não são solicitadas permissões de câmera ou microfone.

## Publicação no GitHub Pages
Extraia todos os arquivos diretamente na raiz do repositório, substituindo os anteriores. Mantenha `.nojekyll`. Aguarde a atualização do Pages e reabra/recarregue a PWA para atualizar o service worker.

## Cuidados
O protótipo opera com `localStorage` do navegador, sem sincronização entre pessoas/dispositivos. Não compartilhe dados reais nem senhas pessoais. A troca de perfil não é autenticação segura. Envio remoto de mensagens, ligações reais, notificações entre dispositivos, auditoria confiável e detecção de IA precisam de backend e serviços específicos.

## Roteiro sugerido
1. Selecione 10/2026 e observe as tarefas já existentes. Selecione 11/2026 e cadastre/edite um exemplo; retorne a outubro e confira a separação.
2. Entre em Bate-papo e crie um grupo selecionando dois participantes; envie uma mensagem e alterne o funcionário fictício para ver o histórico no mesmo navegador.
3. Clique nos botões Áudio/Vídeo para inspecionar a simulação.
4. Recarregue a página e confira se grupos e competências permanecem armazenados.
