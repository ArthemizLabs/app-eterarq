

# Redesign Visual Premium — LP Éter Arquitetura

## Diagnóstico
A página está funcional mas visualmente genérica: tipografia sem personalidade, layout flat, seções repetitivas sem ritmo visual, falta de elementos decorativos sutis e hierarquia fraca.

## Mudanças Propostas

### 1. Tipografia — Upgrade completo
- **Títulos**: Trocar Playfair Display por **Cormorant Garamond** (Google Fonts) — mais refinada, elegante, com contraste alto e personalidade de marca de luxo. Pesos 300/400/600.
- **Corpo**: Manter Inter mas usar peso 300 (light) como padrão — mais airy e sofisticado.
- **Tamanhos hero**: Aumentar headline para `text-7xl md:text-8xl` com `font-light` (peso 300) — impacto visual dramático.
- **Adicionar font-feature-settings**: ligatures e old-style figures para refinamento tipográfico.

### 2. Hero — Mais cinematográfico
- Overlay com gradiente diagonal (de preto/60% a transparente) em vez de bege flat — mais profundidade.
- Headline em branco sobre a imagem escura — contraste dramático.
- Texto alinhado à esquerda (não centralizado) — mais editorial, menos template.
- Adicionar uma linha decorativa fina (1px, bege) entre o label e o headline.
- Brand label com `font-medium tracking-[0.5em]` — mais luxo.

### 3. Layout — Ritmo visual
- **Seções com full-bleed images**: Adicionar imagens full-width entre seções (como divisores visuais) — quebra a monotonia.
- **Seção Promessa**: Layout assimétrico — imagem maior (60%) e texto menor (40%).
- **Seção Processo**: Linha horizontal conectando os 3 passos (timeline visual).
- **Portfólio**: Grid assimétrico (1 imagem grande + 2 menores ao lado) em vez de grid uniforme.

### 4. Elementos decorativos sutis
- Linhas finas decorativas (1px, cor bege) como separadores entre seções.
- Números grandes semi-transparentes (opacity 0.05) como background nos cards de processo.
- Aspas estilizadas (" ") grandes e translúcidas na seção de quebra de crença.

### 5. Micro-interações aprimoradas
- Cards com `border-bottom` de 2px que anima de transparente para bege no hover.
- Cursor custom `pointer` mais intencional nos elementos interativos.
- Parallax suave nas imagens de portfólio (translateY baseado em scroll position).

### 6. Footer — Mais completo
- Adicionar links de navegação (âncoras para seções).
- Logo/nome da marca com tipografia estilizada.
- Layout em 2 colunas.

## Arquivos Modificados
- `src/index.css` — nova fonte (Cormorant Garamond), utilitários tipográficos, elementos decorativos
- `src/pages/LandingPage.tsx` — redesign completo de layout, hero, portfólio, processo, footer

