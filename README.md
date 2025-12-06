# Showcase Portfolio

A personal portfolio website built with Next.js, designed to showcase my skills as a Creative Web Developer and UI Designer through through my projects.


## Features

* **Modern Next.js :** Built with App Router and server components for optimal performance and SEO.
*  **Animated Home Section:** Features an initial animation.
* **Interactive Projects Carousel:** A custom-built, responsive 3D-effect carousel for navigating projects, featuring an animated video preview on hover for each project.
* **Project Detail Pages:** Dedicated sub-pages for each project (`/myprojects/project1`, `/myprojects/project2`, etc.) showcasing project role, technology, and a detailed overview with a video presentation.



## Technology Used

The project is developed using the following technologies:
   **Framework** | [Next.js]
   **Language** | [TypeScript]
   **Styling** | [Tailwind CSS]
   **Styling** | CSS Modules 


## Installation & Setup

Follow these steps to get a local copy of the project up and running.

### Prerequisites

You must have [Node.js](https://nodejs.org/en/) and npm (or yarn/pnpm) installed.

### 1. Clone the repository

```bash
git clone [YOUR_REPO_URL_HERE]
cd showcase-portfolio
```
### 2. Install dependencies

using npm

```bash
npm install
```
or using yarn
```bash
yarn install
```

### 3. Run the development server
Start the Next.js development server:
```bash
npm run dev
# or yarn dev
```

Open http://localhost:3000 with your browser to see the result.

## Project Structure

.
├── public/
│   ├── fonts/                  # Custom font files 
│   └── static/                 # Static assets like images, videos and icons 
└── src/
    └── app/
        ├── layout.tsx          # Root Layout component defining the global HTML structure, metadata, and Navbar
        ├── page.tsx            # Main page, importing and stacking all main section components
        ├── globals.css         # Global styles, Tailwind setup, custom font-face definitions
        ├── components/
        │   ├── navbar.tsx      # Navigation bar component
        │   ├── main.tsx        # Home section component
        │   ├── projects.tsx    # Projects carousel component
        │   ├── about.tsx       # About Me section component
        │   └── contacts.tsx    # Contacts section component
        └── myprojects/
            ├── myprojects.module.css # Styles specific to project detail pages
            ├── project1/page.tsx   # Project details page 
            ├── project2/page.tsx   # Project details page 
            └── project3/page.tsx   # Project details page 
