# Design Document: UI Restoration

## Overview

This design document outlines the restoration of the Maharashtra Local Guide application to its clean "Rainbow Premium UI" state. The restoration focuses on removing broken visual effects, restoring proper layout structure, and maintaining a polished appearance with rainbow gradients in hero sections and clean white cards for content areas. All existing functional features (Marathi font toggle, swipe cards, typing animation, history, share buttons) will be preserved.

## Architecture

The application follows a React-based single-page application (SPA) architecture with the following structure:

```
App (Router Container)
├── Navbar (Global Navigation)
├── Main Content Area
│   ├── Home Page
│   ├── Ask Page
│   └── About Page
└── Footer (Global Footer)
```

### Technology Stack
- **Frontend Framework**: React 18 with Vite
- **Routing**: React Router v6
- **Styling**: Tailwind CSS + Custom CSS
- **Animations**: Framer Motion
- **3D Graphics**: Three.js (Antigravity component - currently unused)

## Components and Interfaces

### 1. Global Styles (index.css)

**Purpose**: Define the visual design system and reusable styles

**Key Responsibilities**:
- Define color palette and typography
- Implement hero gradient (orange → magenta → blue → green)
- Style navbar with white-transparent background
- Define card styles with shadows and rounded corners
- Preserve functional animations (typewriter, thinking loader, swipe cards)
- Remove broken background effects

**Design Specifications**:

```css
/* Color Palette */
--saffron: #FF8C00
--purple: #8B00FF
--dark-text: #222222
--light-bg: #F5F5F7
--white: #FFFFFF

/* Typography */
--font-body: 'Inter', 'Noto Sans Devanagari', system-ui
--font-marathi: 'Noto Sans Devanagari'
--font-heading: 'Poppins'

/* Hero Gradient (Hero sections only) */
background: linear-gradient(135deg, #FF8C00 0%, #8B00FF 100%)

/* Card Styling */
background: #FFFFFF
border-radius: 16px
box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08)

/* Navbar */
background: #FFFFFF
border-bottom: 1px solid #E5E5E5
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05)
```

**Removal Requirements**:
- Remove network line animations
- Remove excessive overlay effects
- Remove dark purple blocks
- Remove random misplaced white blocks
- Remove full-page gradient backgrounds

### 2. Navbar Component

**Purpose**: Provide consistent navigation across all pages

**Structure**:
```
Navbar
├── Brand Section (Left)
│   ├── Logo Icon (Saffron background with 'म')
│   └── Brand Text ("Maharashtra Local Guide")
└── Navigation Menu (Right)
    ├── Home Link
    ├── Kay Karu? Link
    └── About Link
```

**Design Specifications**:
- Background: White with transparency (`#FFFFFF`)
- Position: Sticky at top (`position: sticky; top: 0`)
- Border: Bottom border `1px solid #E5E5E5`
- Shadow: Subtle `0 1px 3px rgba(0, 0, 0, 0.05)`
- Active indicator: Saffron underline animation (`#FF8C00`)
- Text color: Dark gray (`#222222`)
- Hover color: Saffron (`#FF8C00`)

**Layout Requirements**:
- Brand on left, menu on right (flexbox: `justify-between`)
- No text overlapping
- No text stacking
- Responsive mobile menu with hamburger icon

**Interactions**:
- Smooth underline animation on hover
- Active page indicator with saffron underline
- Mobile menu toggle with animation

### 3. Home Page

**Purpose**: Landing page showcasing the application's value proposition

**Structure**:
```
Home Page
├── Hero Section (Rainbow Gradient)
│   ├── Main Heading (Marathi: "महाराष्ट्र")
│   ├── Subtitle ("Local Guide")
│   ├── Description Text
│   └── CTA Button ("Kay Karu?")
├── Maharashtra Map Section (Light Background)
│   ├── Section Heading
│   └── Map Image (White Card)
└── Feature Cards Section (White Background)
    ├── City-Specific Card
    ├── Context-Aware Card
    └── Local Reality Card
```

**Design Specifications**:

**Hero Section**:
- Background: Rainbow gradient (orange → magenta → blue → green)
- Min height: `70vh`
- Text color: White (`#FFFFFF`)
- Centered content with animations (Framer Motion)
- CTA button: Saffron with hover gradient effect

**Map Section**:
- Background: Light gray (`#F5F5F7`)
- Padding: `4rem 0`
- Map container: White card with rounded corners and shadow
- Max width: `1024px` centered

**Feature Cards**:
- Background: White (`#FFFFFF`)
- Padding: `4rem 0`
- Grid: 3 columns on desktop, 1 column on mobile
- Card styling:
  - White background
  - Border: `1px solid #E5E5E5`
  - Rounded corners: `16px`
  - Shadow: `0 4px 8px rgba(0, 0, 0, 0.08)`
  - Hover effect: Lift up with increased shadow

**Container Requirements**:
- Max width: `1024px`
- Centered: `margin: 0 auto`
- Padding: `0 2rem` (desktop), `0 1rem` (mobile)
- Section spacing: Minimum `3rem` top/bottom

### 4. Ask Page

**Purpose**: Interactive form for users to ask questions with context

**Structure**:
```
Ask Page
├── Hero Section (Rainbow Gradient)
│   ├── Heading ("Kay Karu?")
│   └── Subtitle
├── Form Section (Light Background)
│   └── Form Card (White)
│       ├── City Selector (Selection Chips)
│       ├── Time/Situation Selector (Selection Chips)
│       ├── Topic Selector (Selection Chips)
│       ├── Question Text Area
│       └── Submit Button
└── Results Section
    ├── Loading Animation (Thinking Dots)
    ├── Error Message (if applicable)
    └── Response Cards
        ├── Official Advice Card (Blue accent)
        └── Local Reality Card (Saffron accent)
```

**Design Specifications**:

**Hero Section**:
- Background: Rainbow gradient
- Padding: `4rem 0`
- Heading: "Kay Karu?" centered, white text
- Subtitle: White text with transparency

**Form Card**:
- Background: White (`#FFFFFF`)
- Rounded corners: `16px`
- Shadow: `0 4px 16px rgba(0, 0, 0, 0.08)`
- Padding: `2rem`
- Max width: `768px` centered

**Selection Chips**:
- Layout: Grid with neat rows
- Inactive state:
  - Background: White
  - Border: `2px solid #E5E5E5`
  - Text: Dark gray (`#222222`)
  - Hover: Border changes to saffron
- Active state:
  - Background: Saffron (`#FF8C00`)
  - Border: Saffron
  - Text: White
  - Shadow: `0 2px 8px rgba(255, 140, 0, 0.3)`
- Rounded corners: `12px`
- Padding: `0.75rem`
- Transition: All properties `0.3s ease`

**Text Area**:
- Width: Full width of card
- Background: White
- Border: `2px solid #E5E5E5`
- Focus border: Saffron (`#FF8C00`)
- Rounded corners: `12px`
- Padding: `1rem`
- Rows: 4
- Resize: None

**Submit Button**:
- Position: Below chips, centered
- Background: Saffron (`#FF8C00`)
- Hover: Gradient (orange → purple)
- Text: White, bold
- Padding: `1rem 2.5rem`
- Rounded: Full (`9999px`)
- Shadow: `0 2px 8px rgba(255, 140, 0, 0.3)`
- Hover shadow: `0 4px 12px rgba(255, 140, 0, 0.4)`
- Hover transform: `translateY(-2px)`
- Disabled state: Opacity 50%, no hover effects

**Response Cards**:
- Layout: 2-column grid on desktop, 1 column on mobile
- Card styling:
  - Background: White
  - Rounded corners: `16px`
  - Shadow: `0 4px 16px rgba(0, 0, 0, 0.08)`
  - Padding: `1.5rem`
  - Border-left accent: 4px solid (blue for official, saffron for local)
- Icon container:
  - Size: `48px × 48px`
  - Rounded corners: `12px`
  - Background: Blue (official) or Saffron (local)
  - Icon: Emoji centered
- Text: Dark gray (`#222222`), line height `1.6`

**Container Requirements**:
- Page background: Light gray (`#F5F5F7`)
- Form section padding: `3rem 0`
- Results section padding: `0 0 4rem 0`
- Max width: `1024px` centered

### 5. About Page

**Purpose**: Explain the application's purpose and features

**Structure**:
```
About Page
├── Hero Section (Rainbow Gradient)
│   ├── Heading ("About This Project")
│   └── Subtitle
└── Content Section (Light Background)
    ├── Purpose Card (White)
    ├── How It Works Card (White)
    ├── What Makes It Different Card (White)
    └── Call to Action
```

**Design Specifications**:

**Hero Section**:
- Background: Rainbow gradient
- Padding: `4rem 0`
- Heading: Centered, white text
- Subtitle: White text with transparency

**Content Cards**:
- Background: White (`#FFFFFF`)
- Rounded corners: `16px`
- Shadow: `0 4px 8px rgba(0, 0, 0, 0.08)`
- Padding: `2rem`
- Margin bottom: `2rem`
- Max width: `896px` centered

**Card Headings**:
- Color: Saffron (`#FF8C00`) or Purple (`#8B00FF`)
- Font: Poppins, bold
- Size: `1.875rem` (30px)
- Margin bottom: `1rem`
- Icon: Emoji prefix

**Card Content**:
- Text color: Dark gray (`#222222`)
- Line height: `1.6`
- Paragraphs: Margin bottom `1rem`
- Lists: Indented with disc bullets, spacing between items

**Feature Grid** (What Makes It Different section):
- Layout: 2-column grid on desktop, 1 column on mobile
- Gap: `1.5rem`
- Each feature:
  - Border-left: `4px solid` (alternating saffron/purple/blue)
  - Padding-left: `1rem`
  - Heading: Bold, dark gray
  - Text: Gray (`#6B7280`)

**Call to Action**:
- Centered text and button
- Button: Same styling as Home page CTA
- Padding: `2rem 0`

**Container Requirements**:
- Page background: Light gray (`#F5F5F7`)
- Content section padding: `4rem 0`
- Card spacing: `2rem` between cards
- Max width: `896px` centered

### 6. Footer Component

**Purpose**: Provide minimal, professional page footer

**Structure**:
```
Footer
└── Content Container (Centered)
    ├── Brand Name
    ├── Tagline
    └── Copyright Text
```

**Design Specifications**:
- Background: White (`#FFFFFF`)
- Border top: `1px solid #E5E5E5`
- Padding: `2rem 0`
- Margin top: `3rem`
- Text alignment: Center
- Brand name: Bold, dark gray (`#222222`), size `1.25rem`
- Tagline: Gray (`#6B7280`), size `0.875rem`
- Copyright: Light gray (`#9CA3AF`), size `0.75rem`
- No extra decorative elements
- No social media icons
- No additional links

### 7. Preserved Functional Features

**Marathi Font Toggle**:
- Location: TBD (not currently visible in components)
- Styling: Toggle switch with saffron active state
- Functionality: Switch between English and Marathi fonts

**Swipe Cards**:
- CSS classes: `.swipe-container`, `.swipe-card`
- Behavior: Horizontal scroll with snap points
- Indicators: Dots below cards (saffron for active)

**Typing Animation**:
- CSS class: `.typewriter`
- Animation: Typing effect for text reveal
- Duration: 2 seconds

**Thinking Loader**:
- CSS class: `.thinking-loader`, `.thinking-dot`
- Animation: Three bouncing dots
- Color: Saffron (`#FF8C00`)

**Share Buttons**:
- CSS class: `.share-btn`
- Styling: Circular white buttons with border
- Hover: Saffron background with scale effect
- Size: `40px × 40px`

**History Feature**:
- Location: TBD (not currently visible in components)
- Functionality: Store and display previous queries

## Data Models

### FormData (Ask Page)
```typescript
interface FormData {
  city: string;        // Selected city/region
  time: string;        // Selected time/situation
  topic: string;       // Selected topic
  question: string;    // User's question text
}
```

### Response (Ask Page)
```typescript
interface Response {
  official: string;    // Official advice text
  reality: string;     // Local reality text
}
```

### NavigationState
```typescript
interface NavigationState {
  currentPath: string;           // Current route path
  mobileMenuOpen: boolean;       // Mobile menu state
}
```

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: No Broken Visual Effects

*For any* page in the application, when rendered, the page should not display network line animations, excessive overlays, dark purple blocks behind the navbar, or random misplaced white blocks.

**Validates: Requirements 1.1, 1.2, 1.3, 1.4, 1.5**

### Property 2: Proper Container Spacing

*For any* page section, the section should have a max-width container centered on the page with smooth padding, and no elements should overlap vertically or horizontally.

**Validates: Requirements 2.1, 2.2, 2.3**

### Property 3: Minimum Section Spacing

*For any* major section on a page, the section should have minimum 3rem spacing on top and bottom.

**Validates: Requirements 2.4, 2.5**

### Property 4: Navbar Layout Structure

*For any* viewport size, the navbar should display the brand on the left and menu items on the right, with no text overlapping or stacking.

**Validates: Requirements 3.2, 3.3, 3.5, 3.6**

### Property 5: Navbar Active Indicator

*For any* active navigation link, the navbar should display a saffron-colored underline indicator.

**Validates: Requirements 3.4**

### Property 6: Ask Page Form Layout

*For any* state of the Ask page form, the "Kay Karu?" heading should be centered, selection chips should be in neat rows inside a white card, the text area should be full width inside the same card, and the submit button should be centered below the chips.

**Validates: Requirements 4.1, 4.2, 4.3, 4.4, 4.6**

### Property 7: Submit Button Hover Effect

*For any* hover interaction on the submit button, the button should apply a smooth gradient hover effect.

**Validates: Requirements 4.5**

### Property 8: About Page Card Structure

*For any* content section on the About page, the section should be displayed in a white card with spacing and shadows, with icons and headings readable on white backgrounds.

**Validates: Requirements 5.1, 5.2, 5.5**

### Property 9: No Gradient Behind Text

*For any* paragraph text on the About page, the text should not have a gradient background applied.

**Validates: Requirements 5.3**

### Property 10: Text Readability

*For any* body text content, the text should use dark gray color (#222) for high readability.

**Validates: Requirements 5.4, 8.5**

### Property 11: Footer Minimal Design

*For any* page, the footer should display a neat, minimal design with centered text only and no extraneous decorative elements.

**Validates: Requirements 6.1, 6.2, 6.3, 6.4**

### Property 12: Feature Preservation

*For any* existing functional feature (Marathi font toggle, swipe cards, typing animation, history, share buttons), the feature should remain functional after restoration.

**Validates: Requirements 7.1, 7.2, 7.3, 7.4, 7.5, 7.6**

### Property 13: Gradient Placement

*For any* page, the rainbow gradient should only be applied in hero banner areas and not as a full-page background.

**Validates: Requirements 8.1, 8.2**

### Property 14: Card Styling Consistency

*For any* content card, the card should have a white background, rounded corners, and drop shadows.

**Validates: Requirements 8.3, 8.4**

### Property 15: Brand Accent Usage

*For any* use of brand accent colors (saffron and pink), the colors should be used sparingly for highlights only.

**Validates: Requirements 8.6**

### Property 16: Visual Consistency

*For any* page displayed, the page should maintain visual consistency with the established design system (rainbow gradients in hero sections, white cards for content, dark gray text, proper spacing).

**Validates: Requirements 8.7**

## Error Handling

### CSS Syntax Errors
- **Issue**: Malformed CSS rules (e.g., `@impo` instead of `@import`)
- **Handling**: Fix syntax errors in index.css
- **Prevention**: Validate CSS before deployment

### Missing Styles
- **Issue**: Components referencing undefined CSS classes
- **Handling**: Ensure all referenced classes are defined in index.css or Tailwind config
- **Prevention**: Code review and testing

### Layout Overflow
- **Issue**: Content overflowing horizontally causing scroll
- **Handling**: Apply `overflow-x: hidden` and `max-width: 100%` constraints
- **Prevention**: Test on various viewport sizes

### Animation Performance
- **Issue**: Animations causing performance degradation
- **Handling**: Use CSS transforms and opacity for animations (GPU-accelerated)
- **Prevention**: Profile performance during development

### Responsive Breakpoints
- **Issue**: Layout breaking at certain viewport sizes
- **Handling**: Test and adjust breakpoints in Tailwind config and custom CSS
- **Prevention**: Mobile-first development approach

## Testing Strategy

### Unit Testing

Unit tests will verify specific examples and edge cases for individual components:

**Navbar Component**:
- Test active link indicator appears for current route
- Test mobile menu toggle functionality
- Test brand logo and text render correctly
- Test navigation links route to correct pages

**Form Component (Ask Page)**:
- Test selection chip active/inactive states
- Test form validation (all fields required)
- Test submit button disabled state
- Test text area placeholder rotation

**Card Components**:
- Test card styling (background, shadow, border-radius)
- Test hover effects
- Test responsive layout (grid columns)

**Footer Component**:
- Test footer content renders correctly
- Test footer styling (border, padding, text alignment)

### Property-Based Testing

Property-based tests will verify universal properties across all inputs using a JavaScript property-based testing library (fast-check):

**Configuration**:
- Minimum 100 iterations per property test
- Each test tagged with feature name and property number

**Property Tests**:

1. **Test Property 1: No Broken Visual Effects**
   - **Tag**: Feature: ui-restoration, Property 1: No broken visual effects
   - **Test**: Generate random page states, verify no broken animations or overlays present in rendered output
   - **Validates**: Requirements 1.1-1.5

2. **Test Property 2-3: Container and Spacing**
   - **Tag**: Feature: ui-restoration, Property 2-3: Proper container spacing
   - **Test**: Generate random content sections, verify max-width, centering, no overlaps, and minimum 3rem spacing
   - **Validates**: Requirements 2.1-2.5

3. **Test Property 4-5: Navbar Structure**
   - **Tag**: Feature: ui-restoration, Property 4-5: Navbar layout and active indicator
   - **Test**: Generate random viewport sizes and routes, verify brand left/menu right layout and saffron active indicator
   - **Validates**: Requirements 3.2-3.6

4. **Test Property 6-7: Ask Page Form**
   - **Tag**: Feature: ui-restoration, Property 6-7: Ask page form layout and interactions
   - **Test**: Generate random form states, verify heading centered, chips in rows, text area full width, button centered, hover effect
   - **Validates**: Requirements 4.1-4.6

5. **Test Property 8-10: About Page Content**
   - **Tag**: Feature: ui-restoration, Property 8-10: About page card structure and readability
   - **Test**: Generate random content sections, verify white cards, no gradient behind text, dark gray text color
   - **Validates**: Requirements 5.1-5.5, 8.5

6. **Test Property 11: Footer Design**
   - **Tag**: Feature: ui-restoration, Property 11: Footer minimal design
   - **Test**: Verify footer has minimal design with centered text and no extra elements
   - **Validates**: Requirements 6.1-6.4

7. **Test Property 12: Feature Preservation**
   - **Tag**: Feature: ui-restoration, Property 12: Feature preservation
   - **Test**: Verify all functional features (font toggle, swipe cards, typing animation, history, share buttons) remain functional
   - **Validates**: Requirements 7.1-7.6

8. **Test Property 13-16: Visual Design Guidelines**
   - **Tag**: Feature: ui-restoration, Property 13-16: Visual design consistency
   - **Test**: Generate random pages, verify gradient only in hero sections, white cards with shadows, sparing brand accent usage, overall visual consistency
   - **Validates**: Requirements 8.1-8.7

### Integration Testing

Integration tests will verify component interactions:

- Test navigation flow between pages
- Test form submission and response display
- Test responsive layout changes across breakpoints
- Test animation triggers and completions

### Visual Regression Testing

Visual regression tests will ensure UI consistency:

- Capture screenshots of each page at multiple viewport sizes
- Compare against baseline "clean Rainbow Premium UI" screenshots
- Flag any visual differences for review

### Manual Testing Checklist

- [ ] Verify no network line animations appear
- [ ] Verify no dark purple blocks behind navbar
- [ ] Verify no random white blocks on any page
- [ ] Verify proper spacing and no overlaps on all pages
- [ ] Verify navbar layout and active indicators
- [ ] Verify Ask page form layout and interactions
- [ ] Verify About page card structure and readability
- [ ] Verify footer minimal design
- [ ] Verify all functional features work (font toggle, swipe, typing, history, share)
- [ ] Verify rainbow gradient only in hero sections
- [ ] Verify white cards with shadows throughout
- [ ] Verify brand accent colors used sparingly
- [ ] Test on mobile, tablet, and desktop viewports
- [ ] Test in Chrome, Firefox, Safari, and Edge browsers
