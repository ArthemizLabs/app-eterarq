

# Substituir seção "Sobre" da página `/` pelo modelo "Quem somos?"

**Confirmado: alteração apenas em `src/pages/Index.tsx` (rota `/`).** A `/lp` (`LandingPage.tsx`) não é tocada.

## O que muda

Substituo a função `About()` atual da `/` (texto único "Há mais de 7 anos…" ao lado de `sociasAboutImg`) por uma nova seção **"Quem somos?"** apresentando Ana Emília e Fernanda lado a lado, cada uma com sua foto, nome, cargo e bio — mantendo 100% o estilo editorial minimalista da Éter.

## Layout da nova seção (id=`sobre`, na `/`)

```text
                    QUEM SOMOS

   Éter, o elemento invisível que transforma
   espaço em atmosfera, presença em conexão,
   forma em essência.

   Éter nasce da união de olhares complementares
   e de uma abordagem criativa, sensível e técnica
   sobre o espaço.


   ┌───────────┐                ┌───────────┐
   │ ana foto  │  Ana Emília    │ fern foto │  Fernanda Castro
   │ (retrato) │  Faleiro       │ (retrato) │  ―
   │           │  ― ARQUITETA   │           │  DESIGNER DE
   │           │                │           │  INTERIORES E
   │           │  Formada pela  │           │  EXPERIÊNCIAS
   │           │  UEG…          │           │
   └───────────┘                └───────────┘  Especialista em…
```

- Intro no topo (label + frase de essência + frase de origem)
- Grid 2 colunas (desktop) / 1 coluna (mobile), cada sócia em sub-grid `imagem | texto`
- Foto em aspect retrato (3:4), object-cover, sem cantos arredondados pesados
- Nome em `font-display`, cargo em `font-body` uppercase tracking amplo, bio em `font-body font-light`
- Palavras-chave da frase de essência em `font-detail` Lora itálico ("atmosfera", "conexão", "essência")

## Assets

Copiar as 2 imagens enviadas para `src/assets/`:
- `user-uploads://ana_emilia.png` → `src/assets/ana-emilia.png`
- `user-uploads://fernanda.png` → `src/assets/fernanda.png`

No `Index.tsx`:
- adicionar imports `anaImg` e `fernandaImg`
- remover import `sociasAboutImg` (não usado mais)

## Estilo (mantém identidade Éter)

- Fundo `bg-background`, padding `py-28 sm:py-40 px-6 sm:px-12`
- Label: `font-body text-[10px] tracking-[0.5em] uppercase text-muted-foreground`
- Frase de essência: `font-display tracking-display text-2xl sm:text-3xl md:text-4xl leading-[1.3]`
- Frase de origem: `font-body font-light text-[15px] leading-[1.9] text-muted-foreground`
- Nomes: `font-display tracking-display text-2xl`
- Cargo: `font-body text-[10px] tracking-[0.4em] uppercase text-muted-foreground`
- Bios: `font-body font-light text-[14px] leading-[1.9] text-muted-foreground`
- Animação `useReveal` com fade `opacity 0→1` (consistente com demais seções)

## Mudanças técnicas

**Arquivos:**
1. `src/assets/ana-emilia.png` — novo (cópia do upload)
2. `src/assets/fernanda.png` — novo (cópia do upload)
3. `src/pages/Index.tsx`:
   - Trocar import `sociasAboutImg` por `anaImg` + `fernandaImg`
   - Reescrever apenas a função `About()` mantendo `id="sobre"` (preserva navegação da sidebar)
   - Hero, Projects, Method, Quote, Contact, Footer intocados

`src/pages/LandingPage.tsx` **não é alterada**.

