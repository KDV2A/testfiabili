---
name: Fiabilis AI Precision
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
  tertiary: '#420500'
  on-tertiary: '#ffffff'
  tertiary-container: '#680d00'
  on-tertiary-container: '#ff6c4e'
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
  tertiary-fixed: '#ffdad3'
  tertiary-fixed-dim: '#ffb4a5'
  on-tertiary-fixed: '#3e0500'
  on-tertiary-fixed-variant: '#8c1903'
  background: '#f8f9ff'
  on-background: '#191c20'
  surface-variant: '#e1e2e9'
  background-main: '#f7f8fa'
  background-alt: '#e6f0fc'
  accent-pink-light: '#fdeaf2'
  border-subtle: '#e9edf2'
  button-hover: '#d02a6e'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md:
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
    fontWeight: '600'
    lineHeight: '1.2'
  label-sm:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  section-gap-lg: 80px
  section-gap-sm: 40px
  element-gap: 16px
---

## Brand & Style
The design system for this brand focuses on a "Corporate Modern" aesthetic that bridges the gap between traditional payroll consulting and cutting-edge AI technology. It is designed to evoke trust, precision, and efficiency for a professional B2B audience.

The visual language is characterized by:
- **Professionalism:** A clean, structured layout that handles complex regulatory data with ease.
- **Tech-Forwardness:** High-quality whitespace, subtle tonal layering, and vibrant accent pops that signal innovation.
- **Clarity:** A focus on readability and clear information hierarchy, essential for legal and financial services.

## Colors
This design system utilizes a deep **Dark Blue** as its foundation to convey authority and stability. The **Vibrant Pink** serves as the primary call-to-action and accent color, injecting energy and modern tech flair into the interface.

**Functional Color Usage:**
- **Primary (#1d3061):** Used for headlines, primary navigation, and dark-themed hero sections.
- **Secondary (#e7317c):** Dedicated to primary buttons and key highlights.
- **Tertiary (#e95c40):** Used sparingly for secondary accents or status indicators.
- **Neutral (#7e8086):** Applied to body text and secondary metadata.
- **Surface Colors:** Use the off-white background for most pages, with the light blue and light pink reserved for card backgrounds, chips, or decorative section fills.

## Typography
We use **Montserrat** (as a high-quality alternative to Poppins that maintains the geometric, professional feel) for all text elements. The typography strategy relies on a strong contrast between bold, dark blue headings and lighter, well-spaced body text.

- **Headlines:** Use high weights (600-700) and tight letter-spacing for a modern, "impactful" look.
- **Body Text:** Standardize on 16px for general content to ensure accessibility and readability.
- **Hierarchy:** Use the Dark Blue for all primary headings and the Grey (#7e8086) for body descriptions to create a natural visual path.

## Layout & Spacing
The layout follows a **fixed-width grid** approach for desktop to maintain control over line lengths and reading density, while transitioning to a fluid layout for mobile.

- **Grid:** A 12-column system is used for desktop layouts.
- **Vertical Rhythm:** Sections are separated by generous whitespace (80px+) to allow the content to breathe and emphasize the premium nature of the service.
- **Cards:** Content within cards should use consistent 32px padding for a "spacious" and high-end feel.

## Elevation & Depth
Depth is achieved through **Tonal Layers** and **Subtle Ambient Shadows** rather than heavy skeuomorphism.

- **Planes:** The primary canvas is #f7f8fa. Content cards should be white (#FFFFFF) with a very soft, high-diffusion shadow (Color: #1d3061 at 5% opacity, Y: 4px, Blur: 20px).
- **Interactive States:** On hover, cards may lift slightly (increase shadow spread) or gain a subtle Border (#e9edf2) to indicate interactivity.
- **Overlays:** Use the Light Blue (#e6f0fc) as a "lower" layer behind cards to create a sense of organized sections.

## Shapes
The design system utilizes a **Rounded** shape language to soften the corporate aesthetic and appear more approachable and modern.

- **Buttons & Inputs:** Use the standard `rounded` (0.5rem) setting.
- **Cards:** Use `rounded-lg` (1rem) to create a distinct containerized look.
- **Icons:** Icons should be housed in circular or soft-rounded backgrounds (Light Blue or Light Pink) to serve as visual anchors.

## Components

### Buttons
- **Primary:** Solid Pink (#e7317c) with White text. Hover state shifts to #d02a6e. Fully rounded or 8px corners based on the shape tokens.
- **Secondary:** Transparent background with a Dark Blue (#1d3061) border and text. 
- **Ghost:** Text-only in Dark Blue or Pink with a subtle background appearing on hover.

### Cards
- White background, 16px corner radius, and 1px border (#e9edf2). 
- Use for pricing plans, feature lists, and AI chat snippets.

### Input Fields
- Background: White; Border: 1px #e9edf2; Text: #1d3061.
- Focused state: Border changes to Pink (#e7317c) with a subtle outer glow.

### Chips & Badges
- Used for categories or tags. Use the Light Pink (#fdeaf2) background with Pink (#e7317c) text for "Hot" or "New" items, and Light Blue (#e6f0fc) with Dark Blue text for standard categories.

### Lists
- Use custom iconography (checkmarks or bullet points) in Pink (#e7317c) to maintain brand consistency throughout text-heavy regulatory descriptions.