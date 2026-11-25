# FluxoContábil PWA V8 — versão demonstrativa

## Alterações
- Perfil profissional fictício dos membros: visualização pelo Gestor, edição de especialidade e descrição profissional, sem dados pessoais nem senhas.
- Atribuição por responsável: tarefa sem responsável em versões anteriores é migrada para o contador responsável pela empresa; o contador visualiza apenas tarefas próprias, enquanto Gestor visualiza todas. Transferência de tarefa permitida apenas ao Gestor, com reinício do estado de conclusão da tarefa transferida.
- Registra data e hora da conclusão individual das tarefas e do fechamento mensal. Para o cenário inicial já encerrado, a data é marcada como não disponível — não há invento de horário histórico.
- Bate-papo local para testar a interface, sem troca de dados entre dispositivos ou envio ao servidor.
- Quando checklist, saldos e alertas da empresa estão prontos, cria aviso local na Visão geral do Gestor para analisar o encerramento.
- Terminologia: Fechamento contábil mensal; ação Encerrar fechamento mensal; período identificado por Competência.

## Limitações
O armazenamento é local no navegador, não há autenticação segura, banco compartilhado, envio de mensagens a outra pessoa, nem notificações push ou IA real. Os botões de papéis são demonstrativos. Não usar dados pessoais ou contábeis reais.

## Publicação
Extraia o ZIP e envie os arquivos diretamente à raiz de https://github.com/Mires09/fluxocontabil-tcc . Mantenha .nojekyll. Atualize a página do GitHub Pages e reabra a PWA instalada. Como há dados antigos no navegador, confira as tarefas depois da migração.

## Testes manuais necessários
1. Testar Paulo e Camila: cada um vê somente tarefas que lhe pertencem. Reatribuir uma tarefa no Gestor e verificar que desaparece de um contador e surge no outro.
2. Editar tarefa e conferir que o responsável permanece selecionado.
3. Marcar tarefa e verificar data/hora. Resolver divergência e alerta e concluir todos os itens; conferir aviso ao Gestor.
4. Encerrar fechamento pelo Gestor e verificar a data/hora e o nome.
5. Consultar perfis de equipe e o bate-papo, sem expor dados pessoais.
6. Validar comportamento offline, cache e navegação em celular.

**Verificação técnica:** scripts aprovados em checagem sintática Node. Testes interativos em navegador precisam ser executados antes de enviar a profissionais.
