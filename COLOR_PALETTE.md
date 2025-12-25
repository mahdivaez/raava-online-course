# Color Palette Guide

## Professional & Modern Color System

This project uses a structured color palette designed to convey **trust**, **professionalism**, **modernity**, and **luxury**.

---

## Core Philosophy

- **Not too dark, not pure white** - Balanced, easy on the eyes
- **Trust-building colors** - Professional blues
- **Luxury touches** - Warm gold/amber accents
- **Modern aesthetics** - Clean, sophisticated palette

---

## Color Categories

### 1. Trust Colors (Blues)
**Purpose**: Build credibility, professionalism, and reliability

```css
--trust-primary: 210 100% 12%  /* Main project color - dark blue */
--trust-light: 210 100% 92%     /* Light blue backgrounds */
--trust-dark: 210 100% 35%      /* Dark blue for emphasis */
```

**Usage**:
- Primary buttons and CTAs
- Headers and important sections
- Links and interactive elements
- Professional accents

**Tailwind classes**: `bg-trust-primary`, `text-trust-dark`, `border-trust-light`

---

### 2. Luxury Colors (Warm Tones)
**Purpose**: Add sophistication, warmth, and premium feel

```css
--luxury-gold: 35 75% 58%      /* Sophisticated gold */
--luxury-amber: 30 60% 60%     /* Warm amber */
--luxury-bronze: 25 45% 45%    /* Rich bronze */
```

**Usage**:
- Premium features highlights
- Call-to-action accents
- Decorative elements
- Success states

**Tailwind classes**: `bg-luxury-gold`, `text-luxury-amber`, `border-luxury-bronze`

---

### 3. Neutral Colors (Professional Grays)
**Purpose**: Clean backgrounds and text hierarchy

```css
--neutral-50: 220 15% 97%      /* Lightest - main background */
--neutral-100: 220 15% 94%     /* Very light backgrounds */
--neutral-200: 220 15% 88%     /* Subtle borders */
--neutral-300: 220 15% 75%     /* Light borders */
--neutral-500: 220 15% 45%     /* Medium gray text */
--neutral-800: 220 20% 20%     /* Dark text */
--neutral-900: 220 25% 12%     /* Darkest text */
```

**Usage**:
- Background colors (50-200)
- Text colors (500-900)
- Borders and dividers
- Disabled states

**Tailwind classes**: `bg-neutral-50`, `text-neutral-800`, `border-neutral-200`

---

### 4. Accent Colors (Modern Touches)
**Purpose**: Fresh, modern highlights

```css
--accent-teal: 195 70% 45%         /* Modern teal */
--accent-teal-light: 195 70% 90%   /* Light teal backgrounds */
--accent-emerald: 165 65% 45%      /* Fresh emerald */
--accent-emerald-light: 165 65% 90% /* Light emerald backgrounds */
```

**Usage**:
- Secondary buttons
- Info badges
- Hover states
- Fresh accents

**Tailwind classes**: `bg-brand-teal`, `text-brand-emerald`, `border-brand-teal-light`

---

## Semantic Colors

### Primary (Trust Blue)
```css
--primary: 210 100% 12%
--primary-foreground: 0 0% 100%
```
**Use for**: Main actions, primary buttons, key highlights

### Secondary (Warm Luxury)
```css
--secondary: 30 60% 60%
--secondary-foreground: 220 20% 20%
```
**Use for**: Secondary actions, complementary elements

### Accent (Modern Teal)
```css
--accent: 195 70% 45%
--accent-foreground: 0 0% 100%
```
**Use for**: Special highlights, modern touches

---

## Usage Examples

### Buttons

```tsx
// Primary - Trust & Action
<Button className="bg-primary hover:bg-trust-dark">
  ثبت‌نام
</Button>

// Secondary - Luxury Accent
<Button className="bg-secondary hover:bg-luxury-amber">
  اطلاعات بیشتر
</Button>

// Modern Accent
<Button className="bg-brand-teal hover:bg-accent">
  مشاوره رایگان
</Button>
```

### Cards

```tsx
// Professional card with subtle background
<Card className="bg-neutral-50 border-neutral-200">
  <CardHeader className="bg-trust-light">
    <h3 className="text-trust-dark">عنوان</h3>
  </CardHeader>
</Card>

// Premium/luxury card
<Card className="bg-white border-luxury-gold shadow-lg">
  <div className="border-t-4 border-luxury-gold">
    ...
  </div>
</Card>
```

### Sections

```tsx
// Light background section
<section className="bg-neutral-50">
  ...
</section>

// Trust-building section
<section className="bg-trust-light">
  ...
</section>

// Premium section
<section className="bg-gradient-to-br from-neutral-50 to-luxury-gold/10">
  ...
</section>
```

### Text Hierarchy

```tsx
// Main heading - dark, readable
<h1 className="text-neutral-900">عنوان اصلی</h1>

// Subheading - trust color
<h2 className="text-trust-dark">زیرعنوان</h2>

// Body text - comfortable reading
<p className="text-neutral-700">متن اصلی...</p>

// Muted text - less important
<span className="text-neutral-500">متن کم‌اهمیت</span>

// Accent text - highlights
<span className="text-luxury-gold">ویژه</span>
```

---

## Color Combinations

### Professional & Trustworthy
```
Background: neutral-50
Text: neutral-800
Accent: trust-primary
Borders: neutral-200
```

### Luxury & Premium
```
Background: white
Text: neutral-900
Accent: luxury-gold
Borders: luxury-amber/30
```

### Modern & Fresh
```
Background: neutral-50
Text: neutral-800
Accent: brand-teal
Borders: brand-teal-light
```

---

## Typography

### Persian Badkh Font
**Used for**: Titles and large text only (h1-h6, text-xl to text-6xl)
**Increased sizes**: 8-15% larger than default for better readability

### Vazir Font
**Used for**: Body text, small text, UI elements
**Purpose**: Optimal readability for content

---

## Best Practices

1. **Use trust colors (blues)** for primary actions and main elements
2. **Use luxury colors (gold/amber)** sparingly as accents
3. **Use neutral backgrounds** (50-100) instead of pure white
4. **Maintain sufficient contrast** for accessibility
5. **Use semantic colors** (primary, secondary, accent) for consistency
6. **Apply Persian Badkh** only to headings and large text
7. **Keep gradients subtle** using same color family with different lightness

---

## Migration from Old Colors

| Old Color | New Equivalent | Usage |
|-----------|---------------|-------|
| `primary` (gold) | `luxury-gold` or `primary` (blue) | Use blue for main actions, gold for accents |
| `accent` (warm) | `secondary` or `luxury-amber` | Luxury touches |
| `nude` | `neutral-100` to `neutral-200` | Backgrounds |
| `blush` | `luxury-amber` | Warm accents |
| `cream` | `neutral-50` | Light backgrounds |
| `espresso` | `neutral-800` | Dark text |
| `sand` | `neutral-100` | Subtle backgrounds |

---

## Quick Reference

**Trust & Professional**: `bg-trust-primary`, `text-trust-dark`
**Luxury & Premium**: `bg-luxury-gold`, `text-luxury-amber`
**Modern & Clean**: `bg-neutral-50`, `text-neutral-800`
**Fresh Accents**: `bg-brand-teal`, `text-brand-emerald`
