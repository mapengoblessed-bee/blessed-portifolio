# Personal Developer Portfolio — Informatics Undergraduate (NUST Zimbabwe)

A modern, responsive, and professional personal developer portfolio website designed for an **Informatics undergraduate student at the National University of Science and Technology (NUST), Zimbabwe**, preparing for **Year 3 Industrial Attachment (2026/2027)**.

Built with **React**, **Vite**, **Lucide Icons**, and clean modern CSS, this frontend application is optimized for performance, accessibility, and zero-configuration deployment as a **Render Static Site**.

---

## 🌟 Key Features

- **Dark Navy / Charcoal Theme with Cyan & Blue Accents**: High-contrast, premium aesthetic tailored for software engineering and systems analysis.
- **Accessible Light / Dark Mode Toggle**: Smooth theme switching persisted in `localStorage`.
- **Single-File Data Configuration**: All personal information, academic grades, skills, project links, certificates, and achievements are stored in `src/data/portfolioData.js` for effortless editing.
- **Featured Software Projects**:
  - **MukoLend**: Zimbabwean community peer-to-peer micro-lending platform prototype (informal savings circles / Mukando).
  - **Bulawayo Smart Traffic Monitoring System (BSTMS)**: Civic dashboard monitoring simulated traffic conditions across 4 Bulawayo arterial roads (JMN Nkomo St, Khami Rd, Plumtree Rd, Luveve Rd).
  - **Logistics Route Optimisation System**: Algorithmic intra-city delivery dispatch efficiency prototype (heuristic TSP & fuel savings).
  - **Raindrop Technologies**: Enterprise technology portal built with Flask, SQLite, and responsive corporate UI.
- **Academic Qualifications Timeline**: National University of Science and Technology (NUST) B.Sc. (Hons) Informatics, alongside editable A-Level and O-Level subject-and-grade listings.
- **Honest Skill Proficiency Standards**: Distinguishes between proficient coursework tools and active in-progress competencies (e.g. PostgreSQL, React).
- **Working Contact Section & Inquiry Drafter**: Interactive mail client drafter generating direct `mailto:` links with prefilled templates for attachment interviews and project reviews (no fake backend forms).
- **Safe Placeholder Notice System**: Clicking unconfigured placeholder links opens an instructional dialog explaining how to add your live link in `portfolioData.js`.
- **Working CV Download**: Configured to serve `public/cv.pdf` directly.

---

## 📂 Project Architecture

```
developer-portfolio/
├── index.html                   # HTML entry point with SEO metadata & Google Fonts
├── package.json                 # Dependencies & build scripts (Vite, React, Lucide)
├── vite.config.js               # Vite bundler configuration (port 3000, dist output)
├── render.yaml                  # Render Blueprint for automated Static Site deployment
├── .gitignore                   # Standard ignore rules for node_modules and dist
├── README.md                    # Detailed documentation and deployment guide
├── public/
│   ├── favicon.svg              # Scalable cyan/blue code-bracket favicon
│   └── cv.pdf                   # CV document served for one-click download
└── src/
    ├── main.jsx                 # React root renderer
    ├── App.jsx                  # Main application controller & modal orchestration
    ├── index.css                # CSS design system (Dark & Light variables, animations)
    ├── data/
    │   └── portfolioData.js     # 📌 CENTRAL DATA FILE — Edit your information here!
    ├── utils/
    │   └── linkHelper.js        # Safe placeholder & live link validator
    └── components/
        ├── Navbar.jsx           # Glassmorphism header, active scroll spy, mobile drawer
        ├── ThemeToggle.jsx      # Dark/Light mode switcher
        ├── Hero.jsx             # Professional intro, attachment status badge, CTA buttons
        ├── About.jsx            # Biography, NUST academic background, career objectives
        ├── Skills.jsx           # Categorized skills with honest proficiency levels
        ├── Projects.jsx         # Project showcase cards with specs & code links
        ├── ProjectMockups.jsx   # High-fidelity SVG UI previews for all 4 projects
        ├── ProjectModal.jsx     # Deep-dive architecture and algorithmic specs modal
        ├── Education.jsx        # Academic timeline (NUST, A-Level, O-Level records)
        ├── Certifications.jsx   # Credentials and certification badges
        ├── Achievements.jsx     # Academic, hackathon, and leadership recognitions
        ├── Contact.jsx          # Coordinates, copy email, and direct mail drafter
        ├── CvModal.jsx          # Download dialog with instructions for PDF replacement
        ├── LinkNoticeModal.jsx  # Accessible modal for unconfigured placeholder links
        └── Footer.jsx           # Back-to-top button, navigation links, and copyright
```

---

## 🚀 How to Run Locally in VS Code

### Prerequisites
- Node.js (version 18 or higher recommended)
- VS Code (or your preferred editor)

### Step 1: Open the Project in VS Code
1. Open **VS Code**.
2. Select **File** > **Open Folder...** and select the `developer-portfolio` folder:
   ```
   c:\Users\HP EliteBook\OneDrive\Desktop\My Portifolio\developer-portfolio
   ```

### Step 2: Open the Integrated Terminal
- Press `` Ctrl + ` `` (backtick) or select **Terminal** > **New Terminal** in VS Code.

### Step 3: Install Dependencies
Run:
```bash
npm install
```
*(All dependencies including React, ReactDOM, and Lucide React will be installed.)*

### Step 4: Start the Local Development Server
Run:
```bash
npm run dev
```
- The local server will start (defaulting to `http://localhost:3000`).
- Open your browser to view your live portfolio with instant Hot Module Replacement (HMR).

### Step 5: Test the Production Build
To test the exact production bundle before deploying:
```bash
npm run build
npm run preview
```
- This compiles the optimized static assets into the `dist/` directory and serves them locally.

---

## ✏️ How to Personalize Your Information

You do **not** need to touch multiple component files. All personal information, credentials, and links are managed from one central file:

👉 **`src/data/portfolioData.js`**

### 1. Personal Information & Bio
Open `src/data/portfolioData.js` and update the `personalInfo` object:
```javascript
export const personalInfo = {
  fullName: "Your Full Name", // Replace [YOUR FULL NAME]
  preferredName: "Your First Name",
  title: "Informatics Student & Aspiring Software Developer",
  location: "Bulawayo / Harare, Zimbabwe",
  // ...
};
```

### 2. Adding Your Profile Photo
1. Save your professional photo as `profile.jpg`.
2. Move it into the `public/` folder (`public/profile.jpg`).
3. In `src/data/portfolioData.js`, locate `avatar`:
   ```javascript
   avatar: {
     useCustomImage: true, // Change from false to true
     imageSrc: "/profile.jpg",
   }
   ```

### 3. Adding Your Real CV PDF
1. Export your academic resume/CV as `cv.pdf`.
2. Copy it into the `public/` directory (replacing the starter `public/cv.pdf`).
3. The "Download CV" buttons in the Hero and Navbar will automatically serve your PDF.

### 4. Updating Featured Projects
In `src/data/portfolioData.js`, scroll to `projectsData`:
- Replace `[MUKOLEND GITHUB URL]` and `[MUKOLEND RENDER URL]` with your live links.
- Replace `[BSTMS GITHUB URL]` and `[BSTMS RENDER URL]` with your live links.
- Replace `[LOGISTICS GITHUB URL]` and `[LOGISTICS DEMO URL]` with your live links.
- Replace `[RAINDROP GITHUB URL]` and `[RAINDROP LIVE URL]` with your live links.
*(Note: As long as any link is a placeholder, the site safely opens a modal instructing how to update it instead of throwing a 404 broken page).*

### 5. Updating Academic Qualifications (Education)
In `src/data/portfolioData.js`, scroll to `educationData`:
- For **A-Level**: Update your high school name, year of completion, exam board (ZIMSEC / Cambridge), and replace the placeholder subjects/grades.
- For **O-Level**: Update your school name, year of completion, and actual grades.

### 6. Updating Certifications & Achievements
In `src/data/portfolioData.js`:
- `certificationsData`: Replace placeholder courses with certificates you have completed (e.g. Cisco Python Essentials, freeCodeCamp, CS50).
- `achievementsData`: Add your genuine hackathon participations, university awards, or student leadership milestones.

---

## 🌐 How to Deploy on Render (Render Static Site)

Render provides free hosting for static frontends with continuous deployment from GitHub.

### Method 1: Render Web Dashboard (Recommended)

1. **Push your code to GitHub**:
   - Initialize git and commit your files:
     ```bash
     git init
     git add .
     git commit -m "Initial portfolio commit"
     ```
   - Create a new repository on your GitHub account (e.g. `informatics-portfolio`).
   - Link and push your repository:
     ```bash
     git remote add origin https://github.com/<your-username>/<repo-name>.git
     git branch -M main
     git push -u origin main
     ```

2. **Create Static Site on Render**:
   - Go to [https://render.com](https://render.com) and sign in (or create a free account).
   - In your Render Dashboard, click the blue **New +** button in the top right.
   - Select **Static Site**.
   - Connect your GitHub account and choose your portfolio repository.

3. **Configure Build Settings**:
   - **Name**: `my-informatics-portfolio` (or your preferred name)
   - **Branch**: `main`
   - **Root Directory**: Leave blank (or `developer-portfolio` if kept in a subfolder)
   - **Build Command**:
     ```bash
     npm run build
     ```
   - **Publish Directory**:
     ```
     dist
     ```

4. **Deploy**:
   - Click **Create Static Site**.
   - Render will run `npm install`, compile your site with `npm run build`, and publish the `dist/` directory.
   - Your site will be live at `https://<your-project-name>.onrender.com` with a free SSL certificate!

### Method 2: Render Blueprint (Infrastructure-as-Code)
This repository includes a preconfigured `render.yaml` file:
- On Render, click **New +** > **Blueprint**.
- Select your repository. Render will automatically read `render.yaml` and configure the build command (`npm run build`), publish directory (`dist`), and SPA rewrite rules automatically.

---

## 📋 Industrial Attachment Presentation Tips

When presenting this portfolio to prospective employers, internship coordinators, or NUST supervisors:
1. **Highlight Problem Solving**: Emphasize how projects like *MukoLend* and *BSTMS* solve context-specific Zimbabwean challenges (informal community finance and Bulawayo arterial traffic).
2. **Transparent Proficiency**: Point out your honest approach to technical skills—clearly demarcating tools you have mastered in coursework from technologies currently in your learning pipeline.
3. **Working Artifacts**: Keep your GitHub repositories clean with descriptive `README.md` files, clear setup instructions, and database schemas for all featured projects.
