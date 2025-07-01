# 🧠 IA Resume Scanner APP

Frontend da plataforma **IA Resume Scanner**, construída com **Next.js** + **Tailwind CSS**. Interface para envio de currículos e descrição de vagas, com análise via IA generativa local (Ollama), score de compatibilidade e feedback técnico para o candidato.

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Tailwind](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-222222?style=for-the-badge&logo=pnpm&logoColor=yellow)
![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow?style=for-the-badge)

---

## ✨ Funcionalidades

- Upload de currículo em PDF ou DOCX
- Campo para inserir a descrição da vaga desejada
- Integração com backend Golang + Ollama local
- Exibição de resultado:  
  ✅ Score de compatibilidade  
  ✅ Pontos positivos e negativos  
  ✅ Recomendações personalizadas  
  ✅ Feedback geral

---

## 🔗 Repositório Backend

[🔧 IA Resume Scanner Backend](https://github.com/matheushermes/IAResumeScanner)

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
cp .env.example .env.local
pnpm install    # ou yarn / npm install
pnpm dev        # ou yarn dev / npm run dev
```