

## Plan: Add GTM-friendly classes and data attributes to all CTA buttons

### Summary
Add unique `id`, `class`, and `data-gtm-*` attributes to all WhatsApp CTA buttons so you can easily set up click triggers in Google Tag Manager.

### Buttons identified (3 total)

| Button | Location | Proposed ID | GTM Event |
|--------|----------|-------------|-----------|
| Hero CTA | Top of page | `cta-hero-whatsapp` | `cta_hero_click` |
| Final CTA | Section with partner photo | `cta-final-whatsapp` | `cta_final_click` |
| Floating button | Bottom-right corner | `cta-float-whatsapp` | `cta_float_click` |

### Changes

**1. `src/components/ui/hero-section-2.tsx`** — Add `id`, `className`, and `data-gtm` to the hero CTA `<a>` tag:
- `id="cta-hero-whatsapp"`
- `className` adds `gtm-cta gtm-cta-hero`
- `data-gtm-event="cta_hero_click"`
- `data-gtm-label="Hero WhatsApp"`

**2. `src/pages/LandingPage.tsx`** — Two buttons:

**Final CTA button:**
- `id="cta-final-whatsapp"`
- Add classes `gtm-cta gtm-cta-final`
- `data-gtm-event="cta_final_click"`
- `data-gtm-label="Final CTA WhatsApp"`

**Floating WhatsApp button:**
- `id="cta-float-whatsapp"`
- Add classes `gtm-cta gtm-cta-float`
- `data-gtm-event="cta_float_click"`
- `data-gtm-label="Float WhatsApp"`

### GTM Setup Guide
After implementation, in GTM you can create a single trigger:
- **Trigger type**: Click — All Elements
- **Condition**: `Click Classes` contains `gtm-cta`
- Use the `data-gtm-event` attribute as the Event Name in your GA4/Google Ads tag
- Use `data-gtm-label` to distinguish which button was clicked

