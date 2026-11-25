# FluxoContábil PWA V7 — GitHub Pages

Atualizações: identificação da sessão (visitante ou perfil demonstrativo) no cabeçalho, nome do usuário fictício selecionado, dois escritórios de dados fictícios separados, troca de escritório apenas no perfil Gestor, retirada de membros com confirmação e impedimento de remover integrantes com empresas ou tarefas vinculadas, alteração de responsável de empresa, responsável e prazo das tarefas (inclusive edição).

**Publicação:** substitua os arquivos do repositório por estes e mantenha `.nojekyll`. Todos os arquivos devem ficar na raiz. O GitHub Pages continuará no mesmo endereço. Feche/reabra a PWA; pode ser necessário atualizar após ativação do novo service worker.

**Cuidado:** este é um protótipo de interface com dados locais. O login V6, os papéis e a troca de escritórios NÃO são autenticação/autorização reais: qualquer participante pode escolher Gestor; um mesmo navegador pode modificar os cenários. Não informe senhas reais, clientes reais ou dados financeiros confidenciais.

**Limites:** não há IA real, integração com backend Django, fechamento multi-competência com histórico individualizado, coleta automática de respostas do Forms, autenticação central ou auditoria segura. Mudar de escritório na V7 simula apenas gerenciamento multicenário pelo perfil gestor; uma implantação real deverá exigir associação e autorização no servidor.

**Testes sugeridos:** alternar de Aurora para Violeta como Gestor; confirmar que empresas e equipe são diferentes; tentar trocar de escritório como Contador (campo desabilitado); cadastrar um contador fictício, retirá-lo; tentar retirar contador responsável por empresa (bloqueado), reatribuir empresa e então retirar; editar tarefa incluindo responsável e prazo; verificar acesso demonstrativo no cabeçalho; verificar itens de demonstração anteriores preservados na Aurora.
