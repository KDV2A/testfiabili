---
name: Precision AI Ethos
colors:
  surface: '#f8f9ff'
  surface-dim: '#d8dae0'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3fa'
  surface-container: '#ededf4'
  surface-container-high: '#e7e8ee'
  surface-container-highest: '#e1e2e9'
  on-surface: '#191c20'
  on-surface-variant: '#45464f'
  inverse-surface: '#2e3036'
  inverse-on-surface: '#eff0f7'
  outline: '#757680'
  outline-variant: '#c5c6d0'
  surface-tint: '#4b5d90'
  primary: '#031a4b'
  on-primary: '#ffffff'
  primary-container: '#1d3061'
  on-primary-container: '#8799d1'
  inverse-primary: '#b3c5ff'
  secondary: '#b6005a'
  on-secondary: '#ffffff'
  secondary-container: '#db2573'
  on-secondary-container: '#fffbff'
  tertiary: '#001d42'
  on-tertiary: '#ffffff'
  tertiary-container: '#053266'
  on-tertiary-container: '#7b9cd6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b3c5ff'
  on-primary-fixed: '#011849'
  on-primary-fixed-variant: '#334577'
  secondary-fixed: '#ffd9e1'
  secondary-fixed-dim: '#ffb1c5'
  on-secondary-fixed: '#3f001b'
  on-secondary-fixed-variant: '#8f0046'
  tertiary-fixed: '#d6e3ff'
  tertiary-fixed-dim: '#aac7ff'
  on-tertiary-fixed: '#001b3e'
  on-tertiary-fixed-variant: '#22477b'
  background: '#f8f9ff'
  on-background: '#191c20'
  surface-variant: '#e1e2e9'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 64px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-xl:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  stack-xs: 4px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
  stack-xl: 80px
---

## Brand & Style

This design system is engineered for a high-end AI consultancy, balancing institutional "Expertise" with cutting-edge "Innovation." The aesthetic sits at the intersection of **Corporate Modernism** and **Glassmorphism**, creating an environment that feels both grounded and visionary.

The visual narrative centers on "The Catalyst"—represented by vibrant, orbed gradients that pulse with organic GSAP-driven motion. While the structure is rigid and professional (using deep blues and precise typography), the interactive layers utilize frosted glass and subtle depth to signify the transformative, fluid nature of AI integration. The goal is to evoke a sense of high-velocity intelligence backed by unwavering reliability.

## Colors

The palette is anchored by **Expertise Blue (#1D3061)**, used for primary navigation, type, and structural elements to establish authority. The background remains a pristine white to maximize clarity and whitespace.

**The AI Gradient** serves as the primary visual hook. It should be used sparingly for "hero" moments, such as the AI orbs, active states, and progress indicators. **Pink (#E7317C)** is the lead accent for calls to action, while **Red** and **Orange** are reserved for critical feedback or data visualization highlights. **Light Grey (#E9EDF2)** is utilized for background sectioning and subtle glass borders to prevent the interface from feeling overly heavy.

## Typography

(Note: Per instructions, "Montserrat" is selected as the closest high-end professional geometric sans-serif to Poppins in the available fonts).

The typographic hierarchy is built on high contrast. Large **Display** and **Headline** levels use SemiBold weights with tight tracking to convey strength and modernism. **Body** text is set with generous line-height to ensure readability in long-form consulting reports. Labels use increased letter spacing and uppercase styling to denote metadata and small UI details, maintaining a professional "architectural" feel.

## Layout & Spacing

The system employs a **12-column fluid grid** for desktop, shifting to a **4-column grid** for mobile. A strict 8px base unit drives all spatial decisions.

Layouts should prioritize asymmetric whitespace to create a "premium" feel. Large vertical "Stack XL" spacing is used to separate major narrative sections, allowing the AI orbs and glass elements room to breathe. Margins are intentionally wide on desktop (64px) to center the focus on high-value content. For GSAP transitions, components should be spaced to allow for "stagger" entry effects from the bottom or sides without overlapping content.

## Elevation & Depth

Hierarchy is achieved through three primary techniques:

1.  **Glassmorphism:** Secondary surfaces (modals, dropdowns, sticky headers) use a `backdrop-filter: blur(12px)` with a 40% opaque white background and a 1px solid white border at 20% opacity.
2.  **Ambient Shadows:** For interactive cards, use an ultra-diffused shadow (`0 20px 40px rgba(29, 48, 97, 0.08)`) to lift elements without creating a "heavy" look.
3.  **Tonal Stacking:** Use the Light Grey (#E9EDF2) to create subtle wells or backgrounds for data-rich areas, separating them from the pure white primary surface.

**The AI Orbs:** These are not static. They exist behind the glass layers, often partially obscured, creating a sense of deep, layered space.

## Shapes

The design system uses a **Rounded** philosophy (0.5rem base) to soften the corporate edge. 

- **Containers & Cards:** 1rem (`rounded-lg`) to feel approachable.
- **Buttons & Chips:** 2rem (`rounded-xl` / Pill-shaped) to distinguish interactive elements from content containers.
- **AI Elements:** Always perfectly circular (50% radius) to represent the "orb" of intelligence mentioned in the brand requirements.

## Components

### Buttons
- **Primary:** Gradient 3 background, white text, pill-shaped. On hover: slight scale-up (1.05x) via GSAP.
- **Secondary:** Dark Blue (#1D3061) outline, 2px stroke, pill-shaped.
- **Tertiary/Ghost:** Dark Blue text, no background, icon-suffix with a sliding arrow animation on hover.

### Cards
- **Consulting Card:** White background, 1px Light Grey border, soft ambient shadow. 
- **AI Feature Card:** Glassmorphic background with a subtle "AI Orb" peaking from the top-right corner.

### Input Fields
- Underlined style or subtle light grey fill with a 2px bottom-border focus state in Pink (#E7317C).

### AI Orbs (Decorative)
- Large, blurred radial gradients using Gradient 3. These should have a slight "floating" animation (GSAP `yoyo` and `ease: "sine.inOut"`) to feel alive and dynamic.

### Lists
- Expert lists use Dark Blue circular bullets with a small white checkmark for "Trustworthiness" and "Precision."