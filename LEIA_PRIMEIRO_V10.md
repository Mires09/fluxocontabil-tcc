# FluxoContábil — V10 · Correção dos perfis de acesso

**Correção prioritária de controle de acesso demonstrativo.**

## Comportamento esperado
- **Visitante / modo teste:** pode selecionar Gestor ou Contador e alternar os perfis fictícios, para avaliar os dois pontos de vista.
- **Cadastrar / Entrar:** a conta local aparece identificada pelo próprio nome e recebe exclusivamente o papel **Contador (demonstração)**. O aplicativo não oferece seletores para assumir outro perfil. Uma conta de teste **não** pode assumir Gestor nem mudar de escritório.
- **Sair:** volta à tela de acesso; entrar como Visitante reativa a livre alternância fictícia.

## Como atualizar seu GitHub Pages
Descompacte e substitua os arquivos na raiz do repositório, inclusive `index.html`, `app.js`, `access.js`, `sw.js`. Mantenha `.nojekyll`. Aguarde a publicação. Se a PWA instalada mostrar o layout anterior, feche e reabra, recarregue a página e verifique o cache do navegador.

## Atenção ao TCC
Esta alteração restringe a experiência da **interface demonstrativa local**, não é segurança de verdade. Todos os dados continuam no navegador, sem autenticação de servidor, banco compartilhado ou autorização robusta. A autenticação real precisaria ser verificada no Django.

## Teste rápido
1. Entrar como Visitante, alternar Gestor e Contador e selecionar integrantes fictícios.
2. Sair; cadastrar uma conta com nome e senha fictícios; verificar o próprio nome no cabeçalho, sem seletores de perfil e usuário, com papel Contador.
3. Sair; entrar com essa mesma conta; confirmar que o Gestor e a troca de escritório continuam inacessíveis.
4. Sair; reentrar como Visitante; conferir que os perfis fictícios voltaram a ser alternáveis.
