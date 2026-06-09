// LOADER

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 1000);

    }, 1800);

});

// MOBILE MENU

const burger = document.querySelector(".burger");
const mobileMenu = document.querySelector(".mobile-menu");

burger.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

});

// LANGUAGE SWITCH

const jobTitle = document.getElementById("job-title");
const description = document.getElementById("description");

document.getElementById("de-btn").addEventListener("click", () => {

    jobTitle.textContent =
    "Fachinformatikerin für Anwendungsentwicklung";

    description.textContent =
    "Leidenschaftlich für Webentwicklung, Softwareentwicklung und moderne Technologien.";

});

document.getElementById("en-btn").addEventListener("click", () => {

    jobTitle.textContent =
    "Software Developer";

    description.textContent =
    "Passionate about web development, software engineering, and creating modern clean applications with great user experiences.";

});
const enBtn = document.getElementById("en-btn");
const deBtn = document.getElementById("de-btn");

// ================= ENGLISH =================

enBtn.addEventListener("click", () => {

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

  // HERO
  document.getElementById("intro-text").textContent = "Hello, I'm";
  document.getElementById("job-title").textContent = "Software Developer";
  document.getElementById("description").textContent =
    "Passionate about web development, software engineering, and creating modern clean applications with great user experiences.";

  document.getElementById("projects-btn").textContent = "View Projects";
  document.getElementById("cv-btn").textContent = "Download CV";

  // ABOUT
  document.getElementById("about-subtitle").textContent = "ABOUT ME";
  document.getElementById("about-title").textContent = "Who I Am";
  document.getElementById("about-text").textContent =
    "I am a passionate software developer with a strong interest in web development and modern technologies. My journey started from curiosity about problem-solving and digital solutions.";

  // SKILLS
  document.getElementById("frontend-title").textContent = "Frontend";
  document.getElementById("backend-title").textContent = "Backend";
  document.getElementById("other-title").textContent = "Other";
});


// ================= GERMAN =================

deBtn.addEventListener("click", () => {

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

  // HERO
  document.getElementById("intro-text").textContent = "Hallo, ich bin";
  document.getElementById("job-title").textContent =
    "Fachinformatikerin für Anwendungsentwicklung";

  document.getElementById("description").textContent =
    "Leidenschaftlich für Webentwicklung, Softwareentwicklung und moderne Technologien.";

  document.getElementById("projects-btn").textContent = "Projekte ansehen";
  document.getElementById("cv-btn").textContent = "Lebenslauf herunterladen";

  // ABOUT
  document.getElementById("about-subtitle").textContent = "ÜBER MICH";
  document.getElementById("about-title").textContent = "Wer ich bin";
  document.getElementById("about-text").textContent =
    "Ich bin eine leidenschaftliche Softwareentwicklerin mit Interesse an Webentwicklung und modernen Technologien. Ich liebe es, digitale Lösungen zu bauen.";

  // SKILLS
  document.getElementById("frontend-title").textContent = "Frontend";
  document.getElementById("backend-title").textContent = "Backend";
  document.getElementById("other-title").textContent = "Weitere";
});