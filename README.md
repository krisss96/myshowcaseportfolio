# Showcase Portfolio

A personal portfolio website built with Next.js, designed to showcase my skills as a Creative Web Developer and UI Designer through my projects - both indidual and group ones.


## Technology Used

The project is developed using the following technologies:

   **Framework** | Next.js \
   **Language** | TypeScript \
   **Styling** | Tailwind CSS, CSS Modules 


## Installation & Setup

Follow the steps below to set up and run the project locally.
### Prerequisites

You must have [Node.js](https://nodejs.org/en/) and npm (or yarn/pnpm) installed.

### 1. Clone the repository

```bash
git clone https://github.com/krisss96/myshowcaseportfolio.git
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

```
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
```