// ================= LOADER =================
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.style.opacity = "0";

    setTimeout(() => {
      loader.style.display = "none";
    }, 1000);

  }, 1800);
});


// ================= MOBILE MENU =================
const burger = document.querySelector(".burger");
const mobileMenu = document.querySelector(".mobile-menu");

burger.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});


// ================= LANGUAGE BUTTONS =================
const enBtn = document.getElementById("en-btn");
const deBtn = document.getElementById("de-btn");

const jobTitle = document.getElementById("job-title");
const description = document.getElementById("description");


// ================= ENGLISH =================
enBtn.addEventListener("click", () => {

  // HERO
  document.getElementById("intro-text").textContent = "Hello, I'm";
  jobTitle.textContent = "Software Developer";
  description.textContent =
    "Passionate about web development, software engineering, and creating modern clean applications with great user experiences.";

  document.getElementById("projects-btn").textContent = "View Projects";
  document.getElementById("cv-btn").textContent = "Download CV";

  // NAVBAR
  document.getElementById("nav-home").textContent = "Home";
  document.getElementById("nav-about").textContent = "About";
  document.getElementById("nav-skills").textContent = "Skills";
  document.getElementById("nav-projects").textContent = "Projects";
  document.getElementById("nav-experience").textContent = "Experience";
  document.getElementById("nav-contact").textContent = "Contact";

  // MOBILE
  document.getElementById("m-nav-home").textContent = "Home";
  document.getElementById("m-nav-about").textContent = "About";
  document.getElementById("m-nav-skills").textContent = "Skills";
  document.getElementById("m-nav-projects").textContent = "Projects";
  document.getElementById("m-nav-experience").textContent = "Experience";
  document.getElementById("m-nav-contact").textContent = "Contact";

  // ABOUT
  document.getElementById("about-subtitle").textContent = "ABOUT ME";
  document.getElementById("about-title").textContent = "Who I Am";
  document.getElementById("about-text").textContent =
    "I am a passionate software developer with a strong interest in web development and modern technologies.";

  // SKILLS
  document.getElementById("frontend-title").textContent = "Frontend";
  document.getElementById("backend-title").textContent = "Backend";
  document.getElementById("other-title").textContent = "Other";

  // PROJECTS
  document.getElementById("projects-subtitle").textContent = "MY WORK";
  document.getElementById("projects-title").textContent = "Projects";

  document.getElementById("project1-text").textContent =
    "Web tool for converting and managing PDF files easily and quickly.";

  document.getElementById("project2-text").textContent =
    "E-learning platform for practicing German language skills.";

  document.getElementById("project3-text").textContent =
    "Responsive UI/UX design for a modern coffee shop experience.";

  document.getElementById("project4-text").textContent =
    "Media website for showcasing digital content and projects.";

  // EXPERIENCE
  document.getElementById("experience-subtitle").textContent = "EXPERIENCE";
  document.getElementById("experience-title").textContent = "Timeline";

  document.getElementById("exp1-role").textContent =
    "Internship – Web Development & Client Work";

  document.getElementById("exp1-text").textContent =
    "Worked in a digital agency focused on web development and client projects.";

  document.getElementById("exp2-role").textContent =
    "Internship – Software Development & Data Processing";

  document.getElementById("exp2-text").textContent =
    "Developed a desktop application using VBA and Access for automation.";

  // EDUCATION
  document.getElementById("education-subtitle").textContent = "EDUCATION";
  document.getElementById("education-title").textContent = "Studies & Languages";

  document.getElementById("education-degree").textContent =
    "Specialized Technician Diploma";

  document.getElementById("education-text").textContent =
    "Studied programming, databases, and web development.";

  document.getElementById("languages-title").textContent = "Languages";
  document.getElementById("languages-subtitle").textContent = "Communication Skills";

  document.getElementById("languages-text").textContent =
    "Arabic (Native), German (B2), French, and English.";

  // CONTACT
  document.getElementById("contact-subtitle").textContent = "CONTACT";
  document.getElementById("contact-title").textContent = "Let's Work Together";
  document.getElementById("send-btn").textContent = "Send Message";

  // FOOTER
  document.getElementById("footer-text").textContent =
    "Software Developer | Web & Backend Enthusiast";
});


// ================= GERMAN =================
deBtn.addEventListener("click", () => {

  // HERO
  document.getElementById("intro-text").textContent = "Hallo, ich bin";
  jobTitle.textContent = "Fachinformatikerin für Anwendungsentwicklung";
  description.textContent =
    "Leidenschaftlich für Webentwicklung, Softwareentwicklung und moderne Technologien.";

  document.getElementById("projects-btn").textContent = "Projekte ansehen";
  document.getElementById("cv-btn").textContent = "Lebenslauf herunterladen";

  // NAVBAR
  document.getElementById("nav-home").textContent = "Start";
  document.getElementById("nav-about").textContent = "Über mich";
  document.getElementById("nav-skills").textContent = "Kenntnisse";
  document.getElementById("nav-projects").textContent = "Projekte";
  document.getElementById("nav-experience").textContent = "Erfahrung";
  document.getElementById("nav-contact").textContent = "Kontakt";

  // MOBILE
  document.getElementById("m-nav-home").textContent = "Start";
  document.getElementById("m-nav-about").textContent = "Über mich";
  document.getElementById("m-nav-skills").textContent = "Kenntnisse";
  document.getElementById("m-nav-projects").textContent = "Projekte";
  document.getElementById("m-nav-experience").textContent = "Erfahrung";
  document.getElementById("m-nav-contact").textContent = "Kontakt";

  // ABOUT
  document.getElementById("about-subtitle").textContent = "ÜBER MICH";
  document.getElementById("about-title").textContent = "Wer ich bin";
  document.getElementById("about-text").textContent =
    "Ich bin eine leidenschaftliche Softwareentwicklerin mit Interesse an Webentwicklung und modernen Technologien.";

  // SKILLS
  document.getElementById("frontend-title").textContent = "Frontend";
  document.getElementById("backend-title").textContent = "Backend";
  document.getElementById("other-title").textContent = "Weitere";

  // PROJECTS
  document.getElementById("projects-subtitle").textContent = "MEINE ARBEIT";
  document.getElementById("projects-title").textContent = "Projekte";

  document.getElementById("project1-text").textContent =
    "Web-Tool zum einfachen und schnellen Verwalten von PDF-Dateien.";

  document.getElementById("project2-text").textContent =
    "E-Learning-Plattform zum Üben der deutschen Sprache.";

  document.getElementById("project3-text").textContent =
    "Responsives UI/UX Design für ein modernes Café-Erlebnis.";

  document.getElementById("project4-text").textContent =
    "Medien-Website zur Präsentation digitaler Inhalte und Projekte.";

  // EXPERIENCE
  document.getElementById("experience-subtitle").textContent = "ERFAHRUNG";
  document.getElementById("experience-title").textContent = "Zeitleiste";

  document.getElementById("exp1-role").textContent =
    "Praktikum – Webentwicklung & Kundenarbeit";

  document.getElementById("exp1-text").textContent =
    "Arbeit in einer Digitalagentur mit Fokus auf Webentwicklung.";

  document.getElementById("exp2-role").textContent =
    "Praktikum – Softwareentwicklung & Datenverarbeitung";

  document.getElementById("exp2-text").textContent =
    "Entwicklung einer Desktop-Anwendung mit VBA und Access.";

  // EDUCATION
  document.getElementById("education-subtitle").textContent = "AUSBILDUNG";
  document.getElementById("education-title").textContent = "Studium & Sprachen";

  document.getElementById("education-degree").textContent =
    "Diplom als Fachinformatikerin";

  document.getElementById("education-text").textContent =
    "Programmierung, Datenbanken und Webentwicklung.";

  document.getElementById("languages-title").textContent = "Sprachen";
  document.getElementById("languages-subtitle").textContent = "Kommunikation";

  document.getElementById("languages-text").textContent =
    "Arabisch (Muttersprache), Deutsch (B2), Französisch und Englisch.";

  // CONTACT
  document.getElementById("contact-subtitle").textContent = "KONTAKT";
  document.getElementById("contact-title").textContent = "Lass uns zusammenarbeiten";
  document.getElementById("send-btn").textContent = "Nachricht senden";

  // FOOTER
  document.getElementById("footer-text").textContent =
    "Softwareentwicklerin | Web & Backend Enthusiastin";
});
