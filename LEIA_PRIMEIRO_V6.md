# FluxoContábil — PWA V6

## Novidades
- Tela de entrada com fundo escuro em tons de roxo e preto.
- Cadastro demonstrativo com senha fictícia e confirmação. A senha não é armazenada em texto puro: guarda-se um hash SHA-256 com salt local. **Isso não é autenticação segura**, pois todo o processo ocorre no navegador, sem backend.
- Login local com identificador e senha fictícios. Perfis antigos da V5 (sem senha) precisam criar senha usando a aba Cadastrar-se e o mesmo identificador.
- Navegação das seções registrada no histórico do navegador: o botão Voltar retorna à seção anterior e, ao voltar da tela principal, ao acesso, em vez de fechar imediatamente a PWA.
- Cache atualizado para V6.

## Publicação no GitHub Pages
Envie todos os arquivos da pasta extraída diretamente para a raiz do repositório, substituindo os anteriores. Mantenha `.nojekyll`. Aguarde o deploy e feche/reabra a PWA instalada. Se uma versão antiga persistir, atualize no navegador e reabra o app.

## Testes sugeridos
1. Acesse como visitante, vá a Alertas, a Conferências e pressione Voltar: deve retornar a Alertas.
2. Volte até a tela de acesso; tente entrar novamente.
3. Crie perfil e senha **inventados** (mínimo de 6 caracteres). Saia e entre com identificador e senha; teste senha errada.
4. Feche e reabra o aplicativo, navegue em diferentes seções e valide botão Voltar.
5. Valide o fluxo na PWA instalada em computador e Android; o botão Voltar do sistema depende do navegador.

**Não utilize nome, e-mail ou senha reais.** Sem servidor, não há autenticação, isolamento de dados por conta ou recuperação de senha. A integração com Django permanece pendente.
