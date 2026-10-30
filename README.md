# CERA Commercial Cleaning

Site React com Vite e Tailwind CSS, convertido a partir das sete páginas do layout CERA. O conteúdo em inglês e a identidade visual dos arquivos originais foram preservados.

## Executar localmente

Requer Node.js 22.12 ou superior e Bun.

```sh
bun install
bun run dev
```

Acesse **http://127.0.0.1:5187/**. A porta é exclusiva deste projeto; `strictPort` impede que o Vite mude silenciosamente o endereço quando ela estiver ocupada.

## Comandos

```sh
bun run test     # Testes de navegação, interações e endpoint de envio
bun run build    # Gera a versão de produção em dist/
bun run preview  # Serve a versão de produção em http://127.0.0.1:4187/
```

## Páginas e recursos

- Home, Services, Industries, Why CERA, Our Standards, About e Request a Proposal.
- Contact utiliza a página de proposta, com telefone e e-mail da empresa.
- Navegação com React Router e URLs com hash, compatíveis com hospedagem estática e subdiretórios do Apache sem regras de reescrita.
- Cabeçalho e rodapé compartilhados; menu responsivo com suporte a teclado.
- Filtros de serviços e setores; calculadora de equipe e supervisão por área e frequência.
- Fontes, ícones, logotipo e 44 fotografias disponíveis localmente, sem CDN em tempo de execução.
- Todas as fotografias em WebP com qualidade 82; redução de 48,3% no total dos arquivos. A logo fornecida pelo usuário usa WebP sem perdas, com transparência preservada.
- Carregamento das páginas internas sob demanda.

## Formulário de proposta

O formulário envia um `POST /api/proposal` para uma função no servidor, que valida os dados e utiliza a API do Resend para entregar o pedido a `contact@ceraccs.com`. O e-mail contém as informações da empresa, contato, instalação e frequência solicitada, em HTML e texto. O endereço do cliente é configurado como `reply_to`.

O fluxo segue a implementação do Altivum: campo oculto contra bots, tempo mínimo de preenchimento de dois segundos, validação no servidor, sanitização do HTML e mensagens de envio, sucesso e erro. Chaves de idempotência reduzem envios duplicados durante tentativas repetidas. Nenhum dado do formulário é gravado em banco ou no navegador.

### Configuração do Resend

Copie `.env.example` para `.env` para testes locais. Na Vercel, configure as mesmas variáveis em **Project → Settings → Environment Variables**:

- `RESEND_API_KEY`: chave privada da conta Resend.
- `CONTACT_TO_EMAIL`: `contact@ceraccs.com`.
- `CONTACT_FROM_EMAIL`: remetente de um domínio verificado no Resend, por exemplo `CERA <noreply@ceraccs.com>`.

A chave é utilizada somente no servidor, não recebe prefixo `VITE_` e não faz parte do bundle React. `.env` é ignorado pelo Git. Reinicie o servidor após alterar o `.env`; na Vercel, faça um novo deploy após alterar as variáveis de ambiente. O remetente `onboarding@resend.dev` é destinado a testes e tem restrições de destinatário.

### Deploy na Vercel

O arquivo `api/proposal.js` expõe o endpoint como uma Vercel Function. `vercel.json` configura o build Vite e a pasta `dist/`. O mesmo endpoint funciona em `bun run dev` e `bun run preview` por meio do middleware local. Hospedar somente a pasta `dist/` em um servidor estático não disponibiliza a função de envio.

## Estrutura

```text
src/
  components/  # Marca, navegação, rodapé e links para seções
  hooks/       # Envio e estados do formulário de proposta
  lib/         # Resolução de caminhos dos assets
  pages/       # As sete páginas em JSX
  App.jsx      # Rotas e estrutura compartilhada
  styles.css   # Estilos globais e ajustes responsivos
public/
  images/      # Fotografias baixadas dos arquivos originais
  fonts/       # Fonte de ícones local
api/           # Endpoint da Vercel Function
server/        # Validação, e-mail Resend e middleware local
tests/         # Testes com Vitest e React Testing Library
```

Cabeçalho e rodapé utilizam o logotipo geométrico fornecido pelo usuário, convertido para `public/images/cera-logo.webp`.

Para converter novas fotografias colocadas em `public/images/`, execute `bun run images:optimize`. Para também substituir a logo, use `bun run images:optimize -- --logo "caminho/para/logo.png"`. O script atualiza as referências nas páginas e remove somente as cópias convertidas de `public/images/`, preservando os arquivos de origem externos.
