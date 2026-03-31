

## Plan: Build the Éter institutional website at `/`

### Context
The `/lp` is a focused sales landing page. The `/` route will be the full institutional website with navigation, deeper content, and brand storytelling. Same design system, animations, and sophistication level.

### Brand Foundation (from documents)
- **PUV**: Arquitetura como ativo estratégico de vendas e branding
- **Persona**: Empreendedor consolidado (Gustavo Andrade), 36-48 anos, fatura +R$300k/mês, busca ROI em arquitetura
- **Voice**: Autoridade, consultivo, provocativo, foco em negócios
- **Differentials**: 7+ anos de mercado, duas sócias, arquitetura sensorial, retail design, performance espacial

### Page Structure

```text
┌─────────────────────────────────────┐
│  NAVBAR (fixed, glass effect)       │
│  Logo | Início Sobre Método         │
│        Portfólio Contato            │
├─────────────────────────────────────┤
│  HERO (full-screen)                 │
│  "Arquitetura é estratégia."        │
│  Subtitle + CTA                    │
│  Background: hero-bg.jpg           │
├─────────────────────────────────────┤
│  SOBRE (About)                      │
│  Foto das sócias + história         │
│  7+ anos, visão de negócio,        │
│  arquitetura sensorial              │
├─────────────────────────────────────┤
│  SERVIÇOS (Services)                │
│  - Arquitetura Comercial            │
│  - Arquitetura Corporativa          │
│  - Retail Design                    │
│  - Consultoria de Performance       │
│  Cards com ícones + hover effects   │
├─────────────────────────────────────┤
│  MÉTODO (The Method)                │
│  3 steps with timeline animation    │
│  Diagnóstico → Projeto → Execução  │
├─────────────────────────────────────┤
│  PORTFÓLIO (Portfolio)              │
│  Reuse PortfolioCarousel + gallery  │
│  Same project images from LP        │
├─────────────────────────────────────┤
│  DIFERENCIAIS (Why Éter)            │
│  Image comparison (antes/depois)    │
│  Stats/numbers animation            │
├─────────────────────────────────────┤
│  DEPOIMENTOS (Testimonials)         │
│  Quote cards with subtle animation  │
├─────────────────────────────────────┤
│  CONTATO / CTA                      │
│  Partner photo + gradient fade      │
│  WhatsApp CTA + contact info        │
├─────────────────────────────────────┤
│  FOOTER                             │
│  Logo, links, social, copyright     │
└─────────────────────────────────────┘
│  FLOATING WHATSAPP                  │
```

### Technical Details

**Files to create/modify:**

1. **`src/pages/Index.tsx`** — Complete rewrite. Full institutional page with all sections above.

2. **`src/components/Navbar.tsx`** — Fixed top navbar with:
   - Logo left, nav links right
   - Glass/blur effect on scroll
   - Mobile hamburger menu (Sheet component)
   - Smooth scroll to sections via anchor links
   - Hide/show on scroll direction

3. **`src/assets/logo-eter-site.jpeg`** — Copy the uploaded new logo

**Reused from LP:**
- Same color system (`--foreground`, `--background`, `--accent`, brand browns)
- Same fonts (Poppins display/body, Lora detail)
- `RevealSection`, `StaggerChildren`, `useScrollReveal` patterns
- `PortfolioCarousel` component
- `ImageComparison` component
- `HeroSection` component (adapted)
- Same project images
- Same WhatsApp URL and GTM attributes
- `FloatingWhatsApp` component

**New elements:**
- Navbar with smooth-scroll anchors
- Services section with icon cards and hover animations (Framer Motion)
- Stats/counter section with animated numbers on scroll
- Testimonials section with quote cards
- About section with sócias photo and brand story
- Contact section with address, phone, social links
- Richer footer with sitemap links and social icons

**Animations (matching LP sophistication):**
- Framer Motion `variants` for staggered reveals
- Scroll-triggered counters (years, projects, m2)
- Hover micro-interactions on service cards
- Parallax-subtle on hero background
- Navbar opacity transition on scroll

### Content Strategy (from persona docs)
- Hero: "Arquitetura é estratégia." — direct, provocative
- About: Story of the two partners, business-minded architects
- Services: Focus on ROI language, not "decoration"
- Portfolio: Same projects, presented as case studies
- Testimonials: Business-focused quotes (placeholder for now)
- CTA: "Agende sua Análise de Performance Espacial"

### Sections detail

| Section | Key copy | Visual |
|---------|----------|--------|
| Hero | "Arquitetura é estratégia." / "Transformamos espaços comerciais em ativos de marca e vendas." | Full-screen, hero-bg.jpg, overlay gradient |
| Sobre | History, 7+ years, two partners, sensorial architecture | Sócias photo + text grid |
| Serviços | 4 service cards with icons | Animated cards, hover elevation |
| Método | Diagnóstico, Projeto, Execução | Timeline with numbered steps |
| Portfólio | "Projetos que comunicam valor" | PortfolioCarousel reuse |
| Diferenciais | Before/after + stats | ImageComparison + counters |
| Depoimentos | 2-3 client quotes | Card carousel |
| Contato | CTA + info | Partner photo gradient, WhatsApp button |
| Footer | Full footer | Links, social, copyright |

