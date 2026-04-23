

# Empilhar sócias verticalmente, alternando lado da foto

Na seção "Quem somos?" da `/`, troco o grid lado a lado por um layout empilhado, alternando a ordem foto/texto entre as duas sócias.

## Layout

```text
   ┌──────────┐
   │ ana foto │   Ana Emília Faleiro
   │          │   ARQUITETA
   │          │   Formada pela UEG…
   └──────────┘   Responsável pela parte técnica…


   Fernanda Castro          ┌──────────┐
   DESIGNER DE INTERIORES   │ fern foto│
   Especialista em…         │          │
   Atua no desenvolvimento… │          │
                            └──────────┘
```

- Ana: **foto à esquerda, texto à direita**
- Fernanda: **texto à esquerda, foto à direita**
- Mobile: tudo empilha em coluna única (foto sempre acima do texto)

## Implementação

Único arquivo: `src/pages/Index.tsx` — apenas o bloco `{/* Sócias */}` dentro de `About()`.

- Container vira `flex flex-col gap-20 sm:gap-28 max-w-5xl mx-auto` (empilhado)
- Cada sócia: `grid md:grid-cols-12 gap-8 md:gap-16 items-center`
  - Foto: `md:col-span-5`, aspect `3/4`
  - Texto: `md:col-span-7`
- Alternância via `md:order-1` / `md:order-2` baseada no índice (par = foto primeiro, ímpar = texto primeiro)
- Mantém intro, animação `useReveal`, tipografia e tokens da Éter intactos

