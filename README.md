# React Router Multi Page App

Projeto desenvolvido com **React + Vite** com o objetivo de praticar e consolidar o uso do **React Router**, criando um site com múltiplas páginas, layout compartilhado e boas práticas de navegação.

## 🚀 Objetivo do Projeto

Este projeto foi criado para:
- Aprender a configurar rotas no React utilizando o React Router
- Trabalhar com múltiplas páginas em uma SPA
- Utilizar componentes de layout compartilhados
- Implementar rotas dinâmicas com parâmetros de URL
- Tratar rotas inválidas (404)
- Melhorar a performance com Lazy Loading

## 🧠 Conceitos Aplicados

- React Router v6
- BrowserRouter
- Routes e Route
- NavLink (rotas ativas)
- Layout compartilhado (Header + Footer)
- Lazy Loading com React.lazy e Suspense
- Rotas dinâmicas com parâmetros (`/user/:id`)
- Página 404 para rotas inválidas
- Organização profissional de pastas
- Tema escuro (Dark Mode)

## 📌 Observações

Este projeto faz parte do meu processo de aprendizado em React e foi desenvolvido com foco em boas práticas, organização de código e conceitos fundamentais utilizados em aplicações reais.

## 🗂️ Estrutura de Pastas
```bash
src/
├── components/
│ ├── Header.jsx
│ ├── Footer.jsx
│ └── Layout.jsx
│
├── pages/
│ ├── Home.jsx
│ ├── About.jsx
│ ├── Contact.jsx
│ ├── User.jsx
│ └── NotFound.jsx
│
├── routes/
│ └── AppRoutes.jsx
│
├── App.jsx
├── main.jsx
└── index.css
````

## 🧭 Rotas da Aplicação

| Rota           | Descrição                     |
|----------------|-------------------------------|
| `/`            | Página inicial (Home)         |
| `/about`       | Página About                  |
| `/contact`     | Página Contact                |
| `/user/:id`    | Página dinâmica de usuário    |
| `*`            | Página 404 (Not Found)        |

## 🎨 Interface

- Tema escuro (Dark Mode)
- Header com navegação destacando a rota ativa
- Layout consistente em todas as páginas
- Footer fixo e discreto

## ⚙️ Tecnologias Utilizadas

- React
- Vite
- React Router DOM
- JavaScript (ES6+)
- CSS

## ▶️ Como Rodar o Projeto

1️⃣Clone o repositório: git clone https://github.com/LeomarLeandro/Projeto-MultiPages-React-GT-3.0

2️⃣Acesse a pasta do projeto: cd seu-repositorio

3️⃣Instale as dependências: npm install

4️⃣Execute o projeto: npm run dev

5️⃣Abra no navegador: http://localhost:5173
