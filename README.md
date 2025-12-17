# Landing Page de Retargeting - iGaming

Landing page de alta conversão para iGaming com design moderno e animações otimizadas.

## 🚀 Tecnologias

- **Next.js 14** (App Router)
- **Tailwind CSS** (Estilização)
- **Framer Motion** (Animações)
- **Lucide React** (Ícones)
- **TypeScript**

## 📦 Instalação

1. Instale as dependências:
```bash
npm install
```

2. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

3. Acesse [http://localhost:3000](http://localhost:3000)

## 🎨 Características

- **Marquee Infinito**: Header fixo com texto em loop contínuo
- **Hero Section**: Background com overlay gradiente para legibilidade
- **Botão CTA Animado**: 
  - Animação de pulso constante (heartbeat)
  - Efeito sheen/laminado que passa pelo botão a cada 3 segundos
- **Design Responsivo**: Mobile First, otimizado para todos os dispositivos

## 📝 Personalização

### Alterar URL do Telegram

Edite o arquivo `components/CTAButton.tsx` e altere a URL na função `handleClick`:

```typescript
window.open('https://t.me/seu_grupo_vip', '_blank')
```

### Adicionar Imagem de Background

1. Coloque sua imagem na pasta `public/` com o nome `bg-placeholder.jpg`
2. Ou altere o caminho no arquivo `app/page.tsx` na propriedade `backgroundImage`

### Ajustar Cores

As cores personalizadas estão definidas em `tailwind.config.js`:
- `neon-cyan`: #00FFFF (Header)
- `telegram-blue`: #229ED9 (Botão CTA)

## 🏗️ Build para Produção

```bash
npm run build
npm start
```

