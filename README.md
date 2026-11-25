# Narendra Chaudhary - Personal Engineering Portfolio (VS Code Ready)

> A modern, professional portfolio website designed for **Narendra Chaudhary**, B.Tech Computer Science (AI & ML) student at GSFC University, published Cyber Forensics researcher, and Full-Stack AI Engineer.

---

## 🚀 How to Open & Run in VS Code

### Step 1: Open Folder in VS Code
1. Open **Visual Studio Code**.
2. Click **File** > **Open Folder...** (or press `Ctrl + K`, then `Ctrl + O`).
3. Select this folder:
   `C:\Users\NARENDRA CHAUDHARY\.gemini\antigravity\scratch\narendra_vscode_portfolio`

### Step 2: Run with 1-Click "Live Server"
1. In the VS Code Extensions tab (`Ctrl + Shift + X`), ensure **Live Server** (by Ritwick Dey) is installed.
2. In the Explorer on the left, **right-click `index.html`** and select **"Open with Live Server"**.
3. Your browser will automatically open: `http://127.0.0.1:5500/index.html`.

*(Alternatively, you can simply double-click `index.html` in Windows Explorer to open it in Chrome, Edge, or Firefox without any server!)*

---

## 📄 How to Upload Your Degree & Certificate PDFs

Recruiters and visitors can click **"View Degree PDF"** or **"View PDF"** on any certificate to view or download it directly inside the website.

All documents are located in:
`assets/documents/`

### 1. Degree & University Certificate
- Replace `assets/documents/degree_certificate.pdf` with your actual scanned B.Tech Degree / Marksheet PDF from GSFC University.

### 2. Resume / CV
- Replace `assets/documents/resume.pdf` with your latest updated Resume PDF.

### 3. Published Research Paper
- Replace `assets/documents/research_paper.pdf` with your full BRIHASPATI BTH Journal Paper PDF.

### 4. Certificates (Inside `assets/documents/certificates/`)
Drop your actual certificate PDFs with these filenames:
1. `codewithharry_data_analytics.pdf` → AI-Powered Data Analytics (CodeWithHarry)
2. `bth_journal_publication.pdf` → Research Publication Certificate (BTH Journal)
3. `gdg_disease_prediction.pdf` → Google Developers Group (VIT-AP)
4. `msit_healthcare_ai.pdf` → Microsoft Student Chapter (MSIT)
5. `star_python.pdf` → Star Python Certificate (STR25PTN00221480)
6. `star_php_developer.pdf` → Star PHP Developer (STR25PHP00221474)
7. `star_secure_programmer_php.pdf` → Star Secure Programmer PHP (STR25SPP00221472)
8. `star_cyber_secure_user.pdf` → Star Cyber Secure User (STR22SCU00214213)
9. `star_c_programming.pdf` → Star C Programming (STR23CPL00214527)
10. `star_html.pdf` → Star HTML Certificate (STR23HTM00215825)

---

## 📁 Project Structure

```
narendra_vscode_portfolio/
├── .vscode/
│   ├── settings.json       # Editor formatting, 2-space indentation, auto-save
│   ├── extensions.json     # Live Server & Prettier recommendations
│   └── launch.json         # F5 debug launch for Chrome and Edge
├── index.html              # Main semantic HTML structure
├── css/
│   └── style.css           # Glassmorphism, cyber neon accents, responsive layout
├── js/
│   └── main.js             # Project filtering, PDF modal viewer, clipboard copy
├── assets/
│   └── documents/          # Degree, resume, research paper, and certificate PDFs
└── README.md               # This setup guide
```

---

## 🌐 Free Live Deployment Options

### Option A: GitHub Pages (Recommended)
1. Push this folder to a GitHub repository named `portfolio` or `<your-username>.github.io`.
2. In your repository on GitHub, go to **Settings** > **Pages**.
3. Under **Branch**, select `main` and `/ (root)`, then click **Save**.
4. Your website is live in 60 seconds at `https://<your-username>.github.io/`!

### Option B: Netlify (Drag & Drop)
1. Go to [netlify.com](https://www.netlify.com/) and log in.
2. Drag and drop this `narendra_vscode_portfolio` folder into the Netlify dashboard.
3. Your site gets a free live URL immediately!
