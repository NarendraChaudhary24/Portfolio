/**
 * Narendra Chaudhary - Personal Portfolio JavaScript
 * Handles interactive project filtering, modals, PDF viewer, copy-to-clipboard, and contact form
 */

// Project Data
const projectsData = [
  {
    id: "brihaspati",
    title: "BRIHASPATI – Cyber Forensic Tool",
    category: "AI & Cyber Security",
    shortDesc: "AI-powered cyber forensic web application for Android devices with ADB extraction and suspicious media detection.",
    fullDesc: "An advanced cyber forensic web application engineered for digital forensic investigators. Implements secure Android device data acquisition using Android Debug Bridge (ADB), automated artifact extraction with Autopsy, and a custom Computer Vision / Machine Learning classifier to automatically flag suspicious multimedia content. Generates automated forensic audit reports for investigation support.",
    technologies: ["Angular", "Node.js", "Express.js", "MongoDB", "Python", "ADB", "Autopsy", "OpenCV"],
    metrics: "Reduced manual forensic audit effort by over 60% with instant automated reporting",
    featured: true,
    github: "https://github.com/NarendraChaudhary24",
    type: "Research & Applied Cyber Forensics"
  },
  {
    id: "vegetation-detection",
    title: "Vegetation & Weed Detection Using Image Processing",
    category: "AI & Computer Vision",
    shortDesc: "Computer vision solution applying Excess Green (ExG) index and K-Means clustering for crop-weed segmentation.",
    fullDesc: "Created an image processing solution for precision agriculture and crop monitoring applications. Analyzes field imagery through Excess Green (ExG) color transformation index calculation combined with K-Means unsupervised clustering algorithms to accurately distinguish crops from unwanted weed vegetation.",
    technologies: ["Python", "OpenCV", "NumPy", "Matplotlib", "K-Means Clustering", "Image Processing"],
    metrics: "High accuracy vegetation separation under variable ambient field lighting",
    featured: true,
    github: "https://github.com/NarendraChaudhary24",
    type: "Computer Vision & Agriculture"
  },
  {
    id: "furniture-rental",
    title: "E-Commerce Website for Furniture Rental",
    category: "Full-Stack Web",
    shortDesc: "Online furniture rental web application with user authentication, catalog management, and order processing.",
    fullDesc: "Developed an online furniture rental platform allowing users to browse items, select rental durations, manage shopping carts, and place orders. Features role-based user authentication, product catalog management, order handling, and an intuitive responsive user experience.",
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
    metrics: "Seamless rental checkout flow with responsive mobile-ready interface",
    featured: true,
    github: "https://github.com/NarendraChaudhary24",
    type: "Full-Stack Web Application"
  },
  {
    id: "python-automation",
    title: "Python Automation Tool for Data Analysis",
    category: "Data Science & Automation",
    shortDesc: "Automated dataset collection, preprocessing, exploratory data analysis, and automated summary reporting.",
    fullDesc: "Engineered automated data processing workflows using Python. Automates raw dataset ingestion, missing data imputation, statistical metrics generation, and exploratory visual charts using Pandas, NumPy, and Matplotlib to minimize repetitive manual analysis.",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Data Analytics", "Automation"],
    metrics: "Eliminated repetitive manual analytics work through scheduled automation pipelines",
    featured: false,
    github: "https://github.com/NarendraChaudhary24",
    type: "Data Engineering & Analytics"
  },
  {
    id: "gps-geofencing",
    title: "Smart GPS Geofencing System",
    category: "IoT & Embedded",
    shortDesc: "GPS/GSM-based geofencing safety solution with real-time boundary monitoring and SMS alerts.",
    fullDesc: "Developed a hardware-software GPS geofencing system integrating GPS and GSM modules. Calculates boundary coordinates and triggers instant alert SMS notifications whenever tracked devices cross predefined perimeter thresholds, with real-time monitoring through a mobile interface.",
    technologies: ["Embedded C/C++", "GPS Module", "GSM Module", "SMS Gateway", "Geofencing Logic"],
    metrics: "Real-time perimeter monitoring with zero-lag cellular boundary crossing alerts",
    featured: false,
    github: "https://github.com/NarendraChaudhary24",
    type: "IoT & Embedded Systems"
  }
];

// State
let currentCategory = 'All';
let currentSearch = '';

// DOM Elements
const projectsGrid = document.getElementById('projects-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('project-search');
const navbar = document.getElementById('navbar');
const mobileNavToggle = document.getElementById('mobile-nav-toggle');
const mobileNav = document.getElementById('mobile-nav');

// Modals
const projectModal = document.getElementById('project-modal');
const researchModal = document.getElementById('research-modal');
const docViewerModal = document.getElementById('doc-viewer-modal');

// Document elements in Doc Viewer Modal
const docModalTitle = document.getElementById('doc-modal-title');
const docModalFrame = document.getElementById('doc-modal-frame');
const docModalDownloadBtn = document.getElementById('doc-modal-download-btn');
const docModalNewTabBtn = document.getElementById('doc-modal-newtab-btn');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  setupEventListeners();
});

// Render Projects
function renderProjects() {
  if (!projectsGrid) return;

  const filtered = projectsData.filter(proj => {
    const matchesCat = currentCategory === 'All' || proj.category === currentCategory;
    const q = currentSearch.toLowerCase();
    const matchesQuery = !q || 
      proj.title.toLowerCase().includes(q) ||
      proj.shortDesc.toLowerCase().includes(q) ||
      proj.technologies.some(t => t.toLowerCase().includes(q));
    return matchesCat && matchesQuery;
  });

  if (filtered.length === 0) {
    projectsGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; background: rgba(15,23,42,0.4); border-radius: 16px; border: 1px solid var(--border-card);">
        <i class="fas fa-search" style="font-size: 2.5rem; color: var(--text-muted); margin-bottom: 1rem;"></i>
        <h4 style="font-size: 1.15rem; color: #fff; margin-bottom: 0.5rem;">No matching projects found</h4>
        <p style="font-size: 0.85rem; color: var(--text-secondary);">Try searching for terms like "Python", "ADB", "Django", "OpenCV", or "PHP".</p>
      </div>
    `;
    return;
  }

  projectsGrid.innerHTML = filtered.map(proj => `
    <div class="glass-card project-card" onclick="openProjectModal('${proj.id}')">
      <div>
        <div class="project-card-header">
          <span class="badge badge-cyan">${proj.category}</span>
          ${proj.featured ? '<span class="badge badge-amber"><i class="fas fa-sparkles"></i> Featured</span>' : ''}
        </div>
        <h3 class="project-title">${proj.title}</h3>
        <p class="project-desc">${proj.shortDesc}</p>
      </div>
      <div>
        <div class="project-tech-tags">
          ${proj.technologies.slice(0, 4).map(t => `<span class="tech-tag">${t}</span>`).join('')}
          ${proj.technologies.length > 4 ? `<span class="tech-tag">+${proj.technologies.length - 4}</span>` : ''}
        </div>
        <div class="project-footer">
          <span>View Specifications</span>
          <i class="fas fa-arrow-right"></i>
        </div>
      </div>
    </div>
  `).join('');
}

// Setup Event Listeners
function setupEventListeners() {
  // Category Filter
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-category');
      renderProjects();
    });
  });

  // Search input
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value;
      renderProjects();
    });
  }

  // Scroll header effect
  window.addEventListener('scroll', () => {
    if (navbar) {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  });

  // Mobile menu toggle
  if (mobileNavToggle && mobileNav) {
    mobileNavToggle.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
      const icon = mobileNavToggle.querySelector('i');
      if (icon) {
        if (mobileNav.classList.contains('open')) {
          icon.className = 'fas fa-times';
        } else {
          icon.className = 'fas fa-bars';
        }
      }
    });

    // Close mobile nav on click
    mobileNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        const icon = mobileNavToggle.querySelector('i');
        if (icon) icon.className = 'fas fa-bars';
      });
    });
  }

  // Close modals on overlay click
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeAllModals();
      }
    });
  });

  // Escape key closes modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllModals();
    }
  });
}

// Open Project Modal
window.openProjectModal = function(id) {
  const proj = projectsData.find(p => p.id === id);
  if (!proj || !projectModal) return;

  const content = document.getElementById('project-modal-content');
  if (content) {
    content.innerHTML = `
      <div style="margin-bottom: 1rem;">
        <span class="badge badge-cyan" style="margin-bottom: 0.8rem;">${proj.category}</span>
        <h3 style="font-size: 1.85rem; font-weight: 800; color: #fff; line-height: 1.3;">${proj.title}</h3>
        <span style="font-size: 0.8rem; font-family: var(--font-mono); color: var(--accent-cyan);">${proj.type}</span>
      </div>

      <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.7; margin-bottom: 1.5rem;">
        ${proj.fullDesc}
      </p>

      <div style="margin-bottom: 1.5rem;">
        <h4 style="font-size: 0.8rem; font-family: var(--font-mono); text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.6rem;">Technologies & Tools</h4>
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
          ${proj.technologies.map(t => `<span class="badge badge-indigo">${t}</span>`).join('')}
        </div>
      </div>

      ${proj.metrics ? `
        <div style="padding: 1rem; border-radius: 12px; background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.25); display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.5rem;">
          <i class="fas fa-chart-line" style="color: var(--accent-emerald); font-size: 1.25rem;"></i>
          <div>
            <span style="font-size: 0.7rem; font-family: var(--font-mono); text-transform: uppercase; color: var(--accent-emerald); font-weight: 700; display: block;">Key Engineering Impact</span>
            <span style="font-size: 0.85rem; color: #fff;">${proj.metrics}</span>
          </div>
        </div>
      ` : ''}

      <div style="display: flex; align-items: center; justify-content: space-between; padding-top: 1.25rem; border-top: 1px solid var(--border-card);">
        <a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
          <i class="fab fa-github"></i> View GitHub Profile
        </a>
        <button onclick="closeAllModals()" class="btn btn-primary btn-sm">
          Close Overview
        </button>
      </div>
    `;
  }

  projectModal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

// Open Research Modal
window.openResearchModal = function() {
  if (researchModal) {
    researchModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
};

// Open Document / PDF Viewer Modal
window.openPdfModal = function(title, pdfUrl) {
  if (!docViewerModal) return;

  if (docModalTitle) docModalTitle.textContent = title;
  if (docModalFrame) docModalFrame.src = pdfUrl;
  if (docModalDownloadBtn) {
    docModalDownloadBtn.href = pdfUrl;
    docModalDownloadBtn.setAttribute('download', title.toLowerCase().replace(/[^a-z0-9]/g, '_') + '.pdf');
  }
  if (docModalNewTabBtn) {
    docModalNewTabBtn.href = pdfUrl;
  }

  docViewerModal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

// Close all modals
window.closeAllModals = function() {
  document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
  if (docModalFrame) docModalFrame.src = '';
  document.body.style.overflow = '';
};

// Copy to Clipboard
window.copyToClipboard = function(text, label) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`Copied ${label} to clipboard: ${text}`);
  }).catch(() => {
    // Fallback
    const input = document.createElement('input');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    showToast(`Copied ${label} to clipboard: ${text}`);
  });
};

// Toast notification
window.showToast = function(message) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fas fa-check-circle" style="color: var(--accent-emerald);"></i> ${message}`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
};

// Handle Contact Form Submit
window.handleContactSubmit = function(e) {
  e.preventDefault();
  const form = e.target;
  const name = form.name.value;
  const email = form.email.value;
  const subject = form.subject.value || 'Portfolio Contact Inquiry';
  const message = form.message.value;

  if (!name || !email || !message) {
    alert('Please complete all required fields.');
    return;
  }

  // Construct mailto fallback
  const mailtoUrl = `mailto:narendrachaudharyshou@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("From: " + name + " (" + email + ")\\n\\n" + message)}`;

  showToast('Opening email client to send your message to Narendra...');
  setTimeout(() => {
    window.location.href = mailtoUrl;
    form.reset();
  }, 1000);
};

