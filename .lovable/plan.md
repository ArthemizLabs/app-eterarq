
## Redesenho da Home Page no estilo Studio Arthur Casas

Vou transformar a home page atual em uma experiência visual no estilo do site do Studio Arthur Casas — minimalista, sofisticado, com tipografia editorial, muito espaço em branco, navegação fixa minimalista e fotografia em destaque.

### Referência visual (arthurcasas.com)
- Header fixo minimalista com logo central/esquerdo e menu textual horizontal
- Hero em tela cheia com imagem grande de projeto (sem texto sobreposto pesado)
- Tipografia serifada/leve, títulos enormes em peso fino, muito leading
- Seções compostas por **imagens grandes em grid assimétrico** com legendas discretas (nome do projeto + localização em caixa alta pequena)
- Transições suaves, scroll fluido, paleta off-white/preto/bege
- Quase sem botões — links em texto sublinhado fino com seta "→"
- Footer denso e tipográfico (contato, redes, newsletter)

### O que será construído

**1. Header fixo minimalista**
- Logo Éter à esquerda (versão pequena)
- Menu horizontal à direita: `Projetos · Estúdio · Processo · Contato`
- Background transparente que vira off-white ao rolar
- Tipografia em caixa alta, tracking largo, peso 300

**2. Hero editorial**
- Imagem de projeto em tela cheia (usar `depoisObra` ou `clinica1`)
- Título sobreposto em baixo à esquerda: nome do projeto + tipo, em caixa alta pequena
- Frase manifesto em uma linha, tipografia serifada grande e leve, posicionada em baixo
- Sem botões grandes — apenas indicador de scroll discreto

**3. Seção manifesto**
- Bloco de texto curto e centralizado, fonte serifada (Lora) em ~32-40px peso 300
- Muito espaço vertical (padding 200px+)
- Conteúdo aproveitado da seção atual "Não é somente sobre beleza"

**4. Grid editorial de projetos (substitui PortfolioGrid atual)**
- Layout assimétrico: imagens em tamanhos diferentes alternando esquerda/direita
- Cada projeto: imagem grande + nome em caixa alta pequena + tipo/local em itálico discreto
- Hover: leve zoom na imagem + linha sublinhada no título
- Sem cards, sem bordas, sem sombras — apenas imagem + texto

**5. Seção "Estúdio / Sobre"**
- Imagem das sócias à esquerda (50%)
- Texto manifesto à direita em coluna estreita, tipografia serifada
- Link textual "Conheça o estúdio →" em vez de botão

**6. Seção Processo (versão minimalista)**
- Três colunas com numeração tipográfica grande (01, 02, 03) em peso fino
- Sem ícones, sem círculos — apenas tipografia e texto curto abaixo
- Linha horizontal fina separando

**7. CTA final editorial**
- Tela inteira off-white com pergunta central em fonte serifada gigante
- Link textual sublinhado "Solicite sua análise →" (sem botão preenchido)

**8. Footer denso e tipográfico**
- Três colunas: Logo + tagline | Contato (whatsapp, email) | Redes
- Tipografia toda em caixa alta pequena, tracking largo
- Linha fina superior

### Detalhes técnicos

**Arquivos a criar/editar:**
- `src/pages/LandingPage.tsx` — reescrita completa das seções mantendo imports e WhatsApp URL
- `src/components/ui/site-header.tsx` — novo header fixo minimalista
- `src/index.css` — ajustes em `.font-detail` se necessário, novas utilities (`.editorial-link`, `.label-caps`)
- `tailwind.config.ts` — manter; talvez adicionar tracking custom

**Componentes a remover do uso (não deletados):**
- `HeroSection` (hero-section-2) — substituído por hero customizado
- `PortfolioGrid` — substituído por grid editorial inline
- `ImageComparison` (antes/depois) — não combina com o estilo de referência

**Paleta:**
- Background: `#f5f3ee` (off-white quente)
- Texto: `#1a1a1a`
- Acento sutil: `#5c4336` (mantém marrom atual)

**Tipografia:**
- Títulos grandes: Lora (serifada, peso 300)
- Labels/menu/captions: Poppins caixa alta, tracking 0.3em, peso 400, ~11px
- Corpo: Poppins peso 300

**Animações:**
- Fade-up suave em scroll (manter `useScrollReveal` existente)
- Hover de imagens: `scale(1.02)` em 800ms ease-out
- Cursor de link com seta animada `→` que desliza ao hover

**Conteúdo preservado:**
- Todas as imagens atuais (clinica1-4, salus, loja4, vinuz, sócias, antes/depois)
- Texto institucional (manifesto, problema, processo, benefícios) — apenas reorganizado
- Link do WhatsApp permanece o mesmo

### Estrutura final da página

```text
[Header fixo]
[Hero editorial fullscreen]
[Manifesto centralizado]
[Grid editorial — 6 projetos assimétricos]
[Estúdio — sócias + texto]
[Processo — 3 colunas tipográficas]
[CTA final editorial]
[Footer denso]
[Floating WhatsApp — mantido]
```
