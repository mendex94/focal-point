# FocalPoint

Este é um aplicativo básico de tarefas (todo app) desenvolvido com [Next.js](https://nextjs.org/), [Sass](https://sass-lang.com/), [Clerk](https://clerk.dev/) para autenticação e [Convex](https://convex.dev/) como back-end.

## Tecnologias Utilizadas

- **[Next.js](https://nextjs.org/)**: Framework React para desenvolvimento web com renderização do lado do servidor.
- **[Sass](https://sass-lang.com/)**: Preprocessador de CSS para facilitar a estilização com variáveis, aninhamento e mais.
- **[Clerk](https://clerk.dev/)**: Plataforma de autenticação para gerenciar usuários e autenticação.
- **[Convex](https://convex.dev/)**: Backend-as-a-Service (BaaS) para armazenamento e sincronização de dados em tempo real.

## Funcionalidades

- Autenticação de usuários (login e registro) via Clerk.
- Adicionar, remover e marcar tarefas como concluídas.
- Dados persistidos e sincronizados usando Convex.

## Instalação

Siga os passos abaixo para rodar o projeto localmente.

### Pré-requisitos

Certifique-se de ter os seguintes itens instalados:

- [Node.js](https://nodejs.org/) (v16+)
- [pnpm](https://pnpm.io/pt/) ou [npm](https://www.npmjs.com/)
- Conta no [Clerk](https://clerk.dev/)
- Conta no [Convex](https://convex.dev/)

### Passos para rodar o projeto

1. Clone este repositório:

   ```bash
   git clone https://github.com/mendex94/focal-point.git
   cd focal-point
   ```
2. Instale as dependências

   ```bash
    pnpm install
    # ou
    npm install
   ```
3. Configure Convex e o Clerk
   - Crie um projeto no Convex e no Clerk para obter as credênciais.
   - Crie um arquivo .env.local na raiz do projeto e adicione as seguintes variáveis:
     
   ```bash
    CONVEX_DEPLOYMENT=
    NEXT_PUBLIC_CONVEX_URL=
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
    CLERK_SECRET_KEY=
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   ```
  4. Execute o projeto localmente:

     ```bash
      pnpm dev
      # ou
      npm run dev
      ```
  5. Abra seu navegador e acesse http://localhost:3000 para ver o aplicativo em ação.
