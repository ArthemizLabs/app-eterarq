

# Éter Arquitetura e Design — Landing Page Premium

## Visão Geral
Landing page de alta conversão em `/lp` para gerar leads via WhatsApp para o serviço "Análise de Performance Espacial". Visual minimalista, sofisticado, estilo Apple + arquitetura de alto padrão.

## Design System
- **Paleta**: Bege (#CBBBA0), Bege claro (#EDE6DA), Preto (#111111), Branco (#FFFFFF), Cinza (#6B6B6B)
- **Tipografia**: Playfair Display (títulos serifados) + Inter (corpo)
- **Bordas**: 12px, espaçamento entre seções 80-120px
- **Animações**: Fade-in ao scroll, hover premium nos botões (preto → bege), parallax sutil

## Estrutura da Página

### 1. Hero (fullscreen)
- Background com imagem de escritório sofisticado (Unsplash) + overlay bege translúcido
- Headline: "SEU ESCRITÓRIO ESTÁ POSICIONANDO OU AFASTANDO CLIENTES?"
- Subheadline sobre espaços que aumentam percepção de valor
- CTA "Falar no WhatsApp"

### 2. Bloco de Problema
- 4 cards minimalistas com dores: falta de autoridade, ambiente genérico, não transmite valor, não converte

### 3. Quebra de Crença
- "Não é sobre decoração." — texto sobre arquitetura estratégica e seu impacto em vendas

### 4. Promessa
- "Seu escritório pode vender antes mesmo de você falar."
- 4 benefícios: percepção de valor, autoridade, ticket médio, marca

### 5. Para Quem É
- Lista qualificando o público ideal

### 6. Processo
- 3 etapas visuais: Diagnóstico → Projeto → Execução

### 7. CTA Final
- "Se o seu escritório não impressiona, ele negocia seu preço por você."
- Botão WhatsApp

### 8. Botão Flutuante WhatsApp
- Fixo no canto inferior direito, sempre visível

## Técnico
- Rota `/lp` no React Router
- Componente `LandingPage.tsx` com seções modulares
- Intersection Observer para animações fade-in ao scroll
- Imagens via Unsplash (escritórios modernos, sem pessoas)
- 100% responsivo
- Google Fonts: Playfair Display + Inter

