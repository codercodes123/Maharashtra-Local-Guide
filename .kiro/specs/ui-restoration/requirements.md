# Requirements Document

## Introduction

This specification defines the restoration of the Rainbow Premium UI to its previous clean, well-structured state while preserving new features. The system shall remove broken visual effects, restore proper layout structure, and maintain a polished appearance with rainbow gradients in hero sections and clean white cards for content.

## Glossary

- **Rainbow_Gradient**: The smooth color transition from orange → magenta → blue → green used in hero banner areas
- **Hero_Section**: The top banner area of each page featuring the rainbow gradient background
- **Content_Card**: White background containers with rounded corners and drop shadows containing form elements, text, or interactive components
- **Navbar**: The navigation bar component appearing at the top of all pages
- **Selection_Chips**: Interactive button elements for selecting predefined options on the Ask page
- **Brand_Accent**: The saffron and pink colors used sparingly for highlights and active states

## Requirements

### Requirement 1: Remove Broken Background Effects

**User Story:** As a user, I want a clean visual experience without distracting or broken animations, so that I can focus on the content and functionality.

#### Acceptance Criteria

1. THE System SHALL remove all network line animations from the UI
2. THE System SHALL remove excessive overlay effects that obscure content
3. THE System SHALL remove dark purple blocks appearing behind the navbar
4. THE System SHALL remove any random misplaced white blocks from all pages
5. WHEN a page loads, THEN the System SHALL display only intentional visual elements without rendering artifacts

### Requirement 2: Container and Spacing Structure

**User Story:** As a user, I want properly aligned and spaced content, so that the interface is easy to read and navigate.

#### Acceptance Criteria

1. THE System SHALL apply max-width containers centered on each page with smooth padding
2. THE System SHALL ensure no elements overlap vertically
3. THE System SHALL ensure no elements overlap horizontally
4. THE System SHALL apply minimum 3rem spacing between major sections (top and bottom)
5. WHEN content is displayed, THEN the System SHALL maintain consistent spacing throughout the page

### Requirement 3: Navbar Restoration

**User Story:** As a user, I want a clean, functional navigation bar, so that I can easily navigate between pages.

#### Acceptance Criteria

1. THE Navbar SHALL have a white-transparent background overlaying the hero section
2. THE Navbar SHALL display the brand name on the left side
3. THE Navbar SHALL display menu items on the right side
4. WHEN a menu item is active, THEN the Navbar SHALL display a saffron-colored indicator
5. THE Navbar SHALL ensure no text overlapping occurs
6. THE Navbar SHALL ensure no text stacking occurs

### Requirement 4: Ask Page Form Restoration

**User Story:** As a user, I want a well-organized Ask page form, so that I can easily input my questions and select options.

#### Acceptance Criteria

1. THE Ask_Page SHALL display the "Kay Karu?" heading centered at the top
2. THE Ask_Page SHALL display selection chips in neat rows inside a soft white card
3. THE Ask_Page SHALL display a text area at full width inside the same card as the chips
4. THE Ask_Page SHALL display the submit button below the chips, centered
5. WHEN hovering over the submit button, THEN the System SHALL apply a smooth gradient hover effect
6. THE Ask_Page SHALL ensure all form elements are contained within a single white card with proper spacing

### Requirement 5: About Page Content Restoration

**User Story:** As a user, I want readable and well-structured content on the About page, so that I can understand the application's purpose and features.

#### Acceptance Criteria

1. THE About_Page SHALL display each content section in a white card with spacing and shadows
2. THE About_Page SHALL display icons and headings with high readability on white backgrounds
3. THE About_Page SHALL NOT apply gradient backgrounds behind paragraph text
4. THE About_Page SHALL ensure all text content has dark gray color (#222) for readability
5. WHEN displaying content sections, THEN the System SHALL maintain consistent card styling across all sections

### Requirement 6: Footer Restoration

**User Story:** As a user, I want a clean, minimal footer, so that the page ends with a professional appearance.

#### Acceptance Criteria

1. THE Footer SHALL display a neat, minimal design matching the previous working version
2. THE Footer SHALL display centered text only
3. THE Footer SHALL NOT include extraneous decorative elements
4. THE Footer SHALL maintain consistent styling with the overall design system

### Requirement 7: Feature Preservation

**User Story:** As a user, I want to retain all new working features, so that I don't lose functionality during the UI restoration.

#### Acceptance Criteria

1. THE System SHALL preserve the Marathi font toggle functionality
2. THE System SHALL preserve the swipe cards functionality
3. THE System SHALL preserve the typing animation functionality
4. THE System SHALL preserve the history functionality
5. THE System SHALL preserve the share buttons functionality
6. THE System SHALL NOT remove any working logic during the restoration process

### Requirement 8: Visual Design Guidelines

**User Story:** As a user, I want a consistent and polished visual design, so that the application looks professional and is pleasant to use.

#### Acceptance Criteria

1. THE System SHALL apply the Rainbow_Gradient ONLY in hero banner areas
2. THE System SHALL NOT apply the Rainbow_Gradient as a full-page background
3. THE System SHALL display content in white cards with rounded corners
4. THE System SHALL apply drop shadows to all Content_Cards
5. THE System SHALL use dark gray text color (#222) for all body text
6. THE System SHALL use Brand_Accent colors (saffron and pink) sparingly for highlights
7. WHEN displaying any page, THEN the System SHALL maintain visual consistency with the established design system
