

## Plan: Fix uneven row heights in benefits list

The problem is that CSS grid pairs items into rows — when one item wraps to 2 lines and its neighbor doesn't, the row expands unevenly, creating visible whitespace gaps.

**Solution**: Instead of a single grid that creates rows, split the benefits into two independent columns. Each column flows vertically on its own, so a long item on the left doesn't affect spacing on the right.

### Changes to `src/pages/LandingPage.tsx`

1. **Split the `benefits` array into two explicit arrays** — manually balance long vs short items across left/right columns so both columns have similar total height
2. **Replace the single `<ul>` grid** with two side-by-side `<ul>` elements inside a flex container, each rendering independently

**Proposed column split** (pairing similar-length items):

Left column:
- Aumento do tempo de permanência no ambiente
- Aumento de ticket médio
- Direcionamento para reter seu cliente no espaço
- Bem estar e harmonia
- Marketing sensorial
- Influenciar comportamento do consumidor

Right column:
- Criar elementos agradáveis ao cliente, gerando conexão entre consumidor e marca
- Fidelização – percepção positiva, vontade de retornar
- Mudar a percepção de tempo
- Diferenciar marca
- Potencializar ponto de venda
- Melhorar performance da equipe

This way long items (like "Criar elementos agradáveis...") don't force extra whitespace next to short items on the other side.

### Technical detail
- Replace `grid grid-cols-2` with `flex gap-x-10`
- Each column is a `<ul>` with `flex-1` and `gap-y-2`
- Stacks to single column on mobile via `flex-col sm:flex-row`

