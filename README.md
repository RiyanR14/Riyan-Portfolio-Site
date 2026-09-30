# Riyan R | Data Science & Embedded Systems Portfolio

A premium, interactive split-screen portfolio website for Riyan R, showcasing B.Tech credentials, software and hardware engineering projects, technical skills, and professional certifications.

Inspired by next-generation designs like [calebixca.com](https://calebixca.com/), this portfolio is designed to function as an interactive product rather than a static presentation.

---

## 🚀 Key Features

### 1. Dual-Pane Split-Screen Layout
- **Desktop Viewports (>1024px)**: Features a dual-pane layout. The left side (`.portfolio-content`) contains the scrollable portfolio sections, while the right side (`.chat-sidebar`) holds a sticky AI Assistant panel.
- **Mobile Viewports (<=1024px)**: Stacks into a traditional single-column page. The AI Assistant collapses into a floating chat bubble, sliding up as a bottom sheet drawer when tapped.

### 2. Client-Side AI Assistant Chatbot
- Powered by a local natural language keyword-matching engine in `script.js` (no API key or backend required).
- Knows detailed information about Riyan's education (SRM B.Tech ECE, CGPA 9.19), programming skills, volunteering, and contact details.
- Features deep integration with the portfolio: clicking on cert/project links in the chat automatically scrolls the left panel to the target section.
- Incorporates dynamic suggested prompt chips that update contextually based on the user's last query.

### 3. Animations & Interactivity
- **Pointer Particle sparks**: Clicking triggers (buttons, navigation options, suggestion chips) generates a burst of glowing colored sparks that scatter and fade.
- **3D Card Tilt Hover**: Hovering over card elements (projects, skills, certificates) applies an interactive 3D tilt perspective, lifting and rotating panels toward your cursor.
- **Dodge-Mouse Particle Physics**: Background canvas particles detect pointer movements and gently move away from the cursor.
- **Intersection Observer Scroll Reveals**: Sections slide and fade up smoothly using cubic-bezier transition curves as you scroll down the page.

---

## 📁 File Structure

- **`index.html`**: Contains the semantic HTML structure, left credentials panel, right sticky chatbot drawer, modal viewer overlays, and script bindings.
- **`style.css`**: Built with a sleek cyber-slate theme (deep obsidian background, emerald green accents, cyan highlights) and holds layout flex-grids, transitions, and keyframe animations.
- **`script.js`**: Drives the certifications database, highlight highlights, canvas particles, card tilts, Intersection Observer scroll logic, and the chatbot intent matching system.
- **`assets/`**: Contains project certifications, Riyan's profile photo, and resume (PDF).

---

## 💻 How to Run

Since the portfolio runs completely client-side:
1. Double-click or open **`index.html`** in any modern web browser (Chrome, Edge, Firefox, Safari).
2. Chat with the virtual assistant by typing custom questions or clicking suggestion chips!
