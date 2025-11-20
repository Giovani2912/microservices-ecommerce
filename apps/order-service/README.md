# Order Service

Microserviço responsável pelo gerenciamento de pedidos, construído com Fastify e TypeScript.

## Tecnologias

- **Fastify** - Framework web de alta performance
- **TypeScript** - Tipagem estática
- **Clerk** - Autenticação
- **Kafka** - Mensageria assíncrona
- **date-fns** - Manipulação de datas

## Pré-requisitos

- Node.js
- pnpm
- Arquivo `.env` configurado

## Dependências do Workspace

Este serviço faz parte de um monorepo e depende dos seguintes pacotes internos:

- `@repo/order-db` - Camada de acesso ao banco de dados de pedidos
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
PORT=3002
CLERK_SECRET_KEY=...
DATABASE_URL=...
KAFKA_BROKER=...
```

## Estrutura

```
src/
└── index.ts    # Ponto de entrada da aplicação
```