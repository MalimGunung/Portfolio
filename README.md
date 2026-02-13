# Iqbal | Portfolio

Personal portfolio website built with React (Create React App) to showcase my profile, skills, tools, resume, and projects.

## Pages

- **Home**: Hero + intro
- **About**: About card, professional skill set, and tools
- **Projects**: Project showcase (currently: **Smart Dispatch**)
- **Resume**: Resume section
- **Contact**: Contact page

## Tech Stack

- React 17 + Create React App
- React Router v6
- React Bootstrap + Bootstrap 5
- react-icons
- react-tsparticles (particle background)

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm

### Install & Run

```bash
npm install
npm start
```

Open http://localhost:3000

### Build

```bash
npm run build
```

The production output is created in `build/`.

## Project Structure

```
src/
  components/
    Navbar.js
    Home/
    About/
    Projects/
    Resume/
    Contact/
  Assets/
    Projects/
    TechIcons/
  style.css
  App.js
```

## Customize Content

- **Routes**: [App.js](file:///c:/Workspace/porfolio/Portfolio/src/App.js)
- **Navbar links / GitHub button**: [Navbar.js](file:///c:/Workspace/porfolio/Portfolio/src/components/Navbar.js)
- **About content**: [AboutCard.js](file:///c:/Workspace/porfolio/Portfolio/src/components/About/AboutCard.js)
- **Skill icons**: [Techstack.js](file:///c:/Workspace/porfolio/Portfolio/src/components/About/Techstack.js)
- **Tool icons**: [Toolstack.js](file:///c:/Workspace/porfolio/Portfolio/src/components/About/Toolstack.js)
- **Projects**: [Projects.js](file:///c:/Workspace/porfolio/Portfolio/src/components/Projects/Projects.js)

## Smart Dispatch

Smart Dispatch is a Flutter mobile application that helps dispatchers and drivers scan parcel labels using OCR, convert them to geo-coordinates, and plan optimized multi-stop delivery routes with map-based navigation.

- GitHub: https://github.com/MalimGunung/Smart-Dispatch
