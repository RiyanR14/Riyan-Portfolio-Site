const certifications = [
  {
    title: "Data Analytics and Visualization Job Simulation",
    issuer: "Accenture",
    category: "Analytics",
    type: "pdf",
    file: "assets/certificates/accenture data analytics.pdf"
  },
  {
    title: "Agnirva Software Internship Program",
    issuer: "Agnirva.com",
    category: "Internship",
    type: "pdf",
    file: "assets/certificates/Agnirva software intern.pdf"
  },
  {
    title: "Business Analysis & Process Management",
    issuer: "Coursera",
    category: "Management",
    type: "pdf",
    file: "assets/certificates/Coursera  Buisness analysis.pdf"
  },
  {
    title: "Data Analysis with Python",
    issuer: "IBM",
    category: "Data Science",
    type: "pdf",
    file: "assets/certificates/Coursera Data Analysis.pdf"
  },
  {
    title: "Data Science Methodology",
    issuer: "IBM",
    category: "Data Science",
    type: "pdf",
    file: "assets/certificates/Coursera WFHP5VDB8YYG.pdf"
  },
  {
    title: "Python for Data Science, AI & Development",
    issuer: "IBM",
    category: "Python",
    type: "pdf",
    file: "assets/certificates/Coursera- data science,ai and development.pdf"
  },
  {
    title: "What is Data Science?",
    issuer: "IBM",
    category: "Data Science",
    type: "pdf",
    file: "assets/certificates/data science coursera.pdf"
  },
  {
    title: "Data Science Methodology",
    issuer: "IBM",
    category: "Data Science",
    type: "pdf",
    file: "assets/certificates/Data science methodology(IBM).pdf"
  },
  {
    title: "Databases and SQL for Data Science with Python",
    issuer: "IBM",
    category: "Database",
    type: "pdf",
    file: "assets/certificates/Databases and sql for data science with python(IBM).pdf"
  },
  {
    title: "Data Science Capstone Project Presentation",
    issuer: "IBM",
    category: "Capstone",
    type: "pdf",
    file: "assets/certificates/ds-capstone-presentation.pdf"
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
    issuer: "Oracle",
    category: "Cloud",
    type: "pdf",
    file: "assets/certificates/eCertificate oci datascience.pdf"
  },
  {
    title: "Evolution of Air Interface towards 5G",
    issuer: "NPTEL",
    category: "Telecommunications",
    type: "pdf",
    file: "assets/certificates/Evolution of Air Interface towards 5G.pdf"
  },
  {
    title: "Explore Automation Development with UiPath Studio",
    issuer: "UiPath",
    category: "Automation",
    type: "pdf",
    file: "assets/certificates/LearningPath_Certificate_10132024072045983.pdf"
  },
  {
    title: "UiPath Automation Explorer for Students",
    issuer: "UiPath",
    category: "Automation",
    type: "pdf",
    file: "assets/certificates/LearningPath_Certificate_Ui path.pdf"
  },
  {
    title: "IBM Data Science Professional Certificate",
    issuer: "IBM",
    category: "Professional Certificate",
    type: "pdf",
    file: "assets/certificates/professional data science.pdf"
  },
  {
    title: "Python Project for Data Science",
    issuer: "IBM",
    category: "Project",
    type: "pdf",
    file: "assets/certificates/Project for Data Science.pdf"
  },
  {
    title: "Tools for Data Science",
    issuer: "IBM",
    category: "Tools",
    type: "pdf",
    file: "assets/certificates/Tools for Datascience(IBM).pdf"
  },
  {
    title: "Database Management System",
    issuer: "NPTEL",
    category: "Database",
    type: "image",
    file: "assets/certificates/Nptel 1.jpeg"
  },
  {
    title: "Web Designing Internship Training",
    issuer: "NSIC",
    category: "Internship",
    type: "image",
    file: "assets/certificates/NSIC Certificate.jpg"
  },
  {
    title: "Oracle OCI Data Science Professional Badge",
    issuer: "Oracle",
    category: "Badge",
    type: "image",
    file: "assets/certificates/OCI badge.jpg"
  },
  {
    title: "Surface Mount Technology (SMT): Components, Techniques, and Tips",
    issuer: "Alison",
    category: "Electronics",
    type: "image",
    file: "assets/certificates/SMT.jpeg"
  }
];

const certGrid = document.querySelector("#certGrid");
const certCount = document.querySelector("#certCount");
const providerFilters = document.querySelector("#providerFilters");
const viewerModal = document.querySelector("#viewerModal");
const viewerContent = document.querySelector("#viewerContent");
const viewerTitle = document.querySelector("#viewerTitle");
const viewerLink = document.querySelector("#viewerLink");
const viewerClose = document.querySelector("#viewerClose");

let activeIssuer = "All";

function uniqueIssuers(items) {
  return ["All", ...new Set(items.map((item) => item.issuer))];
}

function renderFilters() {
  const issuers = uniqueIssuers(certifications);

  providerFilters.innerHTML = issuers
    .map(
      (issuer) => `
        <button
          class="filter-button${issuer === activeIssuer ? " is-active" : ""}"
          type="button"
          data-issuer="${issuer}"
        >
          ${issuer}
        </button>
      `
    )
    .join("");

  providerFilters.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      activeIssuer = button.dataset.issuer;
      renderFilters();
      renderCertifications();
    });
  });
}

function openViewer(certification) {
  viewerTitle.textContent = certification.title;
  viewerLink.href = certification.file;

  if (certification.type === "pdf") {
    viewerContent.innerHTML = `
      <iframe
        class="viewer-frame"
        src="${certification.file}#view=FitH"
        title="${certification.title}"
      ></iframe>
    `;
  } else if (certification.type === "image") {
    viewerContent.innerHTML = `
      <img
        class="viewer-image"
        src="${certification.file}"
        alt="${certification.title}"
      >
    `;
  } else {
    viewerContent.innerHTML = `
      <div class="viewer-empty">
        <p>This certificate preview is not available in this viewer. Use "Open File" instead.</p>
      </div>
    `;
  }

  viewerModal.classList.add("is-open");
  viewerModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeViewer() {
  viewerModal.classList.remove("is-open");
  viewerModal.setAttribute("aria-hidden", "true");
  viewerContent.innerHTML = "";
  document.body.style.overflow = "";
}

function createCard(certification) {
  return `
    <article
      class="cert-card"
      role="button"
      tabindex="0"
      data-file="${certification.file}"
      data-type="${certification.type}"
      data-title="${certification.title}"
      data-issuer="${certification.issuer}"
      data-category="${certification.category}"
      aria-label="Open ${certification.title}"
    >
      <span class="cert-badge">${certification.category}</span>
      <p class="cert-issuer">${certification.issuer}</p>
      <h3>${certification.title}</h3>
      <div class="cert-card-footer">
        <p class="cert-meta">Click to preview the actual certificate.</p>
        <span class="cert-open">View</span>
      </div>
    </article>
  `;
}

function bindCardEvents() {
  certGrid.querySelectorAll(".cert-card").forEach((card) => {
    const certification = {
      file: card.dataset.file,
      type: card.dataset.type,
      title: card.dataset.title,
      issuer: card.dataset.issuer,
      category: card.dataset.category
    };

    card.addEventListener("click", () => openViewer(certification));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openViewer(certification);
      }
    });
  });
}

function renderCertifications() {
  const visibleItems = activeIssuer === "All"
    ? certifications
    : certifications.filter((item) => item.issuer === activeIssuer);

  certCount.textContent = String(visibleItems.length);

  certGrid.innerHTML = visibleItems.map(createCard).join("");
  bindCardEvents();
}

viewerClose.addEventListener("click", closeViewer);
viewerModal.addEventListener("click", (event) => {
  if (event.target instanceof HTMLElement && event.target.dataset.closeViewer === "true") {
    closeViewer();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && viewerModal.classList.contains("is-open")) {
    closeViewer();
  }
});

renderFilters();
renderCertifications();
