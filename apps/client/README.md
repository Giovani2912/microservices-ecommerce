# Client

Aplicação web voltada ao cliente final, construída com Next.js 15 e React 19.

## Tecnologias

- **Next.js 15** - Framework React com Turbopack
- **React 19** - Biblioteca de UI
- **TypeScript** - Tipagem estática
- **Tailwind CSS 4** - Estilização
- **Clerk** - Autenticação
- **Stripe** - Processamento de pagamentos
- **Zustand** - Gerenciamento de estado global
- **React Hook Form + Zod** - Formulários e validação
- **Lucide React** - Ícones

## Pré-requisitos

- Node.js
- pnpm
- Variáveis de ambiente configuradas

## Dependências do Workspace

Este projeto faz parte de um monorepo e depende dos seguintes pacotes internos:

- `@repo/types` - Tipos compartilhados
- `@repo/typescript-config` - Configuração TypeScript compartilhada
- `@repo/eslint-config` - Configuração ESLint compartilhada

## Instalação

```bash
pnpm install
```

## Scripts

| Comando | Descrição |
|---------|-----------|
| `pnpm dev` | Inicia o servidor de desenvolvimento com Turbopack (porta 3002) |
| `pnpm build` | Compila o projeto para produção |
| `pnpm start` | Inicia o servidor de produção |
| `pnpm lint` | Executa o linter |
| `pnpm check-types` | Verifica erros de tipagem TypeScript |

## Configuração

Crie um arquivo `.env.local` na raiz do projeto:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...
CLERK_SECRET_KEY=...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_...
NEXT_PUBLIC_API_URL=...
```

## Estrutura

```
src/
├── app/            # App Router (páginas e layouts)
├── components/     # Componentes React
├── hooks/          # Custom hooks
├── lib/            # Utilitários e configurações
├── store/          # Stores Zustand
└── styles/         # Estilos globais
```

![alt text](../../public/image2.png)
![alt text](../../public/image-2.png)
![alt text](../../public/image-1.png)