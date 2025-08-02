/**
 * PORTAFOLIO AVIACIÓN - SANTIAGO ANDRÉS QUIÑONEZ SOSA
 * JavaScript actualizado con nuevos contenidos
 */

// ===== VARIABLES GLOBALES =====
let currentLanguage = "es"
let showPortfolio = false
let showTransition = false

// ===== TRADUCCIONES =====
const translations = {
  es: {
    landing: {
      welcome: "Bienvenido a bordo",
      subtitle: "Prepárate para un viaje increíble por mi mundo de desarrollo",
      startJourney: "Comenzar Viaje",
    },
    nav: {
      about: "Sobre Mí",
      objectives: "Objetivos",
      mission: "Misión",
      services: "Servicios",
      projects: "Proyectos",
      certifications: "Certificaciones",
      contact: "Contacto",
    },
    hero: {
      greeting: "¡Hola! Soy",
      name: "Santiago Andrés Quiñonez Sosa",
      title: "Desarrollador Full Stack",
      subtitle: "Programando con la precisión de un piloto ",
      description:
        "Transformo ideas en aplicaciones web increíbles, navegando por el código con la misma precisión que un piloto surca los cielos.",
      cta: "Ver Mis Proyectos",
      downloadCV: "Descargar CV",
    },
    about: {
      title: "Mi Ruta de Vuelo",
      description:
        "Como programador junior, estoy comenzando mi travesía en el mundo del desarrollo con la determinación de un piloto en su primer vuelo. Mi pasión es crear experiencias digitales que eleven las ideas a nuevas alturas.",
      projects: "Proyectos Completados",
      learning: "Siempre Aprendiendo",
    },
    objectives: {
      title: "Objetivos Profesionales",
      text: "Especializarme en tecnologías modernas para crear soluciones web innovadoras y escalables",
    },
    mission: {
      title: "Misión, Visión y Valores",
      missionTitle: "Misión",
      missionText:
        "Transformar ideas en soluciones digitales funcionales y elegantes, aplicando la precisión y dedicación de un piloto en cada línea de código que escribo.",
      visionTitle: "Visión",
      visionText:
        "Convertirme en un desarrollador Full Stack reconocido por crear aplicaciones web que generen impacto positivo, navegando siempre hacia la excelencia técnica y la innovación.",
      valuesTitle: "Valores",
      precision: "Precisión",
      learning: "Aprendizaje continuo",
      collaboration: "Colaboración",
      integrity: "Integridad",
      perseverance: "Perseverancia",
      innovation: "Innovación",
    },
    services: {
      title: "Servicios",
      subtitle: "Soluciones digitales que ofrezco para hacer volar tus ideas",
      frontendTitle: "Desarrollo Web Frontend",
      frontendDesc: "Interfaces atractivas y funcionales con HTML, CSS y JavaScript",
      backendTitle: "Desarrollo Backend",
      backendDesc: "Sistemas robustos y bases de datos eficientes",
    },
    projects: {
      title: "Hangar de Proyectos",
      subtitle: "Cada aplicación es un vuelo único hacia la innovación digital",
      project1: {
        title: "Interfaz de Campuslands",
        description: "Recrear la matriz de Campuslands desde la terminal",
      },
      project2: {
        title: "Kario Media",
        description: "Plataforma par la gestion de tareas de Kario Media",
      },
      project3: {
        title: "F1",
        description: "Pagina interactiva con modelo de la Formula 1",
      },
      project4: {
        title: "Sistema Hospitalario",
        description: "Base de datos de un hospital donde muestra varias funcionalidades de esta",
      },
    },
    certifications: {
      title: "Certificaciones",
      subtitle: "Mis logros académicos y profesionales",
    },
    contact: {
      title: "Torre de Control",
      subtitle: "Listo para despegar en nuevos proyectos",
      description: "!Contáctame y hagamos que tu idea digital vuele alto¡",
      email: "Enviar Email",
      github: "Ver GitHub",
      linkedin: "Ver linkedIn",
    },
    footer: {
      rights: "Todos los derechos reservados. Programando a gran altitud.",
    },
    transition: {
      preparing: "Preparando el vuelo...",
    },
  },
  en: {
    landing: {
      welcome: "Welcome aboard",
      subtitle: "Get ready for an incredible journey through my development world",
      startJourney: "Start Journey",
    },
    nav: {
      about: "About Me",
      objectives: "Objectives",
      mission: "Mission",
      services: "Services",
      projects: "Projects",
      certifications: "Certifications",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello! I'm",
      name: "Santiago Andrés Quiñonez Sosa",
      title: "Full Stack Developer",
      subtitle: "Programming with the precision of an expert pilot",
      description:
        "I transform ideas into incredible web applications, navigating through code with the same precision a pilot soars through the skies.",
      cta: "View My Projects",
      downloadCV: "Download CV",
    },
    about: {
      title: "My Flight Route",
      description:
        "As a junior programmer, I'm starting my journey in the development world with the determination of a pilot on their first flight. My passion is creating digital experiences that elevate ideas to new heights.",
      projects: "Completed Projects",
      learning: "Always Learning",
    },
    objectives: {
      title: "Professional Objectives",
      text: "Specialize in modern technologies to create innovative and scalable web solutions",
    },
    mission: {
      title: "Mission, Vision & Values",
      missionTitle: "Mission",
      missionText:
        "Transform ideas into functional and elegant digital solutions, applying the precision and dedication of an expert pilot in every line of code I write.",
      visionTitle: "Vision",
      visionText:
        "Become a recognized Full Stack developer for creating web applications that generate positive impact, always navigating towards technical excellence and innovation.",
      valuesTitle: "Values",
      precision: "Precision",
      learning: "Continuous learning",
      collaboration: "Collaboration",
      integrity: "Integrity",
      perseverance: "Perseverance",
      innovation: "Innovation",
    },
    services: {
      title: "Services",
      subtitle: "Digital solutions I offer to make your ideas fly",
      frontendTitle: "Frontend Web Development",
      frontendDesc: "Attractive and functional interfaces with HTML, CSS and JavaScript",
      backendTitle: "Backend Development",
      backendDesc: "Robust systems and efficient databases",
    },
    projects: {
      title: "Project Hangar",
      subtitle: "Each application is a unique flight towards digital innovation",
      project1: {
        title: "Campuslands Interface",
        description: "Task management system with intuitive and functional interface",
      },
      project2: {
        title: "Kario Media",
        description: "Weather application with real-time meteorological data",
      },
      project3: {
        title: "F1",
        description: "Advanced calculator with scientific functions and conversions",
      },
      project4: {
        title: "Hospital System",
        description: "Personal portfolio with aviation theme and responsive design",
      },
    },
    certifications: {
      title: "Certifications",
      subtitle: "My academic and professional achievements",
    },
    contact: {
      title: "Control Tower",
      subtitle: "Ready to take off on new projects",
      description: "Contact me and let's make your digital idea fly high",
      email: "Send Email",
      github: "View GitHub",
      linkedin: "Connect",
    },
    footer: {
      rights: "All rights reserved. Programming at high altitude.",
    },
    transition: {
      preparing: "Preparing flight...",
    },
  },
}

// ===== INICIALIZACIÓN =====
document.addEventListener("DOMContentLoaded", () => {
  console.log("🛩️ Iniciando Portafolio de Aviación...")
  setupEventListeners()
  updateLanguage()
  console.log("✅ Portafolio inicializado correctamente")
})

// ===== EVENT LISTENERS =====
function setupEventListeners() {
  // Botones de idioma
  document.getElementById("landing-language-btn")?.addEventListener("click", toggleLanguage)
  document.getElementById("portfolio-language-btn")?.addEventListener("click", toggleLanguage)

  // Navegación
  document.getElementById("start-journey-btn")?.addEventListener("click", startJourney)
  document.getElementById("logo-home")?.addEventListener("click", goToHome)

  // Botones del hero
  document.getElementById("hero-projects-btn")?.addEventListener("click", () => scrollToSection("projects"))
  document.getElementById("hero-download-btn")?.addEventListener("click", downloadCV)

  // Enlaces de navegación
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const target = this.getAttribute("data-target")
      scrollToSection(target)
    })
  })
}

// ===== NAVEGACIÓN =====
function startJourney() {
  console.log("🚀 Iniciando viaje...")

  document.getElementById("landing-screen").classList.add("hidden")
  document.getElementById("transition-screen").classList.remove("hidden")
  showTransition = true

  setTimeout(() => {
    document.getElementById("transition-screen").classList.add("hidden")
    document.getElementById("portfolio-screen").classList.remove("hidden")
    showPortfolio = true
    showTransition = false
    console.log("✅ Portafolio mostrado")
  }, 3000)
}

function goToHome() {
  console.log("🏠 Volviendo al inicio...")
  document.getElementById("portfolio-screen").classList.add("hidden")
  document.getElementById("landing-screen").classList.remove("hidden")
  showPortfolio = false
  showTransition = false
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" })
    console.log("📍 Navegando a: " + sectionId)
  }
}

// ===== IDIOMA =====
function toggleLanguage() {
  currentLanguage = currentLanguage === "es" ? "en" : "es"
  updateLanguage()
  console.log("🌐 Idioma cambiado a: " + currentLanguage.toUpperCase())
}

function updateLanguage() {
  const t = translations[currentLanguage]

  // Botones de idioma
  updateElementText("landing-lang-text", currentLanguage === "es" ? "EN" : "ES")
  updateElementText("portfolio-lang-text", currentLanguage === "es" ? "EN" : "ES")

  // Landing
  updateElementText("landing-title", t.landing.welcome)
  updateElementText("landing-subtitle", t.landing.subtitle)
  updateElementText("start-journey-text", t.landing.startJourney)

  // Navegación
  updateElementText("nav-about", t.nav.about)
  updateElementText("nav-objectives", t.nav.objectives)
  updateElementText("nav-mission", t.nav.mission)
  updateElementText("nav-services", t.nav.services)
  updateElementText("nav-projects", t.nav.projects)
  updateElementText("nav-certifications", t.nav.certifications)
  updateElementText("nav-contact", t.nav.contact)

  // Hero
  updateElementText("hero-greeting", t.hero.greeting)
  updateElementText("hero-name", t.hero.name)
  updateElementText("hero-title", t.hero.title)
  updateElementText("hero-subtitle", t.hero.subtitle)
  updateElementText("hero-description", t.hero.description)
  updateElementText("hero-cta", t.hero.cta)
  updateElementText("hero-download", t.hero.downloadCV)

  // About
  updateElementText("about-title", t.about.title)
  updateElementText("about-description", t.about.description)
  updateElementText("stat-projects", t.about.projects)
  updateElementText("stat-learning", t.about.learning)

  // Objectives
  updateElementText("objectives-title", t.objectives.title)
  updateElementText("objective-text", t.objectives.text)

  // Mission
  updateElementText("mission-title", t.mission.title)
  updateElementText("mission-card-title", t.mission.missionTitle)
  updateElementText("mission-text", t.mission.missionText)
  updateElementText("vision-card-title", t.mission.visionTitle)
  updateElementText("vision-text", t.mission.visionText)
  updateElementText("values-card-title", t.mission.valuesTitle)
  updateElementText("value-precision", t.mission.precision)
  updateElementText("value-learning", t.mission.learning)
  updateElementText("value-collaboration", t.mission.collaboration)
  updateElementText("value-integrity", t.mission.integrity)
  updateElementText("value-perseverance", t.mission.perseverance)
  updateElementText("value-innovation", t.mission.innovation)

  // Services
  updateElementText("services-title", t.services.title)
  updateElementText("services-subtitle", t.services.subtitle)
  updateElementText("service-frontend-title", t.services.frontendTitle)
  updateElementText("service-frontend-desc", t.services.frontendDesc)
  updateElementText("service-backend-title", t.services.backendTitle)
  updateElementText("service-backend-desc", t.services.backendDesc)

  // Proyectos
  updateElementText("projects-title", t.projects.title)
  updateElementText("projects-subtitle", t.projects.subtitle)
  updateElementText("project1-title", t.projects.project1.title)
  updateElementText("project1-description", t.projects.project1.description)
  updateElementText("project2-title", t.projects.project2.title)
  updateElementText("project2-description", t.projects.project2.description)
  updateElementText("project3-title", t.projects.project3.title)
  updateElementText("project3-description", t.projects.project3.description)
  updateElementText("project4-title", t.projects.project4.title)
  updateElementText("project4-description", t.projects.project4.description)

  // Certificaciones
  updateElementText("certifications-title", t.certifications.title)
  updateElementText("certifications-subtitle", t.certifications.subtitle)

  // Contacto
  updateElementText("contact-title", t.contact.title)
  updateElementText("contact-subtitle", t.contact.subtitle)
  updateElementText("contact-description", t.contact.description)
  updateElementText("contact-email", t.contact.email)
  updateElementText("contact-github", t.contact.github)
  updateElementText("contact-linkedin", t.contact.linkedin)

  // Footer
  updateElementText("footer-rights", t.footer.rights)
  updateElementText("transition-text", t.transition.preparing)
}

function updateElementText(elementId, text) {
  const element = document.getElementById(elementId)
  if (element) {
    element.textContent = text
  }
}

// ===== CONTACTO =====
function sendEmail() {
  const email = "santiagoquinonez952@gmail.com"
  const subject = currentLanguage === "es" ? "Contacto desde tu portafolio" : "Contact from your portfolio"
  const body =
    currentLanguage === "es"
      ? "Hola Santiago, me interesa contactarte..."
      : "Hello Santiago, I would like to contact you..."

  window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  console.log("Abriendo cliente de email")
}

function openGitHub() {
  window.open("https://github.com/Santi1718", "_blank")
  console.log(" Abriendo GitHub")
}

function openLinkedIn() {
  window.open("https://www.linkedin.com/in/santiago-qui%C3%B1onez-505564376", "_blank")
  console.log(" Abriendo LinkedIn")
}

function downloadCV() {
  window.open("https://drive.google.com/file/d/1gcRs4Byl1cJ4PSUJKmNN47dPRnp_3qDP/view?usp=sharing", "_blank")
  console.log(" Descargando CV")
}

function openProject(projectUrl) {
  window.open(projectUrl, "_blank")
  console.log(" Abriendo proyecto: " + projectUrl)
}

function openCertification(certificationUrl) {
  window.open(certificationUrl, "_blank")
  console.log(" Abriendo certificación: " + certificationUrl)
}

// ===== FUNCIONES GLOBALES =====
window.openProject = openProject
window.openCertification = openCertification
window.sendEmail = sendEmail
window.openGitHub = openGitHub
window.openLinkedIn = openLinkedIn
window.downloadCV = downloadCV

console.log(" Script del portafolio cargado completamente")
