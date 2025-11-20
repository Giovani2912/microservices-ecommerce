# Product Service

Microserviço responsável pelo gerenciamento de produtos, construído com Express.js e TypeScript.

## Tecnologias

- **Express 5** - Framework web
- **TypeScript** - Tipagem estática
- **Clerk** - Autenticação
- **Kafka** - Mensageria assíncrona
- **pnpm** - Gerenciador de pacotes

## Pré-requisitos

- Node.js
- pnpm
- Arquivo `.env` configurado

## Dependências do Workspace

Este serviço faz parte de um monorepo e depende dos seguintes pacotes internos:

- `@repo/product-db` - Camada de acesso ao banco de dados de produtos
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
# Adicione suas variáveis aqui
PORT=3000
CLERK_SECRET_KEY=...
```

## Estrutura

```
src/
└── index.ts    # Ponto de entrada da aplicação
```