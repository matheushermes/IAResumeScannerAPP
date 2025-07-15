# 🧠 IA Resume Scanner APP

Frontend da plataforma **IA Resume Scanner**, desenvolvida com **Next.js**, **Tailwind CSS** e **ShadCN UI**. Uma interface moderna e responsiva para envio de currículos e descrição de vagas, integrada a uma IA generativa local (Mistral via Ollama) para análise de compatibilidade profissional.


![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Tailwind](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)
![ShadCN](https://img.shields.io/badge/ShadCN_UI-7F22FE?style=for-the-badge&logo=vercel&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-222222?style=for-the-badge&logo=pnpm&logoColor=yellow)
![Status](https://img.shields.io/badge/status-finalizado-brightgreen?style=for-the-badge)

---

## ✨ Funcionalidades

- 🧾 Upload de currículo em PDF ou DOCX (com suporte a **drag & drop**)
- 💼 Campo para inserir a descrição da vaga desejada
- ⚙️ Integração com backend em Go + IA local (Ollama com Mistral)
- 🎬 Animações progressivas para cada etapa do processo
- 🌑 Interface moderna, escura e responsiva
- Exibição detalhada do resultado:
  - ✅ Score de compatibilidade
  - ✅ Pontos positivos e negativos
  - ✅ Recomendações personalizadas
  - ✅ Feedback geral sobre o perfil

---

## 🔗 Repositório Backend

> Acesse também o backend da aplicação, desenvolvido com **Golang** e **Ollama**:

[🔧 IA Resume Scanner Backend (Go + Ollama)](https://github.com/matheushermes/IAResumeScanner)

---

## 🖥️ Como rodar localmente

### ✅ Pré-requisitos

- [Node.js 18+](https://nodejs.org)
- [pnpm](https://pnpm.io/) (ou Yarn/NPM, se preferir)
- Backend rodando localmente em `http://localhost:5000`

### 🚀 Instruções

```bash
git clone https://github.com/matheushermes/IAResumeScannerAPP.git
cd IAResumeScannerAPP
pnpm install    # ou yarn / npm install
pnpm dev        # ou yarn dev / npm run dev
```