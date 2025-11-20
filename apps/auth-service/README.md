# Auth Service

Microserviço responsável pela autenticação e autorização, construído com Express.js e TypeScript.

## Tecnologias

- **Express 5** - Framework web
- **TypeScript** - Tipagem estática
- **Clerk** - Gerenciamento de identidade e autenticação
- **Kafka** - Mensageria assíncrona

## Pré-requisitos

- Node.js
- pnpm
- Arquivo `.env` configurado
- Conta Clerk configurada

## Dependências do Workspace

Este serviço faz parte de um monorepo e depende dos seguintes pacotes internos:

- `@repo/kafka` - Cliente Kafka compartilhado
- `@repo/typescript-config` - Configuração TypeScript compartilhada
- `@repo/types` - Tipos compartilhados

## Instalação

```bash
pnpm install
```

## Scripts

| Comando | Descrição |
|---------|-----------|
| `pnpm dev` | Inicia o servidor em modo de desenvolvimento com hot-reload |
| `pnpm check-types` | Verifica erros de tipagem TypeScript |

## Configuração

Crie um arquivo `.env` na raiz do projeto com as variáveis de ambiente necessárias:

```env
PORT=3003
CLERK_SECRET_KEY=...
CLERK_PUBLISHABLE_KEY=...
KAFKA_BROKER=...
```

## Estrutura

```
src/
└── index.ts    # Ponto de entrada da aplicação
```